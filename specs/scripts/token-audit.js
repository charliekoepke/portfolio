#!/usr/bin/env node
/**
 * Token audit
 *
 * Checks that tokens.css matches the token specs, that spacing stays on the
 * 8px grid, and that color pairs meet WCAG 2.1 Level AA:
 * - 1.4.3 Contrast (Minimum): 4.5:1 for text
 * - 1.4.11 Non-text Contrast: 3:1 for control boundaries and the focus ring
 *
 * GitHub Actions runs this after a push.
 */

const fs = require("fs");
const path = require("path");

const specsRoot = path.resolve(__dirname, "..");
const cssPath = path.join(specsRoot, "tokens.css");
const tokensDir = path.join(specsRoot, "tokens");
const colorFoundationPath = path.join(specsRoot, "foundations", "color.md");

const failures = [];

function fail(message) {
  failures.push(message);
}

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function normalize(value) {
  return value.trim().replace(/\s+/g, " ");
}

function hexOf(value) {
  const match = normalize(value).match(/^#([0-9a-f]{6})$/i);
  return match ? `#${match[1].toUpperCase()}` : null;
}

function linearize(channel) {
  const value = channel / 255;
  return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
}

function luminance(hex) {
  const raw = hex.replace("#", "");
  const red = linearize(parseInt(raw.slice(0, 2), 16));
  const green = linearize(parseInt(raw.slice(2, 4), 16));
  const blue = linearize(parseInt(raw.slice(4, 6), 16));
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

function contrast(foreground, background) {
  const lighter = Math.max(luminance(foreground), luminance(background));
  const darker = Math.min(luminance(foreground), luminance(background));
  return (lighter + 0.05) / (darker + 0.05);
}

function parseCss(source) {
  const tokens = new Map();
  const pattern = /(--[a-z0-9-]+)\s*:\s*([^;]+);/g;
  for (const match of source.matchAll(pattern)) {
    tokens.set(match[1], normalize(match[2]));
  }
  return tokens;
}

function parseTables(source) {
  const tokens = new Map();
  const pattern = /^\|\s*`(--[a-z0-9-]+)`\s*\|\s*`?([^`|]+?)`?\s*\|$/gm;
  for (const match of source.matchAll(pattern)) {
    tokens.set(match[1], normalize(match[2]));
  }
  return tokens;
}

function parseReference(source) {
  const tokens = new Map();
  const single = /`(--[a-z0-9-]+)` is ([0-9.]+(?:rem|px))/g;
  for (const match of source.matchAll(single)) {
    tokens.set(match[1], normalize(match[2]));
  }
  const shared = /`(--[a-z0-9-]+)` and `(--[a-z0-9-]+)` are ([0-9.]+(?:rem|px))/g;
  for (const match of source.matchAll(shared)) {
    tokens.set(match[1], normalize(match[3]));
    tokens.set(match[2], normalize(match[3]));
  }
  return tokens;
}

function requireToken(tokens, name) {
  const value = tokens.get(name);
  if (!value) {
    fail(`${name} is missing from tokens.css`);
  }
  return value;
}

function checkAlignment(cssTokens, documented) {
  for (const [name, value] of documented) {
    const cssValue = cssTokens.get(name);
    if (!cssValue) {
      fail(`${name} is documented as ${value} but missing from tokens.css`);
      continue;
    }
    const cssHex = hexOf(cssValue);
    const docHex = hexOf(value);
    const same = cssHex && docHex ? cssHex === docHex : normalize(cssValue) === normalize(value);
    if (!same) {
      fail(`${name} is ${cssValue} in tokens.css and ${value} in the token specs`);
    }
  }

  for (const name of cssTokens.keys()) {
    if (!documented.has(name)) {
      fail(`${name} is in tokens.css and missing from the token specs`);
    }
  }
}

function checkSpacing(cssTokens) {
  for (const [name, value] of cssTokens) {
    if (!name.startsWith("--space-")) continue;
    const step = Number(name.slice("--space-".length));
    const rem = value.match(/^([0-9.]+)rem$/);
    if (!Number.isInteger(step) || step % 8 !== 0) {
      fail(`${name} is not a multiple of 8px`);
      continue;
    }
    if (!rem) {
      fail(`${name} is ${value}. Spacing tokens use rem.`);
      continue;
    }
    const pixels = Number(rem[1]) * 16;
    if (Math.abs(pixels - step) > 0.001) {
      fail(`${name} is ${value}, which is ${pixels}px rather than ${step}px`);
    }
  }
}

function checkContrast(cssTokens, pairs, minimum, criterion) {
  for (const [foregroundName, backgroundName, label] of pairs) {
    const foreground = hexOf(requireToken(cssTokens, foregroundName) || "");
    const background = hexOf(requireToken(cssTokens, backgroundName) || "");
    if (!foreground || !background) {
      fail(`${label} does not resolve to two hex colors`);
      continue;
    }
    const ratio = contrast(foreground, background);
    if (ratio < minimum) {
      fail(
        `${label} is ${ratio.toFixed(2)}:1. WCAG 2.1 ${criterion} requires ${minimum.toFixed(1)}:1`
      );
    }
  }
}

function checkPublishedRatios(cssTokens) {
  const source = read(colorFoundationPath).split("## Contrast")[1] || "";
  const pattern = /`#([0-9A-Fa-f]{6})`[^|\n]*`#([0-9A-Fa-f]{6})`[^|\n]*\|\s*([0-9.]+):1/g;
  for (const match of source.matchAll(pattern)) {
    const foreground = `#${match[1].toUpperCase()}`;
    const background = `#${match[2].toUpperCase()}`;
    const published = Number(match[3]);
    const actual = contrast(foreground, background);
    if (Math.abs(actual - published) > 0.02) {
      fail(
        `color.md publishes ${published.toFixed(2)}:1 for ${foreground} on ${background}. The measured ratio is ${actual.toFixed(2)}:1`
      );
    }
    const known = [...cssTokens.values()].map(hexOf).filter(Boolean);
    if (!known.includes(foreground) || !known.includes(background)) {
      fail(`color.md cites ${foreground} on ${background}, and one of those values is not a token`);
    }
  }
}

