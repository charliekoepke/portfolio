# Pagination

Pagination splits a long list into pages. The current page is marked in text and in the control state.

Default structure follows [pagination](https://atlassian.design/components/pagination/usage) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

Previous, pages 1 through 5, Next. Page 1 is current.

## Appearance

The group is a nav labeled "Pagination". Page controls are 40px circles, the same radius as the icon button. The current page uses the action fill and inverse text. Other pages are secondary buttons. Previous and Next are secondary buttons with those words. Gaps are 8px.

## Rules

- The current page has `aria-current="page"`.
- Previous is omitted on the first page. Next is omitted on the last page. Do not show them as disabled.
- The list order does not change when the page changes, except for the new slice of results.
- Announce the new page in a status region, such as "Page 2".
