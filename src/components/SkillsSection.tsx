import React, { useState } from "react";
import {
  ShieldCheck,
  Code2,
  Database,
  Sparkles,
  CheckCircle2,
  SlidersHorizontal,
  Layers,
  Terminal,
  Cpu,
  GitBranch,
  Search,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

type SkillConcept = "pills" | "matrix" | "bento" | "taxonomy";
type CategoryFilter = "all" | "qa" | "frontend" | "backend" | "tools";

export const SkillsSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeConcept, setActiveConcept] = useState<SkillConcept>("pills");
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  // Comprehensive Skills Data with categories & levels
  const allSkills = [
    // QA & Testing
    { id: "tc", name: "Test Case Design", category: "qa", tag: "QA Core", desc: "Biên, phân vùng & logic", level: 5, icon: ShieldCheck },
    { id: "ft", name: "Functional Testing", category: "qa", tag: "QA Core", desc: "Kiểm thử luồng nghiệp vụ", level: 5, icon: ShieldCheck },
    { id: "postman-qa", name: "API Testing (Postman)", category: "qa", tag: "API Suite", desc: "Collection, assertions, run", level: 5, icon: Search },
    { id: "jira", name: "Defect Tracking (Jira)", category: "qa", tag: "Issue Lifecycle", desc: "Vòng đời lỗi & triage", level: 5, icon: CheckCircle2 },
    { id: "ui-test", name: "Web UI & Cross-Browser", category: "qa", tag: "UI Quality", desc: "Độ nhạy & tương thích", level: 4, icon: ShieldCheck },
    
    // Frontend
    { id: "react", name: "ReactJS", category: "frontend", tag: "SPA Library", desc: "Hooks, component craft", level: 5, icon: Code2 },
    { id: "nextjs", name: "NextJS", category: "frontend", tag: "Framework", desc: "App router, SSR/CSR", level: 4, icon: Code2 },
    { id: "ts", name: "TypeScript", category: "frontend", tag: "Language", desc: "Strict typing & interfaces", level: 4, icon: Code2 },
    { id: "tailwind", name: "Tailwind CSS", category: "frontend", tag: "Styling", desc: "Responsive & design system", level: 5, icon: Code2 },
    { id: "js", name: "JavaScript (ES6+)", category: "frontend", tag: "Core", desc: "Async/await, DOM, logic", level: 5, icon: Code2 },
    { id: "htmlcss", name: "HTML5 & CSS3", category: "frontend", tag: "Markup", desc: "Semantic, Flexbox, Grid", level: 5, icon: Code2 },

    // Backend & DB
    { id: "node", name: "NodeJS", category: "backend", tag: "Runtime", desc: "Server environment", level: 4, icon: Database },
    { id: "express", name: "Express", category: "backend", tag: "Middleware", desc: "REST routing & logic", level: 4, icon: Database },
    { id: "rest", name: "RESTful APIs", category: "backend", tag: "Protocol", desc: "OpenAPI JSON endpoints", level: 5, icon: Database },
    { id: "sql", name: "SQL Server", category: "backend", tag: "RDBMS", desc: "Truy vấn quan hệ T-SQL", level: 4, icon: Database },
    { id: "mongo", name: "MongoDB", category: "backend", tag: "NoSQL", desc: "Document collections", level: 4, icon: Database },

    // Tools & AI
    { id: "git", name: "Git & GitHub", category: "tools", tag: "VCS", desc: "Nhánh, PR & cộng tác", level: 5, icon: GitBranch },
    { id: "cursor", name: "VS Code & Cursor", category: "tools", tag: "IDE", desc: "Môi trường lập trình tối ưu", level: 5, icon: Terminal },
    { id: "ai", name: "AI-Assisted Workflow", category: "tools", tag: "Productivity", desc: "Prompting, code review", level: 5, icon: Sparkles },
    { id: "ctf-skill", name: "Web Security & CTF", category: "tools", tag: "Security", desc: "Tư duy phòng chống defect", level: 4, icon: Cpu },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center py-16 sm:py-20 lg:py-16 text-left overflow-hidden bg-[#F2EADF] dark:bg-[#161914] border-b border-[#25231D]/15 dark:border-[#F2EADF]/15 transition-colors duration-300"
    >
      {/* Corner crosshairs for technical drafting precision */}
      <div className="absolute top-4 left-6 sm:left-12 font-mono text-xs text-[#B96F4F] select-none pointer-events-none">+</div>
      <div className="absolute top-4 right-6 sm:right-12 font-mono text-xs text-[#B96F4F] select-none pointer-events-none">+</div>
      <div className="absolute bottom-4 left-6 sm:left-12 font-mono text-xs text-[#B96F4F] select-none pointer-events-none">+</div>
      <div className="absolute bottom-4 right-6 sm:right-12 font-mono text-xs text-[#B96F4F] select-none pointer-events-none">+</div>

      <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 space-y-10">
        
        {/* =========================================================================
            SECTION HEADER & 4-CONCEPT SWITCHER BAR
           ========================================================================= */}
        <ScrollReveal>
          {/* Hairline Divider with Technical Ticket Tag */}
          <div className="flex items-center justify-between text-[10px] font-mono text-[#85866A] dark:text-[#9E9F88] pb-3 border-b border-[#25231D]/10 dark:border-[#F2EADF]/10">
            <div className="flex items-center gap-2">
              <span className="text-[#B96F4F] font-bold">+</span>
              <span className="tracking-widest uppercase">SYS_MODULE: CAPABILITIES_MATRIX</span>
              <span className="text-xs opacity-40">|</span>
              <span className="px-1.5 py-0.5 bg-[#85866A]/10 rounded border border-[#85866A]/25 text-[9px] font-semibold tracking-wider text-[#40362E] dark:text-[#F2EADF]">
                TICKET #FE-9482
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline font-mono text-[9px] tracking-wider text-[#85866A] dark:text-[#9E9F88]">
                AUDIT_SUITE: #QA-9481
              </span>
              <span className="text-[#B96F4F] font-bold">+</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-5 pb-6 border-b border-[#25231D]/15 dark:border-[#F2EADF]/15 relative">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2.5 text-[#85866A] dark:text-[#9E9F88]">
                <span className="w-6 h-[1px] bg-[#85866A] dark:bg-[#9E9F88]" />
                <span className="font-mono text-xs uppercase tracking-widest">
                  05 // TECHNICAL CAPABILITIES
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-serif font-bold text-[#25231D] dark:text-[#F2EADF] leading-[1.05] tracking-tight">
                {t.skills.title} <br />
                <span className="italic font-normal text-[#B96F4F] dark:text-[#C87D5D]">
                  {t.skills.titleHighlight}
                </span>
              </h2>
            </div>

            {/* Technical Embossed Stamp (Dấu mộc kỹ thuật mờ dập nghiêng) */}
            <div className="hidden xl:block absolute right-72 top-2 pointer-events-none select-none">
              <div className="rotate-[-7deg] border-2 border-[#B96F4F]/40 dark:border-[#C87D5D]/40 px-3.5 py-1.5 rounded-sm bg-[#F2EADF]/40 dark:bg-[#161914]/40 backdrop-blur-2xs">
                <div className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#B96F4F] dark:text-[#C87D5D] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B96F4F] dark:bg-[#C87D5D]" />
                  TECH_SPEC // AUDITED
                </div>
                <div className="text-[8px] font-mono tracking-wider text-[#85866A] dark:text-[#9E9F88] mt-0.5">
                  VERIFIED • #FE-9482
                </div>
              </div>
            </div>

            {/* 4-CONCEPT SWITCHER BUTTONS */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 bg-[#F2EADF] dark:bg-[#161914] p-1.5 rounded-2xl border border-[#40362E]/15 dark:border-[#F2EADF]/15 text-xs font-mono shadow-xs">
              <span className="font-mono text-[10.5px] uppercase font-bold text-[#85866A] dark:text-[#9E9F88] px-2.5 hidden xl:inline">
                {language === "vi" ? "Chọn kiểu hiển thị:" : "Choose UI Concept:"}
              </span>

              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-1 w-full sm:w-auto">
                {[
                  { id: "pills", label: "1. Interactive Pills", desc: "Tag lọc tương tác" },
                  { id: "matrix", label: "2. Tech Matrix", desc: "Ma trận thanh đo" },
                  { id: "bento", label: "3. Bento Spotlight", desc: "Lưới QA tiêu điểm" },
                  { id: "taxonomy", label: "4. Swiss Taxonomy", desc: "Bản thông số tạp chí" },
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActiveConcept(c.id as SkillConcept)}
                    className={`px-3 py-2 rounded-xl transition-all cursor-pointer text-center sm:text-left ${
                      activeConcept === c.id
                        ? "bg-[#B96F4F] text-[#F2EADF] font-bold shadow-xs"
                        : "text-[#40362E]/70 dark:text-[#F2EADF]/70 hover:bg-[#EAE0D2] dark:hover:bg-[#20261C] hover:text-[#40362E] dark:hover:text-[#F2EADF]"
                    }`}
                  >
                    <span>{c.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* =========================================================================
            CONCEPT RENDER CANVAS
           ========================================================================= */}
        <div className="relative">
          <AnimatePresence mode="wait">
            
            {/* ---------------------------------------------------------------------
                CONCEPT 1: INTERACTIVE CATEGORY PILLS (NHÃN TAG BO GÓC MỀM MẠI CÓ BỘ LỌC)
               --------------------------------------------------------------------- */}
            {activeConcept === "pills" && (
              <motion.div
                key="concept-pills"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Filter Tabs Bar */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs uppercase text-[#85866A] dark:text-[#9E9F88] font-bold mr-2">
                    {language === "vi" ? "LỌC THEO LĨNH VỰC:" : "FILTER DOMAIN:"}
                  </span>
                  {[
                    { id: "all", label: language === "vi" ? "Tất cả (20)" : "All (20)" },
                    { id: "qa", label: "QA & Testing (5)" },
                    { id: "frontend", label: "Frontend React (6)" },
                    { id: "backend", label: "Backend & DB (5)" },
                    { id: "tools", label: "Tools & AI (4)" },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id as CategoryFilter)}
                      className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                        activeCategory === cat.id
                          ? "bg-[#40362E] dark:bg-[#F2EADF] text-[#F2EADF] dark:text-[#40362E] font-bold shadow-xs"
                          : "border border-[#40362E]/15 dark:border-[#F2EADF]/15 text-[#40362E]/75 dark:text-[#F2EADF]/75 hover:border-[#B96F4F] hover:text-[#B96F4F]"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Grid of Tech Pills */}
                <motion.div
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5"
                >
                  {filteredSkills.map((s) => {
                    const Icon = s.icon;
                    return (
                      <motion.div
                        layout
                        key={s.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        whileHover={{ y: -2 }}
                        className="p-3.5 rounded-2xl border border-[#40362E]/15 dark:border-[#F2EADF]/15 bg-[#F2EADF]/70 dark:bg-[#161914]/70 hover:border-[#B96F4F] dark:hover:border-[#C87D5D] transition-colors flex items-center justify-between gap-3 shadow-2xs group cursor-default"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-8 h-8 rounded-xl bg-[#EAE0D2] dark:bg-[#20261C] border border-[#40362E]/10 dark:border-[#F2EADF]/10 flex items-center justify-center text-[#B96F4F] dark:text-[#C87D5D] shrink-0 group-hover:bg-[#B96F4F] group-hover:text-[#F2EADF] transition-colors">
                            <Icon size={16} />
                          </div>
                          <div className="min-w-0">
                            <span className="font-serif font-bold text-sm text-[#40362E] dark:text-[#F2EADF] truncate block">
                              {s.name}
                            </span>
                            <span className="font-mono text-[10.5px] text-[#85866A] dark:text-[#9E9F88] truncate block">
                              {s.desc}
                            </span>
                          </div>
                        </div>

                        <span className="px-2 py-0.5 rounded-md font-mono text-[9.5px] uppercase font-bold bg-[#EAE0D2]/80 dark:bg-[#20261C] text-[#B96F4F] dark:text-[#C87D5D] shrink-0">
                          {s.tag}
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            )}

            {/* ---------------------------------------------------------------------
                CONCEPT 2: MODERN TECH MATRIX (MA TRẬN CÓ THANH ĐO NĂNG LỰC TINH GIẢN)
               --------------------------------------------------------------------- */}
            {activeConcept === "matrix" && (
              <motion.div
                key="concept-matrix"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-10 divide-y md:divide-y-0 md:divide-x divide-[#40362E]/15 dark:divide-[#F2EADF]/15"
              >
                {[
                  {
                    title: "01 // QA & TESTING",
                    sub: "KIỂM THỬ PHẦN MỀM",
                    icon: ShieldCheck,
                    color: "text-[#B96F4F] dark:text-[#C87D5D]",
                    skills: allSkills.filter((s) => s.category === "qa"),
                  },
                  {
                    title: "02 // FRONTEND SPA",
                    sub: "GIAO DIỆN NGƯỜI DÙNG",
                    icon: Code2,
                    color: "text-[#85866A] dark:text-[#9E9F88]",
                    skills: allSkills.filter((s) => s.category === "frontend"),
                  },
                  {
                    title: "03 // BACKEND & DB",
                    sub: "DỊCH VỤ & DỮ LIỆU",
                    icon: Database,
                    color: "text-[#B96F4F] dark:text-[#C87D5D]",
                    skills: allSkills.filter((s) => s.category === "backend"),
                  },
                  {
                    title: "04 // TOOLS & WORKFLOW",
                    sub: "QUY TRÌNH & BỘ CÔNG CỤ",
                    icon: Sparkles,
                    color: "text-[#85866A] dark:text-[#9E9F88]",
                    skills: allSkills.filter((s) => s.category === "tools"),
                  },
                ].map((col, idx) => (
                  <div
                    key={col.title}
                    className={`space-y-6 pt-6 md:pt-0 ${idx > 0 ? "md:pl-6 xl:pl-8" : ""}`}
                  >
                    <div className="space-y-1 pb-3 border-b border-[#40362E]/15 dark:border-[#F2EADF]/15">
                      <span className="font-mono text-xs font-bold text-[#B96F4F] dark:text-[#C87D5D] tracking-wider block">
                        {col.title}
                      </span>
                      <h3 className="font-serif font-bold text-xl text-[#40362E] dark:text-[#F2EADF]">
                        {col.sub}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {col.skills.map((item) => (
                        <div key={item.id} className="space-y-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-sans font-bold text-[#40362E] dark:text-[#F2EADF]">
                              {item.name}
                            </span>
                            {/* 5-dot level indicator */}
                            <div className="flex items-center gap-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <span
                                  key={i}
                                  className={`w-1.5 h-1.5 rounded-full ${
                                    i < item.level
                                      ? "bg-[#B96F4F] dark:bg-[#C87D5D]"
                                      : "bg-[#40362E]/15 dark:bg-[#F2EADF]/20"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <span className="font-mono text-[10.5px] text-[#85866A] dark:text-[#9E9F88] block">
                            {item.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* ---------------------------------------------------------------------
                CONCEPT 3: BENTO SKILL GRID WITH QA SPOTLIGHT (LƯỚI BENTO CÓ Ô TIÊU ĐIỂM)
               --------------------------------------------------------------------- */}
            {activeConcept === "bento" && (
              <motion.div
                key="concept-bento"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-5"
              >
                {/* 1. QA & Testing Core Spotlight (Chiếm 7 cột lớn nhất) */}
                <div className="md:col-span-7 rounded-3xl bg-[#F2EADF] dark:bg-[#161914] border-2 border-[#B96F4F]/40 p-6 sm:p-8 space-y-6 shadow-sm relative overflow-hidden">
                  <div className="flex items-center justify-between pb-3 border-b border-[#40362E]/10 dark:border-[#F2EADF]/10">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={18} className="text-[#B96F4F] dark:text-[#C87D5D]" />
                      <span className="font-mono text-xs font-bold text-[#B96F4F] dark:text-[#C87D5D] uppercase tracking-wider">
                        FEATURED SPOTLIGHT // 01
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#B96F4F]/15 text-[#B96F4F] dark:text-[#C87D5D]">
                      CORE SPECIALIZATION
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#40362E] dark:text-[#F2EADF]">
                      Software Quality Assurance & Defect Triage
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#40362E]/75 dark:text-[#F2EADF]/75 leading-relaxed">
                      Thiết kế test cases chuẩn mực, kiểm thử API tự động với Postman, quản lý vòng đời lỗi trên Jira và tối ưu luồng nghiệp vụ trên hệ thống thực tế.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      { title: "Test Case Design", sub: "Phân vùng tương đương, biên" },
                      { title: "API Postman Suite", sub: "Assertions, test scripts & runner" },
                      { title: "Jira Defect Triage", sub: "Vòng đời bug & báo cáo chi tiết" },
                      { title: "Regression & Sanity", sub: "Xác minh luồng hồi quy sau fix" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-[#EAE0D2]/70 dark:bg-[#20261C] border border-[#40362E]/10 dark:border-[#F2EADF]/10 space-y-0.5"
                      >
                        <span className="font-sans font-bold text-xs text-[#40362E] dark:text-[#F2EADF] block">
                          ✓ {item.title}
                        </span>
                        <span className="font-mono text-[10px] text-[#85866A] dark:text-[#9E9F88] block">
                          {item.sub}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Modern Frontend Stack (5 cột) */}
                <div className="md:col-span-5 rounded-3xl bg-[#F2EADF] dark:bg-[#161914] border border-[#40362E]/15 dark:border-[#F2EADF]/15 p-6 sm:p-7 space-y-4 shadow-sm flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-[#40362E]/10 dark:border-[#F2EADF]/10 font-mono text-xs font-bold text-[#85866A] dark:text-[#9E9F88]">
                      <span>02 // FRONTEND ECOSYSTEM</span>
                      <Code2 size={16} />
                    </div>
                    <h3 className="font-serif font-bold text-2xl text-[#40362E] dark:text-[#F2EADF]">
                      Modern React & NextJS SPA
                    </h3>
                    <p className="font-sans text-xs text-[#40362E]/75 dark:text-[#F2EADF]/75 leading-relaxed">
                      Xây dựng giao diện hướng component, tích hợp TypeScript an toàn và tối ưu Tailwind CSS trên mọi màn hình.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {["ReactJS", "NextJS", "TypeScript", "Tailwind CSS", "JavaScript ES6+", "HTML5/CSS3"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-[#EAE0D2] dark:bg-[#20261C] text-[#40362E] dark:text-[#F2EADF] border border-[#40362E]/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3. Backend & Data Layer (6 cột) */}
                <div className="md:col-span-6 rounded-3xl bg-[#F2EADF] dark:bg-[#161914] border border-[#40362E]/15 dark:border-[#F2EADF]/15 p-6 space-y-3 shadow-sm">
                  <div className="flex items-center justify-between pb-2 border-b border-[#40362E]/10 dark:border-[#F2EADF]/10 font-mono text-xs font-bold text-[#85866A] dark:text-[#9E9F88]">
                    <span>03 // BACKEND & DATA PROTOCOLS</span>
                    <Database size={16} />
                  </div>
                  <h4 className="font-serif font-bold text-xl text-[#40362E] dark:text-[#F2EADF]">
                    APIs, Services & Relational DB
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                    {[
                      { name: "NodeJS & Express", desc: "Server runtime & routing" },
                      { name: "RESTful APIs", desc: "OpenAPI JSON communication" },
                      { name: "SQL Server", desc: "Relational queries & schema" },
                      { name: "MongoDB", desc: "NoSQL document collections" },
                    ].map((item, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-[#EAE0D2]/70 dark:bg-[#20261C]">
                        <span className="font-sans font-bold block text-[#40362E] dark:text-[#F2EADF]">{item.name}</span>
                        <span className="font-mono text-[10px] text-[#85866A] dark:text-[#9E9F88]">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Intelligent Workflow & Tools (6 cột) */}
                <div className="md:col-span-6 rounded-3xl bg-[#F2EADF] dark:bg-[#161914] border border-[#40362E]/15 dark:border-[#F2EADF]/15 p-6 space-y-3 shadow-sm">
                  <div className="flex items-center justify-between pb-2 border-b border-[#40362E]/10 dark:border-[#F2EADF]/10 font-mono text-xs font-bold text-[#B96F4F] dark:text-[#C87D5D]">
                    <span>04 // TOOLS & INTELLIGENT WORKFLOW</span>
                    <Sparkles size={16} />
                  </div>
                  <h4 className="font-serif font-bold text-xl text-[#40362E] dark:text-[#F2EADF]">
                    Developer Productivity
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                    {[
                      { name: "Git & GitHub", desc: "Version control & team PRs" },
                      { name: "Postman & Jira", desc: "API testing & bug triage" },
                      { name: "VS Code & Cursor", desc: "Modern tech setup" },
                      { name: "AI Dev Workflow", desc: "Continuous iteration" },
                    ].map((item, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-[#EAE0D2]/70 dark:bg-[#20261C]">
                        <span className="font-sans font-bold block text-[#40362E] dark:text-[#F2EADF]">{item.name}</span>
                        <span className="font-mono text-[10px] text-[#85866A] dark:text-[#9E9F88]">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* ---------------------------------------------------------------------
                CONCEPT 4: SWISS EDITORIAL TAXONOMY (BẢN THÔNG SỐ KỸ THUẬT TẠP CHÍ)
               --------------------------------------------------------------------- */}
            {activeConcept === "taxonomy" && (
              <motion.div
                key="concept-taxonomy"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
              >
                {/* Cột trái: Tuyên ngôn công nghệ & số lượng */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="space-y-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#B96F4F] dark:text-[#C87D5D] font-bold">
                      VERIFIED PRODUCTION STACKS
                    </span>
                    <h3 className="font-serif font-bold text-4xl text-[#40362E] dark:text-[#F2EADF]">
                      20+ Technologies
                    </h3>
                  </div>

                  <p className="font-sans text-sm text-[#40362E]/80 dark:text-[#F2EADF]/80 leading-relaxed">
                    Mỗi công cụ được lựa chọn đều phục vụ cho mục tiêu rõ ràng: nâng cao độ tin cậy của phần mềm và mang lại trải nghiệm tương tác liền mạch nhất cho người dùng.
                  </p>

                  <div className="p-4 rounded-2xl border border-[#40362E]/15 dark:border-[#F2EADF]/15 bg-[#F2EADF]/70 dark:bg-[#161914]/70 font-mono text-xs space-y-1">
                    <span className="text-[#85866A] dark:text-[#9E9F88] uppercase block">KIỂM ĐỊNH THỰC TẾ:</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 block">[✓] Production Audited</span>
                    <span className="text-[11px] text-[#40362E]/60 dark:text-[#F2EADF]/60 block">Healthcare & E-Commerce Systems</span>
                  </div>
                </div>

                {/* Cột phải: 4 mục phân loại thuần Typography & Tag Cloud */}
                <div className="lg:col-span-8 space-y-8 lg:pl-8 lg:border-l border-[#40362E]/15 dark:border-[#F2EADF]/15">
                  {[
                    {
                      num: "01",
                      title: "QUALITY ASSURANCE & TESTING",
                      tags: ["Test Case Design", "Functional Testing", "Postman API", "Jira Defect Triage", "Web UI Testing", "Regression Testing"],
                    },
                    {
                      num: "02",
                      title: "MODERN CLIENT-SIDE CRAFT",
                      tags: ["ReactJS", "NextJS", "TypeScript", "Tailwind CSS", "JavaScript ES6+", "HTML5 & CSS3", "Responsive SPA"],
                    },
                    {
                      num: "03",
                      title: "BACKEND PROTOCOLS & DATA LAYER",
                      tags: ["NodeJS", "Express", "RESTful APIs", "SQL Server", "MongoDB", "OpenAPI JSON"],
                    },
                    {
                      num: "04",
                      title: "INTELLIGENT WORKFLOW & SECURITY",
                      tags: ["Git & GitHub", "VS Code & Cursor", "AI Coding Tools", "Web Security CTF", "Agile / Scrum"],
                    },
                  ].map((group) => (
                    <div key={group.num} className="space-y-3 pb-6 border-b border-[#40362E]/15 dark:border-[#F2EADF]/15 last:border-0 last:pb-0">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-[#B96F4F] dark:text-[#C87D5D]">
                          {group.num} //
                        </span>
                        <h4 className="font-mono text-xs uppercase font-bold text-[#40362E] dark:text-[#F2EADF] tracking-wider">
                          {group.title}
                        </h4>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {group.tags.map((t) => (
                          <span
                            key={t}
                            className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#F2EADF] dark:bg-[#161914] border border-[#40362E]/15 dark:border-[#F2EADF]/15 text-[#40362E] dark:text-[#F2EADF] hover:border-[#B96F4F] hover:text-[#B96F4F] transition-colors cursor-default"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
