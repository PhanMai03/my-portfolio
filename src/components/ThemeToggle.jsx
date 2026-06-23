import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "../lib/utils";

export const ThemeToggle = ({ className }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    // Default to dark mode if not specified, otherwise respect stored setting
    const isDark = storedTheme !== "light"; 
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
      // Trigger a custom event to notify other components (e.g. Canvas Background) of theme change
      window.dispatchEvent(new Event("theme-change"));
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
      window.dispatchEvent(new Event("theme-change"));
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 bg-secondary/5 hover:bg-secondary/10 dark:bg-white/5 dark:hover:bg-white/10 text-foreground border border-border dark:border-white/10 focus:outline-none",
        className
      )}
      aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-amber-400" />
      ) : (
        <Moon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
      )}
    </button>
  );
};
