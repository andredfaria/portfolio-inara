import React from "react";
import ReactDOM from "react-dom/client"; // Atualize a importação
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container); // Use createRoot

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

serviceWorker.register();
