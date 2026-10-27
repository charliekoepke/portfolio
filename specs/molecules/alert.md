# Alert

An alert keeps users informed of important and sometimes time-sensitive changes.

Default structure follows [alert](https://designsystem.digital.gov/components/alert/) in the [U.S. Web Design System](https://designsystem.digital.gov/).

## Intent

System status messages. An alert may be a notification that keeps people informed of the status of the system and may or may not require the user to respond. Such notifications may be errors, warnings, and general updates.

Validation messages. An alert may be a validation message that informs a user they just took an action that needs to be corrected, or a confirmation that a task was completed successfully.

Consider something else for a long form, which still needs in-line validation beside any message at the top, and for a destructive action, which uses a confirmation modal.

## Default example

Informative status. Heading "Informative status". Body "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."

The contact form uses this molecule on the page, under the send button. Success heading "Sent Successfully". Body "Thank you for reaching out! I will get back to you as soon as I am able." Error heading "An Error Occurred". Body "Please try again in a moment".

A flag is a separate component. A flag floats above the page and can be dismissed. An alert stays in the page.

## Appearance

The alert sits in the page flow. On a wide page it spans half the page. On a narrow page it spans the content column. Padding 16px. Radius 4px (`--radius-field`), the same corner as a field. Every variant uses a solid white surface (`--color-surface-default`). The border is 4pt and full opacity. The heading is 16px Montserrat 700. The body is 14px Gafata 400. A dismissible alert adds a 40px close icon. A persistent alert has no close control.

| Variant | Fill | Border and heading | Body | Role |
| --- | --- | --- | --- | --- |
| Success | `#FFFFFF` | `#145C38` | `#0C1B2E` | `status` |
| Error | `#FFFFFF` | `#8A2E2E` | `#0C1B2E` | `alert` |
| Warning | `#FFFFFF` | `#7A4E0C` | `#0C1B2E` | `region` |

The fill and the text stay opaque.

## Rules

- Keep the heading to one line. Put extra detail in the body. The heading can name the alert type.
- When a response is required, say what to do next in plain language. Do not blame the person.
- Use an alert for the current task. Too many alerts get ignored.
- A dismissible alert includes a close icon. A persistent alert stays on the page and has no close control.
- Let the person dismiss an alert when that is appropriate.
- Start the text with the alert type when color alone would hide the meaning. Informative can begin with "Announcement" or a more precise word. Warning is potentially critical. Success means the action worked. Error means the action failed.
- Success uses `role="status"`. Error uses `role="alert"`. Informative and warning use `role="region"` with an accessible name.
- Do not hide an alert in the page and reveal it later. Do not auto-dismiss an error.
- Dismiss returns focus to the control that opened the alert.
