import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TaskApp from "./TaskApp";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Shared/header/header";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <TaskApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
