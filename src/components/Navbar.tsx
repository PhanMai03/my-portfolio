import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Keyboard shortcut for Command Palette
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenCommandPalette();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onOpenCommandPalette]);

  useEffect(() => {
    const sectionIds = ["home", "about", "experience", "skills", "projects", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", href: "#home", id: "home" },
    { label: "ABOUT ME", href: "#about", id: "about" },
    { label: "EXPERIENCE", href: "#experience", id: "experience" },
    { label: "SKILLS", href: "#skills", id: "skills" },
    { label: "PROJECTS", href: "#projects", id: "projects" },
    { label: "CONTACT", href: "#contact", id: "contact" },
  ];

  return (
    <nav
      className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 max-w-[95vw]"
      aria-label="Main Navigation"
    >
      {/* Floating Pill Menu with Theme Toggle - Enlarged & Pure Deep Black Tint */}
      <div className="bg-white/95 dark:bg-[#0E1117]/95 backdrop-blur-2xl text-slate-800 dark:text-slate-200 rounded-full px-7 sm:px-10 py-3.5 sm:py-4 shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-slate-200/90 dark:border-white/[0.12] flex items-center gap-6 sm:gap-9 whitespace-nowrap overflow-x-auto scrollbar-none">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.label}
              href={item.href}
              className={`font-mono text-xs sm:text-[14px] font-bold tracking-wider uppercase transition-all duration-200 py-1 cursor-pointer ${
                isActive
                  ? "text-emerald-500 font-black scale-105"
                  : "text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400"
              }`}
            >
              {item.label}
            </a>
          );
        })}

        {/* Separator Divider */}
        <span className="w-px h-5 bg-slate-200 dark:bg-white/[0.15] shrink-0" />

        {/* Light / Dark Mode Toggle Button */}
        <button
          type="button"
          onClick={toggleTheme}
          title={theme === "dark" ? "Chuyển sang Theme Trắng (Light)" : "Chuyển sang Theme Tối (Dark)"}
          className="p-1.5 rounded-full text-slate-700 dark:text-amber-400 hover:text-emerald-500 dark:hover:text-amber-300 transition-colors cursor-pointer shrink-0"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? (
            <Sun size={19} className="text-amber-400 hover:text-amber-300 hover:rotate-45 transition-transform drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
          ) : (
            <Moon size={19} className="text-slate-700 hover:text-emerald-600 hover:-rotate-12 transition-transform" />
          )}
        </button>
      </div>
    </nav>
  );
};
