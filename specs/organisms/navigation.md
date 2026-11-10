# Navigation

Navigation is the horizontal bar at the top of every page. It names the site and links to the main sections. A link turns Montserrat 700 on hover, bolder than its resting weight.

Default structure follows [Atlassian navigation](https://atlassian.design/components/atlassian-navigation) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

The site name "Portfolio", then Work, About, and Notes. "Work" is the current page. On a narrow screen the links move into the side navigation, and a menu icon button remains.

## Appearance

The bar is 64px tall, white, with a 1px `#D0D9E6` bottom border. Horizontal padding matches the page margin for the breakpoint. The site name is 16px Montserrat 600, `#12263E`. Links are 16px. The current link is Montserrat 600 and has `aria-current="page"`. Other links are `#3D5168`. On hover, every link is Montserrat 700. The bold width is reserved, so the bar does not shift. Gaps between links are 24px.

## Rules

- The bar is a `header` with one `nav` labeled "Primary".
- The same links, in the same order, appear on every page.
- The current page is marked in the accessibility tree and by weight, not by color alone.
- Hover makes a link bolder. Resting links stay as they are, and the current link stays semibold until hover.
- A search field, when present, sits at the end and follows `molecules/search.md`.
