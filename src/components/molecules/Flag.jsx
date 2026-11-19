import { cx } from "../../lib/cx.js";
import IconButton from "../atoms/IconButton.jsx";

export default function Flag({ tone = "success", title, onDismiss }) {
  const heading = <p className={cx("flag-title", `flag-${tone}`)}>{title}</p>;
  return (
    <div className="flag" role={tone === "success" ? "status" : "alert"}>
      {onDismiss ? (
        <div className="flag-row">
          {heading}
          <IconButton className="flag-dismiss" icon="close" label="Dismiss" onClick={onDismiss} />
        </div>
      ) : (
        heading
      )}
    </div>
  );
}
