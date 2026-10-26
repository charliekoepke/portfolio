# Color

Healthcare portfolio palette. Professional, cool, and navy-led. Page surfaces stay light. Navy carries the brand, headings, text, and the primary action.

Conformance target is WCAG 2.0 Level AA. Normal text meets 4.5:1. Large text meets 3:1.

## Surfaces

| Role | Hex | Use |
| --- | --- | --- |
| Page | `#F4F7FB` | Default page background |
| Surface | `#FFFFFF` | Cards, inputs, and panels |
| Sunken | `#E6EDF5` | Grouped areas set into the page |
| Line | `#D0D9E6` | Borders and dividers |

## Text

| Role | Hex | Use |
| --- | --- | --- |
| Primary | `#0C1B2E` | Body copy |
| Secondary | `#3D5168` | Supporting copy |
| Muted | `#566A80` | Meta labels and hints |
| Inverse | `#F7FAFC` | Text on navy fills |

## Brand and action

| Role | Hex | Use |
| --- | --- | --- |
| Brand | `#12263E` | Headings and the navy mark |
| Action | `#17345A` | Primary button fill |
| Action hover | `#102544` | Primary button hover |
| Action pressed | `#0C1C34` | Primary button pressed |
| Link | `#1D4E89` | Text links |
| Focus | `#17345A` | 2px focus ring, 2px offset |
| Disabled fill | `#E4EBF3` | Unavailable controls |
| Disabled text | `#54687C` | Label on a disabled control |

Links use the link navy. Buttons use the action navy. The two stay distinct.

## Status

Status colors are for validation, alerts, and status badges only.

| Role | Text | Surface |
| --- | --- | --- |
| Success | `#145C38` | `#E5F3EB` |
| Warning | `#7A4E0C` | `#F8F1E4` |
| Danger | `#8A2E2E` | `#F8E8E8` |
| Info | `#1D4E89` | `#E7EEF6` |

## Rules

- Headings, body text, and the primary button stay in this navy range.
- Status color appears only when the message is success, warning, danger, or info.
- Page background is the cool gray. Cards and inputs sit on white.
- A focus ring stays visible on every interactive control.

## Contrast

Worst-case ratio for each text role. The floor is 4.5:1.

| Pair | Ratio |
| --- | --- |
| Primary `#0C1B2E` on sunken `#E6EDF5` | 14.69:1 |
| Secondary `#3D5168` on sunken `#E6EDF5` | 6.91:1 |
| Muted `#566A80` on sunken `#E6EDF5` | 4.72:1 |
| Inverse `#F7FAFC` on action `#17345A` | 11.96:1 |
| Link `#1D4E89` on sunken `#E6EDF5` | 7.11:1 |
| Focus `#17345A` on page `#F4F7FB` | 11.67:1 |
| Disabled text `#54687C` on disabled fill `#E4EBF3` | 4.79:1 |
| Success `#145C38` on `#E5F3EB` | 7.01:1 |
| Warning `#7A4E0C` on `#F8F1E4` | 6.40:1 |
| Danger `#8A2E2E` on `#F8E8E8` | 7.05:1 |
| Inverse `#F7FAFC` on danger `#8A2E2E` | 7.98:1 |
| Info `#1D4E89` on `#E7EEF6` | 7.17:1 |
