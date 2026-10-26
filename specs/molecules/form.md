# Form

A form collects information. Each field has a visible label. The form has one submit button.

Default structure follows [form](https://atlassian.design/components/form/usage) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

"Email address (required)" and "Message", then a primary button "Send message".

## Appearance

Fields stack with 24px between them. The label is 8px above its control. Help or error text is 8px below. The actions sit 32px below the last field. The primary button comes first, then a secondary button, with 16px between them.

## Rules

- Use a native `form`. The submit button is type `submit`.
- Every control has a visible label. Required fields include the word "required" in the label.
- Do not disable the submit button. On submit, show errors beside the fields and move focus to the first error.
- Group related radios or checkboxes in a `fieldset` with a `legend`.
- Layout detail is in `patterns/form-layout.md`. Error detail is in `patterns/error-handling.md`.
