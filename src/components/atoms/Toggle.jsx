import { cx, stateClass } from "../../lib/cx.js";

export default function Toggle({ label, state, ...rest }) {
  return (
    <label className={cx("toggle", stateClass(state))}>
      <input type="checkbox" role="switch" {...rest} /> <span className="toggle-track"></span> {label}
    </label>
  );
}
