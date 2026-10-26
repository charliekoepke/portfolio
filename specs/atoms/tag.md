# Tag

A tag labels an item so it can be recognized or filtered. It is descriptive metadata, not a status.

Default structure follows [tag](https://atlassian.design/components/tag/usage) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

"Research" and "Clinical" on a case study. Each has a remove control named "Remove Research" and "Remove Clinical".

## Appearance

| Property | Value | Token |
| --- | --- | --- |
| Height | 24px | `--space-24` |
| Padding inline | 8px | `--space-8` |
| Radius | 50px | `--radius-button` |
| Fill | `#E6EDF5` | `--color-surface-sunken` |
| Label | 12px Inter 600, `#0C1B2E` | `--font-size-badge` |
| Gap between tags | 8px | `--space-8` |

The remove control is a quiet icon button scaled to the tag: 16px, close icon, navy stroke. Its accessible name includes the tag text.

## Rules

- Use a tag for category or filter metadata. Use a lozenge for status.
- Sentence case.
- A removable tag's remove control is a button, and its name is "Remove" plus the label.
- Tags that navigate are links, with the link color and an underline on the label.
