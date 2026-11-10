import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark";

export interface PaletteConfig {
  id: string;
  name: string;
  primary: string;
  primaryHover: string;
  tint: string;
  glow: string;
}

export const OFF_GRID_PALETTE_LIGHT: PaletteConfig = {
  id: "off-grid-light",
  name: "OFF-GRID Light: Warm Ivory × Terracotta",
  primary: "#B96F4F",
  primaryHover: "#A35C3E",
  tint: "rgba(185, 111, 79, 0.12)",
  glow: "rgba(185, 111, 79, 0.25)",
};

export const OFF_GRID_PALETTE_DARK: PaletteConfig = {
  id: "off-grid-dark",
  name: "OFF-GRID Dark: Deep Forest Obsidian × Terracotta",
  primary: "#C87D5D",
  primaryHover: "#D98E6E",
  tint: "rgba(200, 125, 93, 0.18)",
  glow: "rgba(200, 125, 93, 0.35)",
};

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  palette: PaletteConfig;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem("portfolio_theme");
      if (saved === "dark" || saved === "light") return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    const palette = theme === "dark" ? OFF_GRID_PALETTE_DARK : OFF_GRID_PALETTE_LIGHT;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    root.style.setProperty("--accent", palette.primary);
    root.style.setProperty("--accent-hover", palette.primaryHover);
    root.style.setProperty("--accent-tint", palette.tint);
    root.style.setProperty("--accent-glow", palette.glow);

    try {
      localStorage.setItem("portfolio_theme", theme);
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        setTheme,
        palette: theme === "dark" ? OFF_GRID_PALETTE_DARK : OFF_GRID_PALETTE_LIGHT,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
