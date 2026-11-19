import { useRef, useState } from "react";
import { cx } from "../../lib/cx.js";
import FieldBlock, { describedBy } from "../atoms/Field.jsx";
import IconButton from "../atoms/IconButton.jsx";
import Icon from "../atoms/Icon.jsx";

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function monthName(year, month) {
  return new Date(year, month, 1).toLocaleString("en-US", { month: "long" });
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function parse(value) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value || "");
  if (!match) return null;
  return { year: Number(match[1]), month: Number(match[2]) - 1, day: Number(match[3]) };
}

export function Calendar({ year, month, selected, onSelect, onMonthChange }) {
  const blanks = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  const name = monthName(year, month);

  function shift(step) {
    const next = new Date(year, month + step, 1);
    onMonthChange?.(next.getFullYear(), next.getMonth());
  }

  return (
    <div className="calendar">
      <div className="calendar-title">
        <button type="button" className="icon-btn icon-btn-quiet" aria-label="Previous month" onClick={() => shift(-1)}>
          <Icon name="chevronLeft" size="sm" />
        </button>
        <span aria-live="polite">
          {name} {year}
        </span>
        <button type="button" className="icon-btn icon-btn-quiet" aria-label="Next month" onClick={() => shift(1)}>
          <Icon name="chevronRight" size="sm" />
        </button>
      </div>
      <div className="calendar-head" aria-hidden="true">
        {WEEKDAYS.map((day) => (
          <span className="dow" key={day}>
            {day}
          </span>
        ))}
      </div>
      <div className="calendar-grid">
        {Array.from({ length: blanks }, (_, index) => (
          <span className="day" key={`blank-${index}`}></span>
        ))}
        {Array.from({ length: days }, (_, index) => {
          const day = index + 1;
          const isSelected = day === selected;
          return (
            <button
              key={day}
              type="button"
              className={cx("day", isSelected && "day-selected")}
              aria-label={`${day} ${name} ${year}`}
              aria-pressed={isSelected}
              onClick={() => onSelect?.(day)}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function DatePicker({ id, label, help = "Use YYYY-MM-DD.", defaultValue = "", defaultOpen = false }) {
  const [value, setValue] = useState(defaultValue);
  const [open, setOpen] = useState(defaultOpen);
  const initial = parse(defaultValue) || { year: new Date().getFullYear(), month: new Date().getMonth(), day: null };
  const [view, setView] = useState({ year: initial.year, month: initial.month });
  const inputRef = useRef(null);
  const chosen = parse(value);
  const selected = chosen && chosen.year === view.year && chosen.month === view.month ? chosen.day : null;

  return (
    <div
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          inputRef.current?.focus();
        }
      }}
    >
      <FieldBlock id={id} label={label} help={help}>
        <div className="control">
          <input
            ref={inputRef}
            className="field"
            id={id}
            value={value}
            aria-describedby={describedBy(id, help)}
            onChange={(event) => setValue(event.target.value)}
          />
          <IconButton
            className="field-end"
            icon="document"
            label="Choose a date"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          />
        </div>
      </FieldBlock>
      {open && (
        <Calendar
          year={view.year}
          month={view.month}
          selected={selected}
          onMonthChange={(year, month) => setView({ year, month })}
          onSelect={(day) => {
            setValue(`${view.year}-${pad(view.month + 1)}-${pad(day)}`);
            setOpen(false);
            inputRef.current?.focus();
          }}
        />
      )}
    </div>
  );
}
