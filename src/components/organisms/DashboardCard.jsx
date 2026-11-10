import { cx } from "../../lib/cx.js";
import Badge from "../atoms/Badge.jsx";

export default function DashboardCard({ label, value, badge, children }) {
  return (
    <article className="card">
      <p className="card-label">{label}</p>
      <p className={cx("card-value", badge && "count-line")}>
        {value}
        {badge && (
          <>
            {" "}
            <Badge>{badge}</Badge>
          </>
        )}
      </p>
      {children}
    </article>
  );
}
