# Elevation

Elevation shows what sits above the page. The levels follow [elevation](https://atlassian.design/foundations/elevation) in the [Atlassian Design System](https://atlassian.design/design-system). Shadows use this site's navy, `#0C1B2E`, in place of Atlassian's shadow navy.

## Default example

A content panel sits on the surface, with a border and no shadow. A dropdown menu, popup, flag, and modal use the overlay shadow.

## Levels

| Level | Shadow | Use |
| --- | --- | --- |
| Surface | None | Page, panels, inputs, and tables |
| Raised | `--elevation-shadow-raised` | A card that needs to lift off the page |
| Overlay | `--elevation-shadow-overlay` | Dropdown menu, popup, flag, and modal |

| Token | Value |
| --- | --- |
| `--elevation-shadow-raised` | `0 1px 1px rgb(12 27 46 / 0.25), 0 0 1px rgb(12 27 46 / 0.31)` |
| `--elevation-shadow-overlay` | `0 8px 12px rgb(12 27 46 / 0.15), 0 0 1px rgb(12 27 46 / 0.31)` |

## Rules

- Surface is the default. Add a shadow only when a layer floats above the page.
- A border still separates surface panels from the page. The shadow does not replace that border on overlay layers.
- Do not stack a raised shadow on an overlay.
- The modal blanket is a navy fill at `--opacity-blanket`, not a shadow.
