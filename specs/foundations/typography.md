# Typography

Gafata is the regular face. It carries body text. Montserrat is the semibold and bold face. It carries headings, navigation, and controls.

Headings use camel case. Capitalize each word. Small words such as of, and, and a stay lowercase unless they start the heading. A person’s name stays as that person writes it.

The conformance target is WCAG 2.0 Level AA. Sizes are rem so text can scale to 200% without loss of content. Body line height is 1.5.

## Family

| Token | Value |
| --- | --- |
| `--font-family-sans` | `Gafata, serif` |
| `--font-family-emphasis` | `"Montserrat Emphasis", sans-serif` |
| `--font-weight-regular` | 400 |
| `--font-weight-semibold` | 600 |

## Scale

| Role | Size | Weight | Line height |
| --- | --- | --- | --- |
| Page title | 2rem (32px) | 600 | 1.3 |
| Section title | 1.25rem (20px) | 600 | 1.3 |
| Body | 1rem (16px) | 400 | 1.5 |
| Button label | 0.875rem (14px) | 600 | 1 |
| Badge label | 0.75rem (12px) | 600 | 1 |

Button and badge labels are below the large-text threshold, so both use the 4.5:1 contrast requirement.
