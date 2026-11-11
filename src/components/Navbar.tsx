import React, { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const id = href.replace("#", "");
    const el = document.getElementById(id) || document.getElementById(id.replace(/s$/, ""));
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#F2EADF]/92 dark:bg-[#161914]/92 backdrop-blur-md border-b border-[#40362E]/10 dark:border-[#F2EADF]/12 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 flex items-center justify-between">
        
        {/* LOGO: Phan Mai. */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-serif font-bold text-2xl sm:text-[1.7rem] text-[#40362E] dark:text-[#F2EADF] tracking-tight hover:opacity-80 transition-opacity select-none cursor-pointer"
        >
          Phan Mai.
        </a>

        {/* NAVIGATION LINKS (Desktop) */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 xl:gap-8 font-sans text-xs sm:text-[13px] text-[#40362E]/85 dark:text-[#F2EADF]/85 tracking-wide">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleNavClick(item.href)}
              className="relative py-1 group transition-colors cursor-pointer hover:text-[#40362E] dark:hover:text-[#F2EADF]"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#40362E] dark:bg-[#F2EADF] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* CONTROLS (Theme Switcher + Language Switcher + CTA Button) */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          
          {/* BẢNG TIẾNG VIỆT / ENGLISH SWITCHER (Touch Target >= 44px chuẩn Mobile) */}
          <div className="flex items-center min-h-[44px] p-1 rounded-full bg-[#E6D8C5]/70 dark:bg-[#22271F] border border-[#40362E]/15 dark:border-[#F2EADF]/15 text-xs font-mono">
            <button
              type="button"
              onClick={() => setLanguage("vi")}
              className={`min-h-[36px] px-3 py-1.5 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                language === "vi"
                  ? "bg-[#B96F4F] text-[#F2EADF] font-bold shadow-xs"
                  : "text-[#40362E]/70 dark:text-[#F2EADF]/65 hover:text-[#40362E] dark:hover:text-[#F2EADF]"
              }`}
              title="Chuyển sang Tiếng Việt"
            >
              VI
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`min-h-[36px] px-3 py-1.5 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                language === "en"
                  ? "bg-[#B96F4F] text-[#F2EADF] font-bold shadow-xs"
                  : "text-[#40362E]/70 dark:text-[#F2EADF]/65 hover:text-[#40362E] dark:hover:text-[#F2EADF]"
              }`}
              title="Switch to English"
            >
              EN
            </button>
          </div>

          {/* THEME TOGGLE (Sun ☀️ / Moon 🌙) — Kích thước tối thiểu 44x44px chuẩn chạm */}
          <button
            type="button"
            onClick={toggleTheme}
            className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center bg-[#E6D8C5]/70 dark:bg-[#22271F] border border-[#40362E]/15 dark:border-[#F2EADF]/15 text-[#40362E] dark:text-[#F2EADF] hover:border-[#B96F4F] transition-colors cursor-pointer"
            title={theme === "dark" ? "Chuyển sang giao diện Sáng" : "Chuyển sang giao diện Tối"}
            aria-label="Toggle dark/light theme"
          >
            {theme === "dark" ? (
              <Sun size={17} className="text-[#C87D5D]" />
            ) : (
              <Moon size={17} className="text-[#30372D]" />
            )}
          </button>

          {/* GET IN TOUCH CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center min-h-[44px] gap-1.5 px-4 sm:px-5 py-2 rounded-full border border-[#40362E]/35 dark:border-[#F2EADF]/30 text-xs font-sans text-[#40362E] dark:text-[#F2EADF] bg-transparent hover:border-[#B96F4F] hover:text-[#B96F4F] dark:hover:text-[#C87D5D] transition-all duration-300 group cursor-pointer"
          >
            <span>{t.nav.getInTouch}</span>
            <ArrowUpRight
              size={13}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>

          {/* Mobile menu toggle — Tối thiểu 44x44px */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-[#40362E] dark:text-[#F2EADF] hover:bg-[#40362E]/5 dark:hover:bg-[#F2EADF]/5 transition-colors cursor-pointer"
            aria-label="Open mobile navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F2EADF] dark:bg-[#161914] border-b border-[#40362E]/10 dark:border-[#F2EADF]/15 px-6 py-6 space-y-4 shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left py-2 font-serif text-lg text-[#40362E] dark:text-[#F2EADF] hover:text-[#B96F4F] transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-[#40362E]/10 dark:border-[#F2EADF]/15 flex items-center justify-between">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full border border-[#40362E]/40 dark:border-[#F2EADF]/40 text-xs font-sans text-[#40362E] dark:text-[#F2EADF]"
            >
              <span>{t.nav.getInTouch}</span>
              <ArrowUpRight size={13} />
            </a>

            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#85866A]">
                {theme === "dark" ? "Dark Theme" : "Light Theme"}
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
