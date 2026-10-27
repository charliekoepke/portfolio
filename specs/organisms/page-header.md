# Page header

A page header is the top of a page's content. It has one title. It can include breadcrumbs, a short description, and actions.

Default structure follows the [page header](https://atlassian.design/components/page-header/usage) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

Breadcrumbs: Work / Clinical. Title: "Intake redesign". Description: "How a care team reads results without the noise." Actions: primary "View project" and secondary "Contact".

## Appearance

One page header per page. The title is 32px Montserrat 600 (`--font-size-page-title`). The description is 16px, 8px below the title, max width 62 characters. Actions sit at the end of the title row on wide screens and wrap below the title on the narrow breakpoint, with 16px between buttons. Breadcrumbs sit 8px above the title. The header's bottom margin is 32px.

## Rules

- The title is the page's `h1`.
- One primary button in the header.
- Actions that affect this page are buttons. Destinations are links.
- Do not repeat the title in the breadcrumbs' current item and then hide the `h1`. Both can show the same words. The `h1` is the title.
