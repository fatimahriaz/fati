// ============================================================================
// MOCK DATA - Incremental MR Report
// Shaped to match the REAL backend field names seen in the Dash screenshot:
// MR_ID, FILE_DATE, READ_DATE, NUM_STANDARD, NUM_INCREMENTAL.
//
// Delete this file once the real API endpoint exists. Nothing in
// IncrementalMR.jsx needs to change -- it will just receive this same
// shape from a real fetch() call instead of from this file.
// ============================================================================

// Chart data: one point per day for the line chart. Field names here are
// our own choice (the chart doesn't come from a table with fixed column
// names), but keep them descriptive so a future API contract is easy to
// agree on with the backend team.
export const MOCK_METER_READS_CHART_DATA = [
  { date: "2026-05-24", uniqueMetersCurrentDay: 4110000 },
  { date: "2026-05-25", uniqueMetersCurrentDay: 4100500 },
  { date: "2026-05-26", uniqueMetersCurrentDay: 4089800 },
  { date: "2026-05-27", uniqueMetersCurrentDay: 4103200 },
  { date: "2026-05-28", uniqueMetersCurrentDay: 4102600 },
  { date: "2026-05-29", uniqueMetersCurrentDay: 4112800 },
  { date: "2026-05-30", uniqueMetersCurrentDay: 4108100 },
  { date: "2026-05-31", uniqueMetersCurrentDay: 4106400 },
  { date: "2026-06-01", uniqueMetersCurrentDay: 4107300 },
  { date: "2026-06-02", uniqueMetersCurrentDay: 4099200 },
  { date: "2026-06-03", uniqueMetersCurrentDay: 4113700 },
  { date: "2026-06-04", uniqueMetersCurrentDay: 4116200 },
  { date: "2026-06-05", uniqueMetersCurrentDay: 4112900 },
  { date: "2026-06-06", uniqueMetersCurrentDay: 4094700 },
  { date: "2026-06-07", uniqueMetersCurrentDay: 4101100 },
  { date: "2026-06-08", uniqueMetersCurrentDay: 4111400 },
  { date: "2026-06-09", uniqueMetersCurrentDay: 4112000 },
  { date: "2026-06-10", uniqueMetersCurrentDay: 4112800 },
  { date: "2026-06-11", uniqueMetersCurrentDay: 4116500 },
  { date: "2026-06-12", uniqueMetersCurrentDay: 4117000 },
  { date: "2026-06-13", uniqueMetersCurrentDay: 4109600 },
  { date: "2026-06-14", uniqueMetersCurrentDay: 4084600 },
  { date: "2026-06-15", uniqueMetersCurrentDay: 4108300 },
  { date: "2026-06-16", uniqueMetersCurrentDay: 4112500 },
  { date: "2026-06-17", uniqueMetersCurrentDay: 4104700 },
  { date: "2026-06-18", uniqueMetersCurrentDay: 4089400 },
  { date: "2026-06-19", uniqueMetersCurrentDay: 4119900 },
  { date: "2026-06-20", uniqueMetersCurrentDay: 4111200 },
  { date: "2026-06-21", uniqueMetersCurrentDay: 4116500 },
];

// Table data: matches the real Dash table's exact column names so this
// component plugs directly into the future API response with zero changes.
export const MOCK_METER_READS_TABLE_DATA = [
  { MR_ID: "", FILE_DATE: "2026-06-23T00:00:00", READ_DATE: "2026-06-19", NUM_STANDARD: 0, NUM_INCREMENTAL: 37 },
  { MR_ID: "", FILE_DATE: "2026-06-23T00:00:00", READ_DATE: "2026-06-20", NUM_STANDARD: 0, NUM_INCREMENTAL: 80 },
  { MR_ID: "", FILE_DATE: "2026-06-23T00:00:00", READ_DATE: "2026-06-21", NUM_STANDARD: 0, NUM_INCREMENTAL: 217 },
  { MR_ID: "", FILE_DATE: "2026-06-23T00:00:00", READ_DATE: "2026-06-22", NUM_STANDARD: 0, NUM_INCREMENTAL: 31372 },
  { MR_ID: "", FILE_DATE: "2026-06-23T00:00:00", READ_DATE: "2026-06-23", NUM_STANDARD: 4120382, NUM_INCREMENTAL: 4117752 },
];
