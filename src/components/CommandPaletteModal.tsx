import React, { useState, useEffect, useRef } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  Terminal,
  ExternalLink,
  Download,
  Github,
  Linkedin,
  Copy,
  Check,
  FolderGit2,
  User,
  Briefcase,
  GraduationCap,
  Mail,
  Layers,
} from "lucide-react";
import { PERSONAL_INFO, FEATURED_PROJECTS } from "@/data/portfolioData";

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  const actions = [
    {
      category: "Sections Jump",
      items: [
        { label: "Home / Hero Section", icon: <Terminal size={15} />, href: "#home" },
        { label: "About Me & Credentials", icon: <User size={15} />, href: "#about" },
        { label: "Work Experience Timeline", icon: <Briefcase size={15} />, href: "#experience" },
        { label: "Technical Skills Hive", icon: <Layers size={15} />, href: "#skills" },
        { label: "Featured Projects Showcase", icon: <FolderGit2 size={15} />, href: "#projects" },
        { label: "Contact & Network Links", icon: <Mail size={15} />, href: "#contact" },
      ],
    },
    {
      category: "Quick Actions",
      items: [
        {
          label: "Copy Email",
          icon: copied ? <Check size={15} className="text-emerald-500 dark:text-emerald-400" /> : <Copy size={15} />,
          action: handleCopy,
          badge: copied ? "Copied!" : PERSONAL_INFO.email,
        },
        {
          label: "Download Resume / CV",
          icon: <Download size={15} />,
          href: PERSONAL_INFO.cvUrl,
          external: true,
          badge: "Google Drive PDF",
        },
        {
          label: "GitHub Profile",
          icon: <Github size={15} />,
          href: PERSONAL_INFO.github,
          external: true,
          badge: "@PhanMai03",
        },
        {
          label: "LinkedIn Profile",
          icon: <Linkedin size={15} />,
          href: PERSONAL_INFO.linkedin,
          external: true,
          badge: "Phan Mai",
        },
      ],
    },
    {
      category: "Featured Systems",
      items: FEATURED_PROJECTS.map((p) => ({
        label: p.title,
        icon: <Terminal size={15} className="text-emerald-500 dark:text-emerald-400" />,
        href: "#projects",
        badge: p.badge,
      })),
    },
  ];

  const filtered = actions
    .map((grp) => ({
      ...grp,
      items: grp.items.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      ),
    }))
    .filter((grp) => grp.items.length > 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 sm:pt-32 px-4">
          {/* Backdrop */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl bg-white dark:bg-[#0E1017] border border-slate-200 dark:border-white/[0.14] rounded-2xl shadow-2xl overflow-hidden z-10 text-left font-sans"
          >
            {/* Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-[#121520]">
              <Search size={16} className="text-emerald-500 dark:text-emerald-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type command or jump to section (e.g. Projects, Skills, CV)..."
                className="w-full bg-transparent text-sm text-slate-900 dark:text-white focus:outline-none placeholder-slate-400 dark:placeholder-slate-500 font-mono"
              />
              <button
                type="button"
                onClick={onClose}
                className="p-1 rounded-md text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/[0.06] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
            </div>

            {/* Actions List */}
            <div className="max-h-96 overflow-y-auto p-3 space-y-4 font-mono text-xs">
              {filtered.length === 0 ? (
                <div className="py-12 text-center text-slate-400 text-xs">
                  No matching command or section.
                </div>
              ) : (
                filtered.map((grp) => (
                  <div key={grp.category}>
                    <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest px-3 py-1">
                      {grp.category}
                    </div>
                    <div className="space-y-1 mt-1">
                      {grp.items.map((item, idx) => {
                        const content = (
                          <div className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-white/[0.05] hover:border-slate-300 dark:hover:border-white/[0.08] border border-transparent transition-all cursor-pointer group text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white">
                            <div className="flex items-center gap-2.5">
                              <span className="text-emerald-500 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                                {item.icon}
                              </span>
                              <span>{item.label}</span>
                            </div>
                            {item.badge && (
                              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/[0.06] group-hover:text-emerald-600 dark:group-hover:text-emerald-300 group-hover:border-emerald-500/30">
                                {item.badge}
                              </span>
                            )}
                          </div>
                        );

                        if (item.action) {
                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={item.action}
                              className="w-full text-left"
                            >
                              {content}
                            </button>
                          );
                        }

                        return (
                          <a
                            key={idx}
                            href={item.href}
                            target={item.external ? "_blank" : undefined}
                            rel={item.external ? "noreferrer" : undefined}
                            onClick={onClose}
                            className="block"
                          >
                            {content}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Bar */}
            <div className="px-4 py-2.5 bg-slate-50 dark:bg-[#08090C] border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
              <div className="flex items-center gap-3">
                <span>Navigate: <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/[0.06] text-slate-700 dark:text-slate-400">↑↓</kbd></span>
                <span>Select: <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/[0.06] text-slate-700 dark:text-slate-400">↵</kbd></span>
              </div>
              <div>
                <span>Press <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/[0.06] text-slate-700 dark:text-slate-400">ESC</kbd> to exit</span>
              </div>
            </div>
          </Motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
