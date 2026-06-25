// ============================================================================
// MeterReadsChart
// The "Current Day Meter Reads" line chart on the Incremental MR report.
// Built with Recharts (a React charting library) -- it draws an SVG chart
// directly from a plain JS array of { date, value } points, no Python/Dash
// involved.
//
// WHY RECHARTS INSTEAD OF react-plotly.js:
// Recharts components are written in normal React/JSX style (you'll see
// it reads almost like HTML below), which is faster to learn and lighter
// to load than Plotly's library. The visual result -- a line with dots,
// axis labels, gridlines -- looks effectively the same as the Plotly chart
// in the Figma screenshot. If the team specifically needs Plotly's exact
// rendering later, only this one file needs to change -- nothing else in
// the app depends on which charting library is used here.
// ============================================================================

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./MeterReadsChart.css";

// Formats a raw ISO date string ("2026-06-23") into the short label style
// seen in the Figma chart's x-axis ("Jun 23").
function formatDateLabel(isoDateString) {
  const date = new Date(isoDateString);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

// Formats large numbers into the "4.12M" style seen on the Figma y-axis.
function formatMillions(value) {
  return `${(value / 1_000_000).toFixed(3).replace(/0+$/, "").replace(/\.$/, "")}M`;
}

/**
 * @param {object} props
 * @param {Array<{ date: string, uniqueMetersCurrentDay: number }>} props.data
 *   one point per day in the selected date range
 * @param {string} [props.title] - chart title, defaults to the Figma's wording
 */
export default function MeterReadsChart({ data, title = "Current Day Meter Reads" }) {
  return (
    <div className="meter-reads-chart">
      <h3 className="meter-reads-chart__title">{title}</h3>

      {/* ResponsiveContainer makes the chart resize to fill its parent's
          width, instead of having a fixed pixel width. */}
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data} margin={{ top: 8, right: 24, bottom: 8, left: 8 }}>
          <CartesianGrid stroke="var(--color-border-light)" />
          <XAxis
            dataKey="date"
            tickFormatter={formatDateLabel}
            stroke="var(--color-text-secondary)"
            fontSize={12}
            label={{ value: "Date", position: "insideBottom", offset: -4, fontSize: 12 }}
          />
          <YAxis
            tickFormatter={formatMillions}
            stroke="var(--color-text-secondary)"
            fontSize={12}
            label={{
              value: "Unique Meters, Current Day",
              angle: -90,
              position: "insideLeft",
              fontSize: 12,
              style: { textAnchor: "middle" },
            }}
            domain={["auto", "auto"]}
          />
          <Tooltip
            labelFormatter={formatDateLabel}
            formatter={(value) => [value.toLocaleString(), "Unique Meters"]}
          />
          <Line
            type="linear"
            dataKey="uniqueMetersCurrentDay"
            stroke="#6366f1" /* matches the purple/indigo line color in the Figma chart */
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
