# Checkbox

A binary choice. The control is a native checkbox, and the visible label is its accessible name.

## Intent

One option that is on or off. A group of checkboxes can also show an indeterminate parent when only some children are selected.

## Appearance

| Property | Value | Token |
| --- | --- | --- |
| Box size | 1rem (16px) | `--space-16` |
| Radius | 4px | `--radius-checkbox` |
| Gap to label | 0.5rem (8px) | `--space-8` |
| Label | 1rem Inter 400, line height 1.5 | `--font-size-body` |
| Label color | `#0C1B2E` | `--color-text-primary` |

The label and the box are one hit target. The row is at least 24px tall because the label line height is 1.5.

## States

| State | Box | Mark |
| --- | --- | --- |
| Unchecked | White fill, 1px `#3D5168` border | None |
| Hover, unchecked | `#E6EDF5` fill, 1px `#17345A` border | None |
| Checked | `#17345A` fill and border | `#F7FAFC` check, 2px stroke |
| Indeterminate | `#17345A` fill and border | `#F7FAFC` dash, 8px by 2px |
| Hover, checked or indeterminate | `#102544` fill and border | Inverse mark |
| Focus | 2px `#17345A` ring, offset 2px | Unchanged |
| Disabled | `#E4EBF3` fill, 1px `#54687C` border | `#54687C` when checked or indeterminate |

The check and the dash are separate shapes, so the state is not conveyed by color alone. Label contrast on white is 17.33:1. The inverse mark on the navy fill is 11.96:1. A disabled mark on the disabled fill is 4.79:1.

## Rules

- Use a native `input type="checkbox"` inside a `label`.
- The label text is the accessible name. Do not add a separate name that disagrees with it.
- Space toggles the focused checkbox.
- A disabled checkbox uses the `disabled` attribute. Hover does not change it.
- Set indeterminate only from script, and only on a parent whose children are partly selected.
- An error is text next to the field. The box color is not the only error signal.
