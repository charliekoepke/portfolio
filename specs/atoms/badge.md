# Badge

Compact count. A badge holds a number, not a word. Status words belong to the lozenge. Category labels belong to the tag.

## Intent

Show how many. The number is the information. Values above 99 display as 99+.

## Default example

The number 3 beside the label "Comments". A count past 99 reads "99+".

## Appearance

| Property | Value | Token |
| --- | --- | --- |
| Height | 1.5rem (24px) | `--space-24` |
| Min width | 1.5rem (24px) | `--space-24` |
| Padding inline | 0.5rem (8px) | `--space-8` |
| Radius | 50px | `--radius-button` |
| Family | Montserrat | `--font-family-emphasis` |
| Label size | 0.75rem (12px) | `--font-size-badge` |
| Label weight | 600 | `--font-weight-semibold` |

A single digit resolves to a circle. Two or more characters resolve to a pill. The badge is not a control, so it has no hover and no focus ring.

## Variants

| Variant | Fill | Label | Contrast |
| --- | --- | --- | --- |
| Neutral | `#E6EDF5` | `#0C1B2E` | 14.69:1 |
| Navy | `#17345A` | `#F7FAFC` | 11.96:1 |
| Important | `#8A2E2E` | `#F7FAFC` | 7.98:1 |

Neutral is the ordinary count. Navy marks a count tied to the primary content. Important marks a count that needs attention. All three clear the WCAG 2.0 AA 4.5:1 minimum. The 12px label is normal text.

## Placement

The badge sits 8px after the text that names what is counted. That text plus the number is the accessible name, as in "Projects, 6".

## Rules

- The visible content is a number, or 99+.
- Words do not go in a badge.
- A badge is not a button.
- Important uses the danger color. The adjacent text still names the count, so color is not the only signal.
