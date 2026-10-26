# Input

A single-line text field. The label sits above the field and is the accessible name.

## Intent

Collect one short value, such as a name, email, or project title. The placeholder shows the format. It does not replace the label.

## Default example

Label "Email address (required)". Placeholder "name@domain.com". Help text "Used for project inquiries."

## Appearance

| Property | Value | Token |
| --- | --- | --- |
| Height | 2.5rem (40px) | `--space-40` |
| Padding inline | 1rem (16px) | `--space-16` |
| Radius | 4px | `--radius-field` |
| Fill | `#FFFFFF` | `--color-surface-default` |
| Border | 1px `#3D5168` | `--color-text-secondary` |
| Text | 1rem Inter 400 | `--font-size-body` |
| Text color | `#0C1B2E` | `--color-text-primary` |
| Label | 1rem Inter 600, 8px above the field | `--font-size-body` |
| Help | 0.75rem, `#566A80`, 8px below the field | `--font-size-badge`, `--color-text-muted` |
| Placeholder | `#566A80` | `--color-text-muted` |

Label contrast on white is 17.33:1. Placeholder and help text on white are 5.57:1. Both clear the WCAG 2.0 AA 4.5:1 minimum.

## States

| State | Field |
| --- | --- |
| Hover | Border `#17345A`. Fill stays white |
| Focus | Border `#17345A`, plus the 2px navy ring offset 2px |
| Error | Border `#8A2E2E`. The message below is `#8A2E2E` on white, 8.36:1 |
| Disabled | Fill `#E4EBF3`, border and text `#54687C`, 4.79:1 |

## Rules

- Use a native `input` with a `label` tied to it by `for` and `id`.
- Put the label above the field. Include the word "required" in the label when the field is required.
- Associate help and error text with `aria-describedby`.
- An error says what is wrong and how to correct it. Set `aria-invalid="true"` on the field.
- A disabled field uses the `disabled` attribute. Hover and focus do not change it.
- Do not use a placeholder as the only name of the field.
