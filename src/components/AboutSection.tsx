import React from "react";
import {
  MapPin,
  Sparkles,
  Download,
  Mail,
  GraduationCap,
  User,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left relative scroll-mt-20"
    >
      {/* Background Subtle Blueprint Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

      {/* Section Header - Synchronized with Experience, Skills & Projects */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 dark:text-white tracking-wider uppercase">
            ABOUT ME
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-mono">
          Architectural philosophy, technical background, and defensive security foundation.
        </p>
      </div>

      {/* Natural Prose Layout with Avatar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Portrait Photo & Quick Info Badges (4 cols) */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Portrait Photo Container with Subtle Glowing Aura */}
          <div className="relative mb-6 group">
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-emerald-500/30 via-emerald-400/20 to-emerald-600/30 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-60 h-80 sm:w-68 sm:h-92 rounded-3xl bg-slate-100 dark:bg-[#0E121B] border-2 border-emerald-500/40 overflow-hidden shadow-2xl shadow-emerald-500/10 flex items-center justify-center">
              <img
                src="/mai-phan.jpg"
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-[center_28%] group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  if (img.src.includes("mai-phan.jpg")) {
                    img.src = "/avatar.jpg";
                  } else {
                    img.style.display = "none";
                    const fallback = img.parentElement?.querySelector(".avatar-fallback") as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }
                }}
              />

              {/* Bottom Glass Tag */}
              <div className="absolute bottom-3 left-3 right-3 px-3 py-2 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white font-mono text-[11px] flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span className="font-bold truncate text-slate-100">{PERSONAL_INFO.name}</span>
                </div>
                <span className="text-emerald-400 font-bold shrink-0">HCMUTE &apos;25</span>
              </div>

              {/* Fallback Graphic Avatar */}
              <div className="avatar-fallback hidden w-full h-full flex-col items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200 dark:from-[#0E121B] dark:to-[#080B11] text-emerald-500">
                <User size={54} className="mb-2 opacity-80" />
                <span className="font-mono text-xs text-slate-600 dark:text-slate-400 font-bold">
                  {PERSONAL_INFO.shortName}
                </span>
                <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
                  Software Engineer
                </span>
              </div>
            </div>
          </div>

          {/* Quick Info Badges */}
          <div className="space-y-2 w-full max-w-xs font-mono text-xs text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08]">
              <MapPin size={13} className="text-emerald-500 shrink-0" />
              <span>Ho Chi Minh City, Vietnam</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08]">
              <GraduationCap size={13} className="text-emerald-500 shrink-0" />
              <span>HCMUTE &bull; SE &bull; GPA 3.23</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08]">
              <Sparkles size={13} className="text-emerald-500 shrink-0" />
              <span>TOEIC 640 &bull; CTF Award</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-300 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Ready for Full-time Roles</span>
            </div>
          </div>
        </div>

        {/* Right Column: Flowing Narrative Prose (8 cols) */}
        <div className="lg:col-span-8 space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed font-sans text-sm sm:text-base">
          <p className="text-base sm:text-lg font-medium text-slate-900 dark:text-white leading-relaxed">
            Hi, I&apos;m <strong className="text-emerald-600 dark:text-emerald-400 font-bold">{PERSONAL_INFO.name}</strong> — a Software Engineering graduate from <strong className="text-slate-900 dark:text-white">HCMUTE</strong> with a strong passion for Full-Stack Web Development, modern UI engineering, and dependable system design.
          </p>

          <p className="text-slate-600 dark:text-slate-400">
            I specialize in crafting responsive, accessible user interfaces with <strong className="text-slate-800 dark:text-slate-200">React, Next.js, and TypeScript</strong>, backed by reliable server-side APIs built with <strong className="text-slate-800 dark:text-slate-200">Node.js, Express, SQL Server, and MongoDB</strong>. I care deeply about writing clean, maintainable code and delivering intuitive user journeys.
          </p>

          <p className="text-slate-600 dark:text-slate-400">
            Having earned a <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">Consolation Prize at Cyber Security CTF 2023</strong> and competed in <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">ASEAN ASCIS 2023</strong>, I engineer software with an authentic security and quality mindset — integrating input sanitization, authentication security, and defenses against common vulnerabilities (XSS, CSRF, SQLi) right from day one.
          </p>

          {/* Education & Credentials Mini Bar */}
          <div className="rounded-2xl bg-slate-100/70 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 shrink-0">
                <GraduationCap size={18} />
              </div>
              <div>
                <div className="font-sans font-bold text-slate-900 dark:text-white text-sm">
                  Ho Chi Minh City University of Technology and Education (HCMUTE)
                </div>
                <div className="text-slate-600 dark:text-slate-400 text-[11px] mt-0.5">
                  Bachelor of Software Engineering &bull; 2021 – 2025
                </div>
                <div className="text-[11px] mt-1 text-slate-600 dark:text-slate-400 font-mono flex items-center gap-1.5">
                  <span>GPA:</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">3.23 / 4.0</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 md:justify-end">
              <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-semibold text-[11px]">
                TOEIC 640
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-200/60 dark:bg-white/[0.06] border border-slate-300 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 text-[11px]">
                🏆 CTF 2023 Award
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-200/60 dark:bg-white/[0.06] border border-slate-300 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 text-[11px]">
                ASEAN ASCIS
              </span>
            </div>
          </div>

          {/* Action Row */}
        </div>
      </div>
    </section>
  );
};
