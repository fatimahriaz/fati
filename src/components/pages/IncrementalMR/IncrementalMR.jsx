// ============================================================================
// IncrementalMR Page
// Matches the Figma/Dash screenshot: a date range picker, a "Current Day
// Meter Reads" line chart, a single "File Date" picker, and a data table
// with columns MR_ID / FILE_DATE / READ_DATE / NUM_STANDARD / NUM_INCREMENTAL.
//
// HOW STATE WORKS HERE (for anyone new to React):
// `useState` is how a component "remembers" something between renders --
// in this case, which dates are currently selected. When the user changes
// a date, we call the setter function (e.g. setDateRange), React re-renders
// this component with the new value, and (once the real API is connected)
// that change would also trigger a new data fetch for that date range.
//
// BACKEND HOOKUP POINT:
// Right now, dateRange/fileDate changes don't do anything beyond updating
// what's shown in the picker, because we're reading from static mock data.
// Once the API exists, add a useApiData-style call here that re-fetches
// chart/table data whenever dateRange or fileDate changes -- see the
// commented-out block near the bottom of this file for exactly where that
// goes.
// ============================================================================

import { useState } from "react";
import DateRangePicker from "../../common/DateRangePicker";
import SingleDatePicker from "../../common/SingleDatePicker";
import DataTable from "../../common/DataTable";
import MeterReadsChart from "./MeterReadsChart";
import {
  MOCK_METER_READS_CHART_DATA,
  MOCK_METER_READS_TABLE_DATA,
} from "./IncrementalMR.mock";
import "./IncrementalMR.css";

// --------------------------------------------------------------------
// BACKEND HOOKUP -- STEP 1 of 2:
// When the real API is ready, uncomment these two imports (and delete
// the MOCK_* import above):
//
// import { useApiData } from "../../../hooks/useApiData";
// import { getIncrementalMRChart, getIncrementalMRTable } from "../../../services/api";
// --------------------------------------------------------------------

// Column definitions for the table. `key` MUST exactly match the backend's
// real field names (MR_ID, FILE_DATE, etc.) -- this is what makes the
// DataTable component "just work" once it receives real API data instead
// of MOCK_METER_READS_TABLE_DATA.
const TABLE_COLUMNS = [
  { key: "MR_ID", label: "MR_ID" },
  { key: "FILE_DATE", label: "FILE_DATE" },
  { key: "READ_DATE", label: "READ_DATE" },
  { key: "NUM_STANDARD", label: "NUM_STANDARD", align: "right" },
  { key: "NUM_INCREMENTAL", label: "NUM_INCREMENTAL", align: "right" },
];

export default function IncrementalMR() {
  // Default date range mirrors the Figma screenshot (last 30 days).
  const [dateRange, setDateRange] = useState({
    startDate: "2026-05-24",
    endDate: "2026-06-23",
  });
  const [fileDate, setFileDate] = useState("2026-06-23");

  // --------------------------------------------------------------------
  // BACKEND HOOKUP -- STEP 2 of 2:
  // Once the imports above are uncommented, replace this entire block
  // (down to "const tableData = ...") with:
  //
  //   const {
  //     data: chartData,
  //     isLoading: isChartLoading,
  //     error: chartError,
  //   } = useApiData(() => getIncrementalMRChart(dateRange), [dateRange.startDate, dateRange.endDate]);
  //
  //   const {
  //     data: tableData,
  //     isLoading: isTableLoading,
  //     error: tableError,
  //   } = useApiData(() => getIncrementalMRTable(fileDate), [fileDate]);
  //
  // Then add loading/error handling before the main return, e.g.:
  //   if (isChartLoading || isTableLoading) return <LoadingSpinner />;
  //   if (chartError || tableError) return <ErrorMessage message={chartError || tableError} />;
  // --------------------------------------------------------------------
  const chartData = MOCK_METER_READS_CHART_DATA;
  const tableData = MOCK_METER_READS_TABLE_DATA;

  return (
    <div className="incremental-mr-page">
      <header className="incremental-mr-page__header">
        <h2>Incremental MR</h2>
        <p>Meter read comparison: incremental vs. standard reads by date</p>
      </header>

      <section className="incremental-mr-page__controls">
        <DateRangePicker
          startDate={dateRange.startDate}
          endDate={dateRange.endDate}
          onChange={setDateRange}
        />
      </section>

      <section className="incremental-mr-page__chart">
        <MeterReadsChart data={chartData} />
      </section>

      <section className="incremental-mr-page__controls">
        <SingleDatePicker label="File Date" value={fileDate} onChange={setFileDate} />
      </section>

      <section className="incremental-mr-page__table">
        <DataTable columns={TABLE_COLUMNS} rows={tableData} />
      </section>
    </div>
  );
}
