# Navigation

Navigation is the horizontal bar at the top of every page. It names the site and links to the main sections.

Default structure follows [Atlassian navigation](https://atlassian.design/components/atlassian-navigation) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

The site name "Portfolio", then Work, About, and Notes. "Work" is the current page. On a narrow screen the links move into the side navigation, and a menu icon button remains.

## Appearance

The bar is 64px tall, white, with a 1px `#D0D9E6` bottom border. Horizontal padding matches the page margin for the breakpoint. The site name is 16px Inter 600, `#12263E`. Links are 16px. The current link is Inter 600 and has `aria-current="page"`. Other links are `#3D5168`. Gaps between links are 24px.

## Rules

- The bar is a `header` with one `nav` labeled "Primary".
- The same links, in the same order, appear on every page.
- The current page is marked in the accessibility tree and by weight, not by color alone.
- A search field, when present, sits at the end and follows `molecules/search.md`.
