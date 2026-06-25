// ============================================================================
// App
// Defines every route in the application. This is the "map" of the whole
// site -- even though React technically renders everything as a single
// HTML page, react-router-dom makes it BEHAVE like a multi-page app: the
// URL changes, the back/forward browser buttons work, and only the
// relevant page component renders for a given path.
//
// Routes nested inside <Route element={<DashboardLayout />}> all share the
// sidebar + topbar shell (see DashboardLayout.jsx) -- only the inner page
// content swaps out between them.
// ============================================================================

import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import Login from "./components/pages/Login/Login";
import Home from "./components/pages/Home/Home";
import IncrementalMR from "./components/pages/IncrementalMR/IncrementalMR";
import EstimationReport from "./components/pages/EstimationReport/EstimationReport";

export default function App() {
  return (
    <Routes>
      {/* Login has no sidebar/topbar, so it sits outside DashboardLayout. */}
      <Route path="/login" element={<Login />} />

      {/* Every route below renders inside the shared dashboard shell. */}
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/incremental-mr" element={<IncrementalMR />} />
        <Route path="/estimation-report" element={<EstimationReport />} />

        {/* TODO: add these as each report page is built --
        <Route path="/mesh-window-analysis" element={<MeshWindowAnalysis />} />
        <Route path="/settings" element={<Settings />} />
        */}
      </Route>
    </Routes>
  );
}
