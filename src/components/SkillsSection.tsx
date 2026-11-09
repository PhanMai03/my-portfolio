import React, { useState, useMemo } from "react";
import { MousePointerClick, Layers, CheckCircle2, X } from "lucide-react";
import { HEX_SKILL_NODES, HEX_GRID_CONFIG, HexNode } from "@/data/skillsHiveData";
import { getPointyHexPoints } from "@/lib/hexagonGeometry";

export const SkillsSection: React.FC = () => {
  const [selectedHexId, setSelectedHexId] = useState<string | null>(null);
  const [hoveredHexId, setHoveredHexId] = useState<string | null>(null);

  const { radius, width: W, dx, dy, originX, originY, svgViewBox } = HEX_GRID_CONFIG;

  // Memoize currently active skill node for details panel
  const activeNode = useMemo(
    () => HEX_SKILL_NODES.find((node) => node.id === selectedHexId && !node.isHub) || null,
    [selectedHexId]
  );

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left relative">
      {/* Background Subtle Blueprint Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03] dark:opacity-[0.05] pointer-events-none" />

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 dark:text-white tracking-wider uppercase">
            SKILLS
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl font-mono">
          The technologies, tools, and practices I use to build and ship products.
        </p>
      </div>

      {/* Main 2-Column: Left Open Hexagon Hive Grid (8 cols) + Right Detail Inspector Card (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* LEFT: Open & Frameless Hexagonal Interconnected Hive (8 cols) */}
        <div className="lg:col-span-8 relative flex items-center justify-center overflow-x-auto scrollbar-none py-2">
          <svg
            viewBox={svgViewBox}
            className="w-full max-w-[880px] h-auto min-w-[620px] select-none overflow-visible"
          >
            <defs>
              {/* Glow Filter */}
              <filter id="hex-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="7" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              {/* Subtle Background Grid Pattern */}
              <pattern id="hive-grid" width="45" height="45" patternUnits="userSpaceOnUse">
                <path
                  d="M 45 0 L 0 0 0 45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-slate-300/40 dark:text-white/[0.04]"
                />
              </pattern>
            </defs>

            {/* Faint Grid Texture strictly behind hive */}
            <rect x="0" y="0" width="920" height="530" fill="url(#hive-grid)" />

            {/* Render All Hexagons */}
            {HEX_SKILL_NODES.map((node) => {
              const cx = originX + node.q * W + node.r * dx;
              const cy = originY + node.r * dy;
              const isSelected = selectedHexId === node.id;
              const isHovered = hoveredHexId === node.id;

              const hexPoints = getPointyHexPoints(cx, cy, radius);

              return (
                <g
                  key={node.id}
                  onClick={() => {
                    if (!node.isHub) {
                      setSelectedHexId(node.id);
                    }
                  }}
                  onMouseEnter={() => setHoveredHexId(node.id)}
                  onMouseLeave={() => setHoveredHexId(null)}
                  className={`transition-all duration-300 ${
                    node.isHub ? "cursor-default" : "cursor-pointer"
                  }`}
                  style={{
                    transformOrigin: `${cx}px ${cy}px`,
                    transform: isHovered || isSelected ? "scale(1.08)" : "scale(1)",
                  }}
                >
                  {/* Glowing Aura when hovered or selected */}
                  {(isHovered || isSelected) && (
                    <polygon
                      points={hexPoints}
                      fill="none"
                      stroke={node.borderColor}
                      strokeWidth="6"
                      opacity="0.65"
                      filter="url(#hex-glow)"
                    />
                  )}

                  {/* Outer Hexagon Border & Fill */}
                  <polygon
                    points={hexPoints}
                    fill={node.color}
                    stroke={node.borderColor}
                    strokeWidth={isSelected ? "3.5" : isHovered ? "3" : "2"}
                    className="transition-colors"
                  />

                  {/* Hub Category Hexagon Content */}
                  {node.isHub && node.hubLabel && (
                    <g className="pointer-events-none select-none">
                      <text
                        x={cx}
                        y={cy + 5}
                        textAnchor="middle"
                        fill={node.borderColor}
                        fontSize="13"
                        fontWeight="bold"
                        fontFamily="'Geist Mono', monospace"
                        letterSpacing="0.06em"
                      >
                        {node.hubLabel[0]}
                      </text>
                    </g>
                  )}

                  {/* Standard Skill Hexagon Content (Icon + Label) */}
                  {!node.isHub && (
                    <g className="pointer-events-none select-none">
                      {node.iconSrc && (
                        <image
                          href={node.iconSrc}
                          x={cx - 17}
                          y={cy - 23}
                          width="34"
                          height="34"
                          preserveAspectRatio="xMidYMid meet"
                        />
                      )}

                      {/* Skill Name */}
                      <text
                        x={cx}
                        y={cy + 22}
                        textAnchor="middle"
                        fill="#0F172A"
                        fontSize="11.5"
                        fontWeight="700"
                        fontFamily="'Geist Mono', monospace"
                      >
                        {node.name}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* RIGHT: Detail Inspector Card (4 cols) */}
        <div className="lg:col-span-4 rounded-2xl bg-white/90 dark:bg-[#0A0D14]/80 border border-slate-200 dark:border-white/[0.08] backdrop-blur-xl p-6 sm:p-7 shadow-sm dark:shadow-xl sticky top-24 min-h-[440px] flex flex-col justify-between transition-all">
          {activeNode ? (
            <div>
              {/* Header Status Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/[0.06] mb-6">
                <span
                  className="font-mono text-[10px] px-2.5 py-1 rounded-md font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: `${activeNode.borderColor}15`,
                    color: activeNode.borderColor,
                    border: `1px solid ${activeNode.borderColor}40`,
                  }}
                >
                  {activeNode.categoryTitle}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedHexId(null)}
                  className="text-slate-400 hover:text-slate-700 dark:hover:text-white p-1 rounded-md transition-colors cursor-pointer"
                  title="Close details"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Title & Icon */}
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center p-3 shrink-0 shadow-inner border bg-slate-50 dark:bg-white/[0.04]"
                  style={{
                    borderColor: `${activeNode.borderColor}60`,
                    boxShadow: `0 0 25px ${activeNode.glowColor}`,
                  }}
                >
                  {activeNode.iconSrc ? (
                    <img
                      src={activeNode.iconSrc}
                      alt={activeNode.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: activeNode.borderColor }}
                    />
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-display font-extrabold text-slate-900 dark:text-white mb-1">
                    {activeNode.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                      {activeNode.tag}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10">
                      {activeNode.level}
                    </span>
                  </div>
                </div>
              </div>

              {/* Technical Description */}
              <div className="mb-6">
                <h4 className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Layers size={13} className="text-emerald-500" />
                  Engineering Specification
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans bg-slate-50 dark:bg-white/[0.02] p-3.5 rounded-xl border border-slate-100 dark:border-white/[0.04]">
                  {activeNode.description}
                </p>
              </div>

              {/* Verified Production Usage */}
              {activeNode.usedInProjects && (
                <div className="pt-4 border-t border-slate-100 dark:border-white/[0.06]">
                  <span className="text-[10px] font-mono text-slate-400 block mb-2 uppercase tracking-wider">
                    Applied In Production Projects:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeNode.usedInProjects.map((proj) => (
                      <span
                        key={proj}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/25 flex items-center gap-1"
                      >
                        <CheckCircle2 size={11} className="text-emerald-500" />
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="my-auto flex flex-col items-center justify-center text-center py-10 px-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] flex items-center justify-center text-emerald-500 mb-6 shadow-inner animate-pulse">
                <MousePointerClick size={28} />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">
                Interactive Technical Hive
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed font-mono">
                The technologies, tools, and practices I use to build and ship products.
              </p>
              <span className="mt-4 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
                Click a hexagon to view details
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
