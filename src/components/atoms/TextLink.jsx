import { Link } from "react-router";
import { cx, stateClass } from "../../lib/cx.js";
import Icon from "./Icon.jsx";

export default function TextLink({ to, href, state, newTab, className, children, ...rest }) {
  const classes = cx("text-link", newTab && "with-icon", stateClass(state), className);
  const content = newTab ? (
    <>
      {children} <Icon name="external" size="sm" />
      <span className="visually-hidden">, opens in a new tab</span>
    </>
  ) : (
    children
  );
  if (to) {
    return (
      <Link className={classes} to={to} {...rest}>
        {content}
      </Link>
    );
  }
  return (
    <a
      className={classes}
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      {...rest}
    >
      {content}
    </a>
  );
}
