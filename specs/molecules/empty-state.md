# Empty state

An empty state appears when a view has nothing to show. It names the empty condition and gives the next action.

Default structure follows [empty state](https://atlassian.design/components/empty-state) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

Heading: "No projects yet." Description: "Add a case study to show it here." Primary button: "Add a project".

## Appearance

The block is centered in the content area, with 32px of padding. The heading is 20px Inter 600. The description is 16px, 8px below, max 60 characters wide per line and at most two lines. The button is 24px below the description. An optional icon is a 24px navy stroke, 16px above the heading.

## Rules

- Say what is missing and what to do next. Do not use "Nothing here yet" alone.
- One primary button. A second action, if needed, is a link under the button.
- A filtered list with no matches uses the same pattern and a button "Clear filters".
- Do not show an empty state while the list is still loading. Show the spinner.
