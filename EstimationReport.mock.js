// ============================================================================
// MOCK DATA - Estimation Report
// Shaped to match the real backend's column names exactly, as specified
// by the backend team (EST_GROUP, East, West, Total, plus the hardware
// model and meter status column names below). Delete this file once the
// real API endpoint exists -- nothing in EstimationReport.jsx needs to
// change, it will receive this same shape from a real fetch() call.
// ============================================================================

// Available dates for the date selector dropdown. Real data would come
// from the backend (e.g. a list of dates that have data available).
export const MOCK_AVAILABLE_DATES = [
  "2026-06-18",
  "2026-06-17",
  "2026-06-16",
];

// ---- Estimation Group Table: EST_GROUP, East, West, Total ----
export const MOCK_ESTIMATION_GROUP_ROWS = [
  { EST_GROUP: "05 to 09", East: 912, West: 225, Total: 1137 },
  { EST_GROUP: "10 to 15", East: 648, West: 174, Total: 822 },
  { EST_GROUP: "16 to 20", East: 194, West: 54, Total: 248 },
  { EST_GROUP: "21 to 30", East: 146, West: 149, Total: 295 },
  { EST_GROUP: "31 to 40", East: 27, West: 12, Total: 39 },
  { EST_GROUP: "41 to 90", East: 10, West: 2, Total: 12 },
  { EST_GROUP: "Total", East: 1937, West: 616, Total: 2553 },
];

// ---- Hardware Model Table: EST_GROUP + one column per hardware model ----
// Column keys use short, code-safe names (e.g. G5_INTEGRATED_FOCUS_A);
// the full display names (with spaces) live in EstimationReport.jsx's
// column definitions, matched up to these keys.
export const MOCK_HARDWARE_MODEL_ROWS = [
  { EST_GROUP: "05 to 09", G5_INTEGRATED_FOCUS_A: 26, G5_INTEGRATED_FOCUS_A_XEI: 37, GRID_STREAM_RF_INVENTORY: 2, RF_ENHANCED_FOCUS_AX: 55, RF_ENHANCED_INTEGRATED: 461, RF_ENHANCED_OTHER: 20 },
  { EST_GROUP: "10 to 15", G5_INTEGRATED_FOCUS_A: 38, G5_INTEGRATED_FOCUS_A_XEI: 6, GRID_STREAM_RF_INVENTORY: 6, RF_ENHANCED_FOCUS_AX: 37, RF_ENHANCED_INTEGRATED: 292, RF_ENHANCED_OTHER: 42 },
  { EST_GROUP: "16 to 20", G5_INTEGRATED_FOCUS_A: 20, G5_INTEGRATED_FOCUS_A_XEI: 3, GRID_STREAM_RF_INVENTORY: 5, RF_ENHANCED_FOCUS_AX: 30, RF_ENHANCED_INTEGRATED: 102, RF_ENHANCED_OTHER: 17 },
  { EST_GROUP: "21 to 30", G5_INTEGRATED_FOCUS_A: 23, G5_INTEGRATED_FOCUS_A_XEI: 2, GRID_STREAM_RF_INVENTORY: 2, RF_ENHANCED_FOCUS_AX: 9, RF_ENHANCED_INTEGRATED: 77, RF_ENHANCED_OTHER: 25 },
  { EST_GROUP: "31 to 40", G5_INTEGRATED_FOCUS_A: 6, G5_INTEGRATED_FOCUS_A_XEI: 1, GRID_STREAM_RF_INVENTORY: 1, RF_ENHANCED_FOCUS_AX: null, RF_ENHANCED_INTEGRATED: 7, RF_ENHANCED_OTHER: 6 },
  { EST_GROUP: "41 to 90", G5_INTEGRATED_FOCUS_A: 1, G5_INTEGRATED_FOCUS_A_XEI: null, GRID_STREAM_RF_INVENTORY: 1, RF_ENHANCED_FOCUS_AX: 1, RF_ENHANCED_INTEGRATED: 2, RF_ENHANCED_OTHER: 7 },
  { EST_GROUP: "Total", G5_INTEGRATED_FOCUS_A: 114, G5_INTEGRATED_FOCUS_A_XEI: 49, GRID_STREAM_RF_INVENTORY: 17, RF_ENHANCED_FOCUS_AX: 132, RF_ENHANCED_INTEGRATED: 941, RF_ENHANCED_OTHER: 117 },
];

// ---- Meter Status Table: EST_GROUP, Configure, Discovered, Failed, Installed, Lost, Normal ----
export const MOCK_METER_STATUS_ROWS = [
  { EST_GROUP: "05 to 09", Configure: 5, Discovered: 22, Failed: 5, Installed: 14, Lost: 67, Normal: 996 },
  { EST_GROUP: "10 to 15", Configure: 9, Discovered: 3, Failed: 14, Installed: 9, Lost: 100, Normal: 672 },
  { EST_GROUP: "16 to 20", Configure: null, Discovered: 1, Failed: 6, Installed: 6, Lost: 26, Normal: 134 },
  { EST_GROUP: "21 to 30", Configure: 1, Discovered: null, Failed: 14, Installed: 12, Lost: 91, Normal: 158 },
  { EST_GROUP: "31 to 40", Configure: null, Discovered: 1, Failed: 1, Installed: 3, Lost: 10, Normal: 23 },
  { EST_GROUP: "41 to 90", Configure: null, Discovered: null, Failed: 3, Installed: 1, Lost: 2, Normal: 6 },
  { EST_GROUP: "Total", Configure: 15, Discovered: 27, Failed: 43, Installed: 45, Lost: 296, Normal: 1989 },
];
