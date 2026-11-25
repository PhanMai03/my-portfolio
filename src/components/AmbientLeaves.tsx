import React from "react";

interface LeafProps {
  className?: string;
  variant?: "olive" | "terracotta" | "amber";
  size?: number;
  rotation?: number;
  animation?: "float" | "sway" | "delayed-float" | "delayed-sway";
}

export const AmbientLeaf: React.FC<LeafProps> = ({
  className = "",
  variant = "olive",
  size = 24,
  rotation = 0,
  animation = "float",
}) => {
  const colorMap = {
    olive: "text-[#85866A] dark:text-[#7A8B63]",
    terracotta: "text-[#B96F4F] dark:text-[#C87D5D]",
    amber: "text-[#C49A6C] dark:text-[#A37B50]",
  };

  const animMap = {
    float: "animate-gentle-float",
    sway: "animate-gentle-sway",
    "delayed-float": "animate-gentle-float-delayed",
    "delayed-sway": "animate-gentle-sway-delayed",
  };

  return (
    <div
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotation}deg)`,
      }}
      className={`pointer-events-none select-none drop-shadow-xs transition-transform duration-700 ${colorMap[variant]} ${animMap[animation]} ${className}`}
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Lá tự nhiên với phiến lá cong mềm */}
        <path
          d="M 6 34 C 8 20, 20 8, 34 6 C 34 20, 22 32, 6 34 Z"
          fill="currentColor"
          fillOpacity="0.85"
        />
        {/* Gân lá chính thanh mảnh */}
        <path
          d="M 6 34 C 18 24, 26 16, 34 6"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* Nhánh gân phụ */}
        <path
          d="M 14 26 C 17 28, 20 28, 22 27"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
        <path
          d="M 22 18 C 25 20, 28 19, 29 17"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default AmbientLeaf;
