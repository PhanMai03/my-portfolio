import React from "react";
import { ArrowUpRight, MapPin, Briefcase, FileText } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";

interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  role: string;
  status: string;
  isActive?: boolean;
  location: string;
  description: string;
  points: string[];
  skills: string[];
}

export const ExperienceSection: React.FC = () => {
  const { language } = useLanguage();

  // Khớp 100% với Work Experience trong CV mới nhất
  const experiences: ExperienceItem[] = [
    {
      id: "hsv",
      period: "Sep 2026 – Present",
      company: "Healthcare Solution Viet Nam",
      role: language === "vi" ? "Fullstack Developer Intern" : "Fullstack Developer Intern",
      status: language === "vi" ? "Đang làm việc" : "Active",
      isActive: true,
      location: "TP. Hồ Chí Minh",
      description:
        language === "vi"
          ? "Phát triển các component React dạng module, xử lý luồng phân quyền RBAC và bản địa hóa giao diện cho Hệ thống Thông tin Bệnh viện (HIS)."
          : "Develop modular React components, RBAC workflows, and localized UIs for a Hospital Information System (HIS).",
      points: [
        language === "vi"
          ? "Phát triển các component React dạng module, luồng phân quyền RBAC và giao diện bản địa hóa cho hệ thống HIS."
          : "Develop modular React components, RBAC workflows, and localized UIs for a Hospital Information System (HIS).",
        language === "vi"
          ? "Tối ưu tốc độ tải trang ban đầu bằng route-based code splitting và lazy loading trên các phân hệ lâm sàng trọng yếu."
          : "Optimize initial page load speed using route-based code splitting and lazy loading across core clinical modules.",
        language === "vi"
          ? "Tích hợp RESTful APIs, xử lý trạng thái bất đồng bộ (async states) và kiểm định luồng dữ liệu qua Postman và SQL Server."
          : "Integrate RESTful APIs, handle async states, and validate data flows via Postman and SQL Server.",
      ],
      skills: ["React", "RBAC", "Code Splitting", "Lazy Loading", "RESTful APIs", "Postman", "SQL Server"],
    },
    {
      id: "fpt",
      period: "Jun 2024 – Sep 2024",
      company: "FPT Software",
      role: language === "vi" ? "Frontend Developer Intern" : "Frontend Developer Intern",
      status: language === "vi" ? "Hoàn thành" : "Completed",
      location: "TP. Hồ Chí Minh",
      description:
        language === "vi"
          ? "Phối hợp trong đội ngũ Agile 18 thành viên xây dựng ứng dụng SPA thích ứng (responsive) sử dụng React và Tailwind CSS."
          : "Collaborated in an 18-member Agile team to build a responsive SPA using React and Tailwind CSS.",
      points: [
        language === "vi"
          ? "Phối hợp cùng đội ngũ Agile 18 thành viên xây dựng ứng dụng SPA thích ứng bằng React và Tailwind CSS."
          : "Collaborated in an 18-member Agile team to build a responsive SPA using React and Tailwind CSS.",
        language === "vi"
          ? "Tích hợp các RESTful APIs để hiển thị dữ liệu động chính xác theo đặc tả kỹ thuật."
          : "Integrated RESTful APIs to dynamically render data according to functional specifications.",
        language === "vi"
          ? "Sửa lỗi giao diện và xử lý các trường hợp ngoại lệ (edge-case errors) đảm bảo tương thích đa trình duyệt."
          : "Resolved UI defects and edge-case errors to ensure cross-browser compatibility.",
      ],
      skills: ["React", "Tailwind CSS", "SPA", "RESTful APIs", "Agile", "Cross-browser QA"],
    },
    {
      id: "hcmute",
      period: "2021 – 2025",
      company: "Ho Chi Minh City University of Technology and Education (HCMUTE)",
      role: language === "vi" ? "Kỹ thuật Phần mềm (GPA: 3.23 / 4.0)" : "Software Engineering (GPA: 3.23 / 4.0)",
      status: language === "vi" ? "Tốt nghiệp" : "Graduated",
      location: "TP. Thủ Đức",
      description:
        language === "vi"
          ? "Tốt nghiệp chính quy chuyên ngành Kỹ thuật Phần mềm với điểm tích lũy GPA 3.23 / 4.0 và trình độ Anh ngữ quốc tế TOEIC 640."
          : "Graduated with Bachelor of Engineering in Software Engineering (GPA: 3.23/4.0) with international TOEIC 640 proficiency.",
      points: [
        language === "vi"
          ? "Tốt nghiệp chuyên ngành Kỹ thuật Phần mềm (Software Engineering) với điểm GPA 3.23 / 4.0."
          : "Completed Software Engineering degree with cumulative GPA: 3.23/4.0.",
        language === "vi"
          ? "Giải Khuyến khích Hội thi An toàn thông tin — Cyber Security CTF Competition 2023 tại HCMUTE."
          : "Consolation Prize – Cyber Security CTF Competition (2023), HCMUTE.",
        language === "vi"
          ? "Thành viên dự thi Cuộc thi Sinh viên với An toàn thông tin ASEAN (ASCIS) & Mastering IT Competition 2025."
          : "Participant in ASEAN Student Contest on Information Security (ASCIS) & Competitor in Mastering IT Competition.",
      ],
      skills: ["Software Engineering", "React", "RESTful APIs", "SQL Server", "Cyber Security CTF", "TOEIC 640"],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-20 sm:py-24 lg:py-28 text-left overflow-hidden bg-[#F2EADF] dark:bg-[#161914] text-[#25231D] dark:text-[#F2EADF] border-b border-[#25231D]/15 dark:border-[#F2EADF]/15 select-none transition-colors duration-300"
    >
      <div className="w-full max-w-[1240px] mx-auto px-6 sm:px-12 lg:px-16 space-y-12 relative z-10">
        
        {/* =========================================================================
            HEADER: ĐẬM CHẤT EDITORIAL, RÕ RÀNG
           ========================================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#25231D]/15 dark:border-[#F2EADF]/15">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5 text-[#5C5549] dark:text-[#B8B9A6]">
              <span className="w-6 h-[1.5px] bg-[#5C5549] dark:bg-[#B8B9A6]" />
              <span className="font-mono text-xs uppercase tracking-widest font-bold">
                04 // WORK EXPERIENCE
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-[#B96F4F]/15 text-[#B96F4F] dark:text-[#C87D5D]">
                CV VERIFIED
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#25231D] dark:text-[#F2EADF] leading-tight tracking-tight">
              {language === "vi" ? "Kinh nghiệm " : "Work "}
              <span className="font-editorial-italic font-normal text-[#B96F4F] dark:text-[#C87D5D]">
                {language === "vi" ? "thực chiến." : "experience."}
              </span>
            </h2>
          </div>

          <a
            href={PERSONAL_INFO.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-[#F2EADF] bg-[#B96F4F] hover:bg-[#A35C3E] dark:bg-[#C87D5D] dark:hover:bg-[#D98E6E] transition-all px-5 py-2.5 rounded-full font-bold group shadow-sm self-start sm:self-auto"
          >
            <FileText size={15} className="shrink-0" />
            <span>{language === "vi" ? "Xem Hồ Sơ CV [PDF]" : "View Resume [PDF]"}</span>
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>

        {/* =========================================================================
            VERTICAL TIMELINE — CỠ CHỮ CHUẨN, THẲNG HÀNG VÀ CÂN ĐỐI
           ========================================================================= */}
        <div className="relative pl-8 sm:pl-12 border-l-2 border-[#B96F4F]/40 dark:border-[#C87D5D]/40 space-y-12 sm:space-y-14 max-w-4xl">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative space-y-3.5">
              
              {/* Nút mốc thời gian rõ nét trên trục dọc */}
              <div className="absolute -left-[41px] sm:-left-[57px] top-1.5 flex items-center justify-center">
                {exp.isActive ? (
                  <div className="relative flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-[#B96F4F] dark:bg-[#C87D5D] opacity-40" />
                    <div className="w-4 h-4 rounded-full bg-[#B96F4F] dark:bg-[#C87D5D] border-2 border-[#F2EADF] dark:border-[#161914] shadow-sm" />
                  </div>
                ) : (
                  <div className="w-3.5 h-3.5 rounded-full bg-[#FAF7F2] dark:bg-[#20261C] border-2 border-[#25231D]/40 dark:border-[#F2EADF]/40" />
                )}
              </div>

              {/* Dòng 1: Thời gian & Trạng thái & Địa điểm */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-mono">
                <div className="flex items-center gap-2.5">
                  <span className="font-bold text-[#25231D] dark:text-[#F2EADF] text-sm sm:text-base">
                    {exp.period}
                  </span>
                  <span className="text-[#5C5549]/40 dark:text-[#B8B9A6]/40">•</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                    exp.isActive 
                      ? "bg-[#B96F4F] dark:bg-[#C87D5D] text-[#F2EADF]" 
                      : "bg-[#25231D]/10 dark:bg-[#F2EADF]/10 text-[#5C5549] dark:text-[#B8B9A6]"
                  }`}>
                    {exp.status}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#5C5549] dark:text-[#B8B9A6]">
                  <MapPin size={13} className={exp.isActive ? "text-[#B96F4F] dark:text-[#C87D5D]" : "text-[#5C5549] dark:text-[#B8B9A6]"} />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Dòng 2: Tên công ty & Vị trí làm việc rõ ràng */}
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#25231D] dark:text-[#F2EADF] tracking-tight">
                  {exp.company}
                </h3>
                <div className="flex items-center gap-2 font-mono text-sm sm:text-base font-semibold text-[#B96F4F] dark:text-[#C87D5D]">
                  <Briefcase size={14} className="shrink-0" />
                  <span>{exp.role}</span>
                </div>
              </div>

              {/* Dòng 3: Tóm tắt 1 câu vừa vặn */}
              <p className="font-sans text-xs sm:text-sm text-[#40362E] dark:text-[#D4C9BD] leading-relaxed">
                {exp.description}
              </p>

              {/* Dòng 4: Các điểm nhấn thẳng hàng, dễ đọc */}
              <ul className="space-y-2 text-xs sm:text-[13px] text-[#25231D] dark:text-[#F2EADF] font-sans pt-1">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B96F4F] dark:bg-[#C87D5D] mt-2 shrink-0" />
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Dòng 5: Tag công nghệ kích thước chuẩn */}
              <div className="flex flex-wrap gap-2 pt-1.5">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-[#EAE0D2] dark:bg-[#20261C] border border-[#25231D]/10 dark:border-[#F2EADF]/10 text-[#25231D] dark:text-[#F2EADF]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
