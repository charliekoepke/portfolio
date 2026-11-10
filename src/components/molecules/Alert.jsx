import { cx } from "../../lib/cx.js";
import Icon from "../atoms/Icon.jsx";

const roles = { success: "status", error: "alert", warning: "region" };

export default function Alert({ tone = "success", title, children, onDismiss, hidden, id, className, ref }) {
  const body = (
    <>
      <p className="alert-title">{title}</p>
      <p className="alert-body">{children}</p>
    </>
  );
  return (
    <div
      ref={ref}
      id={id}
      className={cx("alert", `alert-${tone}`, className)}
      role={roles[tone]}
      aria-label={tone === "warning" ? "Warning" : undefined}
      hidden={hidden}
    >
      {onDismiss ? (
        <div className="alert-row">
          <div>{body}</div>
          <button type="button" className="alert-dismiss icon-btn icon-btn-quiet" aria-label="Dismiss" onClick={onDismiss}>
            <Icon name="close" />
          </button>
        </div>
      ) : (
        body
      )}
    </div>
  );
}
