export default function Lozenge({ tone = "neutral", children }) {
  return <span className={`lozenge lozenge-${tone}`}>{children}</span>;
}
