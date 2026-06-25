// ============================================================================
// API SERVICE
// Every network call the app makes goes through this file. Centralizing
// fetch logic here means: (1) one place to add auth headers/tokens once
// login is wired to the real backend, (2) one place to change the base
// URL or error handling, (3) page components stay clean -- they call
// `getEstimationReport()` and don't know or care that it's a fetch() call.
//
// HOW THIS WILL CONNECT TO YOUR PYTHON BACKEND:
// Each function below is a placeholder that currently throws/returns mock
// data (see the matching `*.mock.js` file next to each page). Once your
// Dash/Flask/FastAPI backend exposes real JSON endpoints, you only need to
// uncomment the fetch() call and delete the mock import -- the page
// components themselves will not need to change, since they just call
// these functions and read the returned shape.
// ============================================================================

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "/api";

/**
 * Generic request helper. Wraps fetch with consistent error handling so
 * every API function doesn't need to repeat try/catch + response.ok checks.
 */
async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    // Surface the backend's error message if it sends one (e.g. FastAPI's
    // {"detail": "..."} or a Dash error), otherwise fall back to status text.
    const errorBody = await response.json().catch(() => null);
    throw new Error(errorBody?.detail || errorBody?.message || response.statusText);
  }

  return response.json();
}

/* ----------------------------------------------------------------------
   AUTH
   Maps to the Sign In screen (RACF ID + password).
   ---------------------------------------------------------------------- */
export async function login(racfId, password) {
  // TODO (backend): POST /api/auth/login  body: { racfId, password }
  // Expected response: { token: string, user: { racfId, name, role } }
  return request("/auth/login", {
    method: "POST",
    body: JSON.stringify({ racfId, password }),
  });
}

/* ----------------------------------------------------------------------
   HOME / DASHBOARD OVERVIEW
   Maps to the 4 stat cards, "Recent Reports" list, and "System Alerts"
   panel on the Home page.
   ---------------------------------------------------------------------- */
export async function getDashboardOverview() {
  // TODO (backend): GET /api/dashboard/overview
  // Expected response shape:
  // {
  //   stats: {
  //     activeMeters: { value: number, deltaPercent: number },
  //     dataQualityScore: { value: number, deltaPercent: number },
  //     activeUsers: { value: number, delta: number },
  //     pendingAlerts: { value: number, delta: number }
  //   },
  //   recentReports: [{ id, name, date, status }],
  //   systemAlerts: [{ id, severity, title, detail }]
  // }
  return request("/dashboard/overview");
}

/* ----------------------------------------------------------------------
   ESTIMATION REPORT
   Maps to the zone-by-zone estimation table + its 4 summary stat cards.
   This corresponds to the backend's `create_estimations_pivot_table()` /
   "estimations-pivot-table" component seen in the Dash app.
   ---------------------------------------------------------------------- */
export async function getEstimationReport(filters = {}) {
  // TODO (backend): GET /api/estimation-report?startDate=...&endDate=...
  // Mirrors the Dash callback:
  //   Output('estimations-pivot-table', 'data')
  //   Input('estimations-date-picker', 'date')
  // Expected response shape:
  // {
  //   summary: { totalMeters, estimatedReads, estimationRate, highVarianceZones },
  //   zones: [{ zone, totalMeters, estimated, percentage, variance: 'Low'|'Medium'|'High' }]
  // }
  return request("/estimation-report", {
    method: "GET",
    // When wired up, pass filters as query params, e.g.:
    // `?${new URLSearchParams(filters).toString()}`
  });
}

export async function exportEstimationReport(filters = {}) {
  // TODO (backend): GET /api/estimation-report/export -> returns a file (CSV/XLSX)
  // The frontend should trigger a file download from the response blob.
  return request("/estimation-report/export");
}

/* ----------------------------------------------------------------------
   INCREMENTAL MR
   Maps to the Incremental MR report page: a date-range-driven line chart
   ("Current Day Meter Reads") and a file-date-driven table with columns
   MR_ID, FILE_DATE, READ_DATE, NUM_STANDARD, NUM_INCREMENTAL.

   This page makes TWO separate API calls because it has two independent
   controls (a date range for the chart, a single file date for the
   table) -- each should be its own endpoint so changing one doesn't
   force a refetch of the other.
   ---------------------------------------------------------------------- */
export async function getIncrementalMRChart({ startDate, endDate }) {
  // TODO (backend): GET /api/incremental-mr/chart?startDate=...&endDate=...
  // Expected response: an array of points, one per day in the range:
  // [
  //   { date: "2026-05-24", uniqueMetersCurrentDay: 4110000 },
  //   { date: "2026-05-25", uniqueMetersCurrentDay: 4100500 },
  //   ...
  // ]
  return request(`/incremental-mr/chart?startDate=${startDate}&endDate=${endDate}`);
}

export async function getIncrementalMRTable(fileDate) {
  // TODO (backend): GET /api/incremental-mr/table?fileDate=...
  // Expected response: an array of row objects using the backend's real
  // column names directly, so no relabeling is needed on the frontend:
  // [
  //   {
  //     MR_ID: "...",
  //     FILE_DATE: "2026-06-23T00:00:00",
  //     READ_DATE: "2026-06-19",
  //     NUM_STANDARD: 0,
  //     NUM_INCREMENTAL: 37
  //   },
  //   ...
  // ]
  return request(`/incremental-mr/table?fileDate=${fileDate}`);
}

/* ----------------------------------------------------------------------
   MESH WINDOW ANALYSIS
   Maps to the backend's `mesh_window.py` / `MeshWindow.py` modules, which
   appear to handle geographic/mesh-based grid analysis (likely rendered
   with dash_leaflet on the Python side -- a map + table combo).
   ---------------------------------------------------------------------- */
export async function getMeshWindowAnalysis(filters = {}) {
  // TODO (backend): GET /api/mesh-window-analysis
  // Expected to include both tabular data and map/grid geometry
  // (e.g. GeoJSON), based on the backend's use of dash_leaflet + geojson
  // files (service_center_boundaries.geojson, texas.geojson, etc).
  return request("/mesh-window-analysis");
}

/* ----------------------------------------------------------------------
   SETTINGS
   ---------------------------------------------------------------------- */
export async function getUserSettings() {
  // TODO (backend): GET /api/settings
  return request("/settings");
}

export async function updateUserSettings(settings) {
  // TODO (backend): PUT /api/settings  body: settings
  return request("/settings", {
    method: "PUT",
    body: JSON.stringify(settings),
  });
}
