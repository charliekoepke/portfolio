import { cx } from "../../lib/cx.js";

const paths = {
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="M16 16 L20 20" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  download: <path d="M12 4 v10 M8 10 l4 4 4-4 M5 19 h14" />,
  account: (
    <>
      <circle cx="12" cy="9" r="3" />
      <path d="M6 19 c1.5-3 3.5-4.5 6-4.5 s4.5 1.5 6 4.5" />
    </>
  ),
  document: <path d="M7 3 h7 l4 4 v14 H7 z M14 3 v4 h4" />,
  chevron: <path d="M6 9 l6 6 6-6" />,
  chevronLeft: <path d="M15 6 l-6 6 6 6" />,
  chevronRight: <path d="M9 6 l6 6 -6 6" />,
  external: <path d="M7 17 L17 7 M9 7 h8 v8" />,
  mail: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
};

export const ICON_SET = ["search", "menu", "close", "download", "account", "document"];

export default function Icon({ name, size, className }) {
  return (
    <svg
      className={cx("icon", size === "sm" && "icon-sm", className)}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
