import { cx } from "../../lib/cx.js";
import Breadcrumbs from "../molecules/Breadcrumbs.jsx";

const PATTERNS = {
  blocks: { className: null, tones: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
  circles: { className: "about-hero", tones: [1, 4, 8, 5, 2] },
  lines: { className: "projects-hero", tones: [1, 3, 6, 8, 4, 2] },
};

export function Billboard({ pattern = "blocks", title, titleId, role }) {
  const { className, tones } = PATTERNS[pattern];
  return (
    <section className={cx("hero", "billboard", className)} aria-labelledby={titleId}>
      <div className="billboard-blocks" aria-hidden="true">
        {tones.map((tone, index) => (
          <span key={tone} className={`tone-${tone}`} style={{ "--i": index }}></span>
        ))}
      </div>
      <div className="hero-inner">
        <h1 id={titleId}>{title}</h1>
        {role && <p className="hero-role">{role}</p>}
      </div>
    </section>
  );
}

export function StudyHero({ crumbs, title, titleRef }) {
  return (
    <header className="study-hero">
      <div className="study-hero-inner">
        <Breadcrumbs items={crumbs} />
        <h1 ref={titleRef} tabIndex={-1}>
          {title}
        </h1>
      </div>
    </header>
  );
}
