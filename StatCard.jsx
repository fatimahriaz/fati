// ============================================================================
// StatCard
// The small metric card showing one headline number, a label, an optional
// delta, and an optional percentage sub-value. Used on Home and on each
// report page for metrics like Active Meter Count, MR Count + %, LP Count + %.
// ============================================================================

import "./StatCard.css";

/**
 * @param {object} props
 * @param {string|number} props.value - the big headline number, e.g. "124,582"
 * @param {string} props.label - caption under the value, e.g. "Active Meter Count"
 * @param {string} [props.delta] - change indicator, e.g. "+2.4%"
 * @param {'positive'|'negative'|'neutral'} [props.deltaTone]
 * @param {string} [props.percentage] - secondary metric shown below label, e.g. "2.4%"
 * @param {string} [props.percentageLabel] - label for the percentage, e.g. "of total"
 */
export default function StatCard({
  value,
  label,
  delta,
  deltaTone = "positive",
  percentage,
  percentageLabel,
}) {
  return (
    <div className="stat-card">
      <div className="stat-card__top">
        {delta && (
          <span className={`stat-card__delta stat-card__delta--${deltaTone}`}>
            {delta}
          </span>
        )}
      </div>
      <div className="stat-card__value">{value}</div>
      <div className="stat-card__label">{label}</div>
      {percentage && (
        <div className="stat-card__percentage">
          <span className="stat-card__percentage-value">{percentage}</span>
          {percentageLabel && (
            <span className="stat-card__percentage-label"> {percentageLabel}</span>
          )}
        </div>
      )}
    </div>
  );
}
