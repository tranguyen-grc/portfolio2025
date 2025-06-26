import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// FIX: use Vite's built-in environment flags
const isProd = import.meta.env.PROD;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={isProd ? "/portfolio2025" : "/"}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
