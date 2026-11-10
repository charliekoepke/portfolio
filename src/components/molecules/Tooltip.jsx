import { cloneElement, useEffect, useId, useState } from "react";

export default function Tooltip({ text, defaultVisible = false, children }) {
  const id = useId();
  const [visible, setVisible] = useState(defaultVisible);

  useEffect(() => {
    if (!visible) return undefined;
    function onKeyDown(event) {
      if (event.key === "Escape") setVisible(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [visible]);

  const trigger = cloneElement(children, {
    "aria-describedby": id,
    onFocus: () => setVisible(true),
    onBlur: () => setVisible(defaultVisible),
  });

  return (
    <div
      className="tooltip-demo"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(defaultVisible)}
    >
      {trigger}
      <span className="tooltip" role="tooltip" id={id} hidden={!visible}>
        {text}
      </span>
    </div>
  );
}
