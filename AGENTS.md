# Portfolio

Read this before changing the site or the design system. When a new rule applies to the project as a whole, add it here.

## Product context

Charlie Koepke’s portfolio is a personal site for people reviewing UX design and research work: hiring managers, collaborators, and peers.

The site has three jobs. It introduces the practice, it shows real projects, and it makes contact straightforward.

It is a React 19 single-page app built with Vite and routed with React Router. `npm run dev` serves it at `http://localhost:5173/portfolio/`. `npm run build` writes `dist/`. Routes are `/` (Home), `/projects`, `/projects/:slug` (one per case study), and `/about`. An old address ending in `/index.html` redirects to the same route without it. Any other address shows Page Not Found.

Source lives in `src/`:

- `main.jsx` and `App.jsx` — entry and routes
- `pages/` — Layout (skip link, header, `main`, footer), Home, Projects, About, ContactForm, CaseStudyPage, NotFound
- `components/atoms/`, `molecules/`, `organisms/`, `patterns/` — one component per spec, with the same folder names as `specs/`
- `content/projects/` — one folder per case study, holding `index.js` and that study’s images
- `lib/` — route focus, scroll reveal, page title, rich text links, class helpers
- `styles/site.css` and `styles/motion.css` — site styles and animation
- `catalog/` — the component catalog
- `assets/` — shared images such as `linkedin.webp`

`public/` holds files copied as they are: `images/favicon.ico` and `.nojekyll`.

GitHub Pages publishes `dist/` at `https://charliekoepke.github.io/portfolio/`. Vite’s `base` is `/portfolio/`. `scripts/route-pages.js` runs after the build and copies `index.html` into each route folder and to `404.html`, so a deep link loads the app. `.github/workflows/deploy.yml` builds and deploys on a push to `main`. The repository’s Pages source is GitHub Actions. The page title on Home is `Charlie Koepke - Portfolio`. Other pages use `{Page} · Charlie Koepke - Portfolio`, set with `usePageTitle`. The header uses the same site name.

## Design philosophy

The palette is a healthcare professional navy. Pages stay light and cool. White carries cards, fields, and alerts. Navy carries the brand, headings, text, and the primary action. Status color appears only for success, warning, danger, and info.

Hierarchy comes from type and weight. Names, headings, navigation, buttons, labels, and tags use Montserrat Emphasis. Body copy, the hero role, and biography stay in Gafata.

Headings use camel case. Capitalize each word. Small words such as of, and, and a stay lowercase unless they start the heading. The Problem, The How of Solving It, and See What I’m Working On follow this. A person’s name stays as that person writes it.

Paragraphs span the full width of their container. A caption is not a paragraph. Captions stay centered and can be shorter than that column.

Principles:

- One primary action in a region, labeled with a verb.
- The same action keeps the same label everywhere.
- Color, weight, and text work together. Color is never the only signal.
- Motion explains a change of state.
- The public page and `components.html` show the same component.
- Project cards come from real entries in `src/content/projects/index.js`. With no entries, the home preview is not rendered.

## Design system

Specs live in `specs/`. Read the relevant spec before generating UI.

- `foundations/` — color, type, spacing, radius, borders, motion, accessibility, and other base rules
- `tokens/` — named tokens that implement the foundations
- `atoms/`, `molecules/`, `organisms/`, `patterns/` — components and page patterns
- `tokens.css` — token values the site consumes
- `preview.css` — catalog styles, used with `src/catalog/specimens.jsx`
- `scripts/token-audit.js` — checks tokens against the specs

`components.html` in the portfolio root is the visual reference. It groups specimens by folder and shows each description, then its variants and states.

Tokens live in `specs/tokens.css`. Every token there is also documented in a markdown table under `specs/tokens/`. Pages and styles use `var(--token)` for any value the system already names. Layout widths that have no token stay literal. A 1px border stays literal. `color-mix()` is allowed. `font-weight: 700` is allowed because there is no bold token. `line-height: 1` matches a leading token, so it uses `var(--line-height-*)` or is omitted.

