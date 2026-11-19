import { cx } from "../../lib/cx.js";

export default function SideNavigation({ label = "Sections", items, current, hover }) {
  return (
    <nav className="side-nav" aria-label={label}>
      {items.map((item) => (
        <a
          key={item.label}
          className={cx("side-link", hover === item.label && "is-hover")}
          href={item.href}
          aria-current={item.label === current ? "page" : undefined}
          tabIndex={hover === item.label ? -1 : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
