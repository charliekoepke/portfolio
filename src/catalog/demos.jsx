import { useRef, useState } from "react";
import Button from "../components/atoms/Button.jsx";
import Tag from "../components/atoms/Tag.jsx";
import { Calendar } from "../components/molecules/DatePicker.jsx";
import ModalDialog from "../components/molecules/ModalDialog.jsx";

export function Dismissible({ render }) {
  const [shown, setShown] = useState(true);
  if (!shown) {
    return (
      <Button
        ref={(node) => node?.focus()}
        variant="secondary"
        onClick={() => setShown(true)}
      >
        Show it again
      </Button>
    );
  }
  return render(() => setShown(false));
}

export function RemovableTags({ labels }) {
  const [tags, setTags] = useState(labels);
  const rowRef = useRef(null);
  function remove(label) {
    setTags(tags.filter((tag) => tag !== label));
    requestAnimationFrame(() => rowRef.current?.querySelector("button")?.focus());
  }
  return (
    <div className="row row-tight" ref={rowRef}>
      {tags.map((label) => (
        <Tag key={label} label={label} onRemove={() => remove(label)} />
      ))}
      {tags.length === 0 && (
        <Button variant="secondary" onClick={() => setTags(labels)}>
          Restore tags
        </Button>
      )}
    </div>
  );
}

export function LiveDialog() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Delete</Button>
      <ModalDialog
        open={open}
        onClose={() => setOpen(false)}
        title="Delete this project?"
        actions={
          <>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Delete</Button>
          </>
        }
      >
        <p>Intake redesign will be removed from the site.</p>
      </ModalDialog>
    </>
  );
}

export function CalendarDemo({ year, month, day }) {
  const [view, setView] = useState({ year, month });
  const [selected, setSelected] = useState({ year, month, day });
  const current = selected.year === view.year && selected.month === view.month ? selected.day : null;
  return (
    <Calendar
      year={view.year}
      month={view.month}
      selected={current}
      onMonthChange={(nextYear, nextMonth) => setView({ year: nextYear, month: nextMonth })}
      onSelect={(nextDay) => setSelected({ ...view, day: nextDay })}
    />
  );
}
