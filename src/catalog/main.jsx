import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router";
import "../../specs/tokens.css";
import "../../specs/preview.css";
import "../styles/motion.css";
import Catalog from "./Catalog.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MemoryRouter>
      <Catalog />
    </MemoryRouter>
  </StrictMode>
);
