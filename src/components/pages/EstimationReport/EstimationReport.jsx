// ============================================================================
// EstimationReport Page
// Matches the Figma screenshot: 4 summary stat cards, a Filter + Export
// button pair, and a zone-by-zone table (Zone, Total Meters, Estimated,
// Percentage, Variance).
// ============================================================================

import StatCard from "../../common/StatCard";
import StatusBadge from "../../common/StatusBadge";
import Button from "../../common/Button";
import DataTable from "../../common/DataTable";
import { FilterIcon, ExportIcon } from "../../common/icons";
import {
  MOCK_ESTIMATION_SUMMARY,
  MOCK_ESTIMATION_ZONES,
} from "./EstimationReport.mock";
import "./EstimationReport.css";

// --------------------------------------------------------------------
// BACKEND HOOKUP -- STEP 1 of 2:
// When the real API is ready, uncomment these two imports (and delete
// the MOCK_* import above):
//
// import { useApiData } from "../../../hooks/useApiData";
// import { getEstimationReport } from "../../../services/api";
// --------------------------------------------------------------------

// Maps each zone's `variance` string to a StatusBadge color. Keep this in
// sync with whatever exact strings the backend sends -- if it ever sends
// something other than "Low"/"Medium"/"High", add it here too.
const VARIANCE_TONE_MAP = {
  Low: "success",
  Medium: "warning",
  High: "danger",
};

// Column definitions for the zone table. `key` values match the field
// names used in EstimationReport.mock.js -- if/when the backend uses
// different field names, update them here (this is the ONLY place that
// needs to change).
const ZONE_TABLE_COLUMNS = [
  { key: "zone", label: "ZONE" },
  { key: "totalMeters", label: "TOTAL METERS" },
  { key: "estimated", label: "ESTIMATED" },
  { key: "percentage", label: "PERCENTAGE" },
  { key: "varianceBadge", label: "VARIANCE" },
];

export default function EstimationReport() {
  // --------------------------------------------------------------------
  // BACKEND HOOKUP -- STEP 2 of 2:
  // Replace this block with:
  //
  //   const { data, isLoading, error } = useApiData(getEstimationReport);
  //   if (isLoading) return <LoadingSpinner />;
  //   if (error) return <ErrorMessage message={error} />;
  //   const summary = data.summary;
  //   const zones = data.zones;
  // --------------------------------------------------------------------
  const summary = MOCK_ESTIMATION_SUMMARY;
  const zones = MOCK_ESTIMATION_ZONES;

  // DataTable just prints whatever is in each row's matching key, so we
  // pre-build a "varianceBadge" field on each row here, turning the plain
  // text ("Low"/"Medium"/"High") into an actual colored <StatusBadge />
  // element before handing the rows to the table.
  const rowsWithBadges = zones.map((zoneRow) => ({
    ...zoneRow,
    varianceBadge: (
      <StatusBadge label={zoneRow.variance} tone={VARIANCE_TONE_MAP[zoneRow.variance]} />
    ),
  }));

  return (
    <div className="estimation-report-page">
      <header className="estimation-report-page__header">
        <div>
          <h2>Estimation Report</h2>
          <p>Meter estimation analysis by zone</p>
        </div>
        <div className="estimation-report-page__actions">
          <Button icon={FilterIcon}>Filter</Button>
          <Button icon={ExportIcon} variant="primary">
            Export
          </Button>
        </div>
      </header>

      <section className="estimation-report-page__stats">
        <StatCard value={summary.totalMeters.toLocaleString()} label="Total Meters" />
        <StatCard value={summary.estimatedReads.toLocaleString()} label="Estimated Reads" />
        <StatCard value={summary.estimationRate} label="Estimation Rate" />
        <StatCard value={summary.highVarianceZones} label="High Variance Zones" />
      </section>

      <section>
        <DataTable columns={ZONE_TABLE_COLUMNS} rows={rowsWithBadges} />
      </section>
    </div>
  );
}
