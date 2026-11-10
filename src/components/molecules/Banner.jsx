import Icon from "../atoms/Icon.jsx";

export default function Banner({ tone = "warning", icon = true, children }) {
  return (
    <div className={`banner banner-${tone}`} role={tone === "error" ? "alert" : "status"}>
      {icon && (
        <span aria-hidden="true">
          <Icon name="document" />
        </span>
      )}
      <p>{children}</p>
    </div>
  );
}
