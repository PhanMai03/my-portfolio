import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import {
  ArrowDown,
  Download,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { DistributedNetwork3D } from "./3d/DistributedNetwork3D";

export const HeroSection: React.FC = () => {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Ho_Chi_Minh",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-visible select-none"
    >
      {/* Subtle Background Radial Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035] dark:opacity-[0.06] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full relative z-10">
        {/* Left Column: Technical Identity & Direct Hook */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Status Chip / Timezone */}
          <Motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-2.5 mb-6 text-xs font-mono"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-300 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-semibold tracking-wide uppercase text-[11px]">
                OPEN TO WORK &bull; 2026
              </span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-600 dark:text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>HCMC, VN</span>
              <span className="text-slate-400 dark:text-slate-600">&bull;</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold tabular-nums">
                {timeStr || "12:00:00"}
              </span>
            </div>
          </Motion.div>

          {/* Technical Headline */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mb-5"
          >
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight font-display text-slate-900 dark:text-white leading-[1.08]">
              PHAN THI NGOC MAI
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-transparent bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-300 dark:from-emerald-400 dark:via-emerald-300 dark:to-white bg-clip-text mt-3">
                Full-Stack Software Engineer
              </span>
            </h1>
          </Motion.div>

          {/* 1-Line Concise Bio */}
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans mb-8 max-w-xl"
          >
            Software Engineering graduate from HCMUTE (&apos;25, GPA 3.23, TOEIC 640). Focused on building responsive, high-performance web applications with React, Next.js, Node.js, and modern databases — crafted with a clean code and security-first mindset.
          </Motion.p>

          {/* 2 Fast CTA Buttons */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="flex flex-wrap items-center gap-3.5"
          >
            <a
              href="#projects"
              className="shimmer-effect inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-900 dark:text-slate-950 font-mono font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>View Projects ↓</span>
            </a>

            <a
              href={PERSONAL_INFO.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] dark:border-white/[0.08] dark:hover:border-white/[0.18] text-slate-800 dark:text-slate-200 font-mono text-xs transition-all shadow-xs cursor-pointer"
            >
              <Download size={14} className="text-emerald-500 dark:text-emerald-400" />
              <span>Download Resume ↗</span>
            </a>
          </Motion.div>
        </div>

        {/* Right Column: 3D Interactive ID Badge Card */}
        <div className="lg:col-span-5 flex items-center justify-center relative min-h-[500px] lg:min-h-[560px]">
          {/* Subtle Ambient Radial Glow Behind 3D Card */}
          <div className="absolute w-72 h-72 bg-emerald-500/[0.08] rounded-full blur-3xl pointer-events-none -z-10" />
          <DistributedNetwork3D />
        </div>
      </div>

      {/* Interactive Mouse Scroll Indicator at the Bottom of Viewport */}
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          const target = document.getElementById("about");
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-65 hover:opacity-100 transition-all cursor-pointer group py-2 px-4 rounded-2xl hover:bg-white/[0.04] active:scale-95 z-20"
        aria-label="Scroll to About Me section"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors font-bold">
          SCROLL
        </span>

        {/* Minimalist Tech Mouse Outline with Animated Wheel */}
        <div className="w-[20px] h-[32px] rounded-full border-2 border-slate-400/80 dark:border-white/30 group-hover:border-emerald-500 dark:group-hover:border-emerald-400 transition-colors flex justify-center pt-1.5 shadow-sm">
          <span className="w-1 h-2 rounded-full bg-emerald-500 animate-mouse-wheel" />
        </div>
      </a>
    </section>
  );
};
