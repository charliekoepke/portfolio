import { useId, useRef, useState } from "react";

export default function Tabs({ label, tabs, defaultTab }) {
  const baseId = useId();
  const [selected, setSelected] = useState(defaultTab ?? tabs[0].id);
  const tabRefs = useRef([]);

  function onKeyDown(event, index) {
    const last = tabs.length - 1;
    const moves = {
      ArrowRight: index === last ? 0 : index + 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    };
    if (!(event.key in moves)) return;
    event.preventDefault();
    const next = moves[event.key];
    setSelected(tabs[next].id);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className="tabset">
      <div className="tabs" role="tablist" aria-label={label}>
        {tabs.map((tab, index) => {
          const isSelected = tab.id === selected;
          return (
            <button
              key={tab.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              type="button"
              className="tab"
              role="tab"
              id={`${baseId}-tab-${tab.id}`}
              aria-selected={isSelected}
              aria-controls={`${baseId}-panel-${tab.id}`}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setSelected(tab.id)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className="tab-panel"
          role="tabpanel"
          id={`${baseId}-panel-${tab.id}`}
          aria-labelledby={`${baseId}-tab-${tab.id}`}
          tabIndex={0}
          hidden={tab.id !== selected}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
