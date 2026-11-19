import { cx } from "../../lib/cx.js";
import FieldBlock, { describedBy } from "./Field.jsx";

export default function Textarea({ id, label, help, error, className, ...rest }) {
  return (
    <FieldBlock id={id} label={label} help={help} error={error}>
      <textarea
        id={id}
        className={cx("field", error && "is-error", className)}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={describedBy(id, help, error)}
        {...rest}
      />
    </FieldBlock>
  );
}
