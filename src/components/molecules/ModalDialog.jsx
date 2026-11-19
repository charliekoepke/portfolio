import { useEffect, useId, useRef } from "react";
import IconButton from "../atoms/IconButton.jsx";

export default function ModalDialog({ open, onClose, title, children, actions }) {
  const ref = useRef(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog ref={ref} aria-labelledby={titleId} onClose={onClose}>
      <div className="dialog-top">
        <IconButton icon="close" label="Close" onClick={onClose} />
      </div>
      <p className="type-title" id={titleId}>
        {title}
      </p>
      {children}
      <div className="dialog-actions">{actions}</div>
    </dialog>
  );
}

export function DialogPreview({ title, children, actions }) {
  const titleId = useId();
  return (
    <div className="stage">
      <div className="blanket"></div>
      <div className="dialog" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <div className="dialog-top">
          <IconButton icon="close" label="Close" />
        </div>
        <p className="type-title" id={titleId}>
          {title}
        </p>
        {children}
        <div className="dialog-actions">{actions}</div>
      </div>
    </div>
  );
}
