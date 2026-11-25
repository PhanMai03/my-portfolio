import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface SkillItem {
  name: string;
  isProduction?: boolean;
}

interface SkillGroup {
  num: string;
  title: string;
  skills: SkillItem[];
}

export const SkillsSection: React.FC = () => {
  const { language } = useLanguage();

  // Khớp 100% với Technical Skills trong CV mới nhất
  const skillGroups: SkillGroup[] = [
    {
      num: "01",
      title: language === "vi" ? "Testing & Tools" : "Testing & Tools",
      skills: [
        { name: "Test case design", isProduction: true },
        { name: "Functional testing", isProduction: true },
        { name: "API testing with Postman", isProduction: true },
        { name: "Defect tracking with Jira", isProduction: true },
        { name: "Git / GitHub", isProduction: true },
        { name: "Figma", isProduction: true },
        { name: "AI-assisted tools", isProduction: true },
      ],
    },
    {
      num: "02",
      title: language === "vi" ? "Frontend Architecture" : "Frontend Architecture",
      skills: [
        { name: "React", isProduction: true },
        { name: "NextJS", isProduction: true },
        { name: "Tailwind CSS", isProduction: true },
        { name: "HTML5", isProduction: true },
        { name: "CSS3", isProduction: true },
      ],
    },
    {
      num: "03",
      title: language === "vi" ? "Languages" : "Languages",
      skills: [
        { name: "JavaScript", isProduction: true },
        { name: "TypeScript", isProduction: true },
      ],
    },
    {
      num: "04",
      title: language === "vi" ? "Backend & Databases" : "Backend & Databases",
      skills: [
        { name: "NodeJS", isProduction: true },
        { name: "Express", isProduction: true },
        { name: "RESTful APIs", isProduction: true },
        { name: "SQL Server", isProduction: true },
        { name: "MongoDB", isProduction: true },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 sm:py-24 lg:py-28 text-left overflow-hidden bg-[#F2EADF] dark:bg-[#161914] text-[#25231D] dark:text-[#F2EADF] border-b border-[#25231D]/15 dark:border-[#F2EADF]/15 select-none transition-colors duration-300"
    >
      <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-12 lg:px-16 space-y-12 relative z-10">

        {/* =========================================================================
            SECTION HEADER
           ========================================================================= */}
        <div className="space-y-3 pb-6 border-b border-[#25231D]/15 dark:border-[#F2EADF]/15">
          <div className="flex items-center gap-2.5 text-[#5C5549] dark:text-[#B8B9A6]">
            <span className="w-6 h-[1.5px] bg-[#5C5549] dark:bg-[#B8B9A6]" />
            <span className="font-mono text-xs uppercase tracking-widest font-bold">
              05 // TECHNICAL SKILLS
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-[#B96F4F]/15 text-[#B96F4F] dark:text-[#C87D5D]">
              CV VERIFIED
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#25231D] dark:text-[#F2EADF] leading-tight tracking-tight">
              {language === "vi" ? "Kỹ năng chuyên môn & " : "Technical skills & "}
              <span className="font-editorial-italic font-normal text-[#B96F4F] dark:text-[#C87D5D]">
                {language === "vi" ? "công cụ làm việc." : "technologies."}
              </span>
            </h2>

            {/* Production Badge Legend */}
            <div className="flex items-center gap-2 font-mono text-xs text-[#5C5549] dark:text-[#B8B9A6]">
              <span className="w-2 h-2 rounded-full bg-[#B96F4F] dark:bg-[#C87D5D] inline-block" />
              <span>
                {language === "vi"
                  ? "Đã ứng dụng thực tế trong dự án & doanh nghiệp"
                  : "Applied in actual projects & enterprise work"}
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BẢNG KỸ NĂNG CHUẨN XÁC THEO 4 NHÓM CV
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-[#25231D]/15 dark:divide-[#F2EADF]/15 border-t border-b border-[#25231D]/15 dark:border-[#F2EADF]/15">
          {skillGroups.map((group, idx) => (
            <div
              key={group.num}
              className={`py-8 space-y-4 ${
                idx % 4 !== 3 ? "lg:border-r border-[#25231D]/15 dark:border-[#F2EADF]/15 lg:pr-6" : ""
              } ${
                idx > 0 ? "lg:pl-6" : ""
              } ${
                idx % 2 === 1 ? "md:pl-6" : ""
              }`}
            >
              {/* Category Title */}
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold text-[#B96F4F] dark:text-[#C87D5D]">
                  {group.num}
                </span>
                <h3 className="font-sans text-base sm:text-lg font-bold text-[#25231D] dark:text-[#F2EADF] tracking-tight">
                  {group.title}
                </h3>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-default bg-[#EAE0D2] dark:bg-[#20261C] border border-[#B96F4F]/30 dark:border-[#C87D5D]/30 text-[#25231D] dark:text-[#F2EADF] font-medium shadow-2xs hover:border-[#B96F4F]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B96F4F] dark:bg-[#C87D5D] shrink-0" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
