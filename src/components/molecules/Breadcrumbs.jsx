import { Fragment } from "react";
import TextLink from "../atoms/TextLink.jsx";

export default function Breadcrumbs({ items }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumbs">
      {items.map((item, index) => (
        <Fragment key={item.label}>
          {index > 0 && (
            <span className="sep" aria-hidden="true">
              /
            </span>
          )}
          {item.to || item.href ? (
            <TextLink to={item.to} href={item.href}>
              {item.label}
            </TextLink>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
