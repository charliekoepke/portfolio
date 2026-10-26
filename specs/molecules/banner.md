# Banner

A banner is a prominent message at the top of the screen. It is for a problem that stops someone from using the site, or for one site-wide fact they must see.

Default structure follows [banner](https://atlassian.design/components/banner/usage) in the [Atlassian Design System](https://atlassian.design/design-system).

## Default example

"We've lost the connection. Your edits are saved on this device." The word "Warning" is in the message. A link reads "Check status".

## Appearance

The banner spans the viewport under the navigation. Padding is 16px. Warning uses `#F8F1E4` and `#7A4E0C`. Error uses `#F8E8E8` and `#8A2E2E`. The icon is a 24px navy stroke, and the message names the severity. Text is 16px. One optional link uses the link color and an underline.

## Rules

- Show one banner at a time. It is not dismissible. Remove it when the condition ends.
- Use a banner only for loss of data, loss of function, or site-wide information. A section problem uses an inline message. A brief confirmation uses a flag.
- Critical banners use `role="alert"`. Do not use that role for a routine notice.
- Keep the message to one or two short sentences so it does not truncate.
