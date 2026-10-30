# Button

Action control. Montserrat, on the navy palette, drawn as a pill. Primary is a navy fill, and on hover it turns white with a navy border and navy text. Secondary is white with a navy border and navy text, and it fills navy on hover.

## Intent

One clear action. The label starts with a verb and stays within three words.

## Default example

Primary "Save". Secondary "Cancel".

## Shared appearance

| Property | Value | Token |
| --- | --- | --- |
| Height | 2.5rem (40px) | `--space-40` |
| Padding inline | 1.5rem (24px) | `--space-24` |
| Radius | 50px | `--radius-button` |
| Family | Montserrat | `--font-family-emphasis` |
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
| Hover fill | `#FFFFFF` | `--color-surface-default` |
| Hover border | 1px solid `#17345A` | `--color-action-primary` |
| Hover label | `#17345A` | `--color-action-primary` |
| Pressed fill | `#E6EDF5` | `--color-surface-sunken` |
| Pressed border | 1px solid `#17345A` | `--color-action-primary` |
| Pressed label | `#17345A` | `--color-action-primary` |

Label contrast on the resting action fill is 11.96:1. On hover, navy text on white is 12.54:1. On pressed, navy text on the sunken surface is 10.62:1. The white fill against the page `#F4F7FB` is only 1.07:1, so the navy border is the boundary: 11.67:1 against the page and 12.54:1 against a white card. Both clear the 3:1 requirement for a control edge.

## Secondary

The quieter action beside a primary. White fill, navy border, navy label.

| Property | Value | Token |
| --- | --- | --- |
| Fill | `#FFFFFF` | `--color-surface-default` |
| Border | 1px solid `#17345A` | `--color-action-primary` |
| Label | `#17345A` | `--color-action-primary` |
| Hover fill | `#17345A` | `--color-action-primary` |
| Hover label | `#F7FAFC` | `--color-text-inverse` |
| Pressed fill | `#0C1C34` | `--color-action-primary-pressed` |
| Pressed label | `#F7FAFC` | `--color-text-inverse` |

Label contrast is 12.54:1 on white. On hover, the inverse label on the action fill is 11.96:1, the same pair as primary. Pressed keeps that inverse label on the darker action fill.

At rest, the border and the label use the same navy, so the control reads as an outline. Hover fills the button with that navy.

## States

- Primary hover switches to a white fill, a navy border, and a navy label.
- Secondary hover fills the button with the action navy and switches the label to inverse text.
- Primary pressed uses the sunken surface and keeps the navy border and navy label.
- Secondary pressed darkens the navy fill one step, and the label stays inverse.
- Focus shows the 2px ring, offset 2px. The ring stays visible on the page and on white.
- Disabled sets the `disabled` attribute, fill `#E4EBF3`, and label `#54687C`. The secondary border switches to `#D0D9E6`. Hover and pressed do not change a disabled button.

Disabled label contrast is 4.79:1.

## Rules

- Use a native `button`.
- One primary button in a region. A secondary button may sit beside it, with 16px between them.
- The visible label is the accessible name.
- Links use this same navy and the same hover navy. A link stays underlined text.
