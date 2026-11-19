import { useId, useState } from "react";
import EmptyState from "../molecules/EmptyState.jsx";

export function ThreeColumnLayout({ nav, main, aside }) {
  return (
    <div className="layout layout-3">
      {nav}
      <div className="layout-col">{main}</div>
      {aside}
    </div>
  );
}

export function ListDetail({ label, items, defaultSelected }) {
  const [selected, setSelected] = useState(defaultSelected);
  const detailId = useId();
  const current = items.find((item) => item.title === selected);
  return (
    <div className="layout layout-list">
      <nav className="layout-col" aria-label={label}>
        {items.map((item) => (
          <a
            key={item.title}
            className="list-link"
            href={`#${detailId}`}
            aria-current={item.title === selected ? "true" : undefined}
            onClick={(event) => {
              event.preventDefault();
              setSelected(item.title);
            }}
          >
            {item.title}
          </a>
        ))}
      </nav>
      <div className="layout-col" id={detailId}>
        {current ? (
          <>
            <p className="type-title">{current.title}</p>
            <p>{current.body}</p>
          </>
        ) : (
          <EmptyState title="Select a Project">Choose a project from the list to read it here.</EmptyState>
        )}
      </div>
    </div>
  );
}
