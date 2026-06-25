// ============================================================================
// MOCK DATA - Home / Dashboard Overview
// Mirrors the exact shape `getDashboardOverview()` should return once the
// Python backend is connected (see src/services/api.js for the documented
// response contract). Delete this file once the real endpoint is live --
// Home.jsx is written to accept either source through the same prop shape.
// ============================================================================

import { ActivityIcon, TrendUpIcon, UsersGroupIcon, AlertIcon } from "../../common/icons";

export const MOCK_DASHBOARD_OVERVIEW = {
  stats: {
    activeMeters: { value: "124,582", deltaPercent: "+2.4%", icon: ActivityIcon },
    dataQualityScore: { value: "97.8%", deltaPercent: "+0.3%", icon: TrendUpIcon },
    activeUsers: { value: "48", deltaPercent: "+5", icon: UsersGroupIcon },
    pendingAlerts: { value: "12", deltaPercent: "-3", icon: AlertIcon, tone: "negative" },
  },
  recentReports: [
    { id: "rep-1", name: "Estimation Report", date: "2026-06-02", status: "Completed" },
    { id: "rep-2", name: "Mesh Window Analysis", date: "2026-06-01", status: "Completed" },
    { id: "rep-3", name: "Incremental vs Standard MR", date: "2026-06-01", status: "In Progress" },
    { id: "rep-4", name: "Data Quality Report", date: "2026-05-31", status: "Completed" },
  ],
  systemAlerts: [
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
      detail: "System downtime: 2026-06-05, 2:00 AM",
    },
  ],
};
