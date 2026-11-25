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
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#F2EADF]/92 dark:bg-[#161914]/92 backdrop-blur-md border-b border-[#25231D]/10 dark:border-[#F2EADF]/10 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 flex items-center justify-between">
        
        {/* LOGO: Phan Mai. */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-serif font-bold text-2xl sm:text-[1.7rem] text-[#25231D] dark:text-[#F2EADF] tracking-tight hover:text-[#B96F4F] transition-colors select-none cursor-pointer flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#B96F4F] inline-block" />
          <span>Phan Mai.</span>
        </a>

        {/* NAVIGATION LINKS (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-sans text-xs sm:text-[13px] text-[#5C5549] dark:text-[#D4C9BD] font-medium tracking-wide">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleNavClick(item.href)}
              className="relative py-1 group transition-colors cursor-pointer hover:text-[#B96F4F]"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B96F4F] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* CONTROLS (Theme Switcher + Language Switcher + CTA Button) */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          
          {/* BẢNG TIẾNG VIỆT / ENGLISH SWITCHER */}
          <div className="flex items-center min-h-[40px] p-1 rounded-full bg-[#EAE0D2]/70 dark:bg-[#1C201A] border border-[#25231D]/15 dark:border-[#F2EADF]/15 text-xs font-mono">
            <button
              type="button"
              onClick={() => setLanguage("vi")}
              className={`min-h-[32px] px-3 py-1 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                language === "vi"
                  ? "bg-[#B96F4F] text-[#F2EADF] font-bold shadow-xs"
                  : "text-[#5C5549] dark:text-[#D4C9BD] hover:text-[#25231D] dark:hover:text-[#F2EADF]"
              }`}
              title="Chuyển sang Tiếng Việt"
            >
              VI
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`min-h-[32px] px-3 py-1 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                language === "en"
                  ? "bg-[#B96F4F] text-[#F2EADF] font-bold shadow-xs"
                  : "text-[#5C5549] dark:text-[#D4C9BD] hover:text-[#25231D] dark:hover:text-[#F2EADF]"
              }`}
              title="Switch to English"
            >
              EN
            </button>
          </div>

          {/* THEME TOGGLE */}
          <button
            type="button"
            onClick={toggleTheme}
            className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full flex items-center justify-center bg-[#EAE0D2]/70 dark:bg-[#1C201A] border border-[#25231D]/15 dark:border-[#F2EADF]/15 text-[#25231D] dark:text-[#F2EADF] hover:border-[#B96F4F] hover:text-[#B96F4F] transition-colors cursor-pointer"
            title={theme === "dark" ? "Chuyển sang giao diện Sáng" : "Chuyển sang giao diện Tối"}
            aria-label="Toggle dark/light theme"
          >
            {theme === "dark" ? (
              <Sun size={16} className="text-[#C87D5D]" />
            ) : (
              <Moon size={16} className="text-[#B96F4F]" />
            )}
          </button>

          {/* GET IN TOUCH CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center min-h-[40px] gap-1.5 px-5 py-2 rounded-full border border-[#25231D]/20 dark:border-[#F2EADF]/20 text-xs font-sans text-[#25231D] dark:text-[#F2EADF] bg-transparent hover:border-[#B96F4F] hover:text-[#B96F4F] transition-all duration-300 group cursor-pointer"
          >
            <span>{t.nav.getInTouch}</span>
            <ArrowUpRight
              size={13}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#B96F4F]"
            />
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden w-10 h-10 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full text-[#25231D] dark:text-[#F2EADF] hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Open mobile navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F2EADF] dark:bg-[#161914] border-b border-[#25231D]/15 dark:border-[#F2EADF]/15 px-6 py-6 space-y-4 shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left py-2 font-serif text-lg text-[#25231D] dark:text-[#F2EADF] hover:text-[#B96F4F] transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-[#25231D]/15 dark:border-[#F2EADF]/15 flex items-center justify-between">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full border border-[#B96F4F]/40 text-xs font-sans text-[#B96F4F]"
            >
              <span>{t.nav.getInTouch}</span>
              <ArrowUpRight size={13} />
            </a>

            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#5C5549] dark:text-[#85866A]">
                {theme === "dark" ? "Dark Theme" : "Light Theme"}
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
