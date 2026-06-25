// ============================================================================
// StatusBadge
// Small colored pill used for statuses like "Completed", "In Progress",
// and variance levels like "Low" / "Medium" / "High". The `tone` prop
// controls the color -- map your backend's status strings to a tone in
// the page component, e.g.:
//   const TONE_MAP = { Completed: 'success', 'In Progress': 'info', High: 'danger' }
// ============================================================================

import "./StatusBadge.css";

/**
 * @param {object} props
 * @param {string} props.label - text shown inside the badge
 * @param {'success'|'info'|'warning'|'danger'|'neutral'} [props.tone] - color variant
 */
export default function StatusBadge({ label, tone = "neutral" }) {
  return <span className={`status-badge status-badge--${tone}`}>{label}</span>;
}
