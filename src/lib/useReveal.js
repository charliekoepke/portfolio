import { useEffect, useRef, useState } from "react";
import { cx } from "./cx.js";

export function useReveal(enabled = true) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(!enabled);

  useEffect(() => {
    if (!enabled) return undefined;
    const node = ref.current;
    if (!node || !("IntersectionObserver" in window)) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setVisible(true);
        observer.disconnect();
      }
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [enabled]);

  return [ref, enabled ? cx("reveal", visible && "is-visible") : null];
}
