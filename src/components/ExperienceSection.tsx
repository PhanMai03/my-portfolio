import React from "react";
import { ArrowUpRight, Building2, MapPin } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";

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
      id="experience"
      className="relative min-h-[75vh] flex flex-col justify-center py-20 sm:py-24 lg:py-28 text-left overflow-hidden bg-[#F2EADF] dark:bg-[#161914] border-b border-[#25231D]/15 dark:border-[#F2EADF]/15 transition-colors duration-300"
    >
      <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 space-y-12 sm:space-y-14">
        
        {/* =========================================================================
            SECTION HEADER (THANH THOÁT, KHÔNG HỘP CARD)
           ========================================================================= */}
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
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#B96F4F] dark:text-[#C87D5D] hover:text-[#25231D] dark:hover:text-[#F2EADF] transition-colors group cursor-pointer pb-1"
            >
              <span>{language === "vi" ? "Xem hồ sơ CV [PDF]" : "View Resume [PDF]"}</span>
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* =========================================================================
            BỐ CỤC DÒNG THỜI GIAN TẠP CHÍ TỰ NHIÊN (EDITORIAL TIMELINE — HOÀN TOÀN KHÔNG DÙNG CARD)
           ========================================================================= */}
        <div className="space-y-0 divide-y divide-[#25231D]/15 dark:divide-[#F2EADF]/15">
          {localizedExperiences.map((exp, index) => (
            <div
              key={exp.company}
              className="py-8 sm:py-10 first:pt-0 last:pb-0 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start group"
            >
              
              {/* Cột trái (4 cols): Thời gian, Công ty & Địa điểm */}
              <div className="lg:col-span-4 space-y-2">
                <div className="flex items-center gap-2">
                  {exp.isCurrent ? (
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-[#B96F4F] dark:bg-[#C87D5D]" />
                  )}
                  <span className="font-mono text-xs font-bold text-[#B96F4F] dark:text-[#C87D5D] tracking-wide">
                    {exp.period}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-mono text-sm sm:text-base font-bold text-[#25231D] dark:text-[#F2EADF] tracking-wide uppercase flex items-center gap-2">
                    <span>{exp.company}</span>
                  </h3>
                  <div className="font-sans text-xs text-[#85866A] dark:text-[#9E9F88] italic flex items-center gap-1">
                    <MapPin size={11} />
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span>{exp.domain}</span>
                  </div>
                </div>
              </div>

              {/* Cột phải (8 cols): Vai trò, Trách nhiệm & Công nghệ */}
              <div className="lg:col-span-8 space-y-4">
                <div>
                  <h4 className="text-2xl sm:text-[1.8rem] font-serif font-bold text-[#25231D] dark:text-[#F2EADF] tracking-tight group-hover:text-[#B96F4F] dark:group-hover:text-[#C87D5D] transition-colors">
                    {exp.role}
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
                      className="px-2.5 py-1 rounded-md bg-[#E6D8C5]/60 dark:bg-[#20261C] border border-[#25231D]/10 dark:border-[#F2EADF]/12 text-[10.5px] font-mono text-[#30372D] dark:text-[#D4C9BD]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;