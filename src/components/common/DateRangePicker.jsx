// ============================================================================
// DateRangePicker
// A reusable "start date -> end date" control, matching the "Date Range:"
// field seen at the top of the Incremental MR report.
//
// HOW THIS COMPONENT WORKS (read this if you're new to React):
// This component does NOT keep track of the dates itself. Instead, it
// receives the current values (startDate, endDate) as props, and reports
// changes back UP to whichever page is using it, via the onChange callback.
// This pattern is called "controlled inputs" -- the parent page is the
// single source of truth, and this component just displays/edits it.
//
// Why build it this way instead of letting this component manage its own
// state? Because the page (e.g. IncrementalMR.jsx) needs to know the
// selected dates too, so it can re-fetch data from the API when they
// change. If this component hid its own state, the page would have no way
// to react to a date change.
// ============================================================================

import "./DateRangePicker.css";

/**
 * @param {object} props
 * @param {string} props.startDate - ISO date string, e.g. "2026-05-24"
 * @param {string} props.endDate - ISO date string, e.g. "2026-06-23"
 * @param {(next: { startDate: string, endDate: string }) => void} props.onChange
 *   called with the new { startDate, endDate } whenever either field changes
 * @param {string} [props.label] - field label, defaults to "Date Range"
 */
export default function DateRangePicker({ startDate, endDate, onChange, label = "Date Range" }) {
  function handleStartChange(event) {
    onChange({ startDate: event.target.value, endDate });
  }

  function handleEndChange(event) {
    onChange({ startDate, endDate: event.target.value });
  }

  return (
    <div className="date-range-picker">
      <label className="date-range-picker__label">{label}:</label>
      <div className="date-range-picker__inputs">
        <input
          type="date"
          value={startDate}
          onChange={handleStartChange}
          aria-label="Start date"
        />
        <span className="date-range-picker__arrow">→</span>
        <input
          type="date"
          value={endDate}
          onChange={handleEndChange}
          aria-label="End date"
        />
      </div>
    </div>
  );
}
