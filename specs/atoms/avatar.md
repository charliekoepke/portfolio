# Avatar

An avatar represents a person or a team. It is a circle with a photo or initials.

Default structure follows [avatar](https://atlassian.design/components/avatar/usage) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

32px circle. Initials "JD" in navy on the sunken surface. The accessible name is "John Doe".

## Appearance

| Size | Diameter | Token |
| --- | --- | --- |
| Small | 24px | `--space-24` |
| Medium | 32px | `--space-32` |
| Large | 40px | `--space-40` |

| Property | Value | Token |
| --- | --- | --- |
| Radius | 50px | `--radius-button` |
| Initials fill | `#E6EDF5` | `--color-surface-sunken` |
| Initials text | `#12263E`, Montserrat 600 | `--color-brand-navy` |
| Initials size | 12px on small and medium, 14px on large | `--font-size-badge`, `--font-size-button` |

A status, such as "Available", is written beside the avatar or in a lozenge. A colored dot is not the only signal.

## Rules

- The image `alt` is the person's name. Decorative avatars beside that visible name use empty alt.
- Initials are at most two characters.
- If the image fails, show the initials.
