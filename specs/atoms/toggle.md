# Toggle

A toggle switches a setting on or off immediately. The change applies when the control changes, not when a form is submitted.

Default structure follows [toggle](https://atlassian.design/components/toggle/usage) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

Label: "Show draft projects". The toggle is off until someone turns it on.

## Appearance

| Property | Value | Token |
| --- | --- | --- |
| Track | 40px by 24px | `--space-40`, `--space-24` |
| Thumb | 16px circle | `--space-16` |
| Radius | 50px | `--radius-button` |
| Off | White track, 1px `#3D5168` border | `--color-text-secondary` |
| On | `#17345A` track, inverse thumb | `--color-action-primary` |
| Gap to label | 8px | `--space-8` |

The label says the setting, such as "Show draft projects". On and off are also exposed to assistive technology through the checked state. Focus uses the 2px navy ring.

## Rules

- Use a native checkbox with `role="switch"` only when the platform control is a switch. Otherwise use a native checkbox and keep the visible toggle in sync.
- The label is the accessible name.
- Do not put a toggle in a form whose other fields wait for a submit button.
- Disabled uses the disabled fill and text. Hover does not change it.
