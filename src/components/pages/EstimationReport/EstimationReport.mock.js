// ============================================================================
// MOCK DATA - Estimation Report
// Shaped to match the Figma screenshot exactly: 4 summary stats, and a
// zone-by-zone table with columns Zone, Total Meters, Estimated,
// Percentage, and Variance (Low/Medium/High).
//
// Delete this file once the real API endpoint exists -- nothing in
// EstimationReport.jsx needs to change, it will just receive this same
// shape from a real fetch() call instead.
// ============================================================================

export const MOCK_ESTIMATION_SUMMARY = {
  totalMeters: 40550,
  estimatedReads: 907,
  estimationRate: "2.24%",
  highVarianceZones: 1,
};

// `variance` must be exactly "Low", "Medium", or "High" -- these three
// strings are mapped directly to StatusBadge colors in EstimationReport.jsx.
export const MOCK_ESTIMATION_ZONES = [
  { zone: "Zone 1", totalMeters: 8420, estimated: 124, percentage: "1.47%", variance: "Low" },
  { zone: "Zone 2", totalMeters: 7890, estimated: 198, percentage: "2.51%", variance: "Medium" },
  { zone: "Zone 3", totalMeters: 9120, estimated: 87, percentage: "0.95%", variance: "Low" },
  { zone: "Zone 4", totalMeters: 6780, estimated: 342, percentage: "5.04%", variance: "High" },
  { zone: "Zone 5", totalMeters: 8340, estimated: 156, percentage: "1.87%", variance: "Low" },
];
