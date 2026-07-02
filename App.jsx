// ============================================================================
// App
// Route map for the whole application. Every page is listed here.
// Pages nested inside <Route element={<DashboardLayout />}> share the
// sidebar + topbar shell via DashboardLayout's <Outlet />.
// ============================================================================

import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import Login from "./components/pages/Login/Login";
import Home from "./components/pages/Home/Home";
import IncrementalMR from "./components/pages/IncrementalMR/IncrementalMR";
import EstimationReport from "./components/pages/EstimationReport/EstimationReport";
import MeterStatuses from "./components/pages/MeterStatuses/MeterStatuses";
import DeviceSummary from "./components/pages/DeviceSummary/DeviceSummary";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/incremental-mr" element={<IncrementalMR />} />
        <Route path="/estimation-report" element={<EstimationReport />} />
        <Route path="/meter-statuses" element={<MeterStatuses />} />
        <Route path="/device-summary" element={<DeviceSummary />} />
      </Route>
    </Routes>
  );
}
