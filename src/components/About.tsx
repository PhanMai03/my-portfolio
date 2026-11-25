import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

export const About: React.FC = () => {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax Scroll Tracking for About Section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  // Layered Parallax Offsets:
  // Background sand card moves one way, terracotta card moves opposite, photo glides softly
  const sandCardY = useTransform(smoothProgress, [0, 1], [-25, 35]);
  const terracottaCardY = useTransform(smoothProgress, [0, 1], [30, -30]);
  const photoY = useTransform(smoothProgress, [0, 1], [-12, 16]);
  const leftColY = useTransform(smoothProgress, [0, 1], [15, -15]);
  const rightColY = useTransform(smoothProgress, [0, 1], [-10, 20]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-[90vh] flex flex-col justify-center py-20 sm:py-24 lg:py-24 text-left overflow-hidden bg-[#EAE0D2] dark:bg-[#1C201A] bg-blueprint-grid text-[#40362E] dark:text-[#F2EADF] border-b border-[#25231D]/15 dark:border-[#F2EADF]/15 transition-colors duration-300"
    >
      {/* =========================================================================
          1. DATA BITS & FLOATING NODES (Hạt dữ liệu kỹ thuật)
         ========================================================================= */}
      <div className="absolute top-8 sm:top-12 left-6 sm:left-12 pointer-events-none z-0 select-none">
        {/* Đường mạch gióng kỹ thuật mờ */}
        <svg
          className="w-44 sm:w-56 h-32 text-[#5C5549]/30 dark:text-[#B8B9A6]/20"
          viewBox="0 0 200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 24 L70 24 L110 75 L180 75"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3 4"
          />
          <circle cx="70" cy="24" r="2.5" fill="#B96F4F" />
          <circle cx="110" cy="75" r="2" fill="#5C5549" />
        </svg>

        {/* Các hạt dữ liệu (Data bits) trôi nhẹ chu kỳ 5s */}
        <div className="absolute top-2 left-10 flex items-center gap-1.5 animate-gentle-float">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B96F4F]" />
          <span className="font-mono text-[9px] text-[#5C5549] dark:text-[#B8B9A6] uppercase tracking-widest font-semibold">
            NODE::01
          </span>
        </div>

        <div className="absolute top-12 left-32 animate-gentle-float-delayed">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8B69E] block shadow-xs" />
        </div>

        <div className="absolute top-20 left-6 animate-gentle-float">
          <span className="w-1 h-1 rounded-full bg-[#5C5549] block" />
        </div>

        <div className="absolute top-24 left-40 flex items-center gap-1.5 animate-gentle-float-delayed">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B96F4F]" />
          <span className="font-mono text-[8.5px] text-[#5C5549] dark:text-[#B8B9A6] uppercase">
            PKT_OK
          </span>
        </div>
      </div>

      {/* =========================================================================
          2. MARGIN COORDINATE RULER (Thước đo kỹ thuật lề phải)
         ========================================================================= */}
      <div className="hidden xl:flex absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-2 pointer-events-none select-none z-10">
        <span className="font-mono text-[9px] text-[#5C5549] dark:text-[#B8B9A6] tracking-widest -rotate-90 origin-center whitespace-nowrap mb-8 font-medium">
          POS: 02 // AXIS: Y // RES: 1080P
        </span>
        <div className="w-[1px] h-36 bg-[#5C5549]/25 dark:bg-[#B8B9A6]/20 relative flex flex-col justify-between py-2">
          {Array.from({ length: 9 }).map((_, i) => (
            <span
              key={i}
              className={`h-[1px] -ml-[2px] ${i % 2 === 0
                ? "w-2.5 bg-[#B96F4F] dark:bg-[#C87D5D]"
                : "w-1.5 bg-[#5C5549]/40"
                }`}
            />
          ))}
        </div>
        <span className="font-mono text-[9px] text-[#5C5549] dark:text-[#B8B9A6] tracking-widest mt-6">
          CALIB: 32PX
        </span>
      </div>

      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 relative z-10">
        <ScrollReveal>
          {/* =========================================================================
              LAYOUT CHÍNH: 12 CỘT BẤT ĐỐI XỨNG CÂN BẰNG (5 - 4 - 3)
             ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-center">

            {/* ---------------------------------------------------------------------
                II. CỘT TRÁI (Narrative & Technical Label - 5 Cột with Parallax)
               --------------------------------------------------------------------- */}
            <motion.div style={{ y: leftColY }} className="lg:col-span-5 space-y-6">
              {/* Top Label */}
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B96F4F]" />
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#5C5549] dark:text-[#B8B9A6] font-bold">
                  02 // ABOUT ME
                </p>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-serif font-bold text-[#25231D] dark:text-[#F2EADF] leading-[1.08] tracking-tight">
                A curious mind, <br />
                building for <br />
                <span className="font-editorial-italic font-normal text-[#B96F4F] dark:text-[#C87D5D]">
                  what's next.
                </span>
              </h2>

              {/* 2 Đoạn văn tự nhiên, thoáng đãng */}
              <div className="space-y-4 font-sans text-sm sm:text-base text-[#40362E]/90 dark:text-[#F2EADF]/85 leading-relaxed">
                <p>
                  {language === "vi"
                    ? "Là một Kỹ sư Phần mềm tốt nghiệp chuyên ngành Kỹ thuật Phần mềm (HCMUTE), mình kết hợp tư duy logic chặt chẽ của QA Tester và năng lực thiết kế giao diện của Frontend Developer để xây dựng những giải pháp số đáng tin cậy."
                    : "As a Software Engineering graduate from HCMUTE, I combine the analytical discipline of QA Verification with modern Frontend craftsmanship to deliver production-ready, resilient digital experiences."}
                </p>
                <p>
                  {language === "vi"
                    ? "Mình chú trọng vào cấu trúc mã sạch, kiểm thử nghiêm ngặt (Functional, API Postman, Jira Defect Tracking) và tối ưu hóa hiệu năng để ứng dụng luôn vận hành mượt mà, sẵn sàng phục vụ người dùng thực tế."
                    : "I focus on clean modular architecture, meticulous testing coverage (Functional, API Postman, Jira defect workflows), and UI performance optimization for high-standard software products."}
                </p>
              </div>

              {/* CTA Link */}
              <div className="pt-2">
                <a
                  href="#experience"
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-[#25231D] dark:text-[#F2EADF] hover:text-[#B96F4F] dark:hover:text-[#C87D5D] transition-colors font-bold group"
                >
                  <span>{language === "vi" ? "Khám phá kinh nghiệm" : "Explore Experience"}</span>
                  <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </a>
              </div>
            </motion.div>

            {/* ---------------------------------------------------------------------
                III. CỘT GIỮA (Chân dung Modern Overlap với Multi-layer Parallax)
               --------------------------------------------------------------------- */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[290px] sm:max-w-[310px] mx-auto flex items-center justify-center py-4">

                {/* 1. Nền trang trí Sand (#C8B69E) di chuyển Parallax theo hướng 1 */}
                <motion.div
                  style={{ y: sandCardY }}
                  className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-full h-[94%] bg-[#C8B69E] dark:bg-[#38332A] rounded-3xl -rotate-3 pointer-events-none opacity-90 transition-transform"
                />

                {/* 2. Nền trang trí Terracotta (#B96F4F) di chuyển Parallax ngược chiều */}
                <motion.div
                  style={{ y: terracottaCardY }}
                  className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-full h-[94%] bg-[#B96F4F] dark:bg-[#A35D3F] rounded-3xl rotate-2 pointer-events-none shadow-md overflow-hidden"
                >
                  {/* Chấm tròn trang trí nhỏ ở góc dưới trái */}
                  <div className="absolute bottom-3 left-3 grid grid-cols-4 gap-1.5 opacity-60">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-[#F2EADF]"
                      />
                    ))}
                  </div>
                </motion.div>

                {/* 3. Ảnh chân dung Foreground với chuyển động Parallax êm ái */}
                <motion.div
                  style={{ y: photoY }}
                  className="relative w-64 sm:w-72 h-[380px] sm:h-[420px] rounded-tr-[80px] rounded-bl-[40px] rounded-tl-[16px] rounded-br-[16px] overflow-hidden shadow-xl border-2 border-[#EAE0D2] dark:border-[#1C201A] z-10 bg-[#E6D8C5] dark:bg-[#20261C]"
                >
                  <img
                    src="/mai-phan.jpg"
                    alt="Phan Thi Ngoc Mai"
                    className="w-full h-full object-cover object-[center_35%] filter contrast-[1.02] brightness-[1.02]"
                  />
                </motion.div>

              </div>
            </div>

            {/* ---------------------------------------------------------------------
                IV. CỘT PHẢI (Editorial Metadata & Core Highlights - Cân bằng chiều cao)
               --------------------------------------------------------------------- */}
            <motion.div style={{ y: rightColY }} className="lg:col-span-3 space-y-6 lg:pl-2 relative">

              {/* Item 1: LOCATION */}
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-wider text-[#B96F4F] dark:text-[#C87D5D] font-bold block">
                  LOCATION /
                </span>
                <p className="font-mono text-xs sm:text-sm text-[#25231D] dark:text-[#F2EADF] leading-snug">
                  Ho Chi Minh City, Vietnam
                </p>
              </div>

              {/* Item 2: DISCIPLINE */}
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-wider text-[#B96F4F] dark:text-[#C87D5D] font-bold block">
                  DISCIPLINE /
                </span>
                <p className="font-mono text-xs sm:text-sm text-[#25231D] dark:text-[#F2EADF] leading-snug">
                  QA Tester • Manual & API <br />
                  Frontend Engineer (React)
                </p>
              </div>

              {/* Item 3: PHILOSOPHY */}
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-wider text-[#B96F4F] dark:text-[#C87D5D] font-bold block">
                  PHILOSOPHY /
                </span>
                <p className="font-sans text-xs sm:text-[13px] text-[#40362E]/85 dark:text-[#F2EADF]/85 leading-relaxed">
                  Clean code meets rigorous defect verification. Built for longevity and human usability.
                </p>
              </div>

              {/* Item 4: KEY COMPETENCIES (Bổ sung để cân bằng chiều cao với cột ảnh) */}
              <div className="space-y-2 pt-2 border-t border-[#25231D]/15 dark:border-[#F2EADF]/15">
                <span className="font-mono text-xs uppercase tracking-wider text-[#5C5549] dark:text-[#B8B9A6] font-bold block">
                  CORE SPECIALIZATION /
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Manual QA",
                    "API Testing",
                    "Postman",
                    "Jira Defect Triage",
                    "React 19",
                    "TypeScript",
                    "Tailwind CSS",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md font-mono text-[10px] bg-[#E6D8C5]/60 dark:bg-[#20261C] border border-[#25231D]/10 dark:border-[#F2EADF]/10 text-[#25231D] dark:text-[#F2EADF] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technical anchor coordinate marker & Vạch đo tỷ lệ */}
              <div className="pt-2 border-t border-[#25231D]/15 dark:border-[#F2EADF]/15 flex items-center justify-between font-mono text-[9px] text-[#5C5549] dark:text-[#B8B9A6] select-none">
                <div className="flex items-center gap-1.5">
                  <span className="w-6 h-[2px] bg-[#B96F4F] dark:bg-[#C87D5D] block" />
                  <span className="font-bold text-[#B96F4F] dark:text-[#C87D5D]">SCALE: 1:1</span>
                </div>
                <span className="tracking-widest uppercase">SEC_02::VERIFIED</span>
              </div>

            </motion.div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
