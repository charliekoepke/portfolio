import EmptyState from "../components/molecules/EmptyState.jsx";
import ProjectCard from "../components/molecules/ProjectCard.jsx";
import { Billboard } from "../components/organisms/Hero.jsx";
import { projects } from "../content/projects/index.js";
import { usePageTitle } from "../lib/usePageTitle.js";

export default function Projects() {
  usePageTitle("Projects");
  return (
    <>
      <Billboard pattern="lines" title="Projects" titleId="projects-title" />
      <div className="canvas">
        {projects.length > 0 ? (
          <ul className="project-list" id="project-list">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                summary={project.summary}
                image={project.preview}
                to={`/projects/${project.slug}`}
                headingLevel={2}
                reveal
                order={index}
              />
            ))}
          </ul>
        ) : (
          <EmptyState title="No Projects Yet" headingLevel={2}>
            Project write-ups will be listed here.
          </EmptyState>
        )}
      </div>
    </>
  );
}
