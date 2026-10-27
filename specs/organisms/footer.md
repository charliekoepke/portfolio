# Footer

The footer closes every page. It offers contact as icons.

It is built from the [link](../atoms/link.md) atom, the LinkedIn image in `images/linkedin.webp`, and the email icon in `foundations/iconography.md`.

## Default example

A LinkedIn icon linking to the LinkedIn profile. An email icon linking to charliejunkoepke@gmail.com. An empty icon placeholder labeled "Icon".

## Appearance

The footer is a white surface with a 1px `#D0D9E6` top border. Block padding is 32px. Inline padding matches the page margin for the breakpoint. The inner row is centered and maxes out at 960px plus that margin.

The icons sit in one centered row, with 16px between them. The LinkedIn control is the image `images/linkedin.webp` at 40px, and its accessible name is "LinkedIn". The email control is a 40px circle with a 24px line icon, `#17345A`, and the hover fill is `#E6EDF5`. The placeholder is the same 40px circle, dashed 1px `#D0D9E6` on `#E6EDF5`, with the label "Icon" in 12px Inter 600, `#3D5168`.

## Rules

- The same footer appears on every page, after the main content.
- The element is a `footer`. The icons are in one `nav` labeled "Footer".
- LinkedIn and email are links. The placeholder is not a link and not a control.
- The email icon is hidden from assistive technology, and that link's accessible name is "Email". The LinkedIn image's text alternative is "LinkedIn".
- The header carries the page menu. The footer does not repeat it.
