// ============================================================================
// EstimationReport Page
// Matches the real backend spec from the Dash app: a date selector, plus
// three stacked tables (Estimation Group, Hardware Model, Meter Status),
// each broken down by EST_GROUP age bucket with a Total row.
// ============================================================================

import { useState } from "react";
import EstGroupTable from "./EstGroupTable";
import {
  MOCK_AVAILABLE_DATES,
  MOCK_ESTIMATION_GROUP_ROWS,
  MOCK_HARDWARE_MODEL_ROWS,
  MOCK_METER_STATUS_ROWS,
} from "./EstimationReport.mock";
import "./EstimationReport.css";

// --------------------------------------------------------------------
// BACKEND HOOKUP -- STEP 1 of 2:
// When the real API is ready, uncomment these two imports (and delete
// the MOCK_* import above):
//
// import { useApiData } from "../../../hooks/useApiData";
// import { getEstimationReport, getAvailableEstimationDates } from "../../../services/api";
// --------------------------------------------------------------------

// Column definitions for the Estimation Group table.
const ESTIMATION_GROUP_COLUMNS = [
  { key: "EST_GROUP", label: "EST_GROUP" },
  { key: "East", label: "East", align: "right" },
  { key: "West", label: "West", align: "right" },
  { key: "Total", label: "Total", align: "right" },
];

// Column definitions for the Hardware Model table. `key` values match the
// mock data's field names exactly -- update these only if the backend's
// real column names differ once the API is connected.
const HARDWARE_MODEL_COLUMNS = [
  { key: "EST_GROUP", label: "EST_GROUP" },
  { key: "G5_INTEGRATED_FOCUS_A", label: "G5 Integrated FOCUS A", align: "right" },
  { key: "G5_INTEGRATED_FOCUS_A_XEI", label: "G5 Integrated Focus A Xei", align: "right" },
  { key: "GRID_STREAM_RF_INVENTORY", label: "Grid Stream RF Inventory", align: "right" },
  { key: "RF_ENHANCED_FOCUS_AX", label: "RF Enhanced Focus AX", align: "right" },
  { key: "RF_ENHANCED_INTEGRATED", label: "RF Enhanced Integrated", align: "right" },
  { key: "RF_ENHANCED_OTHER", label: "RF Enhanced (Other)", align: "right" },
];

// Column definitions for the Meter Status table.
const METER_STATUS_COLUMNS = [
  { key: "EST_GROUP", label: "EST_GROUP" },
  { key: "Configure", label: "Configure", align: "right" },
  { key: "Discovered", label: "Discovered", align: "right" },
  { key: "Failed", label: "Failed", align: "right" },
  { key: "Installed", label: "Installed", align: "right" },
  { key: "Lost", label: "Lost", align: "right" },
  { key: "Normal", label: "Normal", align: "right" },
];

export default function EstimationReport() {
  // Tracks which date is currently selected in the dropdown. Defaults to
  // the most recent available date.
  const [selectedDate, setSelectedDate] = useState(MOCK_AVAILABLE_DATES[0]);

  // --------------------------------------------------------------------
  // BACKEND HOOKUP -- STEP 2 of 2:
  // Once the imports above are uncommented, replace this block with:
  //
  //   const { data: availableDates } = useApiData(getAvailableEstimationDates);
  //   const {
  //     data,
  //     isLoading,
  //     error,
  //   } = useApiData(() => getEstimationReport(selectedDate), [selectedDate]);
  //
  //   if (isLoading) return <LoadingSpinner />;
  //   if (error) return <ErrorMessage message={error} />;
  //
  //   const estimationGroupRows = data.estimationGroupRows;
  //   const hardwareModelRows = data.hardwareModelRows;
  //   const meterStatusRows = data.meterStatusRows;
  // --------------------------------------------------------------------
  const availableDates = MOCK_AVAILABLE_DATES;
  const estimationGroupRows = MOCK_ESTIMATION_GROUP_ROWS;
  const hardwareModelRows = MOCK_HARDWARE_MODEL_ROWS;
  const meterStatusRows = MOCK_METER_STATUS_ROWS;

  return (
    <div className="estimation-report-page">
      <header className="estimation-report-page__header">
        <h2>Estimation Report</h2>
        <p>Meter estimation breakdown by age group</p>
      </header>

      <section className="estimation-report-page__date-selector">
        <label htmlFor="date-selector" className="estimation-report-page__date-label">
          Date Selector
        </label>
        <select
          id="date-selector"
          value={selectedDate}
          onChange={(event) => setSelectedDate(event.target.value)}
          className="estimation-report-page__date-select"
        >
          {availableDates.map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>
      </section>

      <EstGroupTable
        title="Estimation Group Table"
        columns={ESTIMATION_GROUP_COLUMNS}
        rows={estimationGroupRows}
      />

      <EstGroupTable
        title="Hardware Model Table"
        columns={HARDWARE_MODEL_COLUMNS}
        rows={hardwareModelRows}
      />

      <EstGroupTable
        title="Meter Status Table"
        columns={METER_STATUS_COLUMNS}
        rows={meterStatusRows}
      />
    </div>
  );
}
