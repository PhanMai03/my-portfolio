import React, { useRef } from "react";
import { GraduationCap, Award, Globe2 } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

export const EducationSection: React.FC = () => {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
    restDelta: 0.001,
  });

  const contentParallax = useTransform(smoothProgress, [0, 1], [12, -12]);

  const courseworkPills = [
    language === "vi" ? "Kiểm thử phần mềm QA" : "Software QA Testing",
    language === "vi" ? "Kiến trúc React SPA" : "React SPA Architecture",
    language === "vi" ? "Kiểm thử API Postman" : "API Postman Verification",
    language === "vi" ? "Quản lý vòng đời Defect" : "Bug Defect Triage",
    language === "vi" ? "Cơ sở dữ liệu SQL" : "SQL Database Design",
    language === "vi" ? "An toàn thông tin Web" : "Web Application Security",
  ];

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative flex flex-col justify-center py-16 sm:py-20 lg:py-24 text-left overflow-hidden bg-[#F2EADF] dark:bg-[#161914] bg-blueprint-grid border-b border-[#25231D]/15 dark:border-[#F2EADF]/15 transition-colors duration-300"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 space-y-10">
        
        {/* =========================================================================
            SECTION HEADER (Editorial Style — Nhỏ gọn, thanh thoát)
           ========================================================================= */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-5 border-b border-[#25231D]/15 dark:border-[#F2EADF]/15">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5 text-[#5C5549] dark:text-[#B8B9A6]">
                <span className="w-6 h-[1px] bg-[#5C5549] dark:bg-[#B8B9A6]" />
                <span className="font-mono text-xs uppercase tracking-widest font-bold">
                  03 // ACADEMIC & CREDENTIALS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#25231D] dark:text-[#F2EADF] leading-[1.08] tracking-tight">
                {language === "vi" ? "Học vấn & " : "Academic & "}
                <span className="font-editorial-italic font-normal text-[#B96F4F] dark:text-[#C87D5D]">
                  {language === "vi" ? "nền tảng đào tạo." : "credentials."}
                </span>
              </h2>
            </div>

            <p className="font-sans text-xs sm:text-[13px] text-[#40362E]/75 dark:text-[#F2EADF]/75 max-w-sm leading-relaxed">
              {language === "vi"
                ? "Nền tảng đào tạo chính quy ngành Kỹ thuật Phần mềm HCMUTE cùng chứng chỉ quốc tế và giải thưởng học thuật."
                : "Formal Software Engineering degree from HCMUTE, international English certification, and cybersecurity honors."}
            </p>
          </div>
        </ScrollReveal>

        {/* =========================================================================
            OPEN ARCHITECTURAL CANVAS (MẶT PHẲNG MỞ — HOÀN TOÀN THÁO BỎ HỘP BOX)
            - Không nền trắng, không bo viền hộp, không shadow
            - Phân tách bằng đường gióng kiến trúc hairline 1px
           ========================================================================= */}
        <motion.div style={{ y: contentParallax }}>
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              
              {/* KHỐI 1: ĐẠI HỌC SƯ PHẠM KỸ THUẬT (HCMUTE) — Chiếm 7 cột trên mặt phẳng mở */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Degree Meta Header */}
                <div className="space-y-2 pb-4 border-b border-[#25231D]/12 dark:border-[#F2EADF]/12">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#B96F4F] dark:text-[#C87D5D] font-bold flex items-center gap-1.5">
                      <GraduationCap size={16} />
                      <span>{language === "vi" ? "CỬ NHÂN CHÍNH QUY // 2021 – 2025" : "BACHELOR DEGREE // 2021 – 2025"}</span>
                    </span>
                    <span className="font-mono text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                      {language === "vi" ? "[✓] ĐÃ TỐT NGHIỆP" : "[✓] COMPLETED"}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#25231D] dark:text-[#F2EADF] tracking-tight leading-snug">
                    {language === "vi"
                      ? "Trường Đại học Sư phạm Kỹ thuật TP.HCM (HCMUTE)"
                      : "Ho Chi Minh City University of Technology and Education"}
                  </h3>

                  <p className="font-sans text-sm font-semibold text-[#5C5549] dark:text-[#B8B9A6]">
                    {language === "vi" ? "Khoa Công nghệ Thông tin • Ngành Kỹ thuật Phần mềm" : "Faculty of IT • Software Engineering"}
                  </p>
                </div>

                {/* GPA & Formal Degree Highlights */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-baseline gap-2 py-1 px-3 rounded-lg bg-[#E6D8C5]/50 dark:bg-[#20261C] border border-[#25231D]/10 dark:border-[#F2EADF]/12">
                    <span className="font-mono text-xs uppercase text-[#5C5549] dark:text-[#B8B9A6] font-semibold">GPA:</span>
                    <span className="font-serif font-bold text-xl text-[#B96F4F] dark:text-[#C87D5D]">3.23 / 4.0</span>
                    <span className="font-sans text-xs text-[#5C5549] dark:text-[#B8B9A6]">({language === "vi" ? "Khá - Giỏi" : "Good/Honors"})</span>
                  </div>

                  <span className="text-xs font-mono text-[#5C5549] dark:text-[#B8B9A6]">
                    {language === "vi" ? "• Khóa chính quy K21" : "• Formal Cohort 2021-25"}
                  </span>
                </div>

                {/* Coursework Pills sitting naturally on canvas */}
                <div className="space-y-2.5 pt-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#5C5549] dark:text-[#B8B9A6] font-bold block">
                    {language === "vi" ? "LĨNH VỰC TRỌNG TÂM & MÔN HỌC ĐÃ HOÀN THÀNH:" : "FOCUS COURSEWORK & TRAINING:"}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {courseworkPills.map((pill) => (
                      <span
                        key={pill}
                        className="px-3 py-1 rounded-full font-sans text-xs bg-[#E6D8C5]/60 dark:bg-[#20261C] border border-[#25231D]/10 dark:border-[#F2EADF]/12 text-[#25231D] dark:text-[#F2EADF] font-medium"
                      >
                        ✓ {pill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* KHỐI 2: CHỨNG CHỈ QUỐC TẾ & GIẢI THƯỞNG — Chiếm 5 cột, ngăn cách bằng đường kẻ chỉ dọc */}
              <div className="lg:col-span-5 lg:pl-10 lg:border-l border-[#25231D]/15 dark:border-[#F2EADF]/15 space-y-7">
                
                {/* 1. TOEIC 640 */}
                <div className="space-y-2.5 pb-6 border-b border-[#25231D]/12 dark:border-[#F2EADF]/12">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#5C5549] dark:text-[#B8B9A6] font-bold flex items-center gap-1.5">
                      <Globe2 size={15} />
                      <span>{language === "vi" ? "CHỨNG CHỈ QUỐC TẾ" : "LANGUAGE CERTIFICATION"}</span>
                    </span>
                    <span className="font-mono text-[10.5px] font-bold text-emerald-600 dark:text-emerald-400">
                      [✓] ETS Certified
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 pt-1">
                    <span className="font-serif font-bold text-3xl text-[#25231D] dark:text-[#F2EADF] tracking-tight">
                      TOEIC 640
                    </span>
                    <span className="font-mono text-xs text-[#5C5549] dark:text-[#B8B9A6] font-medium">
                      (Listening & Reading)
                    </span>
                  </div>

                  <p className="font-sans text-xs text-[#40362E]/80 dark:text-[#F2EADF]/80 leading-relaxed">
                    {language === "vi"
                      ? "Đạt chuẩn giao tiếp và xử lý tài liệu kỹ thuật, test plan và kịch bản kiểm thử quốc tế."
                      : "Proficient for English technical specifications, test plans, and international team workflows."}
                  </p>
                </div>

                {/* 2. CTF HONORS 2023 */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#B96F4F] dark:text-[#C87D5D] font-bold flex items-center gap-1.5">
                      <Award size={15} />
                      <span>{language === "vi" ? "GIẢI THƯỞNG HỌC THUẬT" : "ACADEMIC HONORS"}</span>
                    </span>
                    <span className="font-mono text-[10.5px] font-bold text-[#B96F4F] dark:text-[#C87D5D]">
                      HCMUTE CTF 2023
                    </span>
                  </div>

                  <div className="pt-1">
                    <span className="font-serif font-bold text-2xl text-[#25231D] dark:text-[#F2EADF] tracking-tight block">
                      {language === "vi" ? "Giải Khuyến Khích CTF" : "CTF Consolation Prize"}
                    </span>
                    <span className="font-sans text-xs text-[#B96F4F] dark:text-[#C87D5D] font-semibold block pt-0.5">
                      Khoa CNTT — Đại học Sư phạm Kỹ thuật TP.HCM
                    </span>
                  </div>

                  <p className="font-sans text-xs text-[#40362E]/80 dark:text-[#F2EADF]/80 leading-relaxed">
                    {language === "vi"
                      ? "Rèn giũa tư duy rà soát lỗ hổng logic, bảo mật ứng dụng web và phân tích defect chuyên sâu."
                      : "Honed vulnerability detection, logic defect analysis, and secure code practices."}
                  </p>
                </div>

              </div>

            </div>
          </ScrollReveal>
        </motion.div>

      </div>
    </section>
  );
};

export default EducationSection;
