# Case study

A case study tells one project story in six sections: the problem, the decisions, and what changed.

Guidance follows [How to Structure a UX Case Study that Hiring Managers notice](https://medium.com/@maxrichy/how-to-structure-a-ux-case-study-that-hiring-managers-notice-4f0e9bf45fa4) by Max Richardson.

## Intent

A hiring manager reads a case study to answer three questions. Why was this problem worth solving? How was the focus chosen? What changed because the designer was there?

The study should show judgment, clear thinking, and impact. Tools, a process label, or a polished screen do not answer those questions on their own.

## Structure

Every case study uses these sections, in this order.

1. The Problem. Show how the problem was understood before any solution. Interviews, behaviour, analytics, existing research, or secondary research belong here. The point is how the problem space was explored, not how much research was collected.
2. The How of Solving It. Show the decision. Which insights were synthesised, which problems were set aside and why, and how people agreed on the focus. This section carries the strategic thinking.
3. Brainstorming. Show early concepts, sketches, and work with other people. Include critique and the ideas that changed.
4. Prototyping. Show the key screens and flows, the interaction decisions, and the accessibility or responsive choices that matter. Curate the examples.
5. Testing and Iterating. Show what was tested, what failed, and how the work changed. A step backward belongs here when the evidence called for it.
6. Lessons Learned. Say what changed for the people using the product or for the team. A qualitative outcome is enough when there is no number. Name what is still unknown.

When it matters, a section can also mention collaboration with engineering, how the design reached production, or an experiment.

## Default example

The title is "Website Modernization" on a light grey header. That study asks for a password before the page. A small italic note above the sections says the work is government work, so client and product names stay off the page. Each of the six sections has paragraphs and an image example with a caption.

## Appearance

The header is the plain hero in `organisms/hero.md`: a full-width band on the sunken surface `#E6EDF5`, with no pattern. The title is Montserrat 600 in `#12263E`, aligned with the page column. Breadcrumbs sit above the title.

The body is the full width of the page column. Sections are 64px apart. A section heading is 20px Montserrat 600, in camel case. Paragraphs are 16px and span that same column, 16px apart. The disclosure above the sections is 14px italic in `#3D5168`. An image example spans the content column at a 16:9 ratio, with 24px above it. The caption is 14px `#3D5168`, 8px under the image.

Images and other files for a study live in that study’s folder.

## Rules

- One case study, one core problem.
- Answer why the problem mattered, how the focus was chosen, and what changed.
- Let the images carry the examples. Use the paragraphs to explain the decision.
- Give each example a caption that says what it shows.
- Do not include every screen. Keep the few that make the decision clear.
- Say what was not pursued, and what failed.
- Do not invent a metric. Say what is still unknown.
- Use the same six sections, in this order, on every case study.
- Write each section heading in camel case, the same rule as every heading on the site.
- Put the government-work disclosure above the first section, in small italic type.
- A government case study can ask for a password before the study. The screen is a password field and Continue. A wrong password is a field error. A correct password opens the study for the browser session. The password lives in that study’s script. This is a simple screen, not a security control.
