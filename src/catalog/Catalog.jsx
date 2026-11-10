import { GROUPS } from "./specimens.jsx";

const specs = import.meta.glob("/specs/*/*.md", { query: "?raw", import: "default", eager: true });

function lead(markdown) {
  const lines = markdown.replace(/\r/g, "").split("\n");
  let index = 0;
  while (index < lines.length && lines[index].trim() === "") index += 1;
  if (lines[index]?.trim().startsWith("#")) index += 1;
  while (index < lines.length && lines[index].trim() === "") index += 1;
  const paragraph = [];
  while (index < lines.length && lines[index].trim() !== "") {
    paragraph.push(lines[index].trim());
    index += 1;
  }
  return paragraph.join(" ");
}

function description(folder, id) {
  const source = specs[`/specs/${folder}/${id}.md`];
  return source ? lead(source) : "";
}

export default function Catalog() {
  return (
    <>
      <header className="mast">
        <p className="mast-back">
          <a href={import.meta.env.BASE_URL}>Charlie Koepke - Portfolio</a>
        </p>
        <h1>Components</h1>
        <nav className="folder-nav" aria-label="Components">
          {GROUPS.map((group) => (
            <a key={group.id} href={`#group-${group.id}`}>
              {group.title}
            </a>
          ))}
        </nav>
      </header>
      <p className="intro">Components are grouped by folder. Each entry has a description, then its variants and states.</p>
      <nav id="jump" className="jump jump-folders" aria-label="On this page">
        {GROUPS.map((group) => (
          <div key={group.id}>
            <p className="jump-label">{group.title}</p>
            <div className="jump-links">
              {group.specimens.map((specimen) => (
                <a key={specimen.id} href={`#${specimen.id}`}>
                  {specimen.title}
                </a>
              ))}
            </div>
          </div>
        ))}
      </nav>
      <main id="catalog" onSubmit={(event) => event.preventDefault()}>
        {GROUPS.map((group) => (
          <section key={group.id} className="group" id={`group-${group.id}`}>
            <h2>{group.title}</h2>
            {group.specimens.map((specimen) => {
              const summary = description(group.id, specimen.id);
              return (
                <section key={specimen.id} className="specimen" id={specimen.id}>
                  <h3>{specimen.title}</h3>
                  {summary && <p className="component-desc">{summary}</p>}
                  <div className="states">{specimen.render()}</div>
                </section>
              );
            })}
          </section>
        ))}
      </main>
    </>
  );
}
