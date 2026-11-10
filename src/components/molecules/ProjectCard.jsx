import { cx } from "../../lib/cx.js";
import { useReveal } from "../../lib/useReveal.js";
import Button from "../atoms/Button.jsx";

export default function ProjectCard({ title, summary, image, to, href, headingLevel = 3, reveal = false, order }) {
  const Heading = `h${headingLevel}`;
  const [ref, revealClass] = useReveal(reveal);
  return (
    <li
      ref={ref}
      className={cx("project-card", revealClass)}
      style={order ? { "--reveal-order": order } : undefined}
    >
      <div className="project-card-body">
        <Heading>{title}</Heading>
        <p>{summary}</p>
        <Button to={to} href={href}>
          See More<span className="visually-hidden"> about {title}</span>
        </Button>
      </div>
      {image ? (
        <img className="project-card-media" src={image} alt="" />
      ) : (
        <div className="project-card-media" aria-hidden="true">
          <span>Image</span>
        </div>
      )}
    </li>
  );
}
