import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { CommandPaletteModal } from "@/components/CommandPaletteModal";

export const Home: React.FC = () => {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#08090C] text-slate-900 dark:text-[#EDEDED] selection:bg-emerald-500/25 selection:text-emerald-600 dark:selection:text-emerald-300 font-sans overflow-x-hidden transition-colors duration-300">
      {/* Interactive Raycast / Linear Command Palette (Cmd + K) */}
      <CommandPaletteModal
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Sticky Navigation Header */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Single Page Scroll */}
      <main>
        {/* [1] Home Section (Hero, Headline, Three.js 3D Canvas, 2 CTAs) */}
        <HeroSection />

        {/* [2] About Me Section (Narrative Bio with Avatar & Education Strip) */}
        <AboutSection />

        {/* [3] Experience Section (Timeline with central axis, alternating cards) */}
        <ExperienceSection />

        {/* [4] Skills Section (Hexagon Hive Network) */}
        <SkillsSection />

        {/* [5] Projects Section (Technical Cards, Problem, Stack, Metrics) */}
        <ProjectsSection />
      </main>

      {/* [6] Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Home;
