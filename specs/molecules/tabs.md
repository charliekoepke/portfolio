# Tabs

Tabs group related information on one page. One tab is selected. Selecting a tab shows its panel and hides the others.

Default structure follows [tabs](https://atlassian.design/components/tabs/usage) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

"Overview", "Process", and "Outcome" on a case study. "Overview" is selected.

## Appearance

Each tab is 40px tall, with 16px of inline padding. The label is 14px Inter 600. The selected tab has a 2px `#17345A` underline. Unselected labels are `#3D5168`. The selected label is `#0C1B2E`. Focus uses the 2px navy ring. Panels sit 16px below the tab list.

## Rules

- Use a tablist. Each tab is a button with `aria-selected` and `aria-controls` pointing at its panel.
- Left and Right arrows move between tabs. Home and End move to the ends.
- Only the selected panel is shown. The panel is labeled by its tab.
- Do not put tabs inside tabs. Do not use tabs for a step sequence. That is a progress tracker, which this system does not include yet.
