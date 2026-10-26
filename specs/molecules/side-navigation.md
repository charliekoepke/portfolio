# Side navigation

Side navigation lists the main sections of the site in a column. One item is the current page.

Default structure follows [Atlassian navigation](https://atlassian.design/components/atlassian-navigation) and [page layout](https://atlassian.design/components/page-layout) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

Work, About, and Notes. "Work" is current.

## Appearance

The column is 240px on medium and wide screens. It is a drawer on the narrow breakpoint, opened by the menu icon button. Items are 40px tall with 16px of inline padding. The current item is `#0C1B2E` Inter 600 on `#E6EDF5`. Other items are `#3D5168`. Focus uses the 2px navy ring.

## Rules

- The container is a `nav` labeled "Sections".
- The current link has `aria-current="page"`. Weight and the sunken fill both mark it, and the state is in the accessibility tree.
- Items are links. Actions do not go in the side navigation.
- On the narrow breakpoint, the menu button is named "Open menu" or "Close menu" to match its state.
