// ============================================================================
// NAVIGATION CONFIG
// Single source of truth for the sidebar's nav items. Add a new page by
// adding one entry here -- the Sidebar component renders this list, and
// App.jsx's <Routes> map page paths to their components. Keeping the list
// in one file means the sidebar can never drift out of sync with the routes.
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
    label: "Estimation Report",
    path: "/estimation-report",
    icon: EstimationIcon,
  },
  {
    label: "Incremental MR",
    path: "/incremental-mr",
    icon: IncrementalIcon,
  },
  {
    label: "Mesh Window Analysis",
    path: "/mesh-window-analysis",
    icon: MeshGridIcon,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: SettingsIcon,
  },
];
