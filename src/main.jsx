// ============================================================================
// main.jsx
// The actual entry point of the app -- this is the file Vite loads first
// (see index.html's <script src="/src/main.jsx">). It mounts the <App />
// component into the #root div, and wraps it in BrowserRouter so
// react-router-dom's routing works.
// ============================================================================

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
