# Search

Search is a text field for finding items already on the site. It is an input with a search icon and a clear control.

Default structure follows the search slot in the [page header](https://atlassian.design/components/page-header/usage) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

A field named "Search projects". The placeholder is "Project or client". After someone types, a clear button named "Clear search" appears.

## Appearance

The field matches the input and is at least 240px wide on medium and wide screens. It is full width on the narrow breakpoint. The search icon is a 24px navy stroke, 16px from the start. The clear control is a quiet icon button. The field's text does not run under the icons. Extra inline padding accounts for them in 8px steps.

## Rules

- The accessible name is "Search" plus the collection, such as "Search projects".
- Enter submits the search. The clear button empties the field and leaves focus in it.
- Results replace the list. A status region announces the count, such as "3 projects".
- Empty results use the empty state.
