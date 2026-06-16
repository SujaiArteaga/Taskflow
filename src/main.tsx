import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TasksProvider } from "./context/TasksContext";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
  <TasksProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TasksProvider>
</ThemeProvider>
  </StrictMode>
);