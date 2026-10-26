# Button

Action control. Inter, on the navy palette, drawn as a pill. Two variants: primary and secondary.

## Intent

One clear action. The label starts with a verb and stays within three words.

## Shared appearance

| Property | Value | Token |
| --- | --- | --- |
| Height | 2.5rem (40px) | `--space-40` |
| Padding inline | 1.5rem (24px) | `--space-24` |
| Radius | 50px | `--radius-button` |
| Family | Inter | `--font-family-sans` |
| Label size | 0.875rem (14px) | `--font-size-button` |
| Label weight | 600 | `--font-weight-semibold` |
| Focus | 2px `#17345A` ring, offset 2px | `--color-focus` |

The 50px radius fully rounds the 40px height. Inline padding is 24px, which is on the 8px grid and keeps the label in the straight section of the pill. Sibling buttons are separated by 16px (`--space-16`). The secondary border sits inside the 40px height, so both variants share the same outer size.

The 14px semibold label is normal text. It meets the WCAG 2.0 AA 4.5:1 minimum.

## Primary

The main action in a region. One primary button per region.

| Property | Value | Token |
| --- | --- | --- |
| Fill | `#17345A` | `--color-action-primary` |
| Label | `#F7FAFC` | `--color-text-inverse` |
| Hover fill | `#102544` | `--color-action-primary-hover` |
| Pressed fill | `#0C1C34` | `--color-action-primary-pressed` |

Label contrast on the action fill is 11.96:1.

## Secondary

The quieter action beside a primary. White fill, navy border, navy label.

| Property | Value | Token |
| --- | --- | --- |
| Fill | `#FFFFFF` | `--color-surface-default` |
| Border | 1px solid `#17345A` | `--color-action-primary` |
| Label | `#17345A` | `--color-action-primary` |
| Hover fill | `#E6EDF5` | `--color-surface-sunken` |
| Pressed fill | `#D0D9E6` | `--color-border-default` |

Label contrast is 12.54:1 on white, 10.62:1 on hover, and 8.80:1 on pressed. The border and the label use the same navy, so the control reads as an outline even without the fill change.

## States

- Hover changes the fill only. The label color stays.
- Pressed darkens the fill one step further.
- Focus shows the 2px ring, offset 2px. The ring stays visible on the page and on white.
- Disabled sets the `disabled` attribute, fill `#E4EBF3`, and label `#54687C`. The secondary border switches to `#D0D9E6`. Hover and pressed do not change a disabled button.

Disabled label contrast is 4.79:1.

## Rules

- Use a native `button`.
- One primary button in a region. A secondary button may sit beside it, with 16px between them.
- The visible label is the accessible name.
- Button navy stays off text links. Links use `--color-link` and are underlined.
