import { Link } from "react-router";
import { cx, stateClass } from "../../lib/cx.js";

export default function Button({ variant = "primary", state, to, href, type = "button", className, children, ...rest }) {
  const classes = cx("btn", `btn-${variant}`, stateClass(state), className);
  if (to) {
    return (
      <Link className={classes} to={to} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={classes} disabled={state === "disabled" || undefined} {...rest}>
      {children}
    </button>
  );
}
