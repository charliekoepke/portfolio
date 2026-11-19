# Navigation

Navigation is the bar at the top of every page. It names the site and links to the main sections.

Default structure follows [Atlassian navigation](https://atlassian.design/components/atlassian-navigation) in the [Atlassian Design System](https://atlassian.design/design-system).

The site design below is the component. `site.css` and `site.js` implement it. The template example uses the same design with sample labels.

## Site navigation

Every public page uses this header. The site name is "Charlie Koepke - Portfolio" and links to Home. The links are Home, Projects, and About, in that order. The current page has `aria-current="page"`.

```html
<header class="mast">
  <div class="nav-blanket"></div>
  <div class="bar">
    <a class="site-name" href="index.html">Charlie Koepke - Portfolio</a>
    <button type="button" class="menu-button" aria-expanded="false" aria-controls="primary-nav">
      <svg class="icon icon-menu" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"></path></svg>
      <svg class="icon icon-close" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"></path></svg>
      <span class="menu-label visually-hidden">Open menu</span>
    </button>
    <nav id="primary-nav" class="primary-nav" aria-label="Primary">
      <a href="index.html" aria-current="page">Home</a>
      <a href="projects/index.html">Projects</a>
      <a href="about/index.html">About</a>
    </nav>
  </div>
</header>
```

Paths gain a `../` for each folder below the site root. Case studies mark Projects as the current page.

### Bar

| Property | Value | Token |
| --- | --- | --- |
| Fill | `#FFFFFF` | `--color-surface-default` |
| Bottom border | 1px solid `#D0D9E6` | `--color-border-default` |
| Position | Sticky to the top of the page | |
| Layer | 200 | `--z-navigation` |
| Row height | 64px minimum | `--space-64` |
| Row alignment | Centered, 24px between the name and the links | `--space-24` |
| Row width | At most 960px plus the inline padding | |
| Inline padding | 16px below 48rem, 24px from 48rem, 32px from 64rem | `--space-16`, `--space-24`, `--space-32` |

### Site name

The name is a link to Home. It is 16px Montserrat 600, `#12263E` (`--color-brand-navy`), with no underline. It takes the remaining space to the left of the links.

### Links

Other links are 16px Gafata 400, `#3D5168` (`--color-text-secondary`), with no underline. The current link is 16px Montserrat 600, `#0C1B2E` (`--color-text-primary`).

From 48rem the links sit in one row with 24px between them. They have no padding and no fill, including the current link.

Below 48rem, when JavaScript is available, the links sit in a drawer. Each link is 40px tall, with 16px of inline padding and a 4px radius. The current link also uses the sunken fill `#E6EDF5` (`--color-surface-sunken`). The drawer gap is 8px.

### Menu button

The button is 40px by 40px, transparent, with no border and a 50px radius. The icon is the 24px menu stroke in `#17345A` (`--color-action-primary`). Its accessible name is "Open menu".

Without JavaScript the button is not shown, and the links stay in the page. With JavaScript it is shown below 48rem. From 48rem it is hidden and the drawer is closed.

Opening sets `aria-expanded="true"`, switches the name to "Close menu", and swaps the menu icon for the close icon. The first link receives focus. Escape, or a click on the blanket, closes the drawer and returns focus to the button. Crossing 48rem closes it.

The button has no hover fill.

### Drawer and blanket

The drawer is a 240px panel, fixed to the left, from 64px below the top of the page to the bottom. Its fill is `#FFFFFF`, with a 1px `#D0D9E6` right border and 16px of padding. Closed, it sits off the left edge. Open, it slides in over 350ms with ease-out (`--motion-duration-medium`, `--motion-easing-out`). Reduced motion removes that transition.

The blanket covers the page below the bar while the drawer is open. It is `#0C1B2E` at 40 percent opacity (`--color-text-primary`, `--opacity-blanket`).

## Template example

Use the site navigation markup. Replace the name and the links. Do not change the classes, the menu button, the drawer, or the breakpoints.

Site name "Portfolio". Links Work, About, and Notes. "Work" is the current page.

```html
<header class="mast">
  <div class="nav-blanket"></div>
  <div class="bar">
    <a class="site-name" href="#home">Portfolio</a>
    <button type="button" class="menu-button" aria-expanded="false" aria-controls="primary-nav">
      <svg class="icon icon-menu" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"></path></svg>
      <svg class="icon icon-close" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"></path></svg>
      <span class="menu-label visually-hidden">Open menu</span>
    </button>
    <nav id="primary-nav" class="primary-nav" aria-label="Primary">
      <a href="#work" aria-current="page">Work</a>
      <a href="#about">About</a>
      <a href="#notes">Notes</a>
    </nav>
  </div>
</header>
```

## Rules

- The bar is a `header` with one `nav` labeled "Primary".
- The site name links to Home.
- The same links, in the same order, appear on every page.
- The current page is marked in the accessibility tree and by weight. Below 48rem the drawer also marks it with the sunken fill.
- Below 48rem the menu button opens and closes the drawer. Escape and the blanket close it and return focus to the menu button.
