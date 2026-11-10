import TextLink from "../components/atoms/TextLink.jsx";

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

export default function RichText({ text }) {
  const parts = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    const [, label, target] = match;
    parts.push(
      target.startsWith("/") ? (
        <TextLink key={match.index} to={target}>
          {label}
        </TextLink>
      ) : (
        <TextLink key={match.index} href={target}>
          {label}
        </TextLink>
      )
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
