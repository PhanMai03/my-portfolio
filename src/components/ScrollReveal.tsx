import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

/**
 * Hiệu ứng trượt êm ái khi lướt cuộn web (Awwwards / Apple editorial feel)
 * - Chạy khi phần tử lọt vào tầm nhìn của người dùng (whileInView)
 * - Chạy 1 lần duy nhất (viewport.once = true) để giữ trải nghiệm mượt mà, không giật lag
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  duration = 0.85,
  yOffset = 30,
  className = "",
  ...rest
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Cubic-bezier sang trọng, chuyển động từ từ mượt mà
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

