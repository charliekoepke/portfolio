# Dashboard card

A dashboard card summarizes one measure. It shows a label, a number, and an optional status.

Default structure is a [panel](https://atlassian.design/components/panel) composed with a [lozenge](https://atlassian.design/components/lozenge/usage) and a [badge](https://atlassian.design/components/badge/usage) from the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

Label "Projects". Value "6". Lozenge "In progress".

## Appearance

White surface, 1px `#D0D9E6` border, 4px radius, 24px padding. Cards in a row have 24px between them. The label is 14px `#3D5168`. The value is 32px Inter 600, `#0C1B2E`, 8px below the label. The lozenge is 16px below the value.

## Rules

- The value is text, not an image of a number.
- A change, such as "+2", is a badge beside the value, and the adjacent label says what the number counts.
- The card is not a link unless the whole card goes to one destination. Then the card is one link, and its name is the label plus the value, such as "Projects, 6".
- On the narrow breakpoint, cards stack in one column.
