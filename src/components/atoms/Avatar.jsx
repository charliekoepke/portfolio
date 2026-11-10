export default function Avatar({ size = "md", name, initials, decorative }) {
  if (decorative) {
    return (
      <span className={`avatar avatar-${size}`} aria-hidden="true">
        {initials}
      </span>
    );
  }
  return (
    <span className={`avatar avatar-${size}`} role="img" aria-label={name}>
      {initials}
    </span>
  );
}
