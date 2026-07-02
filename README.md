# AMS Reporting Dashboard — Frontend

A React frontend for the AMS Reporting Dashboard, built to match the Figma
prototype. Currently uses mock data for every page — see "Connecting to the
real backend" below for how that swap works once the Python API is ready.

This project uses **Create React App** (not Vite) -- Vite's build tool
(`esbuild.exe`) gets blocked by some corporate endpoint security software
(e.g. Carbon Black), so Create React App is used instead since it relies
on Webpack/Babel, which don't have that issue.

## Requirements

- Node.js (you said you already have this installed)

## How to run it

Open a terminal in this folder and run:

```bash
npm install
```

This downloads all the libraries the project depends on (React, the
router, the charting library) into a `node_modules` folder. You only need
to do this once, or again any time `package.json` changes.

Then start the dev server:

```bash
npm start
```

It will print a local URL, usually `http://localhost:3000`, and should
also open it automatically in your browser. The page automatically
reloads any time you save a change
to a file.

## What's built so far

- **Login** (`/login`) — sign-in form, matches the Figma RACF ID screen
- **Home** (`/`) — dashboard overview with stat cards, recent reports,
  system alerts, quick actions
- **Incremental MR** (`/incremental-mr`) — date range picker, the "Current
  Day Meter Reads" line chart, a File Date picker, and the meter reads
  table (columns: MR_ID, FILE_DATE, READ_DATE, NUM_STANDARD, NUM_INCREMENTAL)
- **Estimation Report** (`/estimation-report`) — 4 summary stat cards,
  Filter + Export buttons, and a zone-by-zone table with colored
  Low/Medium/High variance badges

Not yet built (folders exist but are empty, ready to fill in the same way):

- Mesh Window Analysis
- Settings

## Project structure

```
src/
  main.jsx              <- entry point, mounts the app
  App.jsx                <- defines every page route
  styles/
    variables.css         <- every color/spacing/font value, change once, applies everywhere
    global.css             <- base resets
  config/
    navigation.js          <- sidebar links, single source of truth
  services/
    api.js                  <- every backend call goes through here (currently placeholders)
  hooks/
    useApiData.js            <- shared loading/error/data-fetching logic
  components/
    layout/                   <- Sidebar, TopBar, DashboardLayout (shared shell)
    common/                    <- reusable pieces: StatCard, DataTable, Button,
                                   StatusBadge, DateRangePicker, SingleDatePicker
    pages/
      Login/
      Home/
      IncrementalMR/             <- chart + table + page, all together
      EstimationReport/            <- stat cards + table + page, all together
      MeshWindowAnalysis/           <- empty, build next using the same pattern
      Settings/                      <- empty
```

## How each page is organized

Every report page follows the same pattern, demonstrated in `IncrementalMR/`:

- `PageName.jsx` — the page itself: holds state (like selected dates),
  renders the shared layout pieces (date pickers, tables, charts)
- `PageName.css` — page-specific layout styling
- `PageName.mock.js` — fake data shaped exactly like the real API response
  will be, used until the backend is ready
- Any chart specific to that page gets its own `SomeChart.jsx` +
  `SomeChart.css` inside that page's folder

Reusable pieces (date pickers, tables, stat cards, status badges, buttons)
live in `components/common/` instead, since multiple pages need them.

> Note: `StatusBadge.jsx`/`.css` and `StatCard.jsx`/`.css` were hand-typed
> while learning the patterns -- they work exactly the same as everything
> else, just with slightly simpler comments. No need to swap them out.

## Connecting to the real backend

Every page currently imports from a `*.mock.js` file instead of calling the
real API. Look for comment blocks labeled exactly like this in every page
file -- they're the ONLY places you need to touch:

```
// BACKEND HOOKUP -- STEP 1 of 2:   <- in the imports at the top of the file
// BACKEND HOOKUP -- STEP 2 of 2:   <- where mock data gets assigned to a variable
```

To wire up a real endpoint:

1. Open `src/services/api.js` and find the matching function (e.g.
   `getEstimationReport`, `getIncrementalMRChart`). Each one has a
   `TODO (backend)` comment describing the expected URL and response shape
   -- confirm with your backend teammate that the real endpoint matches,
   or adjust the comment to match whatever you agree on.
2. In the page file (e.g. `EstimationReport.jsx`), find "STEP 1 of 2" and
   uncomment the two import lines shown there.
3. Find "STEP 2 of 2" right below it and follow the instructions in that
   comment block -- it shows you exactly what code to swap in.
4. Delete the `.mock.js` file for that page once it's no longer imported
   anywhere.

No other files need to change -- the table/chart components were built to
expect the same field names the real backend already uses (e.g. `MR_ID`,
`NUM_STANDARD`, `NUM_INCREMENTAL`), so they'll render real data exactly
the same way they render the mock data today.

The dev server is also already configured (see the `"proxy"` line near the
top of `package.json`) to forward any request to `/api/...` to
`http://localhost:8000` — update that value if the Python server runs
somewhere else.
