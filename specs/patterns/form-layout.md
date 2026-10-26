# Form layout

A form on a full page is left aligned. Labels sit above fields. The submit action follows the fields.

Default structure follows [form](https://atlassian.design/components/form/usage) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

A contact form in the main column. "Name", "Email address (required)", and "Message", then "Send message" and "Cancel".

## Arrangement

The form max width is 640px. Fields stack with 24px between them. A pair of short fields, such as first and last name, sit side by side with a 16px gutter from the medium breakpoint up, and stack on the narrow breakpoint. Actions are 32px below the last field, left aligned, primary first.

## Rules

- One column of fields is the default. Two columns are only for short related pairs.
- The primary button is the submit control. "Cancel" is secondary and returns to the previous page.
- Do not disable submit. Errors follow `patterns/error-handling.md`.
- A modal form uses the same stacking. Its actions are right aligned, with the primary button at the right.
