import { useId, useState } from "react";
import Icon from "../atoms/Icon.jsx";

export default function PanelExpandCollapse({ label, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  return (
    <div className="expand">
      <button type="button" className="expand-btn" aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}>
        {label} <Icon name={open ? "chevron" : "chevronRight"} size="sm" />
      </button>
      <div className="expand-body" id={id} hidden={!open}>
        {children}
      </div>
    </div>
  );
}
