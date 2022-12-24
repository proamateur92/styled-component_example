// react
import React from "react";
import ReactDOM from "react-dom/client";

// component
import App from "./App";

// style
import "./index.css";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

root.render(
  <React.Fragment>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.Fragment>
);
