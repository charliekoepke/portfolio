# Z-Index

Stacking order follows the Atlassian layer scale used with [elevation](https://atlassian.design/foundations/elevation) in the [Atlassian Design System](https://atlassian.design/design-system). Each layer is a step of 100 so a local stack can sit inside its parent.

## Default example

The top navigation is at 200. A dropdown menu opens at 300. A modal and its blanket are at 400. A flag is at 500. A tooltip is at 700. 600 is reserved for a spotlight.

## Layers

| Token | Value | Use |
| --- | --- | --- |
| `--z-card` | `100` | A raised card |
| `--z-navigation` | `200` | The top navigation |
| `--z-dialog` | `300` | Dropdown menu and popup |
| `--z-modal` | `400` | Modal dialog and its blanket |
| `--z-flag` | `500` | Flags |
| `--z-spotlight` | `600` | A coachmark, if one is added |
| `--z-tooltip` | `700` | Tooltips |

## Rules

- The blanket is painted before the dialog inside `--z-modal`.
- A tooltip is the top layer. It does not contain a control.
- Do not invent a z-index between these steps. A new layer gets the next hundred.
- Stacking follows the DOM order when two elements share a layer.
