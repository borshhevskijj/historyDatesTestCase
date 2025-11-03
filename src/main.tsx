import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "normalize.css";
import DataContextProvider from "./context/DataContextProvider.tsx";

// const roots = document.querySelectorAll(".historyDates");
const root = document.getElementById("root");

createRoot(root!).render(
  <StrictMode>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </StrictMode>
);
