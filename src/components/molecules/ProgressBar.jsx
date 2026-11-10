export default function ProgressBar({ label, value }) {
  return (
    <div>
      <div
        className="progress-track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        aria-label={label}
      >
        <div className="progress-fill" style={{ width: `${value}%` }}></div>
      </div>
      <div className="progress-meta">
        <span>{label}</span>
        <span>{value} percent</span>
      </div>
    </div>
  );
}
