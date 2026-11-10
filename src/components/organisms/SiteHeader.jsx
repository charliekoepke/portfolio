import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { cx } from "../../lib/cx.js";
import Icon from "../atoms/Icon.jsx";

export const SITE_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const navRef = useRef(null);
  const focusFirst = useRef(false);
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("nav-open", open);
    if (open && focusFirst.current) {
      focusFirst.current = false;
      navRef.current?.querySelector("a")?.focus();
    }
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 48rem)");
    function sync() {
      if (wide.matches) setOpen(false);
    }
    sync();
    wide.addEventListener("change", sync);
    return () => wide.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    function onKeyDown(event) {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function closeToButton() {
    setOpen(false);
    buttonRef.current?.focus();
  }

  return (
    <header className="mast">
      <div className="nav-blanket" onClick={closeToButton}></div>
      <div className="bar">
        <Link className="site-name" to="/">
          Charlie Koepke - Portfolio
        </Link>
        <button
          ref={buttonRef}
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => {
            focusFirst.current = !open;
            setOpen(!open);
          }}
        >
          <Icon name="menu" className="icon-menu" />
          <Icon name="close" className="icon-close" />
          <span className="menu-label visually-hidden">{open ? "Close menu" : "Open menu"}</span>
        </button>
        <nav ref={navRef} id="primary-nav" className={cx("primary-nav", open && "is-open")} aria-label="Primary">
          {SITE_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} data-text={link.label}>
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
