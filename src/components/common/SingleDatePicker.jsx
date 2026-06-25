// ============================================================================
// SingleDatePicker
// A reusable single-date field, matching the "File Date:" control on the
// Incremental MR report. Same "controlled input" pattern as
// DateRangePicker -- this component holds no state of its own, it just
// displays the `value` prop and calls `onChange` when the user picks a
// new date.
// ============================================================================

import "./SingleDatePicker.css";

/**
 * @param {object} props
 * @param {string} props.value - ISO date string, e.g. "2026-06-23"
 * @param {(nextValue: string) => void} props.onChange
 * @param {string} props.label - field label, e.g. "File Date"
 */
export default function SingleDatePicker({ value, onChange, label }) {
  return (
    <div className="single-date-picker">
      <label className="single-date-picker__label">{label}:</label>
      <input
        type="date"
        className="single-date-picker__input"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label={label}
      />
    </div>
  );
}
