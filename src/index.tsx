import React from "react";
import ReactDOM from "react-dom";
import { StyledEngineProvider } from "@material-ui/core";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
