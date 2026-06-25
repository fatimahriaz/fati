// ============================================================================
// ErrorMessage
// Shown when a page's API call fails. Includes a "Try again" button wired
// to the hook's `refetch` function so users aren't stuck on a dead page.
// ============================================================================

import "./ErrorMessage.css";

export default function ErrorMessage({ message = "Something went wrong.", onRetry }) {
  return (
    <div className="error-message" role="alert">
      <p className="error-message__text">{message}</p>
      {onRetry && (
        <button type="button" className="error-message__retry-btn" onClick={onRetry}>
          Try again
        </button>
      )}
    </div>
  );
}
