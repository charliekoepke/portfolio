import IconButton from "../atoms/IconButton.jsx";
import { cx } from "../../lib/cx.js";

export default function Navigation({ siteName, links, current, hover, narrow, href = "#navigation" }) {
  return (
    <header className="top-nav">
      <a className="site-name" href={href}>
        {siteName}
      </a>
      {narrow ? (
        <IconButton icon="menu" label="Open menu" />
      ) : (
        <nav aria-label="Primary" className="row">
          {links.map((label) => (
            <a
              key={label}
              className={cx("nav-link", hover === label && "is-hover")}
              href={href}
              data-text={label}
              aria-current={label === current ? "page" : undefined}
            >
              <span>{label}</span>
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
