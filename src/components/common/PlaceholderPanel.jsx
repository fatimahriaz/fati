// ============================================================================
// PlaceholderPanel
// A reusable "this part is waiting on the backend" block. Use this for any
// chart/table/widget that the Python backend will eventually populate via
// the API, so it's visually obvious (in dev) which sections still need to
// be wired up, and so non-technical reviewers see "Coming Soon" instead of
// a broken-looking blank space.
//
// Once a real API call returns data for a section, simply swap the
// <PlaceholderPanel /> for the real chart/table component -- no other
// layout changes needed since this panel takes the same amount of space.
// ============================================================================

import "./PlaceholderPanel.css";

/**
 * @param {object} props
 * @param {string} [props.title] - heading shown inside the panel, e.g. "Coming Soon"
 * @param {string} [props.description] - helper text under the title
 * @param {string} [props.expectedDataNote] - dev-facing note describing what API
 *   endpoint / data shape this panel is waiting on (rendered small and muted)
 * @param {number|string} [props.minHeight] - reserve vertical space so layout
 *   doesn't jump once real content replaces this panel
 */
export default function PlaceholderPanel({
  title = "Coming Soon",
  description = "This section is under development",
  expectedDataNote,
  minHeight = 240,
}) {
  return (
    <div className="placeholder-panel" style={{ minHeight }}>
      <div className="placeholder-panel__content">
        <p className="placeholder-panel__title">{title}</p>
        <p className="placeholder-panel__description">{description}</p>
        {expectedDataNote && (
          // Dev note: not user-facing copy, just a build-time reminder of
          // what API response this block expects once the backend is live.
          <p className="placeholder-panel__dev-note">{expectedDataNote}</p>
        )}
      </div>
    </div>
  );
}
