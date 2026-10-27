# Radio

A radio allows one choice from a set. The group is the decision. Each radio is one option.

Default structure follows [radio](https://atlassian.design/components/radio/usage) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

Legend: "Case study length". Options: "Short", "Standard", "In depth". "Standard" is selected.

## Appearance

| Property | Value | Token |
| --- | --- | --- |
| Box | 16px circle | `--space-16` |
| Radius | 50px | `--radius-button` |
| Selected mark | 8px navy disc | `--space-8`, `--color-action-primary` |
| Border | 1px `#3D5168` | `--color-text-secondary` |
| Gap to label | 8px | `--space-8` |
| Gap between options | 8px | `--space-8` |
| Label | 1rem Gafata 400 | `--font-size-body` |

Focus uses the 2px navy ring. Disabled uses the disabled fill, border, and label color.

## Rules

- Wrap the group in a `fieldset` with a `legend`.
- Use a native radio inside each `label`. All radios in the group share one `name`.
- One option is selected. A group does not start with none selected when a choice is required.
- Do not use radios for several independent choices. That is a checkbox.
