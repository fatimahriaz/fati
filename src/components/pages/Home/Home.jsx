// ============================================================================
// Home Page (Dashboard Overview)
// Shows 4 top-level stat cards, a "Recent Reports" list, a "System Alerts"
// panel, and 4 quick action shortcuts. Data currently comes from
// Home.mock.js -- swap MOCK_DASHBOARD_OVERVIEW for the real
// getDashboardOverview() API call (see commented block below) once the
// Python backend's /api/dashboard/overview endpoint is ready.
// ============================================================================

import StatCard from "../../common/StatCard";
import StatusBadge from "../../common/StatusBadge";
import {
  ActivityIcon,
  AlertIcon,
} from "../../common/icons";
import { MOCK_DASHBOARD_OVERVIEW } from "./Home.mock";
import "./Home.css";

// Maps a report's backend status string to the StatusBadge color tone.
const STATUS_TONE_MAP = {
  Completed: "success",
  "In Progress": "info",
};

// Quick action shortcuts shown at the bottom of the page. `onClick` handlers
// are left as placeholders -- wire these up to real navigation/actions
// once those flows exist (e.g. open the report generator modal).
const QUICK_ACTIONS = [
  { title: "Generate Report", description: "Create new analysis" },
  { title: "Export Data", description: "Download datasets" },
  { title: "Schedule Task", description: "Automated reports" },
  { title: "View Documentation", description: "Help & guides" },
];

export default function Home() {
  // --------------------------------------------------------------------
  // BACKEND HOOKUP POINT:
  // Once /api/dashboard/overview exists, replace the line below with:
  //
  //   const { data, isLoading, error, refetch } = useApiData(getDashboardOverview);
  //   if (isLoading) return <LoadingSpinner />;
  //   if (error) return <ErrorMessage message={error} onRetry={refetch} />;
  //
  // and remove the Home.mock.js import.
  // --------------------------------------------------------------------
  const data = MOCK_DASHBOARD_OVERVIEW;

  return (
    <div className="home-page">
      <header className="home-page__header">
        <h2>Dashboard Overview</h2>
        <p>Monitor your AMS reporting metrics and recent activity</p>
      </header>

      {/* ---- Stat cards ---- */}
      <section className="home-page__stats" aria-label="Key metrics">
        <StatCard
          icon={data.stats.activeMeters.icon}
          value={data.stats.activeMeters.value}
          label="Active Meters"
          delta={data.stats.activeMeters.deltaPercent}
        />
        <StatCard
          icon={data.stats.dataQualityScore.icon}
          value={data.stats.dataQualityScore.value}
          label="Data Quality Score"
          delta={data.stats.dataQualityScore.deltaPercent}
        />
        <StatCard
          icon={data.stats.activeUsers.icon}
          value={data.stats.activeUsers.value}
          label="Active Users"
          delta={data.stats.activeUsers.deltaPercent}
        />
        <StatCard
          icon={data.stats.pendingAlerts.icon}
          value={data.stats.pendingAlerts.value}
          label="Pending Alerts"
          delta={data.stats.pendingAlerts.deltaPercent}
          deltaTone="negative"
        />
      </section>

      {/* ---- Recent reports + system alerts ---- */}
      <section className="home-page__panels">
        <div className="panel">
          <h3 className="panel__title">Recent Reports</h3>
          <ul className="report-list">
            {data.recentReports.map((report) => (
              <li key={report.id} className="report-list__item">
                <div>
                  <p className="report-list__name">{report.name}</p>
                  <p className="report-list__date">{report.date}</p>
                </div>
                <StatusBadge
                  label={report.status}
                  tone={STATUS_TONE_MAP[report.status] || "neutral"}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="panel">
          <h3 className="panel__title">System Alerts</h3>
          <div className="alert-list">
            {data.systemAlerts.map((alert) => (
              <div key={alert.id} className={`alert-item alert-item--${alert.severity}`}>
                <AlertIcon width={18} height={18} className="alert-item__icon" />
                <div>
                  <p className="alert-item__title">{alert.title}</p>
                  <p className="alert-item__detail">{alert.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Quick actions ---- */}
      <section className="panel">
        <h3 className="panel__title">Quick Actions</h3>
        <div className="quick-actions">
          {QUICK_ACTIONS.map((action) => (
            <button key={action.title} type="button" className="quick-action-card">
              <ActivityIcon width={16} height={16} className="quick-action-card__icon" />
              <span className="quick-action-card__title">{action.title}</span>
              <span className="quick-action-card__description">{action.description}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
