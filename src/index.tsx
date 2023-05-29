import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { AuthContextProvider } from "./components/context/AuthContext";
import Router from "./components/Router";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  </BrowserRouter>
);
