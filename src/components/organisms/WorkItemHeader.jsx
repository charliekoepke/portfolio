import Badge from "../atoms/Badge.jsx";
import Lozenge from "../atoms/Lozenge.jsx";
import TextLink from "../atoms/TextLink.jsx";

export default function WorkItemHeader({ itemKey, title, href, status, notes, action }) {
  return (
    <header className="work-head">
      <div>
        <p className="work-key">{itemKey}</p>
        <p className="work-title">
          <TextLink href={href}>{title}</TextLink> {status && <Lozenge tone={status.tone}>{status.label}</Lozenge>}{" "}
          {notes !== undefined && (
            <span className="count-line">
              Notes <Badge tone="navy">{notes}</Badge>
            </span>
          )}
        </p>
      </div>
      {action}
    </header>
  );
}
