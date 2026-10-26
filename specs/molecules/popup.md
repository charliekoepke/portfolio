# Popup

A popup is a small layer anchored to a control. It can contain a short note or a few controls. It is not a modal.

Default structure follows [inline dialog](https://atlassian.design/components/inline-dialog) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

A button "Filters" opens a popup with the "Role" select and a primary button "Apply".

## Appearance

The popup is a white surface, 1px `#D0D9E6` border, 4px radius, 16px padding. It sits 8px from the trigger and stays within the viewport. Max width is 320px.

## Rules

- The trigger is a button with `aria-expanded`.
- Escape closes the popup and returns focus to the trigger.
- If the popup contains a form control, move focus to the first control when it opens.
- Do not open a popup from inside a popup. Use a modal dialog for a second decision.
- A tooltip is not a popup. A tooltip has no controls.
