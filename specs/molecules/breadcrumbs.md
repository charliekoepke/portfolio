# Breadcrumbs

Breadcrumbs show the path to the current page. Each ancestor is a link. The current page is text.

Default structure follows [breadcrumbs](https://atlassian.design/components/breadcrumbs/usage) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

Work / Clinical / Intake redesign. "Work" and "Clinical" are links. "Intake redesign" is the current page.

## Appearance

The trail is a nav labeled "Breadcrumbs". Items are 14px. Links use `--color-link` and are underlined. The current page is `#0C1B2E` and is not a link. Separators are a "/" in `#566A80`, with 8px on either side.

## Rules

- The current item has `aria-current="page"`.
- Keep the labels short and identical to the page titles they point to.
- On the narrow breakpoint, collapse the middle items into one menu if the trail would wrap more than twice.
