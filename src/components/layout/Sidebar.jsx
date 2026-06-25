// ============================================================================
// Sidebar
// The maroon left-hand navigation column visible on every page after login.
// Reads its links from src/config/navigation.js, so adding a new page is a
// one-line change there rather than editing this file.
// ============================================================================

import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../../config/navigation";
import "./Sidebar.css";

export default function Sidebar() {
  // JSX requires a component used as a tag (e.g. <Icon />) to be a simple
  // variable name -- you can't write <NAV_ITEMS[0].icon /> directly, so we
  // pull it out into its own variable first.
  const BrandIcon = NAV_ITEMS[0].icon;

  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <span className="sidebar__brand-icon">
          <BrandIcon width={18} height={18} />
        </span>
        <span className="sidebar__brand-name">AMS</span>
      </div>

      <nav className="sidebar__nav">
        <ul>
          {NAV_ITEMS.map(({ label, path, icon: Icon }) => (
            <li key={path}>
              <NavLink
                to={path}
                // "end" ensures "/" (Home) doesn't stay highlighted when on a sub-route
                end={path === "/"}
                className={({ isActive }) =>
                  `sidebar__link${isActive ? " sidebar__link--active" : ""}`
                }
              >
                <Icon className="sidebar__link-icon" />
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
