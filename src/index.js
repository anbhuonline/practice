import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import AppTest from "./AppTest";
import * as serviceWorker from "./serviceWorker";
// import Sidebar from "./components/Sidebar";

ReactDOM.render(
  <React.StrictMode>
    <AppTest />
    {/* <Sidebar /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
