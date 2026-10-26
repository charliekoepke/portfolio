# Link

A link moves someone to another page or to a location on this page. It is not a button.

Default structure follows [link](https://atlassian.design/components/link/usage) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

"Read the case study" in a project summary. The href is the case study URL.

## Appearance

| Property | Value | Token |
| --- | --- | --- |
| Color | `#17345A` | `--color-link` |
| Hover | `#102544` | `--color-link-hover` |
| Size | 1rem Inter 400 | `--font-size-body` |
| Decoration | Underline | |
| Focus | 2px `#17345A` ring, offset 2px | `--color-focus` |

The resting navy is the primary button fill. Hover uses the primary button hover navy. The underline stays in both states.

Resting contrast is 12.54:1 on white, 11.67:1 on the page, and 10.62:1 on sunken. Hover is 15.33:1 on white and 14.26:1 on the page. The lowest resting placement is the danger surface, at 10.56:1. Each pair clears the WCAG 2.1 1.4.3 floor of 4.5:1 for normal text. The underline supplies a cue besides color, which meets 1.4.1.

## Rules

- Use an `a` with an href. Use a `button` for an action on the current page.
- The visible text is the accessible name and says where the link goes. "Read the case study" rather than "here".
- Underline the link in body copy so color is not the only cue.
- A link that opens a new tab includes that in the accessible name, and the icon, if any, is the navy external-link stroke.
