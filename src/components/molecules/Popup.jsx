import { useId, useRef, useState } from "react";
import Button from "../atoms/Button.jsx";

export default function Popup({ label, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  const triggerRef = useRef(null);
  return (
    <div
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          triggerRef.current?.focus();
        }
      }}
    >
      <Button
        ref={triggerRef}
        variant="secondary"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        {label}
      </Button>
      <div className="popup" id={id} hidden={!open}>
        {children}
      </div>
    </div>
  );
}
