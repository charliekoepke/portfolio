# Lozenge

A lozenge is a compact status label. It names an attribute that changes how someone reads an item, such as workflow state or priority.

Default structure follows [lozenge](https://atlassian.design/components/lozenge/usage) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

"In progress", "Complete", and "Blocked" on three project rows. The words are the status. Color supports them.

## Appearance

Height is 24px. Inline padding is 8px. Radius is 4px (`--radius-field`). Label is 12px Montserrat 600, sentence case. An optional icon is a 16px navy stroke, 8px before the label.

| Appearance | Fill | Label |
| --- | --- | --- |
| Neutral | `#E6EDF5` | `#0C1B2E` |
| Success | `#E5F3EB` | `#145C38` |
| Warning | `#F8F1E4` | `#7A4E0C` |
| Danger | `#F8E8E8` | `#8A2E2E` |
| Info | `#E7EEF6` | `#1D4E89` |

These pairs are the measured status pairs in `foundations/color.md`. Each clears 4.5:1.

## Rules

- Use a lozenge for status, priority, or permission. Use a tag for descriptive metadata.
- Sentence case. Keep the label short enough to read without truncation.
- The lozenge is not a button. A status that opens a menu uses a separate dropdown trigger.
- Do not use color as the only status. The label says the state.
