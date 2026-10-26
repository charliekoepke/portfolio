# Dropdown menu

A dropdown menu lists actions for one object. It opens from a button and closes after a choice or Escape.

Default structure follows the [dropdown menu](https://atlassian.design/components/dropdown-menu/usage) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

A quiet icon button named "Project actions" opens Edit, Duplicate, and Archive. Archive uses the danger text color. The words still say what will happen.

## Appearance

The menu is a white surface with a 1px `#D0D9E6` border and a 4px radius. Each item is 40px tall with 16px of inline padding. Labels are 16px. The gap between the trigger and the menu is 8px. Focused item fill is `#E6EDF5`.

## Rules

- The trigger is a button with `aria-expanded` and `aria-controls`.
- The menu uses `role="menu"`. Items are `menuitem` buttons.
- Arrow keys move inside the menu. Escape closes it and returns focus to the trigger.
- A menu item performs an action. A destination uses a link, not a menu item.
- Do not put a primary button inside the menu.
