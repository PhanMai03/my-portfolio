import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const GlobalDecorationFramework: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 28,
    restDelta: 0.001,
  });

  // Calculate top position of the indicator dot along the 240px ruler (from 16px to 224px)
  const dotY = useTransform(smoothProgress, [0, 1], [0, 208]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const pct = Math.min(100, Math.max(0, Math.round((window.scrollY / scrollHeight) * 100)));
        setScrollPercent(pct);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-30 select-none overflow-hidden">
      {/* =========================================================================
          1. GLOBAL BLUEPRINT GRID (Phủ toàn trang — Lưới kỹ thuật siêu mờ 40px)
         ========================================================================= */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] dark:opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* =========================================================================
          2. TECHNICAL FRAMING LINES (Đường kẻ hairline dọc cách 2 lề 48px suốt trang)
         ========================================================================= */}
      {/* Đường kẻ lề trái 48px */}
      <div className="hidden lg:block absolute left-12 top-0 bottom-0 w-[1px] bg-[#25231D]/8 dark:bg-[#F2EADF]/8">
        {/* Top/Bottom crosshair anchors */}
        <span className="absolute top-24 -left-1.5 font-mono text-[11px] font-bold text-[#B96F4F] leading-none">+</span>
        <span className="absolute bottom-24 -left-1.5 font-mono text-[11px] font-bold text-[#B96F4F] leading-none">+</span>
      </div>

      {/* Đường kẻ lề phải 48px */}
      <div className="hidden lg:block absolute right-12 top-0 bottom-0 w-[1px] bg-[#25231D]/8 dark:bg-[#F2EADF]/8">
        <span className="absolute top-24 -left-1.5 font-mono text-[11px] font-bold text-[#B96F4F] leading-none">+</span>
        <span className="absolute bottom-24 -left-1.5 font-mono text-[11px] font-bold text-[#B96F4F] leading-none">+</span>
      </div>

      {/* =========================================================================
          3. FIXED RIGHT MARGIN RULER (Thước đo lề kỹ thuật scroll-linked)
         ========================================================================= */}
      <div className="hidden xl:flex absolute right-4 top-1/2 -translate-y-1/2 flex-col items-center gap-1.5 z-40">
        
        {/* Label 00% TOP */}
        <span className="font-mono text-[8.5px] text-[#85866A]/60 dark:text-[#9E9F88]/60 tracking-wider">
          00% TOP
        </span>

        {/* Thước đo với các vạch chia li ti (Tick marks) + Chấm Indicator Terracotta */}
        <div className="relative w-4 h-[216px] flex justify-center py-1">
          {/* Trục dọc trung tâm */}
          <div className="w-[1px] h-full bg-[#85866A]/25 dark:bg-[#9E9F88]/20 flex flex-col justify-between items-center relative">
            {/* 13 Tick Marks li ti */}
            {Array.from({ length: 13 }).map((_, i) => (
              <span
                key={i}
                className={`h-[1px] ${
                  i === 0 || i === 3 || i === 6 || i === 9 || i === 12
                    ? "w-3 bg-[#B96F4F] dark:bg-[#C87D5D]"
                    : "w-1.5 bg-[#85866A]/40 dark:bg-[#9E9F88]/40"
                }`}
              />
            ))}

            {/* Chấm Indicator Terracotta #B96F4F chạy dọc theo thanh cuộn */}
            <motion.div
              style={{ y: dotY }}
              className="absolute -left-[3.5px] top-0 w-2 h-2 rounded-full bg-[#B96F4F] dark:bg-[#C87D5D] shadow-xs flex items-center justify-center ring-2 ring-[#F2EADF] dark:ring-[#161914]"
            >
              <span className="w-0.5 h-0.5 rounded-full bg-white block" />
            </motion.div>
          </div>
        </div>

        {/* Dynamic Percentage Readout (100% END) */}
        <div className="flex flex-col items-center space-y-0.5">
          <span className="font-mono text-[8.5px] text-[#B96F4F] dark:text-[#C87D5D] font-bold">
            {scrollPercent}%
          </span>
          <span className="font-mono text-[8.5px] text-[#85866A]/60 dark:text-[#9E9F88]/60 tracking-wider">
            100% END
          </span>
        </div>

      </div>
    </div>
  );
};