const cssTokens = parseCss(read(cssPath));
const documented = new Map();

for (const fileName of fs.readdirSync(tokensDir)) {
  if (!fileName.endsWith(".md")) continue;
  const source = read(path.join(tokensDir, fileName));
  const parsed = fileName === "token-reference.md" ? parseReference(source) : parseTables(source);
  for (const [name, value] of parsed) {
    documented.set(name, value);
  }
}

checkAlignment(cssTokens, documented);
checkSpacing(cssTokens);

const textPairs = [
  ["--color-text-primary", "--color-surface-page", "Primary text on the page"],
  ["--color-text-primary", "--color-surface-default", "Primary text on white"],
  ["--color-text-primary", "--color-surface-sunken", "Primary text on sunken"],
  ["--color-text-secondary", "--color-surface-page", "Secondary text on the page"],
  ["--color-text-secondary", "--color-surface-default", "Secondary text on white"],
  ["--color-text-secondary", "--color-surface-sunken", "Secondary text on sunken"],
  ["--color-text-muted", "--color-surface-page", "Muted text on the page"],
  ["--color-text-muted", "--color-surface-default", "Muted text on white"],
  ["--color-text-muted", "--color-surface-sunken", "Muted text on sunken"],
  ["--color-text-inverse", "--color-action-primary", "Inverse text on the action fill"],
  ["--color-text-inverse", "--color-action-primary-hover", "Inverse text on action hover"],
  ["--color-text-inverse", "--color-action-primary-pressed", "Inverse text on action pressed"],
  ["--color-text-inverse", "--color-brand-navy", "Inverse text on brand navy"],
  ["--color-text-inverse", "--color-danger", "Inverse text on danger"],
  ["--color-link", "--color-surface-page", "Link on the page"],
  ["--color-link", "--color-surface-default", "Link on white"],
  ["--color-link", "--color-surface-sunken", "Link on sunken"],
  ["--color-link", "--color-info-surface", "Link on the info surface"],
  ["--color-link", "--color-warning-surface", "Link on the warning surface"],
  ["--color-link", "--color-danger-surface", "Link on the danger surface"],
  ["--color-link-hover", "--color-surface-page", "Link hover on the page"],
  ["--color-link-hover", "--color-surface-default", "Link hover on white"],
  ["--color-link-hover", "--color-surface-sunken", "Link hover on sunken"],
  ["--color-link-hover", "--color-info-surface", "Link hover on the info surface"],
  ["--color-link-hover", "--color-warning-surface", "Link hover on the warning surface"],
  ["--color-link-hover", "--color-danger-surface", "Link hover on the danger surface"],
  ["--color-success", "--color-success-surface", "Success text on its surface"],
  ["--color-success", "--color-surface-default", "Success text on white"],
  ["--color-warning", "--color-warning-surface", "Warning text on its surface"],
  ["--color-warning", "--color-surface-default", "Warning text on white"],
  ["--color-danger", "--color-danger-surface", "Danger text on its surface"],
  ["--color-danger", "--color-surface-default", "Danger text on white"],
  ["--color-info", "--color-info-surface", "Info text on its surface"],
  ["--color-disabled-text", "--color-disabled-fill", "Disabled text on the disabled fill"],
];

const boundaryPairs = [
  ["--color-text-secondary", "--color-surface-default", "Control border on white"],
  ["--color-text-secondary", "--color-surface-page", "Control border on the page"],
  ["--color-focus", "--color-surface-default", "Focus ring on white"],
  ["--color-focus", "--color-surface-page", "Focus ring on the page"],
  ["--color-action-primary", "--color-surface-default", "Action border on white"],
  ["--color-danger", "--color-surface-default", "Error border on white"],
];

checkContrast(cssTokens, textPairs, 4.5, "1.4.3");
checkContrast(cssTokens, boundaryPairs, 3, "1.4.11");
checkPublishedRatios(cssTokens);

if (failures.length > 0) {
  console.error(`Token audit failed with ${failures.length} finding${failures.length === 1 ? "" : "s"}.`);
  for (const message of failures) {
    console.error(`- ${message}`);
  }
  process.exit(1);
}

console.log(
  `Token audit passed. ${cssTokens.size} tokens match the specs. Text contrast meets WCAG 2.1 1.4.3 and control boundaries meet 1.4.11.`
);
