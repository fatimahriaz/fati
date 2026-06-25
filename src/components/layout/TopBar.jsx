// ============================================================================
// TopBar
// The white header bar shown above page content: dashboard title, search
// box, refresh button, and user avatar. Receives `pageTitle` so each page
// can customize the heading shown (defaults to the app name).
// ============================================================================

import { useState } from "react";
import { SearchIcon, RefreshIcon, UserIcon } from "../common/icons";
import "./TopBar.css";

export default function TopBar({ pageTitle = "AMS Reporting Dashboard", onRefresh }) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <header className="topbar">
      <h1 className="topbar__title">{pageTitle}</h1>

      <div className="topbar__actions">
        <div className="topbar__search">
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            aria-label="Search"
          />
          <SearchIcon className="topbar__search-icon" />
        </div>

        <button
          type="button"
          className="topbar__icon-btn"
          aria-label="Refresh"
          onClick={onRefresh}
        >
          <RefreshIcon />
        </button>

        <button type="button" className="topbar__avatar" aria-label="User menu">
          <UserIcon width={16} height={16} />
        </button>
      </div>
    </header>
  );
}
