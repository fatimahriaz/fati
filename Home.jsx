// ============================================================================
// Home Page
// Dashboard overview: three stat cards (Active Meter Count, MR Count + %,
// LP Count + %), recent reports list, system alerts, quick actions.
// ============================================================================

import StatCard from "../../common/StatCard";
import StatusBadge from "../../common/StatusBadge";
import { AlertIcon } from "../../common/icons";
import {
  MOCK_DASHBOARD_STATS,
  MOCK_RECENT_REPORTS,
  MOCK_SYSTEM_ALERTS,
} from "./Home.mock";
import "./Home.css";

// Maps backend status strings to StatusBadge color tones.
const STATUS_TONE_MAP = {
  Completed: "success",
  "In Progress": "info",
};

const QUICK_ACTIONS = [
  { title: "Generate Report", description: "Create new analysis" },
  { title: "Export Data", description: "Download datasets" },
  { title: "Schedule Task", description: "Automated reports" },
  { title: "View Documentation", description: "Help & guides" },
];

export default function Home() {
  // BACKEND HOOKUP: replace MOCK_DASHBOARD_STATS, MOCK_RECENT_REPORTS,
  // and MOCK_SYSTEM_ALERTS with useApiData(getDashboardOverview) once
  // the /api/dashboard/overview endpoint exists.
  const stats = MOCK_DASHBOARD_STATS;
  const recentReports = MOCK_RECENT_REPORTS;
  const systemAlerts = MOCK_SYSTEM_ALERTS;

  return (
    <div className="home-page">
      <header className="home-page__header">
        <h2>Dashboard Overview</h2>
        <p>Monitor your AMS reporting metrics and recent activity</p>
      </header>

      {/* ---- Stat cards: Active Meter Count, MR Count + %, LP Count + % ---- */}
      <section className="home-page__stats">
        <StatCard
          value={stats.activeMeterCount.value}
          label="Active Meter Count"
          delta={stats.activeMeterCount.delta}
          deltaTone={stats.activeMeterCount.deltaTone}
        />
        <StatCard
          value={stats.mrCount.value}
          label="MR Count"
          percentage={stats.mrCount.percentage}
          percentageLabel={stats.mrCount.percentageLabel}
        />
        <StatCard
          value={stats.lpCount.value}
          label="LP Count"
          percentage={stats.lpCount.percentage}
          percentageLabel={stats.lpCount.percentageLabel}
        />
      </section>

      {/* ---- Recent reports + system alerts ---- */}
      <section className="home-page__panels">
        <div className="panel">
          <h3 className="panel__title">Recent Reports</h3>
          <ul className="report-list">
            {recentReports.map((report) => (
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
            {systemAlerts.map((alert) => (
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
              <span className="quick-action-card__title">{action.title}</span>
              <span className="quick-action-card__description">{action.description}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
