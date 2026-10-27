# Tooltip

A tooltip is a short label for a control that has no visible text. It is not for required instructions.

Default structure follows [tooltip](https://atlassian.design/components/tooltip/usage) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

The search icon button shows "Search" on hover and on keyboard focus.

## Appearance

The tooltip is `#12263E` with inverse text, 12px Montserrat 600, 8px padding, and a 4px radius. It sits 8px from the control. Contrast of inverse text on brand navy is 14.60:1.

## Rules

- The control already has the same accessible name. The tooltip repeats it for sighted users.
- Show it on hover and on focus. Hide it on Escape and when the pointer or focus leaves.
- Do not put a tooltip on a disabled control. Disabled controls are not focusable.
- Do not put essential instructions, errors, or links in a tooltip. Use helper text or an inline message.
