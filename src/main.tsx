import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@/styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="h-screen w-screen other-default-tailwind-classes">
      <App />
    </main>
  </StrictMode>
);
