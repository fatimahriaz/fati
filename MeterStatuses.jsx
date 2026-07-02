// ============================================================================
// MeterStatuses Page
// Daily snapshot of meter counts by status, plus two charts:
//   - A time series line chart showing historical status trends
//   - A pie/donut chart showing the current distribution
//
// BACKEND HOOKUP:
// Replace the three MOCK_* imports with useApiData(getMeterStatuses).
// The backend returns { summary, timeSeriesFigure, pieFigure, tableRows }
// where timeSeriesFigure and pieFigure are Plotly figure JSON objects
// (same format Python's plotly.express or go.Figure().to_json() produces).
// ============================================================================

import StatCard from "../../common/StatCard";
import DataTable from "../../common/DataTable";
import PlotlyChart from "../../common/PlotlyChart";
import {
  MOCK_METER_STATUS_SUMMARY,
  MOCK_TIME_SERIES_FIGURE,
  MOCK_PIE_FIGURE,
  MOCK_METER_STATUS_TABLE,
} from "./MeterStatuses.mock";
import "./MeterStatuses.css";

const TABLE_COLUMNS = [
  { key: "date", label: "Date" },
  { key: "Normal", label: "Normal", align: "right" },
  { key: "Failed", label: "Failed", align: "right" },
  { key: "Lost", label: "Lost", align: "right" },
  { key: "Installed", label: "Installed", align: "right" },
  { key: "Configure", label: "Configure", align: "right" },
  { key: "Discovered", label: "Discovered", align: "right" },
];

export default function MeterStatuses() {
  // BACKEND HOOKUP: replace these with:
  // const { data, isLoading, error } = useApiData(getMeterStatuses);
  // if (isLoading) return <LoadingSpinner />;
  // if (error) return <ErrorMessage message={error} />;
  // const { summary, timeSeriesFigure, pieFigure, tableRows } = data;
  const summary = MOCK_METER_STATUS_SUMMARY;
  const timeSeriesFigure = MOCK_TIME_SERIES_FIGURE;
  const pieFigure = MOCK_PIE_FIGURE;
  const tableRows = MOCK_METER_STATUS_TABLE;

  return (
    <div className="meter-statuses-page">
      <header className="meter-statuses-page__header">
        <h2>Meter Statuses</h2>
        <p>Daily snapshot of meter counts by status</p>
      </header>

      {/* ---- Summary cards ---- */}
      <section className="meter-statuses-page__stats">
        <StatCard value={summary.normal.value} label={summary.normal.label} />
        <StatCard value={summary.failed.value} label={summary.failed.label} deltaTone="negative" />
        <StatCard value={summary.lost.value} label={summary.lost.label} deltaTone="negative" />
        <StatCard value={summary.installed.value} label={summary.installed.label} />
      </section>

      {/* ---- Charts ---- */}
      <section className="meter-statuses-page__charts">
        <PlotlyChart
          data={timeSeriesFigure.data}
          layout={timeSeriesFigure.layout}
        />
        <PlotlyChart
          data={pieFigure.data}
          layout={pieFigure.layout}
        />
      </section>

      {/* ---- Daily snapshot table ---- */}
      <section>
        <h3 className="meter-statuses-page__table-title">Daily Snapshot</h3>
        <DataTable columns={TABLE_COLUMNS} rows={tableRows} />
      </section>
    </div>
  );
}
