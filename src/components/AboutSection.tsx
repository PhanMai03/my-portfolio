import React from "react";
import {
  ArrowUpRight,
  ShieldCheck,
  Code2,
  Sparkles,
  MapPin,
  Download,
  Calendar,
  CheckCircle2,
  FileText,
  Award,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";

export const AboutSection: React.FC = () => {
  const { t, language } = useLanguage();

  const corePillars = [
    {
      icon: ShieldCheck,
      title: language === "vi" ? "Kiểm Thử QA & Phân Tích Lỗi" : "QA Testing & Defect Triage",
      desc: language === "vi" ? "Test case, Functional, API Postman, Jira" : "Test cases, Functional, API Postman, Jira",
      color: "text-[#B96F4F] dark:text-[#C87D5D]",
    },
    {
      icon: Code2,
      title: language === "vi" ? "Frontend SPA Hiện Đại" : "Modern Frontend Craft",
      desc: language === "vi" ? "ReactJS, NextJS, Tailwind CSS component" : "ReactJS, NextJS, Tailwind CSS component",
      color: "text-[#85866A] dark:text-[#9E9F88]",
    },
    {
      icon: Sparkles,
      title: language === "vi" ? "Tư Duy Bảo Mật & AI" : "Security & AI Mindset",
      desc: language === "vi" ? "Giải Ba CTF 2023, ứng dụng công cụ AI" : "CTF 2023 Honors, AI coding tools",
      color: "text-[#B96F4F] dark:text-[#C87D5D]",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center py-16 sm:py-20 lg:py-16 text-left overflow-hidden bg-[#EAE0D2] dark:bg-[#1C201A] border-b border-[#25231D]/15 dark:border-[#F2EADF]/15 transition-colors duration-300"
    >
      <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 space-y-8 sm:space-y-10">
        
        {/* =========================================================================
            SECTION HEADER (THOÁNG ĐÃNG, KHÔNG ĐÓNG KHUNG)
           ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#25231D]/15 dark:border-[#F2EADF]/15">
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-center gap-2 text-[#85866A] dark:text-[#9E9F88]">
              <span className="w-5 h-[1px] bg-[#85866A] dark:bg-[#9E9F88]" />
              <span className="font-mono text-[11px] uppercase tracking-widest">
                02 // ABOUT & ACADEMIC FOUNDATION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-serif font-bold text-[#25231D] dark:text-[#F2EADF] leading-[1.05] tracking-tight">
              {t.about.heading}{" "}
              <span className="italic font-normal text-[#B96F4F] dark:text-[#C87D5D]">
                {t.about.headingHighlight}
              </span>
            </h2>
          </div>

          <p className="font-sans text-xs text-[#25231D]/75 dark:text-[#F2EADF]/75 max-w-md leading-relaxed">
            {language === "vi"
              ? "Tốt nghiệp Kỹ thuật Phần mềm HCMUTE, kết hợp tư duy kiểm thử QA tỉ mỉ cùng kỹ năng lập trình giao diện React/NextJS hiện đại."
              : "Software Engineering graduate from HCMUTE, blending rigorous QA testing discipline with modern React/NextJS frontend craft."}
          </p>
        </div>

        {/* =========================================================================
            BỐ CỤC 1 TRANG TỰ NHIÊN (HOÀN TOÀN BỎ CÁC KHỐI CARD BAO BỌC NẶNG NỀ)
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* -----------------------------------------------------------------------
              CỘT TRÁI (5 cols): Ảnh Candid Tự Nhiên & Năng Lực Cốt Lõi (Card-Free)
             ----------------------------------------------------------------------- */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Ảnh candid đặt tự nhiên trên nền canvas, không hộp bọc */}
            <div className="flex items-center gap-5">
              <div className="relative shrink-0 w-28 sm:w-32 aspect-[4/5] rounded-2xl overflow-hidden shadow-lg -rotate-1 hover:rotate-0 transition-transform duration-300 border border-[#25231D]/15 dark:border-[#F2EADF]/20">
                <img
                  src="/mai-phan.jpg"
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-center filter contrast-[1.02] block"
                />
              </div>

              <div className="space-y-1 min-w-0">
                <div className="inline-flex items-center gap-1.5 font-mono text-[10.5px] text-[#85866A] dark:text-[#9E9F88]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{language === "vi" ? "Sẵn sàng nhận việc" : "Available for hire"}</span>
                </div>

                <h3 className="font-serif font-bold text-2xl text-[#25231D] dark:text-[#F2EADF] tracking-tight">
                  Phan Thi Ngoc Mai
                </h3>

                <p className="font-sans text-xs text-[#25231D]/75 dark:text-[#F2EADF]/75">
                  QA Tester • Frontend Developer
                </p>

                <div className="flex items-center gap-1 font-mono text-[11px] text-[#B96F4F] dark:text-[#C87D5D] font-semibold pt-1">
                  <MapPin size={12} />
                  <span>Ho Chi Minh City, VN</span>
                </div>
              </div>
            </div>

            {/* 3 Năng lực cốt lõi phân cách bằng đường kẻ thanh mảnh (KHÔNG DÙNG CARD) */}
            <div className="space-y-3 pt-2">
              <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#85866A] dark:text-[#9E9F88] block">
                {language === "vi" ? "TRỤ CỘT NĂNG LỰC:" : "CORE STRENGTHS:"}
              </span>

              <div className="divide-y divide-[#25231D]/15 dark:divide-[#F2EADF]/15">
                {corePillars.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <div key={i} className="py-2.5 first:pt-0 last:pb-0 flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <Icon size={15} className={`${p.color} shrink-0`} />
                        <span className="font-serif font-bold text-sm text-[#25231D] dark:text-[#F2EADF]">
                          {p.title}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] text-[#25231D]/65 dark:text-[#F2EADF]/65 truncate">
                        {p.desc}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#experience"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#25231D] dark:bg-[#F2EADF] text-[#F2EADF] dark:text-[#25231D] text-xs font-sans font-medium hover:bg-[#3D3A31] dark:hover:bg-[#E6D8C5] transition-all shadow-xs cursor-pointer"
              >
                <span>{t.about.exploreExp}</span>
                <ArrowUpRight size={12} />
              </a>

              <a
                href={PERSONAL_INFO.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-[#25231D]/30 dark:border-[#F2EADF]/30 text-xs font-sans font-medium text-[#25231D] dark:text-[#F2EADF] hover:border-[#B96F4F] hover:text-[#B96F4F] dark:hover:text-[#C87D5D] transition-all cursor-pointer"
              >
                <Download size={12} />
                <span>{language === "vi" ? "Tải CV [PDF]" : "Resume [PDF]"}</span>
              </a>
            </div>

          </div>

          {/* -----------------------------------------------------------------------
              CỘT PHẢI (7 cols): HỒ SƠ HỌC THUẬT & DANH DỰ (THOÁNG ĐÃNG, KHÔNG HỘP CARD NẶNG)
             ----------------------------------------------------------------------- */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6 lg:border-l border-[#25231D]/15 dark:border-[#F2EADF]/15 relative">
            
            {/* Kẹp ghim kim loại đồ họa SVG kẹp ở mép trên cùng */}
            <div className="absolute -top-3 right-6 pointer-events-none drop-shadow-sm">
              <svg width="20" height="42" viewBox="0 0 24 48" fill="none">
                <path
                  d="M6 12 V34 C6 38 10 42 14 42 C18 42 22 38 22 34 V8 C22 4 18 1 12 1 C6 1 2 5 2 10 V36"
                  stroke="#A3A289"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Dossier Header Info */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#25231D]/15 dark:border-[#F2EADF]/15">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#B96F4F] dark:text-[#C87D5D]">
                  ACADEMIC DOSSIER // 2025
                </span>
                <span className="text-[#25231D]/40 dark:text-[#F2EADF]/40">•</span>
                <span className="font-mono text-xs text-[#25231D]/70 dark:text-[#F2EADF]/70">
                  REF: #HCMUTE-SE-ARCHIVE-9481
                </span>
              </div>

              <div className="flex items-center gap-2">
                <svg className="w-16 h-4 text-[#25231D]/70 dark:text-[#F2EADF]/70" viewBox="0 0 100 24">
                  <rect x="0" y="0" width="3" height="24" fill="currentColor" />
                  <rect x="5" y="0" width="2" height="24" fill="currentColor" />
                  <rect x="10" y="0" width="4" height="24" fill="currentColor" />
                  <rect x="16" y="0" width="1" height="24" fill="currentColor" />
                  <rect x="20" y="0" width="5" height="24" fill="currentColor" />
                  <rect x="28" y="0" width="2" height="24" fill="currentColor" />
                  <rect x="33" y="0" width="4" height="24" fill="currentColor" />
                  <rect x="40" y="0" width="6" height="24" fill="currentColor" />
                  <rect x="50" y="0" width="2" height="24" fill="currentColor" />
                  <rect x="55" y="0" width="5" height="24" fill="currentColor" />
                  <rect x="63" y="0" width="3" height="24" fill="currentColor" />
                  <rect x="70" y="0" width="4" height="24" fill="currentColor" />
                  <rect x="78" y="0" width="2" height="24" fill="currentColor" />
                  <rect x="84" y="0" width="5" height="24" fill="currentColor" />
                  <rect x="92" y="0" width="2" height="24" fill="currentColor" />
                  <rect x="96" y="0" width="4" height="24" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Bằng Đại Học HCMUTE Trình Bày Mở (Không Card Nền Xám) */}
            <div className="space-y-4 relative">
              
              {/* Con dấu sáp dập nổi tròn Terracotta */}
              <div className="absolute top-0 right-2 w-16 h-16 rounded-full border border-dashed border-[#B96F4F] dark:border-[#C87D5D] p-0.5 flex items-center justify-center pointer-events-none opacity-85 rotate-12">
                <div className="w-full h-full rounded-full border border-[#B96F4F] dark:border-[#C87D5D] flex flex-col items-center justify-center font-mono text-[5.5px] uppercase font-bold text-[#B96F4F] dark:text-[#C87D5D] leading-tight">
                  <span>SEALED</span>
                  <span className="text-[7px]">HCMUTE</span>
                  <span>2025</span>
                </div>
              </div>

              <div className="space-y-1.5 pr-20">
                <div className="flex items-center gap-2 font-mono text-[11px] text-[#B96F4F] dark:text-[#C87D5D] font-bold">
                  <span>{t.education.degreeTitle}</span>
                  <span className="text-[#25231D]/40 dark:text-[#F2EADF]/40">•</span>
                  <span className="text-[#25231D]/70 dark:text-[#F2EADF]/70">2021 – 2025</span>
                </div>

                <h4 className="font-serif font-bold text-2xl sm:text-[1.7rem] text-[#25231D] dark:text-[#F2EADF] leading-tight">
                  {t.education.university}
                </h4>
                <p className="font-serif italic text-sm text-[#85866A] dark:text-[#9E9F88]">
                  {language === "vi" ? "Kỹ thuật Phần mềm (Software Engineering)" : "Bachelor of Software Engineering"}
                </p>
              </div>

              {/* GPA & Coursework Chips */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-mono text-xs text-[#25231D]/60 dark:text-[#F2EADF]/60 uppercase">GPA:</span>
                  <span className="font-serif font-bold text-2xl text-[#B96F4F] dark:text-[#C87D5D]">3.23</span>
                  <span className="font-mono text-xs text-[#25231D]/60 dark:text-[#F2EADF]/60">/ 4.0</span>
                  <span className="text-xs text-[#30372D] dark:text-[#C8B69E] font-medium ml-1">
                    {t.education.gpaGrade}
                  </span>
                </div>

                <div className="w-[1px] h-4 bg-[#25231D]/20 dark:bg-[#F2EADF]/20 hidden sm:block" />

                <div className="flex flex-wrap gap-1.5">
                  {["Software QA & Testing", "Web SPA Architecture", "Bug Lifecycle & Postman"].map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10.5px] font-mono bg-[#E6D8C5]/70 dark:bg-[#20261C] text-[#25231D] dark:text-[#F2EADF] border border-[#25231D]/10"
                    >
                      <CheckCircle2 size={11} className="text-[#B96F4F] dark:text-[#C87D5D]" />
                      <span>{c}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 2 Chứng chỉ & Giải thưởng phân cách bằng đường kẻ tinh tế (KHÔNG ĐÓNG HỘP) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#25231D]/15 dark:border-[#F2EADF]/15">
              
              {/* TOEIC 640 */}
              <div className="space-y-1">
                <div className="flex items-center justify-between pb-1">
                  <span className="font-mono text-[10px] uppercase font-bold text-[#85866A] dark:text-[#9E9F88]">
                    {language === "vi" ? "CHỨNG CHỈ NGOẠI NGỮ" : "LANGUAGE CERTIFICATE"}
                  </span>
                  <FileText size={13} className="text-[#B96F4F] dark:text-[#C87D5D]" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif font-bold text-2xl text-[#25231D] dark:text-[#F2EADF]">
                    TOEIC 640
                  </span>
                  <span className="font-mono text-[10px] text-[#B96F4F] dark:text-[#C87D5D] font-bold">
                    [✓] ETS Certified
                  </span>
                </div>
                <p className="font-sans text-xs text-[#25231D]/75 dark:text-[#F2EADF]/75 leading-relaxed">
                  {language === "vi"
                    ? "Listening & Reading Comprehension • Giao tiếp & đọc hiểu tài liệu kỹ thuật quốc tế."
                    : "Listening & Reading Comprehension • Professional English for technical documentation & team collaboration."}
                </p>
              </div>

              {/* CTF 2023 Honors */}
              <div className="space-y-1">
                <div className="flex items-center justify-between pb-1">
                  <span className="font-mono text-[10px] uppercase font-bold text-[#B96F4F] dark:text-[#C87D5D]">
                    {language === "vi" ? "GIẢI THƯỞNG HỌC THUẬT" : "ACADEMIC HONORS"}
                  </span>
                  <Award size={14} className="text-[#B96F4F] dark:text-[#C87D5D]" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif font-bold text-xl text-[#25231D] dark:text-[#F2EADF]">
                    {language === "vi" ? "Giải Thưởng CTF 2023" : "CTF 2023 Honors"}
                  </span>
                  <span className="font-mono text-[10px] text-[#30372D] dark:text-[#C8B69E] font-bold">
                    {language === "vi" ? "Giải Khuyến Khích" : "Consolation Award"}
                  </span>
                </div>
                <p className="font-sans text-xs text-[#25231D]/75 dark:text-[#F2EADF]/75 leading-relaxed">
                  {language === "vi"
                    ? "Cyber Security Capture The Flag HCMUTE • Kỹ năng rà soát lỗ hổng web."
                    : "HCMUTE Cyber Security Capture The Flag • Web vulnerability triage & defect identification mindset."}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;