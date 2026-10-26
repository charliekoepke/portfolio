# Spinner

A spinner tells someone that content is loading. It is a navy stroke on a circle, with the word "Loading".

Default structure follows [spinner](https://atlassian.design/components/spinner/usage) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

A 24px spinner beside the word "Loading" while a case study list is requested.

## Appearance

| Property | Value | Token |
| --- | --- | --- |
| Size | 16px or 24px | `--space-16`, `--space-24` |
| Stroke | 2px `#17345A` | `--icon-stroke`, `--color-action-primary` |
| Gap to the word | 8px | `--space-8` |
| Word | 1rem Inter 400 | `--font-size-body` |

The graphic does not carry the message alone. The word "Loading" is visible next to it.

## Rules

- The container has `role="status"` and the text "Loading".
- When `prefers-reduced-motion` is set, stop the rotation and keep the word.
- Do not use a spinner for a determinate task. Use the progress bar and a percent.
- A spinner that replaces a button stays inside that button and the button is marked busy.
