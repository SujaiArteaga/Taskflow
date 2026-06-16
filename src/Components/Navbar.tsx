import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";




function Navbar() {
const { theme, toggleTheme } =
  useTheme();

  const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    fontWeight: isActive ? "bold" : "normal",
    color: isActive ? "#2563eb" : "#444",
    textDecoration: "none",
  });

  return (
    <nav
      style={{
        display: "flex",
        gap: "16px",
        background: "white",
        padding: "16px",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        marginBottom: "20px",
      }}
    >
      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>

      <NavLink to="/stats" style={linkStyle}>
        Stats
      </NavLink>

      <NavLink to="/profile" style={linkStyle}>
        Profile
      </NavLink>

      <NavLink to="/dashboard" style={linkStyle}>
        Dashboard
      </NavLink>

      <button onClick={toggleTheme}>
  {theme === "light"
    ? "🌙"
    : "☀️"}
</button>
    </nav>
    
  );
}

export default Navbar;