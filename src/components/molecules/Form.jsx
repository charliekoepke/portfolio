import { cx } from "../../lib/cx.js";

export default function Form({ className, children, ...rest }) {
  return (
    <form className={cx("form", className)} {...rest}>
      {children}
    </form>
  );
}

export function FormActions({ align, children }) {
  return <div className={cx("form-actions", align === "right" && "right")}>{children}</div>;
}
