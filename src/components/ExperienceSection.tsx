import React from "react";
import { ArrowUpRight, MapPin, Briefcase } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

export const ExperienceSection: React.FC = () => {
  const { t, language } = useLanguage();

  const localizedExperiences = [
    {
      company: "Healthcare Solution Viet Nam",
      role: language === "vi" ? "Thực tập sinh Kiểm thử Phần mềm (Manual Tester)" : "Manual Tester Intern",
      period: language === "vi" ? "09/2024 – Hiện tại" : "09/2024 – Present",
      location: "Ho Chi Minh City, Vietnam",
      domain: language === "vi" ? "Hệ thống Quản lý Bệnh viện Y tế" : "Healthcare IT & Hospital Systems",
      isCurrent: true,
      statusLabel: language === "vi" ? "ĐANG LÀM VIỆC" : "ACTIVE TENURE",
      highlights:
        language === "vi"
          ? "Phụ trách thiết kế Test Cases, kiểm thử UI/API và quản lý vòng đời lỗi cho hệ thống bệnh viện chuyên sâu."
          : "Responsible for manual test design, UI/API validation, and defect triage on clinical hospital software.",
      achievements:
        language === "vi"
          ? [
              "Thực hiện kiểm thử thủ công và kiểm thử chức năng cho hệ thống quản lý bệnh viện theo tài liệu yêu cầu nghiệp vụ.",
              "Thiết kế và thực thi test cases, xác minh tính đúng đắn của UI và luồng dữ liệu nghiệp vụ, retest lỗi sau khi dev fix.",
              "Quản lý vòng đời lỗi và báo cáo defect chi tiết qua Jira; tổ chức dữ liệu test quy củ với Excel.",
            ]
          : [
              "Perform manual and functional testing for a hospital management system based on business requirements.",
              "Design and execute test cases, verify UI and data behavior, and retest fixed defects.",
              "Report and track defects using Jira; manage test data with Excel.",
            ],
      technologies: ["Web UI Testing", "Functional Testing", "API Testing", "Test Case Design", "Defect Reporting", "Jira", "Excel"],
    },
    {
      company: "FPT Software",
      role: language === "vi" ? "Thực tập sinh Lập trình Frontend" : "Frontend Developer Intern",
      period: "06/2024 – 09/2024",
      location: "Ho Chi Minh City, Vietnam",
      domain: language === "vi" ? "Hệ thống Tự động hóa Doanh nghiệp" : "Enterprise Automation & SPA",
      isCurrent: false,
      statusLabel: language === "vi" ? "ĐÃ HOÀN THÀNH" : "COMPLETED",
      highlights:
        language === "vi"
          ? "Tham gia đội ngũ Agile 18 thành viên phát triển ứng dụng Single Page Application (SPA) trên ReactJS & Tailwind."
          : "Contributed within an 18-member Agile squad engineering responsive Single Page Applications in ReactJS & Tailwind.",
      achievements:
        language === "vi"
          ? [
              "Phối hợp trong đội ngũ Agile 18 thành viên xây dựng ứng dụng Single Page Application (SPA) cho hệ thống tự động hóa nội bộ.",
              "Phát triển tính năng giao diện bằng ReactJS và Tailwind CSS, chú trọng cấu trúc component tái sử dụng và khả năng mở rộng.",
              "Tích hợp các RESTful APIs và hiển thị dữ liệu động chính xác theo đặc tả kỹ thuật.",
              "Tối ưu mã nguồn và cải thiện hiệu năng UI nhằm đem lại trải nghiệm mượt mà cho người dùng.",
            ]
          : [
              "Collaborated in an 18-member Agile team to build a responsive Single Page Application (SPA) for an internal automation system.",
              "Implemented front-end features using ReactJS and Tailwind CSS with an emphasis on reusable components and scalable structure.",
              "Integrated RESTful APIs and dynamically rendered data according to functional specifications.",
              "Maintained code quality and improved UI performance to deliver a smoother user experience.",
            ],
      technologies: ["ReactJS", "Tailwind CSS", "TypeScript", "JavaScript", "RESTful APIs", "Agile / Scrum", "SPA"],
    },
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center py-16 sm:py-20 lg:py-16 text-left overflow-hidden bg-[#F2EADF] dark:bg-[#161914] border-b border-[#25231D]/15 dark:border-[#F2EADF]/15 transition-colors duration-300"
    >
      <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 space-y-12 sm:space-y-16">
        
        {/* =========================================================================
            SECTION HEADER
           ========================================================================= */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#25231D]/15 dark:border-[#F2EADF]/15">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2.5 text-[#85866A] dark:text-[#9E9F88]">
                <span className="w-6 h-[1px] bg-[#85866A] dark:bg-[#9E9F88]" />
                <span className="font-mono text-xs uppercase tracking-widest">
                  03 // WORK EXPERIENCE
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-serif font-bold text-[#25231D] dark:text-[#F2EADF] leading-[1.06] tracking-tight">
                {t.experience.title}{" "}
                <span className="italic font-normal text-[#B96F4F] dark:text-[#C87D5D]">
                  {t.experience.titleHighlight}
                </span>
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={PERSONAL_INFO.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#B96F4F] dark:text-[#C87D5D] hover:text-[#25231D] dark:hover:text-[#F2EADF] transition-colors group cursor-pointer px-2 py-2"
              >
                <span>{language === "vi" ? "Xem hồ sơ CV [PDF]" : "View Resume [PDF]"}</span>
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* =========================================================================
            BỐ CỤC DÒNG THỜI GIAN TRỰC QUAN (INTERACTIVE EDITORIAL TIMELINE)
            - TRỤC DỌC (TIMELINE SPINE) KÈM CHECKPOINT NODE PHÁT SÁNG
            - HIỆU ỨNG TƯƠNG TÁC HOVER & THÔNG TIN CHUYÊN NGÀNH RÕ NÉT
           ========================================================================= */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 border-l-2 border-[#25231D]/15 dark:border-[#F2EADF]/15 ml-2 sm:ml-4 space-y-12 sm:space-y-16">
          {localizedExperiences.map((exp, idx) => (
            <ScrollReveal
              key={exp.company}
              delay={idx * 0.18}
              className="relative group transition-all duration-300"
            >
              {/* CHECKPOINT NODE TRÊN TRỤC DÒNG THỜI GIAN */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] md:-left-[55px] top-1.5 w-4 h-4 rounded-full border-2 border-[#F2EADF] dark:border-[#161914] transition-all duration-300 ${
                  exp.isCurrent
                    ? "bg-emerald-500 ring-4 ring-emerald-500/25 group-hover:scale-125"
                    : "bg-[#B96F4F] dark:bg-[#C87D5D] ring-4 ring-[#B96F4F]/20 group-hover:scale-125"
                }`}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start p-2 sm:p-4 -mx-2 sm:-mx-4 rounded-2xl hover:bg-[#EAE0D2]/50 dark:hover:bg-[#1C201A]/60 transition-colors">
                
                {/* Cột trái (4 cols): Thời gian, Trạng thái & Doanh nghiệp */}
                <div className="lg:col-span-4 space-y-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#B96F4F] dark:text-[#C87D5D] tracking-wide">
                      {exp.period}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold tracking-wider ${
                        exp.isCurrent
                          ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30"
                          : "bg-[#85866A]/15 text-[#85866A] dark:text-[#9E9F88] border border-[#85866A]/25"
                      }`}
                    >
                      {exp.statusLabel}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-mono text-base sm:text-lg font-bold text-[#25231D] dark:text-[#F2EADF] tracking-wide uppercase flex items-center gap-2">
                      <Briefcase size={15} className="text-[#B96F4F] dark:text-[#C87D5D] shrink-0" />
                      <span>{exp.company}</span>
                    </h3>
                    <div className="font-sans text-xs text-[#85866A] dark:text-[#9E9F88] italic flex items-center gap-1.5 pt-0.5">
                      <MapPin size={11} className="shrink-0" />
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span>{exp.domain}</span>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-[#25231D]/70 dark:text-[#F2EADF]/70 pt-1 leading-relaxed">
                    {exp.highlights}
                  </p>
                </div>

                {/* Cột phải (8 cols): Vai trò, Trách nhiệm & Công nghệ */}
                <div className="lg:col-span-8 space-y-4">
                  <div>
                    <h4 className="text-2xl sm:text-[1.8rem] font-serif font-bold text-[#25231D] dark:text-[#F2EADF] tracking-tight group-hover:text-[#B96F4F] dark:group-hover:text-[#C87D5D] transition-colors flex items-center gap-2">
                      <span>{exp.role}</span>
                      <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-sm font-sans text-[#B96F4F]">
                        →
                      </span>
                    </h4>
                  </div>

                  {/* Danh sách thành tựu & trách nhiệm */}
                  <ul className="space-y-2.5 font-sans text-xs sm:text-[13.5px] text-[#25231D]/80 dark:text-[#F2EADF]/80 leading-relaxed list-none">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#B96F4F] dark:text-[#C87D5D] mt-1 shrink-0 text-xs">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Công cụ & Kỹ thuật ứng dụng */}
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] uppercase text-[#85866A] dark:text-[#9E9F88] mr-1">
                      STACK:
                    </span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-[#E6D8C5]/70 dark:bg-[#20261C] border border-[#25231D]/10 dark:border-[#F2EADF]/12 text-[10.5px] font-mono text-[#30372D] dark:text-[#D4C9BD] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
