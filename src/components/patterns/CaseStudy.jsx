import { cx } from "../../lib/cx.js";
import Reveal from "../../lib/Reveal.jsx";
import RichText from "../../lib/RichText.jsx";
import { StudyHero } from "../organisms/Hero.jsx";

export const STUDY_SECTIONS = [
  ["problem", "The Problem"],
  ["how", "The How of Solving It"],
  ["brainstorming", "Brainstorming"],
  ["prototyping", "Prototyping"],
  ["testing", "Testing and Iterating"],
  ["lessons", "Lessons Learned"],
];

export function StudyFigure({ src, alt, caption, narrow }) {
  return (
    <figure className={cx("study-figure", narrow && "is-narrow")}>
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <div className="study-media" aria-hidden="true">
          <span>Image</span>
        </div>
      )}
      <figcaption>
        <RichText text={caption} />
      </figcaption>
    </figure>
  );
}

export default function CaseStudy({ project, titleRef, projectsLink = { to: "/projects" } }) {
  return (
    <>
      <StudyHero
        crumbs={[{ label: "Projects", ...projectsLink }, { label: project.title }]}
        title={project.title}
        titleRef={titleRef}
      />
      <div className="canvas">
        {project.disclosure && <p className="study-disclosure">{project.disclosure}</p>}
        {STUDY_SECTIONS.map(([key, heading]) => {
          const section = project.sections[key];
          if (!section) return null;
          return (
            <Reveal as="section" key={key} className="study-section" aria-labelledby={`study-${key}`}>
              <h2 id={`study-${key}`}>{heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  <RichText text={paragraph} />
                </p>
              ))}
              {section.figure && <StudyFigure {...section.figure} />}
            </Reveal>
          );
        })}
        {project.status && (
          <p className="study-status">
            <RichText text={project.status} />
          </p>
        )}
      </div>
    </>
  );
}
