# Iconography

Icons are simple line drawings in one navy. The manner is a government contracting site: utilitarian utilities, a single stroke weight, and no second hue.

## Drawing

| Property | Value | Token |
| --- | --- | --- |
| Size | 24px | `--icon-size` |
| Stroke | 2px | `--icon-stroke` |
| Caps and joins | Round | |
| Fill | None | |
| View box | 24 by 24 | |

Keep the silhouette inside the box so the stroke does not clip. Use the fewest lines that make a familiar object. Do not add color, duotone, shading, or decoration.

## Color

Every icon uses a shade of the action navy.

| Situation | Color | Token |
| --- | --- | --- |
| On a light surface | `#17345A` | `--color-action-primary` |
| On a navy fill | `#F7FAFC` | `--color-text-inverse` |
| Disabled | `#54687C` | `--color-disabled-text` |

Do not introduce green, red, yellow, or teal icons. Status is written in text and uses the status colors already defined for that text.

## Starting set

Search, menu, close, download, account, document, LinkedIn, and email. Add an icon only when the action is hard to recognize without one.

## Rules

- An icon that is the only content of a control needs an accessible name on that control.
- A decorative icon next to a text label is hidden from assistive technology.
- The name states the action, such as "Search" or "Download".
