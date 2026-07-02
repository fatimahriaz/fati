// ============================================================================
// PlotlyChart
// A thin wrapper around react-plotly.js using the factory pattern, which
// avoids a known CRA + plotly.js v2 module resolution conflict. We import
// Plotly directly and pass it into createPlotlyComponent, rather than using
// the default import that tries to auto-resolve plotly.js/dist/plotly.
//
// BACKEND HOOKUP:
// The Python backend returns a Plotly figure as JSON:
// { data: [...], layout: {...} }
// Pass it directly: <PlotlyChart data={fig.data} layout={fig.layout} />
// ============================================================================

import createPlotlyComponent from "react-plotly.js/factory";
import Plotly from "plotly.js/dist/plotly.js";
import "./PlotlyChart.css";

const Plot = createPlotlyComponent(Plotly);

/**
 * @param {object} props
 * @param {Array} props.data - Plotly trace array (from backend figure.data)
 * @param {object} [props.layout] - Plotly layout object (from backend figure.layout)
 */
export default function PlotlyChart({ data, layout = {} }) {
  const mergedLayout = {
    autosize: true,
    margin: { t: 40, r: 20, b: 60, l: 60 },
    paper_bgcolor: "transparent",
    plot_bgcolor: "#f9fafb",
    font: { family: "Inter, sans-serif", size: 12, color: "#1f2329" },
    colorway: ["#6b2233", "#2255c4", "#1d8a4a", "#9a6b15", "#6366f1"],
    ...layout,
  };

  return (
    <div className="plotly-chart">
      <Plot
        data={data}
        layout={mergedLayout}
        useResizeHandler
        style={{ width: "100%", height: "100%" }}
        config={{ displayModeBar: false, responsive: true }}
      />
    </div>
  );
}
