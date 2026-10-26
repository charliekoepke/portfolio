# Chat panel

A chat panel is a list of comments. Each comment shows who wrote it, when, and the message.

Default structure follows [comment](https://atlassian.design/components/comment/usage) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

Two comments. The first is a 32px avatar "CK", the name, the time "2 Apr 2026", and the sentence "The intake flow needs a quieter confirmation."

## Appearance

Comments stack with 16px between them. The avatar is the medium size. The name is 16px Inter 600. The time is 12px `#566A80`, 8px after the name. The message is 16px, 8px below the name. A reply field is the textarea, 16px below the last comment, with a primary button "Add comment".

## Rules

- The list is labeled "Comments".
- The time is a `time` element with a machine-readable datetime. The visible text is a full date, not "yesterday" alone.
- The comment field has a label "Comment". The placeholder does not replace it.
- A new comment is announced in a status region: "Comment added."
