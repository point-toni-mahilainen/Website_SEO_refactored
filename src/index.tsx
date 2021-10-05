import React from "react";
import ReactDOM from "react-dom";
import { StyledEngineProvider } from "@material-ui/core";
// tslint:disable-next-line: no-import-side-effect
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback="loading">
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
