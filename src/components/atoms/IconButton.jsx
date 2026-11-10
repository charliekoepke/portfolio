import { cx, stateClass } from "../../lib/cx.js";
import Icon from "./Icon.jsx";

export default function IconButton({ variant = "quiet", icon, label, state, className, ...rest }) {
  return (
    <button
      type="button"
      className={cx("icon-btn", `icon-btn-${variant}`, stateClass(state), className)}
      aria-label={label}
      disabled={state === "disabled" || undefined}
      {...rest}
    >
      <Icon name={icon} />
    </button>
  );
}
