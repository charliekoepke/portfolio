import Icon from "../atoms/Icon.jsx";

export default function EmptyState({ icon, title, headingLevel, children, action, id, hidden }) {
  const Heading = headingLevel ? `h${headingLevel}` : "p";
  return (
    <div className="empty" id={id} hidden={hidden}>
      {icon && (
        <span aria-hidden="true">
          <Icon name={icon} />
        </span>
      )}
      <Heading className={headingLevel ? undefined : "type-title"}>{title}</Heading>
      <p>{children}</p>
      {action}
    </div>
  );
}
