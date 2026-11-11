import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface StackedSectionProps {
  children: React.ReactNode;
  id?: string;
  index: number;
  total: number;
  className?: string;
}

export const StackedSection: React.FC<StackedSectionProps> = ({
  children,
  id,
  index,
  total,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Theo dõi vị trí của section khi nó đi qua khung nhìn viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Lò xo vật lý mượt mà như ThreeUI
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 26,
    restDelta: 0.001,
  });

  const isFirst = index === 0;
  const isLast = index === total - 1;

  // HIỆU ỨNG OTHERSPACE CINEMATIC SPATIAL TRANSITION:
  // 1. Độ trong suốt: Trôi vào mờ dần sang rõ nét -> Mờ dần khi trôi đi
  const opacity = useTransform(
    smoothProgress,
    isFirst
      ? [0, 0.45, 0.82, 1]
      : isLast
      ? [0, 0.25, 0.55, 1]
      : [0, 0.28, 0.72, 1],
    isFirst
      ? [1, 1, 0.2, 0]
      : isLast
      ? [0, 0.65, 1, 1]
      : [0, 1, 1, 0.15]
  );

  // 2. Độ sắc nét (Focus Blur): Ẩn hiện từ làn sương mờ sang sắc nét tuyệt đối
  const filter = useTransform(
    smoothProgress,
    isFirst
      ? [0, 0.45, 0.8, 1]
      : isLast
      ? [0, 0.3, 0.6, 1]
      : [0, 0.3, 0.7, 1],
    isFirst
      ? ["blur(0px)", "blur(0px)", "blur(6px)", "blur(14px)"]
      : isLast
      ? ["blur(14px)", "blur(4px)", "blur(0px)", "blur(0px)"]
      : ["blur(14px)", "blur(0px)", "blur(0px)", "blur(12px)"]
  );

  // 3. Parallax Float Y: Trôi bồng bềnh nhẹ nhàng
  const y = useTransform(
    smoothProgress,
    isFirst
      ? [0, 0.5, 1]
      : isLast
      ? [0, 0.35, 1]
      : [0, 0.3, 0.7, 1],
    isFirst
      ? [0, 0, -45]
      : isLast
      ? [45, 0, 0]
      : [45, 0, 0, -45]
  );

  // 4. Độ phóng thu phóng (Scale Depth): Tạo chiều sâu 3D
  const scale = useTransform(
    smoothProgress,
    [0, 0.32, 0.68, 1],
    [0.965, 1, 1, 0.965]
  );

  return (
    <div
      ref={containerRef}
      id={id}
      className={`relative min-h-screen ${className}`}
    >
      <motion.div
        style={{
          opacity,
          filter,
          y,
          scale: isFirst ? 1 : scale,
        }}
        className="w-full h-full min-h-screen flex flex-col justify-center will-change-[transform,opacity,filter]"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default StackedSection;

