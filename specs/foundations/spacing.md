# Spacing

The site uses an 8px grid. Spacing, padding, margins, gaps, and control heights are multiples of 8px. Values are rem so text zoom to 200% keeps the spatial relationships.

## Scale

| Token | rem | px |
| --- | --- | --- |
| `--space-8` | 0.5rem | 8 |
| `--space-16` | 1rem | 16 |
| `--space-24` | 1.5rem | 24 |
| `--space-32` | 2rem | 32 |
| `--space-40` | 2.5rem | 40 |
| `--space-48` | 3rem | 48 |
| `--space-64` | 4rem | 64 |
| `--space-80` | 5rem | 80 |
| `--space-96` | 6rem | 96 |

## Where each step is used

| Step | Use |
| --- | --- |
| 8 | Tight gap inside a control, such as an icon and its label. Badge inline padding. Gap between a badge and the text it counts. Gap between a checkbox and its label |
| 16 | Gap between sibling controls, including a primary and secondary button. Checkbox size |
| 24 | Padding inside a component. Button inline padding. Padding inside a panel. Badge height |
| 32 | Space between regions on a page |
| 40 | Control height. The primary and secondary buttons are 40px |
| 48 to 96 | Space between large sections and the outer page margin when the viewport allows it |

## Outside the scale

- A 1px border is a stroke, not a space.
- The focus ring is a 2px stroke, offset 2px. It is not a spacing step.
- The button radius stays 50px so the 40px control is a full pill.
- Type sizes stay on the type scale. Body is 16px, which also lands on this grid. The 14px button label does not, and it stays 14px.
