import Icon from "./Icon.jsx";

export default function Tag({ label, href, onRemove }) {
  if (href) {
    return (
      <a className="tag tag-link" href={href}>
        {label}
      </a>
    );
  }
  return (
    <span className="tag">
      {label}{" "}
      {onRemove && (
        <button type="button" className="tag-remove" aria-label={`Remove ${label}`} onClick={onRemove}>
          <Icon name="close" size="sm" />
        </button>
      )}
    </span>
  );
}
