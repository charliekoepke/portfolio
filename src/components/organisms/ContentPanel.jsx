export default function ContentPanel({ title, children }) {
  return (
    <section className="panel">
      <p className="type-title">{title}</p>
      <p>{children}</p>
    </section>
  );
}
