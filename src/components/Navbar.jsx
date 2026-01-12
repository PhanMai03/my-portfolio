import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const navItem = [
    { name: "Home", href: "#home" },
    // { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10); // ✅ FIX
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <nav
  className={cn(
    "fixed top-0 left-0 w-full z-40 transition-all duration-300",
    scrolling
      ? "py-3 bg-background backdrop-blur-md shadow-sm"
      : "py-5"
  )}
>

      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold flex items-center">
          <span className="relative z-10">
            <span className="text-primary text-glow">Personal </span>
            <span className="text-secondary">Portfolio</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItem.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-secondary hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpenMenu((prev) => !prev)}
          className="md:hidden p-2 z-50 text-foreground"
          aria-label={isOpenMenu ? "Close Menu" : "Open Menu"}
        >
          {isOpenMenu ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isOpenMenu
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItem.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-primary transition-colors duration-300"
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
