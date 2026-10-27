# Footer

The footer closes every page. The name and contact icons sit on the left. The site links sit on the right.

It is built from the [link](../atoms/link.md) atom, the LinkedIn image in `images/linkedin.webp`, and the email icon in `foundations/iconography.md`.

## Default example

"Charlie Koepke" in the page-title size. Under the name, a LinkedIn icon linking to the LinkedIn profile and an email icon linking to charliejunkoepke@gmail.com. On the right, Home, Projects, and About.

## Appearance

The footer is a white surface with a 1px `#D0D9E6` top border. Block padding is 32px. Inline padding matches the page margin for the breakpoint. The inner row maxes out at 960px plus that margin, with the two sides at opposite ends and 32px between them.

The name is Montserrat 600, 32px, `#12263E`. The icons sit in one row under the name, with 16px between them. The LinkedIn control is the image `images/linkedin.webp` at 40px, and its accessible name is "LinkedIn". The email control is a 40px circle with a 24px line icon, `#17345A`, and the hover fill is `#E6EDF5`.

The site links are a vertical list, aligned to the right, 8px apart. They are Montserrat 600, `#3D5168`. The current page is `#0C1B2E`. Hover is `#102544`.

## Rules

- The same footer appears on every page, after the main content.
- The element is a `footer`.
- The name is text, not a link.
- The icons are in one `nav` labeled "Contact". LinkedIn and email are links.
- The email icon is hidden from assistive technology, and that link's accessible name is "Email". The LinkedIn image's text alternative is "LinkedIn".
- The page links are in one `nav` labeled "Site". The current page uses `aria-current="page"`.
