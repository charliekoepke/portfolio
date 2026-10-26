# Borders

A border is a 1px stroke unless a component sets another width. Stroke width is not a spacing step.

## Divider

Panels and dividers use `#D0D9E6` (`--color-border-default`).

## Checkbox

| State | Stroke |
| --- | --- |
| Unchecked | 1px solid `#3D5168` (`--color-text-secondary`) |
| Checked and indeterminate | 1px solid `#17345A` (`--color-action-primary`) |
| Disabled | 1px solid `#54687C` (`--color-disabled-text`) |

The checked stroke matches the fill, so the box reads as a solid navy control. The check or dash, not the border color, shows the state.

## Input

| State | Stroke |
| --- | --- |
| Default | 1px solid `#3D5168` (`--color-text-secondary`) |
| Hover and focus | 1px solid `#17345A` (`--color-action-primary`) |
| Error | 1px solid `#8A2E2E` (`--color-danger`) |
| Disabled | 1px solid `#54687C` (`--color-disabled-text`) |

Focus also draws the 2px navy ring, offset 2px. The error sentence carries the error. The red stroke does not.
