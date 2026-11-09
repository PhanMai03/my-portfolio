import React from "react";
import {
  Calendar,
  Building2,
  CheckCircle2,
  Layers,
} from "lucide-react";

interface WorkExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  status: "Active" | "Completed";
  bullets: string[];
  technologies: string[];
}

export const ExperienceSection: React.FC = () => {
  const experiences: WorkExperienceItem[] = [
    {
      id: "healthcare-solution",
      period: "Sep 2026 – Present",
      role: "Manual Tester Intern",
      company: "Healthcare Solution Viet Nam",
      status: "Active",
      bullets: [
        "Performed manual, functional & UI verification for hospital administration systems.",
        "Authored structured test cases and tracked defect resolutions in Jira.",
      ],
      technologies: ["Manual Testing", "Test Cases", "Jira", "API Testing"],
    },
    {
      id: "fpt-software",
      period: "Jun 2024 – Sep 2024",
      role: "Frontend Developer Intern",
      company: "FPT Software",
      status: "Completed",
      bullets: [
        "Developed responsive SPA interfaces using ReactJS and Tailwind CSS.",
        "Collaborated in an 18-member Agile/Scrum team with daily standups.",
      ],
      technologies: ["ReactJS", "TypeScript", "Tailwind CSS", "REST API", "Agile"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left relative scroll-mt-20 select-none"
    >
      {/* Background Subtle Blueprint Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 dark:text-white tracking-wider uppercase">
            EXPERIENCE
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-mono">
          Professional engineering track record.
        </p>
      </div>

      {/* OPEN TIMELINE - FLUSH ALIGNED WITH HEADER (NO CARDS) */}
      <div className="relative pl-7 sm:pl-9">
        {/* Continuous Left Vertical Glowing Rail */}
        <div className="absolute left-[3px] top-2 bottom-3 w-[2px] bg-gradient-to-b from-emerald-500 via-emerald-500/30 to-transparent" />

        {/* Milestones List */}
        <div className="space-y-12 sm:space-y-16">
          {experiences.map((item) => {
            const isActive = item.status === "Active";

            return (
              <div key={item.id} className="relative group">
                {/* Node Dot on Rail */}
                <div
                  className={`absolute -left-[30px] sm:-left-[38px] top-1.5 w-4 h-4 rounded-full border-2 bg-white dark:bg-slate-950 flex items-center justify-center transition-transform duration-300 group-hover:scale-125 ${
                    isActive
                      ? "border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                      : "border-slate-300 dark:border-white/[0.2] group-hover:border-emerald-500"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isActive ? "bg-emerald-500 animate-pulse" : "bg-slate-400 dark:bg-slate-500"
                    }`}
                  />
                </div>

                {/* Content - Fully Open & Unboxed */}
                <div className="space-y-3">
                  {/* Period & Company Pill */}
                  <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
                    <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-medium">
                      <Calendar size={13} className="text-emerald-500" />
                      {item.period}
                    </span>

                    <span className="text-slate-300 dark:text-slate-600">&bull;</span>

                    <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <Building2 size={13} />
                      {item.company}
                    </span>

                    {isActive && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-300 font-mono text-[10px] font-bold uppercase tracking-wider">
                        <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                        Active
                      </span>
                    )}
                  </div>

                  {/* Role Title */}
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors tracking-tight">
                    {item.role}
                  </h3>

                  {/* Concise 2-Bullet Highlights */}
                  <div className="space-y-1.5 font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-300 pt-1 max-w-4xl">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2">
                        <span className="text-emerald-500 font-bold mt-0.5">›</span>
                        <span className="leading-relaxed">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Concise Tech Stack Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 font-mono text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
