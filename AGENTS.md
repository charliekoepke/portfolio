# Portfolio

Read this before changing the site or the design system. When a new rule applies to the project as a whole, add it here.

## Product context

Charlie Koepke’s portfolio is a personal site for people reviewing UX design and research work: hiring managers, collaborators, and peers.

The site has three jobs. It introduces the practice, it shows real projects, and it makes contact straightforward.

It is a static multi-page site with no framework and no build step. Home is `index.html`. Projects live under `projects/`, with the list at `projects/index.html` and one folder per project. About is `about/index.html`. Shared images live in `images/`. Paths from Home use `images/...`. Paths from About and Projects use `../images/...`. The site icon is `images/favicon.ico`, linked from every page.

GitHub Pages publishes the repository root at `https://charliekoepke.github.io/portfolio/`. `.nojekyll` keeps Pages from running Jekyll. The page title on Home is `Charlie Koepke - Portfolio`. Other pages use `{Page} · Charlie Koepke - Portfolio`. The header uses the same site name.

## Design philosophy

The palette is a healthcare professional navy. Pages stay light and cool. White carries cards, fields, and alerts. Navy carries the brand, headings, text, and the primary action. Status color appears only for success, warning, danger, and info.

Hierarchy comes from type and weight. Names, headings, navigation, buttons, labels, and tags use Montserrat Emphasis. Body copy, the hero role, and biography stay in Gafata.

Headings use camel case. Capitalize each word. Small words such as of, and, and a stay lowercase unless they start the heading. The Problem, The How of Solving It, and See What I’m Working On follow this. A person’s name stays as that person writes it.

Principles:

- One primary action in a region, labeled with a verb.
- The same action keeps the same label everywhere.
- Color, weight, and text work together. Color is never the only signal.
- Motion explains a change of state.
- The public page and `components.html` show the same component.
- Project cards come from real entries in `projects/catalog.js`. An empty catalog leaves the home preview hidden.

## Design system

Specs live in `specs/`. Read the relevant spec before generating UI.

- `foundations/` — color, type, spacing, radius, borders, motion, accessibility, and other base rules
- `tokens/` — named tokens that implement the foundations
- `atoms/`, `molecules/`, `organisms/`, `patterns/` — components and page patterns
- `tokens.css` — token values the site consumes
- `preview.css` and `catalog.js` — the component catalog
- `scripts/token-audit.js` — checks tokens against the specs

`components.html` in the portfolio root is the visual reference. It groups specimens by folder and shows each description, then its variants and states.

Tokens live in `specs/tokens.css`. Every token there is also documented in a markdown table under `specs/tokens/`. Pages and styles use `var(--token)` for any value the system already names. Layout widths that have no token stay literal. A 1px border stays literal. `color-mix()` is allowed. `font-weight: 700` is allowed because there is no bold token. `line-height: 1` matches a leading token, so it uses `var(--line-height-*)` or is omitted.

Typography tokens: `--font-family-sans` is `Gafata, serif`. `--font-family-emphasis` is `"Montserrat Emphasis", sans-serif`. Weights are regular 400 and semibold 600. Page titles are 2rem, section titles 1.25rem, body 1rem, button labels 0.875rem, badge labels 0.75rem. Pages load Gafata and Montserrat 600 and 700 from Google Fonts. The emphasis family is declared in `tokens.css` with `@font-face` and no `local()`.

Spacing is an 8px grid, stored as rem from `--space-8` through `--space-96`. Control height is 40px. Buttons, badges, and icon buttons use a 50px pill radius (`--radius-button`). Fields, checkboxes, and alerts use a 4px radius (`--radius-field`).

Icons are 24px line drawings, 2px round stroke, one navy, no second hue. The LinkedIn mark is the image `images/linkedin.webp` at 40px, with alt text `LinkedIn`. The email control is a line icon linking to `mailto:charliejunkoepke@gmail.com`.

An alert and a flag stay separate. An alert sits in the page flow. A flag floats at the bottom left and can be dismissed.

## UX behaviour

Home opens with a full-width navy billboard, then a short about section and a project preview. The hero headline is the name. The role line is “UX Designer and Researcher”. “Let's Connect” goes to `about/index.html#contact-heading`. “See What I’m Working On” previews up to three projects. With no catalog entries, that row stays `aria-hidden`.

The hero is the band under the navigation. Home, About, and Projects use navy shade patterns: blocks, circles, and lines. A case study uses the plain sunken band. The organism is `specs/organisms/hero.md`.

Projects opens with the same navy shade billboard. Its pattern is lines crossing at different angles, and the heading is “Projects”. Cards then render from `window.PROJECTS` in `projects/catalog.js`. Each project card is horizontal: a square image on the left, then the name, a short description, and “See More”. The home preview uses those same parts with the image above the text. The projects page has no filters.

Each case study has its own folder under `projects/`, named for that study. Website Modernization is `projects/website-modernization/`. Responsive Design System is `projects/responsive-design-system/`. The page is `index.html` in that folder. Images and other files used in the study live in the same folder. Client and website names stay off the page. Use general wording.

Every case study uses the same layout. A light grey header carries the title. A government case study adds a small italic note above the sections: the work is government work, so client and product names stay off the page. Other case studies omit that note. The body is six sections, in order: The Problem, The How of Solving It, Brainstorming, Prototyping, Testing and Iterating, and Lessons Learned. Section headings follow the camel case rule. Paragraphs span the page column. Each section is paragraphs and image examples. The pattern is `specs/patterns/case-study.md`.

