// ============================================================================
// NAVIGATION CONFIG
// Single source of truth for the sidebar. The "Reports" group is a
// collapsible folder -- its children array contains the report pages.
// Sidebar.jsx reads this structure and handles open/close state.
// To add a new page: either add to a group's children array, or add
// as a standalone item at the top level.
// ============================================================================

import {
  HomeIcon,
  EstimationIcon,
  IncrementalIcon,
  MeshGridIcon,
  SettingsIcon,
} from "../components/common/icons";

export const NAV_ITEMS = [
  {
    label: "Home",
    path: "/",
    icon: HomeIcon,
  },
  {
    // A group renders as a collapsible folder in the sidebar.
    label: "Reports",
    icon: EstimationIcon,
    group: true,
    children: [
      { label: "Incremental MR", path: "/incremental-mr", icon: IncrementalIcon },
      { label: "Estimation Report", path: "/estimation-report", icon: EstimationIcon },
    ],
  },
  {
    label: "Meter Statuses",
    path: "/meter-statuses",
    icon: MeshGridIcon,
  },
  {
    label: "Device Summary",
    path: "/device-summary",
    icon: SettingsIcon,
  },
];
