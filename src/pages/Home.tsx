import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { About } from "@/components/About";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { Footer } from "@/components/Footer";
import { GlobalDecorationFramework } from "@/components/GlobalDecorationFramework";
import { CustomCursor } from "@/components/CustomCursor";

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F2EADF] dark:bg-[#161914] text-[#25231D] dark:text-[#F2EADF] font-sans selection:bg-[#B96F4F] selection:text-[#F2EADF] overflow-x-hidden transition-colors duration-300 relative">
      {/* HIỆU ỨNG CON CHUỘT PHÁT SÁNG & VI TƯƠNG TÁC (Custom Glowing Cursor Follower) */}
      <CustomCursor />

      {/* GLOBAL EDITORIAL DECORATION FRAMEWORK (Grid 40px, Margin Ruler Scroll-linked, 48px Framing Lines) */}
      <GlobalDecorationFramework />

      {/* Header & Navigation */}
      <Navbar />

      {/* Main OFF-GRID Editorial Experience */}
      <main className="relative">
        {/* SECTION 01 — HERO */}
        <HeroSection />

        {/* SECTION 02 — ABOUT ME (EDITORIAL BOTANICAL & MODERN OVERLAP) */}
        <About />

        {/* SECTION 03 — EDUCATION & CREDENTIALS (HỌC VẤN RIÊNG BIỆT) */}
        <EducationSection />

        {/* SECTION 04 — EXPERIENCE */}
        <ExperienceSection />

        {/* SECTION 05 — SELECTED PROJECTS */}
        <ProjectsSection />

        {/* SECTION 06 — SKILLS */}
        <SkillsSection />
      </main>

      {/* SECTION 07 — FOOTER & CONTACT */}
      <Footer />
    </div>
  );
};

export default Home;
