import React, { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { HeroSoftwareSculpture3D } from "./HeroSoftwareSculpture3D";
import { useLanguage } from "@/context/LanguageContext";
import { AmbientLeaf } from "./AmbientLeaves";

export const HeroSection: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
    restDelta: 0.001,
  });

  // Parallax Transforms: foreground moves faster, background moves slower
  const textY = useTransform(smoothProgress, [0, 1], [0, 60]);
  const visualY = useTransform(smoothProgress, [0, 1], [0, -40]);
  const opacityFade = useTransform(smoothProgress, [0, 0.85], [1, 0.2]);
  const dataBitsY = useTransform(smoothProgress, [0, 1], [0, 120]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-center pt-24 sm:pt-28 pb-14 sm:pb-20 text-left overflow-hidden bg-[#F2EADF] dark:bg-[#161914] border-b border-[#25231D]/15 dark:border-[#F2EADF]/15 select-none transition-colors duration-300"
    >
      {/* 1. DECORATIVE DETAILS: Số thứ tự dọc bên trái "01 / 06" chuẩn hóa theo hệ thống 6 section */}
      <div className="hidden lg:flex absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-3 pointer-events-none select-none z-20">
        <div className="w-[1px] h-10 bg-[#25231D]/25 dark:bg-[#F2EADF]/25" />
        <span className="font-mono text-[11px] text-[#25231D]/75 dark:text-[#F2EADF]/75 -rotate-90 origin-center tracking-widest whitespace-nowrap">
          01 / 06
        </span>
        <div className="w-[1px] h-10 bg-[#25231D]/25 dark:bg-[#F2EADF]/25" />
      </div>

      {/* 2 Hạt dữ liệu (Data Bits) di chuyển thị sai Parallax theo thanh cuộn */}
      <motion.div
        style={{ y: dataBitsY }}
        className="hidden sm:block absolute top-[28%] left-[42%] w-1.5 h-1.5 rounded-full bg-[#B96F4F] dark:bg-[#C87D5D] animate-gentle-float pointer-events-none z-10 opacity-75 shadow-xs"
      />
      <motion.div
        style={{ y: dataBitsY }}
        className="hidden sm:block absolute top-[68%] right-[32%] w-1 h-1 rounded-full bg-[#C8B69E] dark:bg-[#B8B9A6] animate-gentle-float-delayed pointer-events-none z-10 opacity-60 shadow-xs"
      />

      {/* Tọa độ kỹ thuật ở lề dưới */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[9.5px] text-[#5C5549] dark:text-[#B8B9A6] tracking-widest uppercase select-none pointer-events-none z-20 whitespace-nowrap">
        [SYS_INIT // 10.82°N 106.63°E]
      </div>

      {/* Cánh lá bay tự nhiên tại Hero */}
      <div className="absolute top-20 left-12 hidden lg:block pointer-events-none">
        <AmbientLeaf variant="olive" size={26} rotation={-35} animation="sway" />
      </div>
      <div className="absolute bottom-28 right-20 hidden lg:block pointer-events-none">
        <AmbientLeaf variant="terracotta" size={24} rotation={40} animation="delayed-float" />
      </div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 hidden xl:block pointer-events-none">
        <AmbientLeaf variant="amber" size={18} rotation={15} animation="float" />
      </div>

      {/* Main Container with Parallax Effect */}
      <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative h-full">

        {/* 2. LEFT CONTENT (Typography Editorial Parallax) */}
        <motion.div
          style={{ y: textY, opacity: opacityFade }}
          className="lg:col-span-5 space-y-5 sm:space-y-6 z-10"
        >
          {/* Status Pill: Available for QA / Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE0D2]/80 dark:bg-[#20261C] border border-[#25231D]/10 dark:border-[#F2EADF]/12 text-[11px] font-mono text-[#40362E] dark:text-[#EAE0D2] shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>
                {language === "vi" ? "Sẵn sàng cho cơ hội QA & Frontend" : "Open for QA & Frontend opportunities"}
              </span>
            </div>
          </motion.div>

          {/* Small label: SOFTWARE ENGINEER */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-[11px] sm:text-xs tracking-[0.22em] uppercase text-[#5C5549] dark:text-[#B8B9A6] font-semibold"
          >
            {t.hero.tag}
          </motion.p>

          {/* Main heading: Build. Explore. Iterate. (Fluid responsive sizing) */}
          <h1 className="text-4xl sm:text-6xl lg:text-[4.4rem] xl:text-[5.2rem] font-serif font-bold text-[#25231D] dark:text-[#F2EADF] leading-[1.05] tracking-tight">
            <span className="block overflow-hidden pb-1">
              <motion.span
                initial={{ opacity: 0, y: "100%", filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {t.hero.headlinePart1}
              </motion.span>
            </span>
            <span className="block overflow-hidden pt-0.5">
              <motion.span
                initial={{ opacity: 0, y: "100%", filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.85, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className="block font-editorial-italic font-normal text-[#B96F4F] dark:text-[#C87D5D]"
              >
                {t.hero.headlinePart2}
              </motion.span>
            </span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-sm sm:text-base text-[#40362E]/90 dark:text-[#F2EADF]/85 max-w-md leading-relaxed"
          >
            {t.hero.summary}
          </motion.p>

          {/* CTA Buttons — Touch Target >= 44px chuẩn Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="pt-2 sm:pt-3 flex flex-wrap items-center gap-3 sm:gap-5"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center min-h-[44px] gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#25231D] dark:bg-[#F2EADF] text-[#F2EADF] dark:text-[#25231D] text-xs sm:text-sm font-sans font-medium hover:bg-[#3D3A31] dark:hover:bg-[#E6D8C5] transition-all duration-300 shadow-sm group cursor-pointer"
            >
              <span>{t.hero.exploreWork}</span>
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>

            <a
              href="#about"
              className="inline-flex items-center min-h-[44px] gap-1.5 px-4 py-2.5 rounded-full border border-[#40362E]/25 dark:border-[#F2EADF]/25 text-xs sm:text-sm font-sans font-medium text-[#25231D] dark:text-[#F2EADF] hover:text-[#B96F4F] dark:hover:text-[#C87D5D] hover:border-[#B96F4F] transition-all group cursor-pointer"
            >
              <span>{t.hero.readStory}</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </motion.div>

        {/* 3. RIGHT VISUAL: 3D SCULPTURAL SOFTWARE TERMINAL with Parallax Depth */}
        <motion.div
          style={{ y: visualY }}
          className="lg:col-span-7 relative flex items-center justify-center lg:justify-end h-full"
        >
          <div className="relative w-full max-w-[620px] xl:max-w-[680px] flex items-center justify-center">
            {/* Lớp nền phẳng hình học OFF-GRID bổ trợ chiều sâu không gian */}
            <div className="absolute top-0 right-2 w-[42%] h-[40%] bg-[#30372D]/20 dark:bg-[#C87D5D]/10 rounded-bl-3xl blur-xl pointer-events-none" />
            <div className="absolute bottom-2 left-6 w-[60%] h-[60%] bg-[#E6D8C5]/70 dark:bg-[#20261C]/80 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute top-8 left-12 w-24 h-24 rounded-full bg-[#B96F4F]/15 dark:bg-[#B96F4F]/20 blur-xl pointer-events-none" />

            {/* Component 3D Procedural Clay Terminal & Floating Modular Cubes */}
            <HeroSoftwareSculpture3D />
          </div>
        </motion.div>

        {/* 4. DECORATIVE DETAILS: Scroll indicator ở góc phải phía dưới */}
        <div className="hidden lg:flex absolute right-10 bottom-0 translate-y-6 items-center gap-2.5 pointer-events-none select-none z-20">
          <span className="font-sans text-[10.5px] text-[#5C5549] dark:text-[#B8B9A6] tracking-wider font-medium">
            {language === "vi" ? "Cuộn để khám phá" : "Scroll to discover"}
          </span>
          <div className="h-10 w-[1px] bg-[#25231D]/35 dark:bg-[#F2EADF]/35 relative flex flex-col justify-end items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25231D] dark:bg-[#F2EADF] animate-bounce" />
          </div>
        </div>

      </div>
    </section>
  );
};
export default HeroSection;
