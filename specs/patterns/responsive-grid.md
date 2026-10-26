# Responsive grid

The responsive grid places regions on the column grid from `foundations/grid.md` and `foundations/breakpoints.md`.

Default structure follows the layout grid described with [page](https://atlassian.design/components/page) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

On a wide screen, four dashboard cards span 3 columns each. On a medium screen they span 4 columns each, two per row. On a narrow screen each card spans all 4 columns.

## Arrangement

| Breakpoint | Columns | Margin | Gutter |
| --- | --- | --- | --- |
| Narrow, under 48rem | 4 | 16px | 24px |
| Medium, from 48rem | 8 | 24px | 24px |
| Wide, from 64rem | 12 | 32px | 24px |

A region spans a whole number of columns. It does not stop between columns.

## Rules

- Spacing inside a region still uses the 8px scale.
- Text does not overflow a column. Long words wrap or break.
- At 200 percent browser zoom, the narrow grid is allowed to stack to one column so content reflows without a horizontal scrollbar.
- Do not use a fixed pixel width for the page.