Typography tokens: `--font-family-sans` is `Gafata, serif`. `--font-family-emphasis` is `"Montserrat Emphasis", sans-serif`. Weights are regular 400 and semibold 600. Page titles are 2rem, section titles 1.25rem, body 1rem, button labels 0.875rem, badge labels 0.75rem. Pages load Gafata and Montserrat 600 and 700 from Google Fonts. The emphasis family is declared in `tokens.css` with `@font-face` and no `local()`.

Spacing is an 8px grid, stored as rem from `--space-8` through `--space-96`. Control height is 40px. Buttons, badges, and icon buttons use a 50px pill radius (`--radius-button`). Fields, checkboxes, and alerts use a 4px radius (`--radius-field`).

Icons are 24px line drawings, 2px round stroke, one navy, no second hue. The LinkedIn mark is the image `src/assets/linkedin.webp` at 40px, with alt text `LinkedIn`. The email control is a line icon linking to `mailto:charliejunkoepke@gmail.com`.

An alert and a flag stay separate. An alert sits in the page flow. A flag floats at the bottom left and can be dismissed.

## UX behaviour

Home opens with a full-width navy billboard, then a short about section and a project preview. The hero headline is the name. The role line is “UX Designer and Researcher”. “Let's Connect” goes to `/about#contact-heading`. “See What I’m Working On” shows Responsive Design System, Website Modernization, and Figma Design System, set by `homeProjectSlugs`. “View projects” is centered under those cards. With no entries, that row is not rendered.

The hero is the band under the navigation. Home, About, and Projects use navy shade patterns: blocks, circles, and lines. A case study uses the plain sunken band. The organism is `specs/organisms/hero.md`.

Projects opens with the same navy shade billboard. Its pattern is lines crossing at different angles, and the heading is “Projects”. Cards then render from `projects` in `src/content/projects/index.js`, in this order: Website Modernization, Responsive Design System, Working with Wix, Figma Design System. Each project card is horizontal: a square image on the left, then the name, a short description, and “See More”. The home preview uses those same parts with the image above the text. When a project folder contains a file named preview-image, its `index.js` imports that file as `preview`, and it is the card image. A project without that file keeps the empty image placeholder. The projects page has no filters.

Each case study has its own folder under `src/content/projects/`, named for its slug. The slug is also its route: Website Modernization is `/projects/website-modernization`, Responsive Design System is `/projects/responsive-design-system`, Working with Wix is `/projects/working-with-wix`, and Figma Design System is `/projects/figma-design-system`. The folder’s `index.js` holds the content: `slug`, `title`, `summary`, `preview`, `locked`, `disclosure`, `sections`, and `status`. `sections` has `problem`, `how`, `brainstorming`, `prototyping`, `testing`, and `lessons`. Each one holds `paragraphs` and an optional `figure` with `src`, `alt`, `caption`, and `narrow`. Inside text, `[words](address)` becomes a link. An address that starts with `/` stays inside the app. Images and other files used in the study live in the same folder and are imported by `index.js`. The `CaseStudy` pattern renders every study, so a new study is a new content folder plus its entry in `index.js`. Client and website names stay off the page. Use general wording.

Every case study uses the same layout. A light grey header carries the title. A case study that cannot name clients or products adds a small italic note above the sections. Website Modernization says the work is government work, so client and product names stay off the page. Figma Design System says a non-disclosure agreement keeps product specifics off the page. Other case studies omit that note. The body is six sections, in order: The Problem, The How of Solving It, Brainstorming, Prototyping, Testing and Iterating, and Lessons Learned. Section headings follow the camel case rule. Paragraphs span the page column. The Problem and Lessons Learned are paragraphs. The other four sections add an image example with a caption. An image in The Problem or Lessons Learned is added only for the case study that needs it. The pattern is `specs/patterns/case-study.md`.

