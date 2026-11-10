export function describedBy(id, help, error) {
  if (error) return `${id}-error`;
  if (help) return `${id}-help`;
  return undefined;
}

export default function FieldBlock({ id, label, help, error, children }) {
  return (
    <div className="field-block">
      <label className="field-label" htmlFor={id}>
        {label}
      </label>
      {children}
      {help && !error && (
        <p className="help" id={`${id}-help`}>
          {help}
        </p>
      )}
      {error && (
        <p className="error-text" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}