About uses the same navy shades as circles behind the heading “About Me”, then a biography, three image placeholders, and the contact section “Let's Connect”. Home uses the shades as a grid of blocks behind the name.

The header is on every page: a sticky white bar on wide screens, and a menu button with a side drawer below 48rem. Links are Home, Projects, and About, in that order, with `aria-current="page"` on the current page. Escape and the blanket close the drawer.

The footer is on every page. The left side is the name “Charlie Koepke”, the LinkedIn image, and the email icon. The right side is a vertical list of Home, Projects, and About, with `aria-current="page"` on the current page.

The contact form posts to Web3Forms from the browser. Fields are Name, Email address (required), and Message, then “Send message”. The access key, subject `Portfolio inquiry`, and the no-JavaScript redirect live in the form. The destination inbox is set in the Web3Forms dashboard. A hidden `botcheck` checkbox is the honeypot. While the request is in flight the button is unavailable. Success clears the form. Failure leaves the fields filled. Either result shows the in-page alert under the button.

That about-page alert is the dismissible variant and spans half the contact column from 48rem up, and the full content column below that. Success title: “Sent Successfully”. Success body: “Thank you for reaching out! I will get back to you as soon as I am able.” Error title: “An Error Occurred”. Error body: “Please try again in a moment”. Dismiss returns focus to the send button. A `?sent=1` visit shows the success alert, then the query is removed. Warning is the persistent variant and has no close control.

Field errors sit with the field and say what to correct. A flag is for a brief floating confirmation. A banner is for a failure that affects the whole site.

## Interaction & motion

Hover, color, and small menus use `--motion-duration-small` (100ms). Panels, dialogs, and expanding sections use `--motion-duration-medium` (350ms). A large layout change uses `--motion-duration-large` (700ms). Something entering uses ease-out. Something leaving uses ease-in. Something moving on the page uses ease-in-out.

Primary buttons darken to the action hover navy. Links darken to the link hover navy. A quiet icon button uses the sunken surface on hover.

When `prefers-reduced-motion` is set, state changes are instant and transform animation is off. The spinner stays still and keeps the word “Loading”. A new state stays understandable with the animation removed.

## Accessibility

The written target in `specs/foundations/accessibility.md` is WCAG 2.0 Level AA. The token audit also checks WCAG 2.1: 4.5:1 for text (1.4.3) and 3:1 for control boundaries and the focus ring (1.4.11). Normal text, including the 14px button label, meets 4.5:1. Large text meets 3:1.

Pages set `lang="en"` and include a skip link to `#main`. Body links are underlined. The focus ring is a 2px solid `--color-focus` outline, offset 2px. Focus order follows the visual order. Focus stays visible. A component does not trap keyboard focus.

Actions use `button`, `a`, or a form control. Buttons start with a verb. Icon-only controls have an accessible name. Inputs have visible labels. The current page is marked with `aria-current="page"` and with weight.

Success alerts and success flags use `role="status"`. Error alerts use `role="alert"`. Warning uses `role="region"` with an accessible name. Status text names the state. Disabled controls use the `disabled` attribute and the disabled colors.

## Responsive design

The grid changes at two widths. Narrow is 4 columns with a 16px page margin. Medium starts at 48rem (768px), with 8 columns and a 24px margin. Wide starts at 64rem (1024px), with 12 columns and a 32px margin. The gutter is 24px at every width.

Below 48rem the primary navigation moves into the side drawer and the menu button remains. The about-page alert uses the full content width below 48rem and half the contact column from 48rem up. Type and spacing are rem so zoom to 200% keeps the content and the spatial relationships.

## Implementation standards

Public pages are HTML, `site.css`, and `site.js`. They load `specs/tokens.css`. Catalog pages load `specs/tokens.css`, `specs/preview.css`, and `specs/catalog.js`.

A branch stays centered on one page. Shared updates, such as the header, footer, or favicon, can be included when that page needs them. Pull request descriptions use `.github/pull_request_template.md`: a bold “Updates” heading, then a list of what changed on the branch.

`components.html` is the catalog of the current components. It loads the specimens and the preview styles, then reads each description from the matching spec. The description is the first paragraph after the title. Keep `components.html` free of copied markup and copied descriptions.

When a component’s appearance, copy, variants, or states change, update all of these in the same change:

- The page that uses it, including `site.css` when the site styles it
- The matching specimen in `specs/catalog.js`
- The matching styles in `specs/preview.css`
- The component’s markdown spec, including the opening description

The specimen `id` matches the markdown file name, such as `alert` and `specs/molecules/alert.md`. A new component needs a specimen, preview styles, and that markdown file so it appears in the catalog.

Header behavior in `site.js` returns early when the menu markup is missing. Page-specific behavior, including the contact alert, is registered before that return.

## Quality assurance

From the portfolio folder, run:

```bash
node specs/scripts/token-audit.js
```

The audit checks that `tokens.css` matches the token specs, that pages use those tokens, that spacing stays on the 8px grid, and that text and control boundaries meet the contrast checks above. `font-family` is outside the audit. GitHub Actions runs the same script on a pull request into `main` and again when that change is pushed to `main`.

Before calling a visual change done, compare the page that uses the component with its entry in `components.html`. Check the variants and states that changed, including empty and error states. Exercise the control with the keyboard. Confirm the focus ring, the accessible name, and the reduced-motion behavior. Look at a narrow viewport and a wide one when layout changes.

A component change is ready when the audit passes, the four catalog sources match, and the public page and `components.html` show the same component.