Website Modernization and Figma Design System ask for a password before the study. The screen is a password field and Continue. A wrong password says “That password is incorrect. Try again.” A correct password opens that study for the rest of the browser session. A study with `locked: true` shows that screen. Both use `STUDY_PASSWORD` in `src/content/studyAccess.js`, and each study remembers its own session key, `study-{slug}`. After a correct password, focus moves to the study title. It is a simple screen, not a security control. The projects card stays visible.

About uses the same navy shades as circles behind the heading “About Me”, then a biography that spans the page column, three photos, and the contact section “Let's Connect”. The photos are the water and mountains, the walk with the Seattle skyline, and the cat, in that order. That section is a shaded box, and the form inside it is centered. Home uses the shades as a grid of blocks behind the name, and the portrait beside the About copy is the headshot.

The header is on every page: a sticky white bar on wide screens, and a menu button with a side drawer below 48rem. Links are Home, Projects, and About, in that order, with `aria-current="page"` on the current page. A link becomes Montserrat 700 on hover. Opening the drawer moves focus to its first link. Escape and the blanket close the drawer and return focus to the menu button. A closed drawer is `visibility: hidden`, so its links are out of the tab order. Changing pages closes it.

The footer is on every page. The left side is the name “Charlie Koepke”, the LinkedIn image, and the email icon. The right side is a vertical list of Home, Projects, and About, with `aria-current="page"` on the current page.

The contact form posts to Web3Forms from the browser. Fields are Name, Email address (required), and Message, then “Send message”. The access key, subject `Portfolio inquiry`, and the no-JavaScript redirect live in the form. The destination inbox is set in the Web3Forms dashboard. A hidden `botcheck` checkbox is the honeypot. While the request is in flight the button is unavailable. Success clears the form. Failure leaves the fields filled. Either result shows the in-page alert under the button.

That about-page alert is the dismissible variant and spans half the contact column from 48rem up, and the full content column below that. Success title: “Sent Successfully”. Success body: “Thank you for reaching out! I will get back to you as soon as I am able.” Error title: “An Error Occurred”. Error body: “Please try again in a moment”. Dismiss returns focus to the send button. A `?sent=1` visit shows the success alert, then the query is removed and the hash stays. Warning is the persistent variant and has no close control.

Field errors sit with the field and say what to correct. A flag is for a brief floating confirmation. A banner is for a failure that affects the whole site.

## Interaction & motion

Hover, color, and small menus use `--motion-duration-small` (100ms). Panels, dialogs, and expanding sections use `--motion-duration-medium` (350ms). A large layout change uses `--motion-duration-large` (700ms). Something entering uses ease-out. Something leaving uses ease-in. Something moving on the page uses ease-in-out.

Primary buttons turn white with a navy border and navy text on hover. Secondary buttons fill navy on hover. Links darken to the link hover navy. A quiet icon button uses the sunken surface on hover.

Animation lives in `src/styles/motion.css`, inside `@media (prefers-reduced-motion: no-preference)`. A page fades in on a route change. Billboard shapes enter once with a short stagger: blocks fade, circles grow, and lines sweep. The hero title and role rise in. Sections, figures, and project cards rise in once as they scroll into view, through `useReveal` or `Reveal`. Cards lift slightly on hover. Alerts, field errors, menus, popups, the calendar, tooltips, the drawer, and the blanket fade or slide in. Motion uses the duration and easing tokens.

Animation rules for WCAG 2.2.2 and 2.3.1: nothing loops, blinks, or flashes, and each animation ends within a second. Hidden-until-revealed content becomes visible when it receives focus and when the page prints. Animation never carries meaning that the static page lacks.

When `prefers-reduced-motion` is set, all of that is off. Content appears at once, state changes are instant, and transform animation is off. The spinner stays still and keeps the word “Loading”. A new state stays understandable with the animation removed.

## Accessibility

The written target in `specs/foundations/accessibility.md` is WCAG 2.0 Level AA. The token audit also checks WCAG 2.1: 4.5:1 for text (1.4.3) and 3:1 for control boundaries and the focus ring (1.4.11). Normal text, including the 14px button label, meets 4.5:1. Large text meets 3:1.

