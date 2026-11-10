import Breadcrumbs from "../molecules/Breadcrumbs.jsx";

export default function PageHeader({ crumbs, title, headingLevel, description, actions }) {
  const Heading = headingLevel ? `h${headingLevel}` : "p";
  return (
    <header className="page-header">
      {crumbs && <Breadcrumbs items={crumbs} />}
      <Heading className={headingLevel ? undefined : "type-page"}>{title}</Heading>
      {description && <p className="desc">{description}</p>}
      {actions && <div className="actions">{actions}</div>}
    </header>
  );
}
