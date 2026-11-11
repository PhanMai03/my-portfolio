import React from "react";
import { ArrowUpRight, GraduationCap, FileText, Award, CheckCircle2, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

export const EducationSection: React.FC = () => {
  const { t, language } = useLanguage();

  const courseworkList = [
    language === "vi" ? "Kiểm thử phần mềm & QA" : "Software QA & Testing",
    language === "vi" ? "Kiến trúc Web SPA & React" : "Web SPA & React Architecture",
    language === "vi" ? "Phân tích & Quản lý vòng đời lỗi" : "Bug Lifecycle & Defect Triage",
    language === "vi" ? "Kiểm thử API với Postman" : "API Postman Verification",
    language === "vi" ? "An toàn thông tin & Web Security" : "Web Security & Vulnerability Triage",
    language === "vi" ? "Cơ sở dữ liệu quan hệ SQL & NoSQL" : "SQL & NoSQL Database Design",
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center py-16 sm:py-20 lg:py-16 text-left overflow-hidden bg-[#F2EADF] dark:bg-[#161914] border-b border-[#25231D]/15 dark:border-[#F2EADF]/15 transition-colors duration-300"
    >
      <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 space-y-12 sm:space-y-16">
        
        {/* =========================================================================
            SECTION HEADER
           ========================================================================= */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#25231D]/15 dark:border-[#F2EADF]/15">
            <div className="space-y-1.5 max-w-xl">
              <div className="flex items-center gap-2 text-[#85866A] dark:text-[#9E9F88]">
                <span className="w-5 h-[1px] bg-[#85866A] dark:bg-[#9E9F88]" />
                <span className="font-mono text-[11px] uppercase tracking-widest">
                  03 // EDUCATION & CREDENTIALS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-serif font-bold text-[#25231D] dark:text-[#F2EADF] leading-[1.05] tracking-tight">
                {t.education.title}{" "}
                <span className="italic font-normal text-[#B96F4F] dark:text-[#C87D5D]">
                  {t.education.titleHighlight}
                </span>
              </h2>
            </div>

            <p className="font-sans text-xs text-[#25231D]/75 dark:text-[#F2EADF]/75 max-w-md leading-relaxed">
              {language === "vi"
                ? "Nền tảng đào tạo chính quy ngành Kỹ thuật Phần mềm tại HCMUTE cùng các chứng chỉ ngoại ngữ và giải thưởng chuyên môn."
                : "Accredited Software Engineering foundation from HCMUTE, international language certification, and academic honors."}
            </p>
          </div>
        </ScrollReveal>

        {/* =========================================================================
            HÀNG SỐ LỚN ĐẶT NẰM THẲNG TRÊN CANVAS (KHÔNG DÙNG THẺ HỘP)
           ========================================================================= */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-[#25231D]/15 dark:border-[#F2EADF]/15">
            <div className="space-y-1">
              <span className="font-serif font-bold text-5xl lg:text-6xl text-[#B96F4F] dark:text-[#C87D5D] tracking-tight block">
                3.23
              </span>
              <span className="font-mono text-xs uppercase font-bold text-[#25231D] dark:text-[#F2EADF] block">
                GPA CHÍNH QUY / 4.0
              </span>
              <span className="font-sans text-xs text-[#85866A] dark:text-[#9E9F88] block">
                Xếp loại Khá - Giỏi HCMUTE
              </span>
            </div>

            <div className="space-y-1 sm:pl-6 sm:border-l border-[#25231D]/15 dark:border-[#F2EADF]/15">
              <span className="font-serif font-bold text-5xl lg:text-6xl text-[#25231D] dark:text-[#F2EADF] tracking-tight block">
                640
              </span>
              <span className="font-mono text-xs uppercase font-bold text-[#25231D] dark:text-[#F2EADF] block">
                TOEIC TIẾNG ANH
              </span>
              <span className="font-sans text-xs text-[#85866A] dark:text-[#9E9F88] block">
                ETS Certified (Listening & Reading)
              </span>
            </div>

            <div className="space-y-1 sm:pl-6 sm:border-l border-[#25231D]/15 dark:border-[#F2EADF]/15">
              <span className="font-serif font-bold text-5xl lg:text-6xl text-[#30372D] dark:text-[#C8B69E] tracking-tight block">
                2023
              </span>
              <span className="font-mono text-xs uppercase font-bold text-[#25231D] dark:text-[#F2EADF] block">
                GIẢI THƯỞNG CTF
              </span>
              <span className="font-sans text-xs text-[#85866A] dark:text-[#9E9F88] block">
                An toàn thông tin & Lỗ hổng web
              </span>
            </div>

            <div className="space-y-1 sm:pl-6 sm:border-l border-[#25231D]/15 dark:border-[#F2EADF]/15">
              <span className="font-serif font-bold text-5xl lg:text-6xl text-[#B96F4F] dark:text-[#C87D5D] tracking-tight block">
                2021-25
              </span>
              <span className="font-mono text-xs uppercase font-bold text-[#25231D] dark:text-[#F2EADF] block">
                KHÓA CHÍNH QUY
              </span>
              <span className="font-sans text-xs text-[#85866A] dark:text-[#9E9F88] block">
                Khoa Công nghệ Thông tin
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* =========================================================================
            CHI TIẾT BẰNG CẤP & CHỨNG CHỈ (BỐ CỤC MỞ 2 CỘT — KHÔNG DÙNG THẺ HỘP)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* CỘT TRÁI (7 cols): Chi tiết Đại học HCMUTE & Môn học */}
          <ScrollReveal delay={0.15} className="lg:col-span-7 space-y-6">
            <div className="space-y-2 pb-4 border-b border-[#25231D]/15 dark:border-[#F2EADF]/15">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#B96F4F] dark:text-[#C87D5D]">
                  CỬ NHÂN CHÍNH QUY // 2021 – 2025
                </span>
                <span className="font-mono text-[10.5px] uppercase text-emerald-600 dark:text-emerald-400 font-bold">
                  [✓] ĐÃ HOÀN THÀNH
                </span>
              </div>

              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#25231D] dark:text-[#F2EADF] tracking-tight">
                {t.education.university}
              </h3>

              <p className="font-serif italic text-base text-[#85866A] dark:text-[#9E9F88]">
                {t.education.majorValue}
              </p>
            </div>

            {/* Môn học chuyên ngành nổi bật */}
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#85866A] dark:text-[#9E9F88] block">
                {language === "vi" ? "LĨNH VỰC TRỌNG TÂM & MÔN HỌC ĐÃ HOÀN THÀNH:" : "FOCUS AREAS & VERIFIED COURSEWORK:"}
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {courseworkList.map((cw, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 py-1 text-xs font-sans text-[#25231D]/80 dark:text-[#F2EADF]/80"
                  >
                    <CheckCircle2 size={13} className="text-[#B96F4F] dark:text-[#C87D5D] shrink-0" />
                    <span>{cw}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* CỘT PHẢI (5 cols): TOEIC 640 & Giải thưởng CTF 2023 */}
          <ScrollReveal delay={0.2} className="lg:col-span-5 space-y-8 lg:pl-10 lg:border-l border-[#25231D]/15 dark:border-[#F2EADF]/15">
            
            {/* TOEIC 640 */}
            <div className="space-y-2 pb-6 border-b border-[#25231D]/15 dark:border-[#F2EADF]/15">
              <div className="flex items-center justify-between font-mono text-[11px]">
                <span className="text-[#85866A] dark:text-[#9E9F88] uppercase font-bold">
                  CHỨNG CHỈ NGOẠI NGỮ
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">[✓] ETS Certified</span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="font-serif font-bold text-3xl text-[#25231D] dark:text-[#F2EADF]">
                  TOEIC 640
                </span>
                <span className="font-mono text-xs text-[#85866A] dark:text-[#9E9F88]">
                  (Listening & Reading)
                </span>
              </div>

              <p className="font-sans text-xs text-[#25231D]/75 dark:text-[#F2EADF]/75 leading-relaxed">
                {language === "vi"
                  ? "Đạt chuẩn năng lực giao tiếp và làm việc với tài liệu kỹ thuật, test plan và kịch bản kiểm thử quốc tế."
                  : "Proficient English for technical specifications, test plans, and cross-functional team collaboration."}
              </p>
            </div>

            {/* CTF 2023 Honors */}
            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono text-[11px]">
                <span className="text-[#B96F4F] dark:text-[#C87D5D] uppercase font-bold">
                  GIẢI THƯỞNG HỌC THUẬT
                </span>
                <span className="text-[#85866A] dark:text-[#9E9F88]">HCMUTE CNTT</span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="font-serif font-bold text-2xl text-[#25231D] dark:text-[#F2EADF]">
                  CTF Honors 2023
                </span>
                <span className="font-mono text-xs font-bold text-[#B96F4F] dark:text-[#C87D5D]">
                  [Giải Khuyến Khích]
                </span>
              </div>

              <p className="font-sans text-xs text-[#25231D]/75 dark:text-[#F2EADF]/75 leading-relaxed">
                {language === "vi"
                  ? "Cuộc thi An toàn thông tin do Khoa CNTT HCMUTE tổ chức. Rèn giũa tư duy rà soát lỗ hổng logic và bảo mật ứng dụng web."
                  : "HCMUTE Cyber Security Capture The Flag. Honed vulnerability detection and defect triage mindset."}
              </p>
            </div>

          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};

export default EducationSection;

