export default function Table({ caption, columns, rows }) {
  return (
    <table className="data-table">
      <caption>{caption}</caption>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key} scope="col" aria-sort={column.sort}>
              {column.sort ? (
                <button type="button" className="edit-read" aria-label={`${column.label}, sorted ${column.sort}`}>
                  {column.label}
                </button>
              ) : (
                column.label
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column.key}>{row[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
