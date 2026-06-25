// ============================================================================
// LoadingSpinner
// Simple centered spinner shown while a page's API call is in flight.
// ============================================================================

import "./LoadingSpinner.css";

export default function LoadingSpinner({ label = "Loading..." }) {
  return (
    <div className="loading-spinner" role="status" aria-live="polite">
      <div className="loading-spinner__circle" />
      <span className="loading-spinner__label">{label}</span>
    </div>
  );
}
