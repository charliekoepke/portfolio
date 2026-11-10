import { useEffect, useRef } from "react";
import { cx, stateClass } from "../../lib/cx.js";

export default function Checkbox({ label, state, indeterminate, className, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) ref.current.indeterminate = Boolean(indeterminate);
  }, [indeterminate]);

  return (
    <label className={cx("check", stateClass(state), className)}>
      <input ref={ref} type="checkbox" {...rest} /> <span className="check-box"></span> {label}
    </label>
  );
}
