# Modal dialog

A modal dialog asks for a decision above the page. The page behind it does not receive interaction until the dialog closes.

Default structure follows the [modal dialog](https://atlassian.design/components/modal-dialog/usage) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

Title: "Delete this project?". Body: "Intake redesign will be removed from the site." Actions: primary "Delete" and secondary "Cancel".

## Appearance

The dialog is a white surface, 4px radius, 24px padding, max width 480px. The title is the page-title size only when it is the page. Inside a dialog the title is 20px Inter 600. The blanket behind it is `#0C1B2E` at 40 percent opacity. Actions are right aligned. The secondary button comes first and the primary button is at the right, with 16px between them. A close icon button named "Close" sits at the top.

## Rules

- Use `role="dialog"` and `aria-modal="true"`. The title labels the dialog.
- Move focus into the dialog when it opens. Keep focus inside until it closes. Return focus to the trigger.
- Escape and "Close" and "Cancel" dismiss it.
- One primary action. Do not disable it. If the action is not yet valid, explain that in the dialog.
