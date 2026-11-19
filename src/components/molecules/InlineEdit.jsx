import { useEffect, useRef, useState } from "react";
import Button from "../atoms/Button.jsx";

export default function InlineEdit({ label, defaultValue, defaultEditing = false }) {
  const [value, setValue] = useState(defaultValue);
  const [draft, setDraft] = useState(defaultValue);
  const [editing, setEditing] = useState(defaultEditing);
  const inputRef = useRef(null);
  const readRef = useRef(null);
  const moved = useRef(false);

  useEffect(() => {
    if (!moved.current) return;
    if (editing) inputRef.current?.focus();
    else readRef.current?.focus();
  }, [editing]);

  function change(next) {
    moved.current = true;
    setEditing(next);
  }

  function save() {
    setValue(draft);
    change(false);
  }

  function cancel() {
    setDraft(value);
    change(false);
  }

  if (!editing) {
    return (
      <button
        ref={readRef}
        type="button"
        className="edit-read"
        onClick={() => change(true)}
      >
        {value}
        <span className="visually-hidden">, edit {label.charAt(0).toLowerCase() + label.slice(1)}</span>
      </button>
    );
  }

  return (
    <div className="row">
      <input
        ref={inputRef}
        className="field"
        value={draft}
        aria-label={label}
        style={{ width: 240 }}
        onChange={(event) => setDraft(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") save();
          if (event.key === "Escape") cancel();
        }}
      />
      <div className="row row-tight">
        <Button onClick={save}>Save</Button>
        <Button variant="secondary" onClick={cancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
