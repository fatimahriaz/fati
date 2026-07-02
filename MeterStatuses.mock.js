// ============================================================================
// MOCK DATA - Meter Statuses
// Three data shapes:
//   1. summaryCards - today's counts per status (for stat cards at top)
//   2. timeSeriesChart - historical daily counts per status (Plotly figure)
//   3. pieChart - current distribution by status (Plotly figure)
//
// The Plotly figure objects below are shaped to match exactly what the
// Python backend will return -- pass figure.data and figure.layout
// directly into <PlotlyChart data={...} layout={...} />.
//
// DELETE this file once /api/meter-statuses exists.
// ============================================================================

// Top stat cards
export const MOCK_METER_STATUS_SUMMARY = {
  normal: { value: "3,989,022", label: "Normal" },
  failed: { value: "43,218", label: "Failed" },
  lost: { value: "296,401", label: "Lost" },
  installed: { value: "45,123", label: "Installed" },
};

// Time series chart -- Plotly figure object
export const MOCK_TIME_SERIES_FIGURE = {
  data: [
    {
      x: ["2026-06-17","2026-06-18","2026-06-19","2026-06-20","2026-06-21","2026-06-22","2026-06-23","2026-06-24","2026-06-25","2026-06-26","2026-06-27","2026-06-28","2026-06-29","2026-06-30"],
      y: [3980000, 3982000, 3985000, 3987000, 3986000, 3988000, 3989000, 3991000, 3990000, 3992000, 3993000, 3990000, 3989000, 3989022],
      type: "scatter",
      mode: "lines+markers",
      name: "Normal",
      line: { color: "#1d8a4a" },
    },
    {
      x: ["2026-06-17","2026-06-18","2026-06-19","2026-06-20","2026-06-21","2026-06-22","2026-06-23","2026-06-24","2026-06-25","2026-06-26","2026-06-27","2026-06-28","2026-06-29","2026-06-30"],
      y: [45000, 44800, 44200, 43900, 43700, 43500, 43400, 43300, 43250, 43230, 43220, 43218, 43218, 43218],
      type: "scatter",
      mode: "lines+markers",
      name: "Failed",
      line: { color: "#c0392b" },
    },
    {
      x: ["2026-06-17","2026-06-18","2026-06-19","2026-06-20","2026-06-21","2026-06-22","2026-06-23","2026-06-24","2026-06-25","2026-06-26","2026-06-27","2026-06-28","2026-06-29","2026-06-30"],
      y: [300000, 299000, 298000, 297500, 297200, 296900, 296700, 296600, 296500, 296450, 296420, 296410, 296405, 296401],
      type: "scatter",
      mode: "lines+markers",
      name: "Lost",
      line: { color: "#9a6b15" },
    },
  ],
  layout: {
    title: { text: "Meter Status — Historical (Last 14 Days)" },
    xaxis: { title: "Date" },
    yaxis: { title: "Meter Count" },
    legend: { orientation: "h", y: -0.2 },
  },
};

// Pie chart -- Plotly figure object
export const MOCK_PIE_FIGURE = {
  data: [
    {
      labels: ["Normal", "Lost", "Failed", "Installed", "Other"],
      values: [3989022, 296401, 43218, 45123, 12000],
      type: "pie",
      hole: 0.4,
      marker: {
        colors: ["#1d8a4a", "#9a6b15", "#c0392b", "#2255c4", "#6b7280"],
      },
    },
  ],
  layout: {
    title: { text: "Current Meter Status Distribution" },
    showlegend: true,
  },
};

// Daily snapshot table rows
export const MOCK_METER_STATUS_TABLE = [
  { date: "2026-06-30", Normal: 3989022, Failed: 43218, Lost: 296401, Installed: 45123, Configure: 15, Discovered: 27 },
  { date: "2026-06-29", Normal: 3989000, Failed: 43218, Lost: 296405, Installed: 45120, Configure: 15, Discovered: 27 },
  { date: "2026-06-28", Normal: 3990000, Failed: 43220, Lost: 296410, Installed: 45100, Configure: 16, Discovered: 28 },
  { date: "2026-06-27", Normal: 3993000, Failed: 43220, Lost: 296420, Installed: 45090, Configure: 16, Discovered: 28 },
  { date: "2026-06-26", Normal: 3992000, Failed: 43230, Lost: 296450, Installed: 45080, Configure: 17, Discovered: 29 },
];
