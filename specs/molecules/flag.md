# Flag

A flag confirms an action or reports a brief alert. It appears above the page content and can be dismissed. It does not ask a question.

Default structure follows [flag](https://atlassian.design/components/flag/usage) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

"Project saved." with a quiet icon button named "Dismiss".

## Appearance

The flag is a white surface, 1px `#D0D9E6` border, 4px radius, 16px padding, max width 400px. It sits 24px from the bottom and left edges. The title is 16px Montserrat 600. An optional description is 14px. Success, warning, and error use the status text colors. The icon stays a navy stroke. The message still says "Saved", "Warning", or "Error".

## Rules

- Success and information flags use `role="status"`. Warning and error flags use `role="alert"`.
- Dismiss returns focus to the control that caused the flag.
- Do not auto-dismiss an error. A success flag may leave after it has been announced, and "Dismiss" remains available until then.
- Stack later flags under the current one with 8px between them. Show at most three.
