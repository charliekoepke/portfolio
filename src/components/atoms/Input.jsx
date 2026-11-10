import { cx, stateClass } from "../../lib/cx.js";
import FieldBlock, { describedBy } from "./Field.jsx";

export default function Input({ id, label, help, error, state, className, ...rest }) {
  return (
    <FieldBlock id={id} label={label} help={help} error={error}>
      <input
        id={id}
        className={cx("field", error && "is-error", stateClass(state), className)}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={describedBy(id, help, error)}
        disabled={state === "disabled" || undefined}
        {...rest}
      />
    </FieldBlock>
  );
}
