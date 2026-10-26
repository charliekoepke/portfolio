# Canvas content flow

The canvas is the main column of a page. Content flows from the navigation, to the page header, to stacked regions.

Default structure follows [page layout](https://atlassian.design/components/page-layout) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

Navigation. Then a page header for "Work". Then a region of dashboard cards. Then a table of projects. Regions are 32px apart.

## Arrangement

The main column's max width is 960px. It is centered in the page grid. Regions stack vertically. Each region is one organism: a page header, a set of dashboard cards, a table, a content panel, or an empty state. The gap between regions is `--space-32`.

## Rules

- One `h1`, from the page header or the work item header.
- The primary action for the page lives in the header, not repeated at the bottom of every region.
- A loading region shows the spinner in that region. It does not replace the navigation.
- On the narrow breakpoint the column is the full width inside the 16px page margin.
