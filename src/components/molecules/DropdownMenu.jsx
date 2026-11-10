import { useEffect, useId, useRef, useState } from "react";
import { cx } from "../../lib/cx.js";
import IconButton from "../atoms/IconButton.jsx";

export default function DropdownMenu({ label, items, defaultOpen = false, highlight }) {
  const [open, setOpen] = useState(defaultOpen);
  const menuId = useId();
  const wrapRef = useRef(null);
  const triggerRef = useRef(null);
  const itemRefs = useRef([]);
  const focusFirst = useRef(false);

  useEffect(() => {
    if (!open) return undefined;
    if (focusFirst.current) {
      itemRefs.current[0]?.focus();
      focusFirst.current = false;
    }
    function onPointerDown(event) {
      if (!wrapRef.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  function close(returnFocus) {
    setOpen(false);
    if (returnFocus) triggerRef.current?.focus();
  }

  function onMenuKeyDown(event) {
    const nodes = itemRefs.current.filter(Boolean);
    const index = nodes.indexOf(document.activeElement);
    const last = nodes.length - 1;
    const moves = {
      ArrowDown: index >= last ? 0 : index + 1,
      ArrowUp: index <= 0 ? last : index - 1,
      Home: 0,
      End: last,
    };
    if (event.key === "Escape") {
      event.preventDefault();
      close(true);
    } else if (event.key === "Tab") {
      close(false);
    } else if (event.key in moves) {
      event.preventDefault();
      nodes[moves[event.key]]?.focus();
    }
  }

  return (
    <div ref={wrapRef}>
      <IconButton
        ref={triggerRef}
        icon="menu"
        label={label}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        onClick={() => {
          focusFirst.current = !open;
          setOpen(!open);
        }}
      />
      {open && (
        <div className="menu" role="menu" id={menuId} aria-label={label} onKeyDown={onMenuKeyDown}>
          {items.map((item, index) => (
            <button
              key={item.label}
              ref={(node) => {
                itemRefs.current[index] = node;
              }}
              type="button"
              className={cx("menu-item", item.danger && "danger", highlight === index && "is-focus")}
              role="menuitem"
              tabIndex={-1}
              onClick={() => {
                item.onSelect?.();
                close(true);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
