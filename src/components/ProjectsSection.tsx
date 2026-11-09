import React, { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ArrowUpRight,
  Sparkles,
  Layers,
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Maximize2,
  X,
  Image as ImageIcon,
} from "lucide-react";
import { FEATURED_PROJECTS } from "@/data/portfolioData";
import { ProjectItem } from "@/types/portfolio";

export const ProjectsSection: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);
  const projects = FEATURED_PROJECTS.slice(0, 3);

  const selectedProject = projects.find((p) => p.id === selectedProjectId) || null;

  // Handle ESC key for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImage(null);
    };
    if (lightboxImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxImage]);

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedProjectId(project.id);
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleBack = () => {
    setSelectedProjectId(null);
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left relative scroll-mt-20"
    >
      {/* Background Subtle Blueprint Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

      <AnimatePresence mode="wait">
        {!selectedProject ? (
          /* ================================================================= */
          /* VIEW 1: CLEAN 3-CARD OVERVIEW GRID                                */
          /* ================================================================= */
          <Motion.div
            key="projects-list"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 dark:text-white tracking-wider uppercase">
                    FEATURED PROJECTS
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl font-mono">
                  Production-grade software systems. Click any card to inspect full case study details and architecture.
                </p>
              </div>
            </div>

            {/* 3-Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {projects.map((project, idx) => (
                <div
                  key={project.id}
                  onClick={() => handleSelectProject(project)}
                  className="group relative flex flex-col justify-between rounded-3xl bg-white/95 dark:bg-[#0E1117]/95 border border-slate-200/90 dark:border-white/[0.08] p-6 shadow-xl shadow-slate-900/5 dark:shadow-black/60 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/40 hover:-translate-y-1.5 cursor-pointer"
                >
                  <div>
                    {/* Top Bar: Number on Left + Category Badge on Right (Clean & Never wraps) */}
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-white/[0.06]">
                      <span className="font-mono text-xl font-black text-emerald-500">
                        0{idx + 1}
                      </span>

                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shrink-0">
                        <Sparkles size={11} className="text-emerald-500" />
                        {project.badge || "Featured"}
                      </span>
                    </div>

                    {/* Screenshot Frame */}
                    <div className="relative rounded-2xl overflow-hidden aspect-16/10 bg-black/60 border border-slate-200 dark:border-white/[0.08] shadow-md group/img mb-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Title, Role & Short Description */}
                    <div>
                      <h3 className="text-xl font-display font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-1 font-mono text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span>{project.role}</span>
                      </p>
                      <p className="mt-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans line-clamp-2">
                        {project.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack & Action */}
                  <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/[0.06]">
                    <div className="flex flex-wrap gap-1 mb-3.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 font-mono text-[10px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500">
                      <span>View Full Case Study</span>
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Motion.div>
        ) : (
          /* ================================================================= */
          /* VIEW 2: INLINE DETAILED PROJECT CASE STUDY (SAME PAGE)            */
          /* ================================================================= */
          <Motion.div
            key={`project-detail-${selectedProject.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Top Back Button */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-[#0E1117] border border-slate-300 dark:border-white/[0.1] text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/30 transition-all font-mono text-xs font-bold cursor-pointer shadow-sm active:scale-95"
              >
                <ArrowLeft size={15} />
                <span>BACK TO PROJECTS</span>
              </button>

              <span className="font-mono text-xs text-slate-600 dark:text-slate-400">
                Detailed Case Study
              </span>
            </div>

            {/* 1. MAIN CASE STUDY CONTAINER */}
            <div className="rounded-3xl bg-white/95 dark:bg-[#0E1117]/95 border border-slate-200/90 dark:border-white/[0.08] p-6 sm:p-10 shadow-2xl shadow-slate-900/5 dark:shadow-black/60 backdrop-blur-2xl">
              {/* Project Title & Subtitle */}
              <div className="text-center max-w-3xl mx-auto mb-10 pb-6 border-b border-slate-100 dark:border-white/[0.06]">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-400 font-mono text-[11px] font-bold uppercase tracking-wider mb-3">
                  <Sparkles size={11} />
                  <span>{selectedProject.badge || "Featured Engineering"}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {selectedProject.title}
                </h1>
                <p className="mt-2 font-mono text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {selectedProject.role}
                </p>
              </div>

              {/* SECTION: PROJECT OVERVIEW */}
              <div className="mb-10 pb-8 border-b border-slate-100 dark:border-white/[0.06]">
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400 mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  PROJECT OVERVIEW
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left: Project Screenshot with clickable zoom */}
                  <div className="lg:col-span-5">
                    <div
                      onClick={() => setLightboxImage({ src: selectedProject.image, title: selectedProject.title })}
                      className="relative rounded-2xl overflow-hidden aspect-16/10 bg-black/60 border border-slate-200 dark:border-white/[0.08] shadow-xl group/img cursor-pointer"
                      title="Click to zoom image"
                    >
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-2.5 right-2.5 p-1.5 rounded-lg bg-black/60 backdrop-blur-md text-white opacity-0 group-hover/img:opacity-100 transition-opacity">
                        <Maximize2 size={13} />
                      </div>
                    </div>
                  </div>

                  {/* Right: Overview Description */}
                  <div className="lg:col-span-7">
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                      {selectedProject.fullDescription || selectedProject.shortDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTION: MY CONTRIBUTIONS (3 CLEAN BLOCKS) */}
              <div className="mb-10 pb-8 border-b border-slate-100 dark:border-white/[0.06]">
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400 mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  MY CONTRIBUTIONS
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  {selectedProject.features.slice(0, 3).map((feature, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06] flex flex-col justify-between"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                          {feature}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION: TECHNOLOGIES USED */}
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400 mb-5 flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  TECHNOLOGIES USED
                </h3>

                <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/[0.08] text-slate-800 dark:text-slate-200 font-mono text-xs font-bold tracking-wide uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Direct Action Link: View Code */}
                <div className="flex items-center justify-center gap-4">
                  {selectedProject.repository && (
                    <a
                      href={selectedProject.repository}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-white/[0.12] bg-slate-100 dark:bg-white/[0.05] hover:bg-slate-200 dark:hover:bg-white/[0.1] text-slate-900 dark:text-white font-mono text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-95"
                    >
                      <Github size={16} />
                      <span>View Code</span>
                    </a>
                  )}

                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-mono text-xs font-bold transition-all cursor-pointer shadow-lg shadow-emerald-500/20 active:scale-95"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* 2. DEDICATED SECTION: SCREENSHOTS & INTERFACE GALLERY */}
            <div className="rounded-3xl bg-white/95 dark:bg-[#0E1117]/95 border border-slate-200/90 dark:border-white/[0.08] p-6 sm:p-10 shadow-2xl shadow-slate-900/5 dark:shadow-black/60 backdrop-blur-2xl">
              {/* Header Tab Pill */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100 dark:border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    <ImageIcon size={14} />
                    <span>SCREENSHOTS & INTERFACES</span>
                  </span>
                </div>
                <span className="font-mono text-xs text-slate-500">
                  Click any image to expand
                </span>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(selectedProject.screenshots || [
                  { title: "Main System Dashboard", image: selectedProject.image },
                  { title: "Catalog & Data Management", image: selectedProject.image },
                  { title: "User Journey & Order Flow", image: selectedProject.image },
                ]).map((item, sIdx) => (
                  <div
                    key={sIdx}
                    onClick={() => setLightboxImage({ src: item.image, title: item.title })}
                    className="group/shot rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/[0.08] p-3 shadow-md hover:border-emerald-500/40 hover:shadow-xl transition-all cursor-pointer"
                  >
                    {/* Browser Window Mockup Frame */}
                    <div className="relative rounded-xl overflow-hidden aspect-16/10 bg-black/80 border border-slate-200 dark:border-white/[0.08] mb-3">
                      {/* Browser Header Bar */}
                      <div className="h-6 bg-[#161B26]/90 border-b border-white/[0.06] px-2.5 flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80" />
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="text-[9px] font-mono text-slate-500">
                          preview_{sIdx + 1}.png
                        </span>
                      </div>

                      {/* Image */}
                      <div className="relative h-[calc(100%-24px)] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/shot:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/shot:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="p-2 rounded-full bg-black/70 backdrop-blur-md text-white">
                            <Maximize2 size={14} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Screenshot Title */}
                    <p className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 truncate text-left px-1">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. QUICK SWITCHER: OTHER PROJECTS STRIP */}
            <div className="pt-2">
              <span className="font-mono text-xs text-slate-600 dark:text-slate-400 block mb-3 uppercase tracking-wider">
                Explore Other Projects:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects
                  .filter((p) => p.id !== selectedProject.id)
                  .map((other) => (
                    <button
                      key={other.id}
                      type="button"
                      onClick={() => handleSelectProject(other)}
                      className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/80 dark:bg-[#0E1117]/80 border border-slate-200 dark:border-white/[0.08] hover:border-emerald-500/40 text-left transition-all cursor-pointer group shadow-sm hover:shadow-md"
                    >
                      <div className="w-16 h-12 rounded-lg overflow-hidden bg-black/60 shrink-0 border border-slate-200 dark:border-white/[0.08]">
                        <img
                          src={other.image}
                          alt={other.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 truncate">
                          {other.title}
                        </h4>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 truncate">
                          {other.badge}
                        </p>
                      </div>
                      <ChevronRight size={14} className="text-slate-400 group-hover:text-emerald-500 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </button>
                  ))}
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* LIGHTBOX MODAL: FULL RESOLUTION SCREENSHOT ZOOM           */}
      {/* ========================================================= */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md"
            />

            <Motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="relative z-10 max-w-5xl w-full bg-[#0E1117] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Header Bar */}
              <div className="px-4 py-3 bg-black/90 border-b border-white/10 flex items-center justify-between text-xs font-mono text-slate-300">
                <span className="truncate">{lightboxImage.title}</span>
                <button
                  type="button"
                  onClick={() => setLightboxImage(null)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                  title="Close (Esc)"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Full Image */}
              <div className="p-2 sm:p-4 bg-[#08090C] flex items-center justify-center max-h-[80vh] overflow-auto">
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.title}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-lg"
                />
              </div>
            </Motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
