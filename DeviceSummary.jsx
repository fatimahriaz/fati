// ============================================================================
// DeviceSummary Page
// Three summary cards (Meter Count, Router Count, Collector Count) plus
// two hardware tables (Meter Hardware Counts, Router Hardware Counts).
//
// BACKEND HOOKUP:
// Replace MOCK_* imports with useApiData(getDeviceSummary).
// Backend returns: { cards, meterHardwareRows, routerHardwareRows }
// ============================================================================

import StatCard from "../../common/StatCard";
import DataTable from "../../common/DataTable";
import {
  MOCK_DEVICE_SUMMARY_CARDS,
  MOCK_METER_HARDWARE_COLUMNS,
  MOCK_METER_HARDWARE_ROWS,
  MOCK_ROUTER_HARDWARE_COLUMNS,
  MOCK_ROUTER_HARDWARE_ROWS,
} from "./DeviceSummary.mock";
import "./DeviceSummary.css";

export default function DeviceSummary() {
  // BACKEND HOOKUP: replace these with:
  // const { data, isLoading, error } = useApiData(getDeviceSummary);
  // if (isLoading) return <LoadingSpinner />;
  // if (error) return <ErrorMessage message={error} />;
  // const { cards, meterHardwareRows, routerHardwareRows } = data;
  const cards = MOCK_DEVICE_SUMMARY_CARDS;
  const meterHardwareRows = MOCK_METER_HARDWARE_ROWS;
  const routerHardwareRows = MOCK_ROUTER_HARDWARE_ROWS;

  return (
    <div className="device-summary-page">
      <header className="device-summary-page__header">
        <h2>Device Summary</h2>
        <p>Hardware inventory and device status breakdown</p>
      </header>

      {/* ---- Summary cards ---- */}
      <section className="device-summary-page__stats">
        <StatCard value={cards.meterCount.value} label={cards.meterCount.label} />
        <StatCard value={cards.routerCount.value} label={cards.routerCount.label} />
        <StatCard value={cards.collectorCount.value} label={cards.collectorCount.label} />
      </section>

      {/* ---- Meter Hardware Counts table ---- */}
      <section>
        <h3 className="device-summary-page__table-title">Meter Hardware Counts</h3>
        <DataTable columns={MOCK_METER_HARDWARE_COLUMNS} rows={meterHardwareRows} />
      </section>

      {/* ---- Router Hardware Counts table ---- */}
      <section>
        <h3 className="device-summary-page__table-title">Router Hardware Counts</h3>
        <DataTable columns={MOCK_ROUTER_HARDWARE_COLUMNS} rows={routerHardwareRows} />
      </section>
    </div>
  );
}
