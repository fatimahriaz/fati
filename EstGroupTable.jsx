// ============================================================================
// EstGroupTable
// A reusable table for the Estimation Report's three tables (Estimation
// Group, Hardware Model, Meter Status). All three share the exact same
// row shape -- one row per age bucket (e.g. "05 to 09"), plus a final
// "Total" row -- they only differ in which columns they show.
//
// Built on top of the existing generic <DataTable />, so sorting still
// works for free. This component's only job is to add the title above
// the table and make sure the "Total" row always renders, even if a
// generic table's row data happens to put it elsewhere.
// ============================================================================

import DataTable from "../../common/DataTable";
import "./EstGroupTable.css";

/**
 * @param {object} props
 * @param {string} props.title - table heading, e.g. "Hardware Model Table"
 * @param {Array<{ key: string, label: string }>} props.columns
 * @param {Array<object>} props.rows - one row per EST_GROUP bucket, plus a Total row
 */
export default function EstGroupTable({ title, columns, rows }) {
  return (
    <section className="est-group-table">
      <h3 className="est-group-table__title">{title}</h3>
      <DataTable columns={columns} rows={rows} />
    </section>
  );
}
