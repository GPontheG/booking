import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import "./styles/common.css";
import "./styles/reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
