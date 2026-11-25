import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { About } from "@/components/About";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { Footer } from "@/components/Footer";

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F2EADF] dark:bg-[#161914] text-[#25231D] dark:text-[#F2EADF] font-sans selection:bg-[#B96F4F] selection:text-[#F2EADF] overflow-x-hidden transition-colors duration-300 relative">
      {/* Header & Navigation */}
      <Navbar />

      {/* Main Experience: Full 6 Dedicated Sections */}
      <main className="relative">
        {/* SECTION 01 — HERO */}
        <HeroSection />

        {/* SECTION 02 — ABOUT ME */}
        <About />

        {/* SECTION 03 — EXPERIENCE (VERTICAL TIMELINE) */}
        <ExperienceSection />

        {/* SECTION 04 — SELECTED PROJECTS (STACKING CARDS) */}
        <ProjectsSection />

        {/* SECTION 05 — TECHNICAL SKILLS (SPEC SHEET) */}
        <SkillsSection />
      </main>

      {/* SECTION 06 — FOOTER & CONTACT */}
      <Footer />
    </div>
  );
};

export default Home;
