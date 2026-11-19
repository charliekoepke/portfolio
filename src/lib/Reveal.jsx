import { cx } from "./cx.js";
import { useReveal } from "./useReveal.js";

export default function Reveal({ as: Tag = "div", className, order, style, children, ...rest }) {
  const [ref, revealClass] = useReveal();
  const delay = order ? { "--reveal-order": order } : null;
  return (
    <Tag ref={ref} className={cx(className, revealClass)} style={delay || style ? { ...style, ...delay } : undefined} {...rest}>
      {children}
    </Tag>
  );
}
