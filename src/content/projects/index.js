import figmaDesignSystem from "./figma-design-system/index.js";
import responsiveDesignSystem from "./responsive-design-system/index.js";
import websiteModernization from "./website-modernization/index.js";
import workingWithWix from "./working-with-wix/index.js";

export const projects = [websiteModernization, responsiveDesignSystem, workingWithWix, figmaDesignSystem];

export const homeProjectSlugs = ["responsive-design-system", "website-modernization", "figma-design-system"];

export function findProject(slug) {
  return projects.find((project) => project.slug === slug);
}
