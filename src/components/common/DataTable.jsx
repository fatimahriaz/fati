// ============================================================================
// DataTable
// A generic, reusable table component used across report pages. It takes
// a list of column definitions and a list of row objects, and renders a
// sortable table -- click a column header to sort by that column
// (matches the small sort-arrow icons next to each header in the Figma).
//
// WHY BUILD IT "GENERIC" LIKE THIS?
// Every report page (Incremental MR, Estimation Report, Mesh Window) needs
// a table, but each one has different columns. Instead of writing a brand
// new table component for each page, this one component can render any of
// them just by being given a different `columns` array. This is the same
// idea as a function that works for any input, rather than one written
// for a single specific case.
//
// HOW TO USE IT (see IncrementalMR.jsx for a full example):
//
//   const columns = [
//     { key: 'MR_ID', label: 'MR_ID' },
//     { key: 'FILE_DATE', label: 'FILE_DATE' },
//   ];
//   const rows = [
//     { MR_ID: '...', FILE_DATE: '2026-06-23T00:00:00' },
//   ];
//   <DataTable columns={columns} rows={rows} />
//
// Each row object's keys must match the column `key` values exactly --
// this is intentional, so the column keys can be set to match the
// backend's real field names (e.g. NUM_STANDARD, NUM_INCREMENTAL) and the
// table "just works" once real API data replaces the mock data.
// ============================================================================

import { useState, useMemo } from "react";
import "./DataTable.css";

/**
 * @param {object} props
 * @param {Array<{ key: string, label: string, align?: 'left'|'right' }>} props.columns
 * @param {Array<object>} props.rows - each object's keys must match column keys
 * @param {string} [props.emptyMessage] - shown when rows is empty
 */
export default function DataTable({ columns, rows, emptyMessage = "No data available." }) {
  // Tracks which column is currently sorted, and in which direction.
  // sortKey = null means "no sorting applied, show rows in original order".
  const [sortKey, setSortKey] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc"); // 'asc' or 'desc'

  // useMemo recalculates the sorted rows only when rows/sortKey/sortDirection
  // change, instead of re-sorting on every single render.
  const sortedRows = useMemo(() => {
    if (!sortKey) return rows;

    const rowsCopy = [...rows];
    rowsCopy.sort((rowA, rowB) => {
      const valueA = rowA[sortKey];
      const valueB = rowB[sortKey];

      if (valueA === valueB) return 0;
      const comparison = valueA > valueB ? 1 : -1;
      return sortDirection === "asc" ? comparison : -comparison;
    });
    return rowsCopy;
  }, [rows, sortKey, sortDirection]);

  function handleHeaderClick(columnKey) {
    if (sortKey === columnKey) {
      // Clicking the same column again flips the sort direction.
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(columnKey);
      setSortDirection("asc");
    }
  }

  if (rows.length === 0) {
    return <p className="data-table__empty">{emptyMessage}</p>;
  }

  return (
    <div className="data-table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                onClick={() => handleHeaderClick(column.key)}
                className={`data-table__header${
                  column.align === "right" ? " data-table__header--right" : ""
                }`}
              >
                {column.label}
                <span className="data-table__sort-icon">
                  {sortKey === column.key ? (sortDirection === "asc" ? "▲" : "▼") : "⇕"}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedRows.map((row, rowIndex) => (
            // Using rowIndex as a fallback key is fine here since rows
            // don't get reordered by the user adding/removing items --
            // if your data has a unique ID field, prefer row[idField] instead.
            <tr key={row.MR_ID ?? rowIndex}>
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={column.align === "right" ? "data-table__cell--right" : ""}
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
