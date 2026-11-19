import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

function focusTarget(element) {
  if (!element.matches("a[href], button, input, select, textarea, [tabindex]")) {
    element.setAttribute("tabindex", "-1");
  }
  element.focus({ preventScroll: true });
}

export default function RouteFocus() {
  const { pathname, hash } = useLocation();
  const firstRender = useRef(true);
  const lastPath = useRef(pathname);

  useEffect(() => {
    const initial = firstRender.current;
    const pathChanged = lastPath.current !== pathname;
    firstRender.current = false;
    lastPath.current = pathname;

    const frame = requestAnimationFrame(() => {
      const id = decodeURIComponent(hash.slice(1));
      const target = id ? document.getElementById(id) : null;
      if (target) {
        target.scrollIntoView();
        focusTarget(target);
        return;
      }
      if (initial || !pathChanged) return;
      window.scrollTo(0, 0);
      const heading = document.querySelector("main h1");
      focusTarget(heading || document.getElementById("main"));
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
