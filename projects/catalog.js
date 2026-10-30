// Each project is a folder: projects/<slug>/index.html
// Images and other files for that project live in the same folder.
// Add an entry here to show its card. Each card is a square image,
// the project name, a short description, and a See More link.
// The projects list places the image on the left. The home preview
// places that same image above the text.
// A folder that contains a preview-image file uses that file as the card image.
// The image value is the filename, including its extension.
// A project without that file leaves image unset and keeps the empty placeholder.
//
// {
//   slug: "project-name",
//   title: "Project title",
//   summary: "One sentence.",
//   image: "preview-image.png"
// }
// Images and other files live in the case study folder, next to index.html.
window.PROJECTS = [
  {
    slug: "website-modernization",
    title: "Website Modernization",
    summary: "Updating an antiquated webapp.",
    image: "preview-image.webp"
  },
  {
    slug: "responsive-design-system",
    title: "Responsive Design System",
    summary: "An LLM-ready responsive design system",
    image: "preview-image.png"
  },
  {
    slug: "working-with-wix",
    title: "Working with Wix",
    summary: "Official company website upgrades",
    image: "preview-image.png"
  },
  {
    slug: "figma-design-system",
    title: "Figma Design System",
    summary: "Creating an atomic design system",
    image: "preview-image.png"
  }
];
