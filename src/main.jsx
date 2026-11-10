import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "../specs/tokens.css";
import "./styles/site.css";
import "./styles/motion.css";
import App from "./App.jsx";

document.documentElement.classList.add("js");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
