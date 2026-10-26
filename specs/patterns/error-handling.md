# Error handling

An error says what happened and what to do next. Field errors sit with the field. A page-level failure uses a banner only when the whole site is affected.

Default structure follows the error guidance for [form](https://atlassian.design/components/form/usage), [banner](https://atlassian.design/components/banner/usage), and [inline message](https://atlassian.design/components/inline-message) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

Submit with the email "ada@agency". The email field uses the danger border. Under it: "Enter an email address with an @ and a domain." Focus moves to that field. The submit button stays enabled.

## Arrangement

A form with several errors shows an inline message above the fields: "Fix 2 fields before sending." Each item in that message is a link to its field. The field error repeats the specific correction. A saved action that succeeded uses a flag: "Project saved." A lost connection uses the banner.

## Rules

- Do not disable the submit button to prevent an error.
- The error text uses the danger text color on white or on the danger surface. The border is extra, not the only signal.
- Move focus to the first invalid field, or to the error summary when there are several.
- Say what to do. "Enter an email address with an @ and a domain." rather than "Invalid input."
- A success flag is a status message. An error banner is an alert. Do not use an alert for a field error that is already next to the field.
