# Work item header

A work item header identifies one project inside a list or a case study. It shows a key, a title, a status, and the main action.

This is the portfolio's version of an Atlassian work item header, composed from the [page header](https://atlassian.design/components/page-header/usage), [lozenge](https://atlassian.design/components/lozenge/usage), and [badge](https://atlassian.design/components/badge/usage) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

Key "CLIN-12". Title "Intake redesign". Lozenge "In progress". Badge "3" beside the word "Notes". Primary button "View project".

## Appearance

The key is 12px `#566A80`. The title is 20px Montserrat 600, 8px below the key. The lozenge sits 8px after the title. Actions align to the end of the row, with 16px between them. The row is at least 64px tall. A 1px `#D0D9E6` rule closes the header.

## Rules

- The title is a heading in the page outline, or the page `h1` when this header is the top of the case study.
- The status is a lozenge. The key is text, not a colored mark.
- One primary button.
- In a list, the title is a link to the case study and the row does not also use a second link for the same destination.
