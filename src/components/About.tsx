import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

export const About: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center py-16 sm:py-20 lg:py-16 text-left overflow-hidden bg-[#F2EADF] dark:bg-[#161914] bg-blueprint-grid text-[#40362E] dark:text-[#F2EADF] border-b border-[#25231D]/15 dark:border-[#F2EADF]/15 transition-colors duration-300"
    >
      {/* =========================================================================
          1. DATA BITS & FLOATING NODES (Hạt dữ liệu thay cho lá cây — Hoàn toàn kỹ thuật)
         ========================================================================= */}
      <div className="absolute top-8 sm:top-12 left-6 sm:left-12 pointer-events-none z-0 select-none">
        {/* Đường mạch gióng kỹ thuật mờ */}
        <svg
          className="w-44 sm:w-56 h-32 text-[#85866A]/30 dark:text-[#9E9F88]/20"
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
          <circle cx="110" cy="75" r="2" fill="#85866A" />
        </svg>

        {/* Các hạt dữ liệu (Data bits) trôi nhẹ chu kỳ 5s */}
        <div className="absolute top-2 left-10 flex items-center gap-1.5 animate-gentle-float">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B96F4F]" />
          <span className="font-mono text-[9px] text-[#85866A]/75 dark:text-[#9E9F88]/70 uppercase tracking-widest">
            NODE::01
          </span>
        </div>

        <div className="absolute top-12 left-32 animate-gentle-float-delayed">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8B69E] block shadow-xs" />
        </div>

        <div className="absolute top-20 left-6 animate-gentle-float">
          <span className="w-1 h-1 rounded-full bg-[#85866A] block" />
        </div>

        <div className="absolute top-24 left-40 flex items-center gap-1.5 animate-gentle-float-delayed">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B96F4F]" />
          <span className="font-mono text-[8.5px] text-[#85866A]/60 dark:text-[#9E9F88]/60 uppercase">
            PKT_OK
          </span>
        </div>
      </div>

      {/* =========================================================================
          2. MARGIN COORDINATE RULER (Thước đo kỹ thuật lề phải)
         ========================================================================= */}
      <div className="hidden xl:flex absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-2 pointer-events-none select-none z-10">
        <span className="font-mono text-[9px] text-[#85866A]/60 dark:text-[#9E9F88]/60 tracking-widest -rotate-90 origin-center whitespace-nowrap mb-8">
          POS: 02 // AXIS: Y // RES: 1080P
        </span>
        <div className="w-[1px] h-36 bg-[#85866A]/20 dark:bg-[#9E9F88]/20 relative flex flex-col justify-between py-2">
          {Array.from({ length: 9 }).map((_, i) => (
            <span
              key={i}
              className={`h-[1px] -ml-[2px] ${
                i % 2 === 0
                  ? "w-2.5 bg-[#B96F4F] dark:bg-[#C87D5D]"
                  : "w-1.5 bg-[#85866A]/40"
              }`}
            />
          ))}
        </div>
        <span className="font-mono text-[9px] text-[#85866A]/60 dark:text-[#9E9F88]/60 tracking-widest mt-6">
          CALIB: 32PX
        </span>
      </div>

      {/* Technical Intersection Crosshairs `+` tại đường gióng biên section */}
      <div className="absolute top-0 left-8 sm:left-16 -translate-y-1/2 font-mono text-[12px] font-bold text-[#B96F4F] dark:text-[#C87D5D] select-none pointer-events-none">
        +
      </div>
      <div className="absolute bottom-0 right-12 sm:right-24 translate-y-1/2 font-mono text-[12px] font-bold text-[#B96F4F] dark:text-[#C87D5D] select-none pointer-events-none">
        +
      </div>

      {/* MAIN CONTAINER */}
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 relative z-10">
        <ScrollReveal>
          {/* =========================================================================
              LAYOUT CHÍNH: 12 CỘT BẤT ĐỐI XỨNG (5 - 4 - 3)
             ========================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-center">
            
            {/* ---------------------------------------------------------------------
                II. CỘT TRÁI (Narrative & Technical Label - 5 Cột)
               --------------------------------------------------------------------- */}
            <div className="lg:col-span-5 space-y-6">
              {/* Top Label */}
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B96F4F]" />
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#85866A] dark:text-[#9E9F88] font-bold">
                  ABOUT ME
                </p>
              </div>

              {/* Main Headline */}
              <h2 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-serif font-bold text-[#40362E] dark:text-[#F2EADF] leading-[1.08] tracking-tight">
                A curious mind, <br />
                building for <br />
                <span className="italic font-normal text-[#B96F4F] dark:text-[#C87D5D]">
                  what's next.
                </span>
              </h2>

              {/* 2 Đoạn văn tự nhiên, thoáng đãng */}
              <div className="space-y-4 font-sans text-sm sm:text-base text-[#30372D]/85 dark:text-[#F2EADF]/85 leading-relaxed">
                <p>
                  {language === "vi"
                    ? "Là một Kỹ sư Phần mềm đam mê lập trình, mình luôn hướng tới việc kiến tạo những sản phẩm số chỉn chu, kết hợp hài hòa giữa kỹ thuật chuẩn xác và thẩm mỹ tinh tế."
                    : "I'm a software engineer passionate about transforming ideas into production-ready digital products that blend technical durability with thoughtful user experience."}
                </p>
                <p>
                  {language === "vi"
                    ? "Với tư duy giải quyết vấn đề bằng công nghệ, mình chú trọng vào cấu trúc mã sạch, kiểm thử nghiêm ngặt và tối ưu hóa hiệu năng để ứng dụng luôn vận hành bền bỉ theo thời gian."
                    : "With an analytical problem-solving mindset, I focus on clean architecture, meticulous testing discipline, and performance optimization to build scalable, resilient software."}
                </p>
              </div>

              {/* CTA Link */}
              <div className="pt-2">
                <a
                  href="#education"
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-[#40362E] dark:text-[#F2EADF] hover:text-[#B96F4F] dark:hover:text-[#C87D5D] transition-colors font-bold group"
                >
                  <span>More about me</span>
                  <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            {/* ---------------------------------------------------------------------
                III. CỘT GIỮA (Chân dung Modern Overlap + 4 Technical Crosshairs)
               --------------------------------------------------------------------- */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[290px] sm:max-w-[310px] mx-auto flex items-center justify-center py-4">
                
                {/* 1. Nền trang trí Sand (#C8B69E) phía sau trên bên phải */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-full h-[94%] bg-[#C8B69E] dark:bg-[#38332A] rounded-3xl -rotate-3 pointer-events-none opacity-90 transition-transform" />

                {/* 2. Nền trang trí Terracotta (#B96F4F) phía sau dưới bên trái */}
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-full h-[94%] bg-[#B96F4F] dark:bg-[#A35D3F] rounded-3xl rotate-2 pointer-events-none shadow-md overflow-hidden">
                  {/* Chấm tròn trang trí nhỏ ở góc dưới trái (Dot matrix cluster) */}
                  <div className="absolute bottom-3 left-3 grid grid-cols-4 gap-1.5 opacity-60">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-[#F2EADF]"
                      />
                    ))}
                  </div>
                </div>

                {/* 3. Ảnh chân dung Foreground (Bo góc so le bất đối xứng) */}
                <div className="relative w-64 sm:w-72 h-[380px] sm:h-[420px] rounded-tr-[80px] rounded-bl-[40px] rounded-tl-[16px] rounded-br-[16px] overflow-hidden shadow-xl border-2 border-[#EAE0D2] dark:border-[#1C201A] z-10 bg-[#E6D8C5] dark:bg-[#20261C]">
                  {/* 4 Technical Corner Crosshairs `+` tại 4 góc khung chân dung */}
                  <span className="absolute top-2 left-2 font-mono text-[11px] font-bold text-[#B96F4F] dark:text-[#C87D5D] leading-none select-none z-20 pointer-events-none">
                    +
                  </span>
                  <span className="absolute top-2 right-2 font-mono text-[11px] font-bold text-[#B96F4F] dark:text-[#C87D5D] leading-none select-none z-20 pointer-events-none">
                    +
                  </span>
                  <span className="absolute bottom-2 left-2 font-mono text-[11px] font-bold text-[#B96F4F] dark:text-[#C87D5D] leading-none select-none z-20 pointer-events-none">
                    +
                  </span>
                  <span className="absolute bottom-2 right-2 font-mono text-[11px] font-bold text-[#B96F4F] dark:text-[#C87D5D] leading-none select-none z-20 pointer-events-none">
                    +
                  </span>

                  <img
                    src="/mai-phan.jpg"
                    alt="Phan Thi Ngoc Mai"
                    className="w-full h-full object-cover object-[center_35%] filter contrast-[1.02] brightness-[1.02]"
                  />
                </div>

              </div>
            </div>

            {/* ---------------------------------------------------------------------
                IV. CỘT PHẢI (Editorial Metadata - 3 Cột)
               --------------------------------------------------------------------- */}
            <div className="lg:col-span-3 space-y-8 lg:pl-4 relative">
              
              {/* Item 1: LOCATION */}
              <div className="space-y-1.5">
                <span className="font-mono text-xs uppercase tracking-wider text-[#B96F4F] dark:text-[#C87D5D] font-bold block">
                  LOCATION /
                </span>
                <p className="font-mono text-xs sm:text-sm text-[#40362E] dark:text-[#F2EADF] leading-snug">
                  Ho Chi Minh City, <br />
                  Vietnam
                </p>
              </div>

              {/* Item 2: DISCIPLINE */}
              <div className="space-y-1.5">
                <span className="font-mono text-xs uppercase tracking-wider text-[#B96F4F] dark:text-[#C87D5D] font-bold block">
                  DISCIPLINE /
                </span>
                <p className="font-mono text-xs sm:text-sm text-[#40362E] dark:text-[#F2EADF] leading-snug">
                  Software Engineer / <br />
                  Frontend • Architecture <br />
                  • Systems
                </p>
              </div>

              {/* Item 3: PHILOSOPHY */}
              <div className="space-y-1.5">
                <span className="font-mono text-xs uppercase tracking-wider text-[#B96F4F] dark:text-[#C87D5D] font-bold block">
                  PHILOSOPHY /
                </span>
                <p className="font-mono text-xs sm:text-sm text-[#40362E] dark:text-[#F2EADF] leading-relaxed">
                  Clean code meets deliberate aesthetics. Built for durability and scale.
                </p>
              </div>

              {/* Technical anchor coordinate marker & Vạch đo tỷ lệ góc phải */}
              <div className="pt-2 font-mono text-[10px] text-[#85866A]/60 dark:text-[#9E9F88]/60 flex items-center gap-1.5 select-none">
                <span className="text-[#B96F4F] font-bold">+</span>
                <span>SEC_02::ACTIVE</span>
              </div>

              {/* Vạch đo tỷ lệ SCALE: 1:1 // SPECS */}
              <div className="pt-3 border-t border-[#25231D]/15 dark:border-[#F2EADF]/15 flex items-center justify-between font-mono text-[9px] text-[#85866A]/75 dark:text-[#9E9F88]/75 select-none">
                <div className="flex items-center gap-1.5">
                  <span className="w-7 h-[2px] bg-[#B96F4F] dark:bg-[#C87D5D] block" />
                  <span className="font-bold text-[#B96F4F] dark:text-[#C87D5D]">SCALE: 1:1</span>
                </div>
                <span className="tracking-widest uppercase">// SPECS</span>
              </div>

            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
