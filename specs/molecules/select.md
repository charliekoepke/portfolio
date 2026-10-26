# Select

A select lets someone choose one option from a list. The closed control shows the current choice.

Default structure follows [select](https://atlassian.design/components/select/usage) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

Label: "Role". Options: "Design", "Research", "Engineering". The closed field reads "Design".

## Appearance

The closed field matches the input: 40px tall, 16px padding, 4px radius, 1px `#3D5168` border. A 16px navy chevron sits 16px from the end. The menu matches the dropdown menu. The selected option uses the sunken fill and the word "Selected" is exposed with `aria-selected`.

## Rules

- The label is visible and names the select.
- Arrow keys move through options. Enter or Space chooses. Escape closes the list and leaves the previous value.
- A short native set of options uses a native `select`. A long or searchable set uses a listbox with the same appearance.
- Do not use a select for two or three options that all fit on screen. Use radios.
