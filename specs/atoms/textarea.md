# Textarea

A text area lets someone enter text that spans multiple lines. It uses the same label, border, type, and focus treatment as the input.

Default structure follows the [text area](https://atlassian.design/components/textarea/usage) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

Label: "Project summary". Placeholder: "What changed for the care team". The field starts at 96px tall.

## Appearance

| Property | Value | Token |
| --- | --- | --- |
| Min height | 6rem (96px) | `--space-96` |
| Padding | 16px | `--space-16` |
| Radius | 4px | `--radius-field` |
| Border | 1px `#3D5168` | `--color-text-secondary` |
| Text | 1rem Inter 400 | `--font-size-body` |
| Label | 1rem Inter 600, 8px above | `--font-size-body` |

Hover and focus match the input. Focus adds the 2px navy ring. An error uses the danger border and a sentence underneath. Disabled uses the disabled fill and text.

## Rules

- Use a native `textarea` with a `label` tied to it by `for` and `id`.
- Let the field grow vertically. Do not resize it horizontally.
- The placeholder does not replace the label.
- Associate help and error text with `aria-describedby`.
