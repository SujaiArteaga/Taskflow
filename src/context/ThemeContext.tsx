import {
  createContext,
  useContext,
  useState,
} from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext =
  createContext<ThemeContextType | null>(null);

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>(() => {
    return (
      (localStorage.getItem("theme") as Theme) ||
      "light"
    );
  });

  function toggleTheme() {
    const nuevoTema =
      theme === "light"
        ? "dark"
        : "light";

    setTheme(nuevoTema);

    localStorage.setItem(
      "theme",
      nuevoTema
    );
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context =
    useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme debe usarse dentro de ThemeProvider"
    );
  }

  return context;
}