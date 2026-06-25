// ============================================================================
// StatCard
// The small metric cards used at the top of Home and Estimation Report
// (e.g. "124,582 Active Meters  +2.4%"). Fully reusable -- just pass in
// the icon, value, label, and optional delta.
// ============================================================================

import "./StatCard.css";

/**
 * @param {object} props
 * @param {React.ComponentType} props.icon - icon component to render in the badge
 * @param {string|number} props.value - the big headline number/percentage
 * @param {string} props.label - small caption under the value
 * @param {string} [props.delta] - e.g. "+2.4%" or "-3"
 * @param {'positive'|'negative'|'neutral'} [props.deltaTone] - controls delta color
 */
export default function StatCard({ icon: Icon, value, label, delta, deltaTone = "positive" }) {
  return (
    <div className="stat-card">
      <div className="stat-card__top">
        <div className="stat-card__icon">{Icon && <Icon width={20} height={20} />}</div>
        {delta && <span className={`stat-card__delta stat-card__delta--${deltaTone}`}>{delta}</span>}
      </div>
      <div className="stat-card__value">{value}</div>
      <div className="stat-card__label">{label}</div>
    </div>
  );
}
