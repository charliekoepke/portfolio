# Motion

Motion explains a change of state. Durations and easing follow [motion](https://atlassian.design/foundations/motion) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

A dropdown menu enters in 100ms with ease-out. A modal dialog enters in 350ms with ease-out. With reduced motion, both appear immediately.

## Duration

| Token | Value | Use |
| --- | --- | --- |
| `--motion-duration-small` | `100ms` | Hover, color, and small menus |
| `--motion-duration-medium` | `350ms` | Panels, dialogs, and expanding sections |
| `--motion-duration-large` | `700ms` | A large layout change |

## Easing

| Token | Value | Use |
| --- | --- | --- |
| `--motion-easing-out` | `cubic-bezier(0.2, 0, 0, 1)` | Something entering |
| `--motion-easing-in` | `cubic-bezier(0.8, 0, 0, 0.8)` | Something leaving |
| `--motion-easing-in-out` | `cubic-bezier(0.15, 1, 0.3, 1)` | Something moving on the page |

## Rules

- Motion is productive. It shows an open, close, or move. It does not decorate.
- When `prefers-reduced-motion` is set, use no transform animation. State changes are instant. The spinner stays still and keeps the word "Loading".
- Do not animate a change that carries meaning by motion alone. The new state is also visible without the animation.
