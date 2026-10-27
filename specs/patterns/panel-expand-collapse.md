# Panel expand collapse

A panel can collapse to its title and expand to show its body. The title row is the control.

Default structure follows the disclosure behavior used with [panel](https://atlassian.design/components/panel) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

A row "Methods" with a chevron. It is collapsed. Activating it shows the method notes and the chevron points down. The button name changes between "Expand Methods" and "Collapse Methods" if the state is not otherwise in the name.

## Appearance

The header row is 40px tall with 16px of inline padding. The title is 16px Montserrat 600. The chevron is a 16px navy stroke at the end of the row. The body is the content panel body, 16px below the header, and it is hidden while collapsed. Focus uses the 2px navy ring on the header.

## Rules

- The header is a button with `aria-expanded` and `aria-controls` pointing at the body.
- Enter or Space toggles it. The page does not move focus away.
- The collapsed body is hidden from assistive technology, not only visually.
- One panel may open at a time only when that is the design of the group. Say so by closing the others in the same action. Independent panels stay as they are.
