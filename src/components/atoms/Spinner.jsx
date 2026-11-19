export default function Spinner({ size = "sm", label = "Loading", live = true }) {
  return (
    <span className="spinner-line" role={live ? "status" : undefined}>
      <span className={`spinner spinner-${size}`}></span> {label}
    </span>
  );
}
