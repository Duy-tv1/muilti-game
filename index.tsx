import React from "react";
import ReactDOM from "react-dom/client";
import { MultiplayerGame } from "./src/components/MultiplayerGame";
import "./src/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MultiplayerGame />
  </React.StrictMode>
);
