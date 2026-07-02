// ============================================================================
// Sidebar
// The maroon left-hand navigation. Supports two types of nav items:
//   1. A plain link (item has a `path`) -- renders a NavLink directly
//   2. A collapsible group (item has `group: true` and `children`) --
//      renders a folder toggle that expands/collapses its child links
//
// The open/closed state of each group is tracked locally in this component
// using useState -- one boolean per group, keyed by the group's label.
// ============================================================================

import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "../../config/navigation";
import "./Sidebar.css";

export default function Sidebar() {
  // Tracks which groups are currently open. Keyed by group label.
  // Default: "Reports" starts open so the sub-pages are visible on load.
  const [openGroups, setOpenGroups] = useState({ Reports: true });
  const location = useLocation();

  function toggleGroup(label) {
    setOpenGroups((prev) => ({ ...prev, [label]: !prev[label] }));
  }

  // Returns true if any child of a group matches the current URL,
  // so the group label itself gets an "active" tint even when collapsed.
  function groupIsActive(children) {
    return children.some((child) => location.pathname === child.path);
  }

  return (
    <aside className="sidebar">
      <div className="sidebar__brand">AMS</div>

      <nav className="sidebar__nav">
        <ul>
          {NAV_ITEMS.map((item) => {
            if (item.group) {
              const isOpen = !!openGroups[item.label];
              const active = groupIsActive(item.children);
              const Icon = item.icon;

              return (
                <li key={item.label}>
                  {/* Group toggle button */}
                  <button
                    type="button"
                    className={`sidebar__group-toggle${active ? " sidebar__group-toggle--active" : ""}`}
                    onClick={() => toggleGroup(item.label)}
                    aria-expanded={isOpen}
                  >
                    <Icon className="sidebar__link-icon" />
                    <span>{item.label}</span>
                    <span className="sidebar__chevron">{isOpen ? "▾" : "▸"}</span>
                  </button>

                  {/* Child links -- only rendered when group is open */}
                  {isOpen && (
                    <ul className="sidebar__group-children">
                      {item.children.map((child) => {
                        const ChildIcon = child.icon;
                        return (
                          <li key={child.path}>
                            <NavLink
                              to={child.path}
                              end
                              className={({ isActive }) =>
                                `sidebar__link sidebar__link--child${isActive ? " sidebar__link--active" : ""}`
                              }
                            >
                              <ChildIcon className="sidebar__link-icon" />
                              <span>{child.label}</span>
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            }

            // Plain link
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `sidebar__link${isActive ? " sidebar__link--active" : ""}`
                  }
                >
                  <Icon className="sidebar__link-icon" />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
