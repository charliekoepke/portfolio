# List detail

List detail shows a list and the selected item together. The list is for scanning. The detail is for reading.

Default structure follows the list-and-detail arrangement used in Atlassian products and [page layout](https://atlassian.design/components/page-layout) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

A list of projects, 320px wide. The selected row is "Intake redesign". The detail column shows the work item header and the case study body.

## Arrangement

The list is 320px. The detail takes the remaining width. The gutter is 24px. The selected row uses the sunken fill and Montserrat 600, and `aria-current` or `aria-selected` records the selection. On the narrow breakpoint the list is the page, and choosing a row opens the detail as its own page with breadcrumbs back to the list.

## Rules

- Selection is not color alone. The selected title is semibold and the state is in the accessibility tree.
- Arrow keys move the selection when the list has focus. The detail updates to match.
- The detail has one heading for the selected item.
- An empty selection uses the empty state in the detail column: "Select a Project".
