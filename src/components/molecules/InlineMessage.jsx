import Icon from "../atoms/Icon.jsx";

export default function InlineMessage({ tone = "info", title, icon = true, children }) {
  return (
    <div className={`message message-${tone}`}>
      {icon && (
        <span aria-hidden="true">
          <Icon name="document" />
        </span>
      )}
      <div>
        <p className="flag-title">{title}</p>
        {children}
      </div>
    </div>
  );
}
