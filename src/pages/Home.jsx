import headshot from "../assets/photos/headshot.jpg";
import Button from "../components/atoms/Button.jsx";
import ProjectCard from "../components/molecules/ProjectCard.jsx";
import { Billboard } from "../components/organisms/Hero.jsx";
import { findProject, homeProjectSlugs } from "../content/projects/index.js";
import Reveal from "../lib/Reveal.jsx";
import { usePageTitle } from "../lib/usePageTitle.js";

export default function Home() {
  usePageTitle(null);
  const preview = homeProjectSlugs.map(findProject).filter(Boolean);
  return (
    <>
      <Billboard pattern="blocks" title="Charlie Koepke" titleId="hero-title" role="UX Designer and Researcher" />
      <div className="canvas canvas-home">
        <Reveal as="section" className="home-section home-intro" aria-labelledby="about-heading">
          <div className="portrait">
            <img src={headshot} alt="Charlie Koepke" width={1050} height={1400} />
          </div>
          <div className="home-intro-copy">
            <h2 id="about-heading">About</h2>
            <p className="home-intro-lead">
              I’m a UX Designer and Researcher, leading design across research, information architecture, interface
              design, and design systems.
            </p>
            <p className="section-action">
              <Button variant="secondary" to="/about#contact-heading">
                Let's Connect
              </Button>
            </p>
          </div>
        </Reveal>
        <section className="home-section" aria-labelledby="projects-heading">
          <h2 id="projects-heading">See What I’m Working On</h2>
          <p>A preview of the personal and professional projects. The full list is on the projects page.</p>
          {preview.length > 0 && (
            <ul className="preview-row" id="project-preview">
              {preview.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  summary={project.summary}
                  image={project.preview}
                  to={`/projects/${project.slug}`}
                  headingLevel={3}
                  reveal
                  order={index}
                />
              ))}
            </ul>
          )}
          <p className="section-action">
            <Button variant="secondary" to="/projects">
              View projects
            </Button>
          </p>
        </section>
      </div>
    </>
  );
}
