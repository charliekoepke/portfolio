# Accessibility

Conformance target: WCAG 2.0 Level AA.

## Contrast

Normal text, including the 14px button label, meets 4.5:1. Large text meets 3:1. Large text is 24px and up, or 18.67px and up at weight 600.

Measured pairs are in `foundations/color.md`. Every text role clears 4.5:1 on the surfaces where it is allowed.

Disabled label text is exempt as inactive UI under WCAG 2.0 1.4.3. This system still keeps it at 4.5:1.

## Color

Do not use color as the only way to convey state, status, or that a text run is a link.

- Body links are underlined.
- A disabled control uses the `disabled` attribute and the disabled colors.
- Status messages include a text label, not a colored mark alone.
- The focus ring is a 2px solid `--color-focus` outline, offset 2px. It stays visible on the page background and on white.

## Keyboard

- Actions use native controls: `button`, `a`, or a form control.
- Focus order follows the visual order.
- Focus is never fully hidden.
- A component does not trap keyboard focus.

## Text

- The page sets its language.
- Interface text is real text, not an image of text.
- Type sizes are rem, so browser zoom to 200% keeps the content available.
- Body line height is 1.5.

## Name, role, and value

- A button has a visible text label that starts with a verb.
- An icon-only control has an accessible name that matches its purpose.
- Every input has a visible label.
- An error is identified in text and associated with the field.

## Consistency

The same action uses the same label everywhere on the site. Navigation that repeats uses the same order.
