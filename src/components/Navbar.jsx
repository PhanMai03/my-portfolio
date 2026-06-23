import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const navItems = [
    { name: "Home", href: "#main" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-40 transition-all duration-300",
        scrolling
          ? "py-3 bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#main" className="text-xl font-bold flex items-center">
          <span className="relative z-10 font-sans tracking-tight">
            <span className="text-primary text-glow font-extrabold">Phan </span>
            <span className="text-foreground font-semibold">Mai</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-all duration-200 font-medium text-sm relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden z-50">
          <ThemeToggle />
          <button
            onClick={() => setIsOpenMenu((prev) => !prev)}
            className="p-2 text-foreground focus:outline-none rounded-xl bg-secondary/5 border border-border/40"
            aria-label={isOpenMenu ? "Close Menu" : "Open Menu"}
          >
            {isOpenMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/98 backdrop-blur-lg z-30 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isOpenMenu
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl font-semibold text-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300"
                onClick={() => setIsOpenMenu(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
