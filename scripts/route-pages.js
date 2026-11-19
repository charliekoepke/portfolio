import { copyFileSync, mkdirSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const dist = join(root, "dist");
const entry = join(dist, "index.html");
const slugs = readdirSync(join(root, "src/content/projects"), { withFileTypes: true })
  .filter((item) => item.isDirectory())
  .map((item) => item.name);

const routes = ["about", "projects", ...slugs.map((slug) => `projects/${slug}`)];

for (const route of routes) {
  mkdirSync(join(dist, route), { recursive: true });
  copyFileSync(entry, join(dist, route, "index.html"));
}
copyFileSync(entry, join(dist, "404.html"));

console.log(`Route pages written for /, ${routes.map((route) => `/${route}/`).join(", ")}, and 404.html.`);
