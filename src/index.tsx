import React from "react";
import ReactDOM from "react-dom/client";
import { config } from "@fortawesome/fontawesome-svg-core";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// the following line may disable the font awesome styles
config.autoAddCss = false;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
