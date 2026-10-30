# Card

Cards contain content and actions about a single subject.

Default structure follows [card](https://designsystem.digital.gov/components/card/) in the [U.S. Web Design System](https://designsystem.digital.gov/).

## About

A card is a summary of a larger idea and an entry point to more detail. The summary can include text, an image, and a link.

A card belongs to a collection of similar cards. Its content distinguishes it from the others. A border distinguishes the card from the rest of the page. Cards are modular, so their order can change without changing the meaning of any one card.

## When to use

Use cards for a collection of related content, such as project summaries.

## When to consider something else

- Tabular data uses a table.
- A simple call to action uses a button.
- Standalone content uses an aside or another standalone element.
- Text that should be read in sequence uses headings and paragraphs. A card is self-contained.

## Default example

Heading "Card". Body "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae." Action "Visit Florida Keys".

The project card on this site uses a square image, the project name, a short description, and "See More". On the projects page the image sits on the left. On the home preview the same image sits above the text. When the project folder contains a file named preview-image, that file is the card image. The catalog lists the filename with its extension. A project without that file shows the empty image placeholder.

## Appearance

White surface, 1px `#D0D9E6` border, 4px radius. The text block has 24px padding and 16px between the heading, description, and action. The heading is 20px Montserrat 600, `#0C1B2E`. The description is 16px `#3D5168`. The action is the primary button. Hover lifts the card with the raised shadow.

The horizontal card is one row. The image is 40% of the card, up to 320px, and stays square. The text fills the rest. The projects list is one column, with 24px between cards.

The stacked card places the square image across the top. The home preview shows these cards in a row of three from the medium breakpoint up.

## Rules

- Each card links to its detail. The visible label is "See More", and the accessible name includes the project name.
- Use a card for a summary, not as decoration for any bordered box.
- Give each card its own image and its own summary. A repeated image makes the cards harder to tell apart.
- Use the preview-image file in the project folder as the card image, and list that filename in the catalog. Leave the image unset when that file is not there.
- Use an image that stays clear when the card is stacked and when it is horizontal.
- Keep the styling plain: a white surface, a line border, and a small radius. Skip folds, bent corners, and paper texture.
- The collection is a `ul`. Each card is an `li`.
- The heading level follows the page. Home preview cards are `h3` under the section heading. Projects page cards are `h2` under the page heading.
- In the markup, the heading and description come before the image. CSS places the image on the left, or above the text on the stacked card.
- The image is decorative when the heading names the project, so its text alternative is empty. A meaningful image gets a description that does not repeat the heading.
