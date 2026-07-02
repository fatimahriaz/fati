// ============================================================================
// MOCK DATA - Home / Dashboard Overview
// Matches the new card spec: Active Meter Count, MR Count + %, LP Count + %.
// Delete this file once the real API endpoint exists.
// ============================================================================

export const MOCK_DASHBOARD_STATS = {
  activeMeterCount: { value: "4,121,543", delta: "+1.2%", deltaTone: "positive" },
  mrCount: { value: "4,117,752", percentage: "99.9%", percentageLabel: "of active meters" },
  lpCount: { value: "2,847,301", percentage: "69.1%", percentageLabel: "of active meters" },
};

export const MOCK_RECENT_REPORTS = [
  { id: "rep-1", name: "Estimation Report", date: "2026-06-30", status: "Completed" },
  { id: "rep-2", name: "Incremental MR", date: "2026-06-30", status: "Completed" },
  { id: "rep-3", name: "Meter Statuses", date: "2026-06-30", status: "In Progress" },
  { id: "rep-4", name: "Device Summary", date: "2026-06-29", status: "Completed" },
];

export const MOCK_SYSTEM_ALERTS = [
  {
    id: "alert-1",
    severity: "warning",
    title: "High estimation variance detected",
    detail: "Region 4 - Zones 12-18",
  },
  {
    id: "alert-2",
    severity: "info",
    title: "Scheduled maintenance",
    detail: "System downtime: 2026-07-05, 2:00 AM",
  },
];
