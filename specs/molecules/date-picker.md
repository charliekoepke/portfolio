# Date picker

A date picker lets someone type a date or choose one from a calendar.

Default structure follows the [calendar](https://atlassian.design/components/calendar) and [date time picker](https://atlassian.design/components/datetime-picker/usage) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

Label: "Published on". The field shows "2026-04-12". Opening the calendar shows April 2026, with the 12th selected.

## Appearance

The field matches the input. A quiet icon button named "Choose a date" sits at the end of the field. The calendar is a white popup, 24px padding, 4px radius. Days are 40px squares. The selected day uses the action navy and inverse text. Today has a 1px navy border and the word is available to assistive technology. Previous and next month are icon buttons named "Previous month" and "Next month".

## Rules

- A typed date is accepted in YYYY-MM-DD. The label and help text say that format.
- Arrow keys move by day. Page Up and Page Down move by month.
- An invalid date uses the input error treatment: danger border and a sentence such as "Enter a date as YYYY-MM-DD."
- Do not use a date picker for a month alone or for a rough range. Ask for that in a select or two fields.
