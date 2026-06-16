import Navbar from "./Navbar";
import { useTheme } from "../context/ThemeContext";
import { useEffect } from "react";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme(); // ✅ AQUÍ SÍ VA

useEffect(() => {
  document.body.className = theme;
}, [theme]);

  return (
    <div className="app-container">
      <Navbar />
      {children}
    </div>
  );
}