# Opacity

Opacity is a last resort. Atlassian defines opacity for blankets and for disabled controls. This site keeps text opaque so it stays above the WCAG 2.1 contrast floors.

The levels follow the opacity tokens described with [design tokens](https://atlassian.design/foundations/tokens) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

The modal blanket is `#0C1B2E` at 40 percent opacity. The dialog on top of it is fully opaque.

## Levels

| Token | Value | Use |
| --- | --- | --- |
| `--opacity-blanket` | `0.4` | The layer behind a modal dialog |

## Rules

- Do not fade a label, icon, or control to show the disabled state. Disabled controls use `--color-disabled-fill` and `--color-disabled-text`.
- Do not fade placeholder text. Placeholders use `--color-text-muted`.
- A surface that people read, including a dialog, flag, menu, and tooltip, is fully opaque.
- The blanket does not receive pointer events meant for the page. The dialog does.