Pages set `lang="en"` and include a skip link to `#main`. After a client route change, `RouteFocus` scrolls to the top and moves focus to the page `h1`, so screen readers announce the new page. When the address has a hash, focus moves to that target instead. Body links are underlined. A link that opens a new tab shows the external icon and says “opens in a new tab” to screen readers. The focus ring is a 2px solid `--color-focus` outline, offset 2px. Focus order follows the visual order. Focus stays visible. A component does not trap keyboard focus.

Actions use `button`, `a`, or a form control. Buttons start with a verb. Icon-only controls have an accessible name. Inputs have visible labels. The current page is marked with `aria-current="page"` and with weight.

Success alerts and success flags use `role="status"`. Error alerts use `role="alert"`. Warning uses `role="region"` with an accessible name. Status text names the state. Disabled controls use the `disabled` attribute and the disabled colors.

## Responsive design

The grid changes at two widths. Narrow is 4 columns with a 16px page margin. Medium starts at 48rem (768px), with 8 columns and a 24px margin. Wide starts at 64rem (1024px), with 12 columns and a 32px margin. The gutter is 24px at every width.

Below 48rem the primary navigation moves into the side drawer and the menu button remains. The about-page alert uses the full content width below 48rem and half the contact column from 48rem up. Type and spacing are rem so zoom to 200% keeps the content and the spatial relationships.

## Implementation standards

The site entry `src/main.jsx` loads `specs/tokens.css`, `src/styles/site.css`, and `src/styles/motion.css`. The catalog entry `src/catalog/main.jsx` loads `specs/tokens.css`, `specs/preview.css`, and `src/styles/motion.css`. Components output the class names those stylesheets already define. One component serves the site and the catalog. Its props choose the variant, and a `state` prop renders a forced state such as `hover` for the catalog.

A branch stays centered on one page. Shared updates, such as the header, footer, or favicon, can be included when that page needs them. Pull request descriptions use `.github/pull_request_template.md`: a bold “Updates” heading, then a list of what changed on the branch.

`components.html` is the catalog of the current components, served at `/portfolio/components.html`. `src/catalog/Catalog.jsx` renders the specimens from `src/catalog/specimens.jsx`, then reads each description from the matching spec at build time. The description is the first paragraph after the title. Keep the catalog free of copied descriptions. Interactive demos for the catalog live in `src/catalog/demos.jsx`.

When a component’s appearance, copy, variants, or states change, update all of these in the same change:

- The component in `src/components/`, and the page that uses it, including `src/styles/site.css` when the site styles it
- The matching specimen in `src/catalog/specimens.jsx`
- The matching styles in `specs/preview.css`
- The component’s markdown spec, including the opening description

The specimen `id` matches the markdown file name, such as `alert` and `specs/molecules/alert.md`. A new component needs a component file, a specimen, preview styles, and that markdown file so it appears in the catalog.

## Quality assurance

From the portfolio folder, run:

```bash
npm install
npm run audit
npm run build
```

The audit checks that `tokens.css` matches the token specs, that stylesheets and components use those tokens, that spacing stays on the 8px grid, and that text and control boundaries meet the contrast checks above. It skips `node_modules/` and `dist/`. `font-family` is outside the audit. GitHub Actions runs the audit and the build on a pull request into `main` and again when that change is pushed to `main`.

`axe-core` is a dev dependency. Run it in the browser against each route and the catalog, with the WCAG 2.0 and 2.1 A and AA rules, and expect no violations.

Before calling a visual change done, compare the page that uses the component with its entry in `components.html`. Check the variants and states that changed, including empty and error states. Exercise the control with the keyboard. Confirm the focus ring, the accessible name, focus after a route change, and the reduced-motion behavior. Look at a narrow viewport and a wide one when layout changes.

A component change is ready when the audit and build pass, the four sources match, and the public page and `components.html` show the same component.
