# Inline edit

Inline edit shows a value as text, then switches that same spot into a field. Reading and editing happen in place.

Default structure follows [inline edit](https://atlassian.design/components/inline-edit/usage) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

The project title "Intake redesign" is a button named "Edit project title". Activating it shows the input, then "Save" and "Cancel".

## Appearance

Read mode uses the body or page-title style of the surrounding text, with a 2px transparent border so the layout does not jump. Edit mode uses the input, and the buttons are the primary and secondary buttons. The gap between the field and the buttons is 8px.

## Rules

- Read mode is a button. Its name is "Edit" plus the field name.
- Enter saves. Escape cancels and restores the previous value.
- Save keeps the new value and returns to read mode. Focus returns to the edit button.
- An invalid value stays in edit mode and uses the input error sentence.
