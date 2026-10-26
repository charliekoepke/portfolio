# Table

A table shows comparable data in rows and columns. The header names each column.

Default structure follows [table](https://atlassian.design/components/table) and [dynamic table](https://atlassian.design/components/dynamic-table/usage) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

Caption: "Projects". Columns: Project, Year, Status. Three rows. Status is a lozenge, such as "In progress".

## Appearance

The table is full width of its region. Header cells are 14px Inter 600, `#3D5168`, with 16px padding. Body cells are 16px, `#0C1B2E`, with 16px padding. Row height is at least 48px. A 1px `#D0D9E6` rule separates rows. The header has a 1px bottom border in `#3D5168` so it is distinct from the body.

## Rules

- Use a `table` with a `caption` or an `aria-label`. Header cells are `th` with `scope="col"`.
- Status is a lozenge, not a colored cell alone.
- A sortable column is a button in the header. The button name includes the column and the current sort, such as "Year, sorted descending".
- Row selection uses a checkbox in the first column. The header checkbox can be indeterminate.
- More than one page of rows uses pagination under the table, 16px below.
