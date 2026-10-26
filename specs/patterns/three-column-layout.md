# Three column layout

A three-column page has side navigation, a main column, and an aside. The main column keeps priority.

Default structure follows [page layout](https://atlassian.design/components/page-layout) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

Side navigation at 240px. The case study in the center. An aside at 320px with a content panel titled "Role".

## Arrangement

| Column | Width |
| --- | --- |
| Side navigation | 240px |
| Main | The remaining space, max 960px |
| Aside | 320px |

Gutters are 24px. On the medium breakpoint the aside moves below the main column. On the narrow breakpoint the side navigation becomes the menu drawer and the aside stays below the main column.

## Rules

- The main column contains the `h1`.
- The aside is complementary content. It is a `aside` with a label.
- Reading order is navigation, main, aside. The visual order matches that.
- Do not put the only copy of the primary action in the aside.
