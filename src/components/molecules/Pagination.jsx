export default function Pagination({ current, total, label = "Pagination", hrefFor = (page) => `#page-${page}` }) {
  const pages = Array.from({ length: total }, (_, index) => index + 1);
  return (
    <nav className="pages" aria-label={label}>
      {current > 1 && (
        <a className="page-btn" href={hrefFor(current - 1)}>
          Previous
        </a>
      )}
      {pages.map((page) =>
        page === current ? (
          <span key={page} className="page-btn circle page-btn-current" aria-current="page">
            {page}
          </span>
        ) : (
          <a key={page} className="page-btn circle" href={hrefFor(page)}>
            {page}
          </a>
        )
      )}
      {current < total && (
        <a className="page-btn" href={hrefFor(current + 1)}>
          Next
        </a>
      )}
    </nav>
  );
}
