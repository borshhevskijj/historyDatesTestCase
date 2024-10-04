import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "normalize.css";

const roots = document.querySelectorAll(".historyDates");
console.log("roots", roots);

roots!.forEach((root) => {
  console.log("root", root);
  createRoot(root!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
