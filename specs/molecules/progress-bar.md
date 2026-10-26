# Progress bar

A progress bar shows how far a known task has gone. The percent is written beside it.

Default structure follows the [progress bar](https://atlassian.design/components/progress-bar/usage) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

Label "Uploading images". The bar is 40 percent full. The text reads "40 percent".

## Appearance

The track is 8px tall, full width, `#E6EDF5`, with a 50px radius. The fill is `#17345A` and its width matches the value. The label and the percent are 14px, 8px below the track. The label is `#0C1B2E`. The percent is `#3D5168`.

## Rules

- The track has `role="progressbar"` plus `aria-valuemin`, `aria-valuemax`, and `aria-valuenow`. The accessible name is the label.
- The visible percent matches `aria-valuenow`.
- Do not use color alone. 100 percent still reads "100 percent", and a failed task replaces the bar with an inline error.
- An unknown wait uses the spinner, not an animated indeterminate bar.
