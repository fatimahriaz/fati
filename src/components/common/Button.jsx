// ============================================================================
// Button
// A small reusable button with two visual styles ("variants"):
//   - "primary": solid maroon background (e.g. the "Export" button)
//   - "secondary": white background with a border (e.g. the "Filter" button)
// Any icon can be passed in to show on the left side of the label.
// ============================================================================

import "./Button.css";

/**
 * @param {object} props
 * @param {React.ComponentType} [props.icon] - icon component shown before the label
 * @param {'primary'|'secondary'} [props.variant] - visual style, defaults to "secondary"
 * @param {() => void} [props.onClick]
 * @param {React.ReactNode} props.children - the button's label text
 */
export default function Button({ icon: Icon, variant = "secondary", onClick, children }) {
  return (
    <button type="button" className={`btn btn--${variant}`} onClick={onClick}>
      {Icon && <Icon width={16} height={16} />}
      {children}
    </button>
  );
}
