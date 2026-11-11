import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hoverLabel, setHoverLabel] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Toạ độ chuột thực tế
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Hiệu ứng lò xo vật lý mềm mại cho vầng sáng bám theo sau chuột (Spring Follower)
  const springConfig = { damping: 24, stiffness: 260, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Kích hoạt trên màn hình desktop/laptop (tránh chặn trên mobile màn hình nhỏ < 768px)
    const checkDevice = () => {
      const isDesktopScreen = window.innerWidth >= 768;
      const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
      // Cho phép cả laptop màn hình cảm ứng (Dell XPS, Inspiron Touch...) khi đang dùng chuột/trackpad
      setIsEnabled(isDesktopScreen || hasFinePointer);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
      if (!isEnabled && window.innerWidth >= 768) setIsEnabled(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Nhận diện hover vào các nút bấm, liên kết, thẻ dự án để mở rộng vầng sáng
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor="pointer"], .cursor-pointer, .group'
      );

      if (interactive) {
        setIsHovered(true);
        const isActionLink = interactive.tagName.toLowerCase() === "a" || interactive.getAttribute("role") === "button";
        setHoverLabel(isActionLink ? "↗" : null);
      } else {
        setIsHovered(false);
        setHoverLabel(null);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible, isEnabled]);

  if (!isEnabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none">
      {/* 1. VẦNG HÀO QUANG PHÁT SÁNG THEO CHUỘT (Ambient Glow Aura Follower) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          x: smoothX,
          y: smoothY,
          opacity: isVisible ? 1 : 0,
          background: isHovered
            ? "radial-gradient(circle, rgba(185, 111, 79, 0.40) 0%, rgba(185, 111, 79, 0.18) 45%, transparent 75%)"
            : "radial-gradient(circle, rgba(185, 111, 79, 0.28) 0%, rgba(185, 111, 79, 0.10) 40%, transparent 70%)",
          filter: "blur(6px)",
        }}
        animate={{
          width: isHovered ? 96 : 56,
          height: isHovered ? 96 : 56,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
      />

      {/* 2. VÒNG SÁNG KỸ THUẬT BO VIỀN CÔNG NGHỆ (Glowing Precision Ring) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full -translate-x-1/2 -translate-y-1/2 flex items-center justify-center border border-[#B96F4F]/70 dark:border-[#C87D5D]/80 pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          opacity: isVisible ? 1 : 0,
          boxShadow: isHovered
            ? "0 0 20px rgba(185, 111, 79, 0.45), inset 0 0 10px rgba(185, 111, 79, 0.25)"
            : "0 0 10px rgba(185, 111, 79, 0.25)",
          backdropFilter: isHovered ? "blur(1px)" : "none",
        }}
        animate={{
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
          scale: isClicking ? 0.75 : 1,
          borderColor: isHovered ? "#B96F4F" : "rgba(185, 111, 79, 0.6)",
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 26,
        }}
      >
        {/* Ký tự mũi tên vi tương tác khi hover */}
        {isHovered && hoverLabel && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[12px] font-mono font-bold text-[#B96F4F] dark:text-[#C87D5D] leading-none"
          >
            {hoverLabel}
          </motion.span>
        )}
      </motion.div>

      {/* 3. CHẤM TÂM ĐỎ / TERRACOTTA PHÁT QUANG CHÍNH XÁC (Glowing Center Dot) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#B96F4F] dark:bg-[#C87D5D] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          opacity: isVisible && !isHovered ? 1 : 0,
          boxShadow: "0 0 8px #B96F4F, 0 0 12px rgba(185, 111, 79, 0.8)",
        }}
        transition={{ duration: 0.05 }}
      />
    </div>
  );
};

export default CustomCursor;
