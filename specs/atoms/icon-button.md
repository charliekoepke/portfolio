# Icon button

A button whose visible content is one icon. It uses the text button's 40px size and 50px radius, so the control is a circle. The icon is 24px, which leaves 8px of inset.

## Intent

One utility action. The accessible name states the action. Search, menu, close, download, account, and document are the starting set.

## Default example

A quiet button named "Search", using the search icon.

## Appearance

| Property | Value | Token |
| --- | --- | --- |
| Size | 2.5rem (40px) | `--space-40` |
| Radius | 50px | `--radius-button` |
| Icon | 1.5rem (24px), 2px stroke | `--icon-size`, `--icon-stroke` |
| Focus | 2px `#17345A` ring, offset 2px | `--color-focus` |

The icon uses `currentColor`. The variant sets the shade.

## Variants

| Variant | Fill | Icon | Border |
| --- | --- | --- | --- |
| Primary | `#17345A` | `#F7FAFC` | None |
| Secondary | `#FFFFFF` | `#17345A` | 1px `#17345A` |
| Quiet | Transparent | `#17345A` | None |

Quiet is the usual choice in a header or toolbar. Primary is the one main icon action in a region. Secondary matches the outline text button.

Hover darkens a primary fill to `#102544`. Secondary and quiet hover to the sunken fill `#E6EDF5`. The icon color stays put.

## States

- Focus shows the same ring as the text button.
- Disabled sets the `disabled` attribute, fill `#E4EBF3`, border `#D0D9E6` on secondary, and icon `#54687C`. Hover does not change it.
- The inverse icon on navy is 11.96:1. The navy icon on white is 12.54:1. The disabled icon on the disabled fill is 4.79:1.

## Rules

- Use a native `button`.
- Give it an accessible name that matches the action. Do not name it "icon" or "button".
- One icon per button.
- Do not pair a quiet icon button with a second icon that changes hue.
- Sibling icon buttons are 16px apart.
