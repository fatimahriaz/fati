// ============================================================================
// DashboardLayout
// The shell every authenticated page sits inside: Sidebar on the left,
// TopBar across the top, and the active page's content in between.
// React Router renders the matched page component into <Outlet /> --
// see App.jsx for how routes are nested under this layout.
// ============================================================================

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import "./DashboardLayout.css";

export default function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-layout__main">
        <TopBar />
        <main className="dashboard-layout__content">
          {/* The matched child route (Home, EstimationReport, etc.) renders here */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
