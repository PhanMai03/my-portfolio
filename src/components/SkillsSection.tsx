import React from "react";
import { ShieldCheck, Code2, Database, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const SkillsSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id="skills"
      className="relative min-h-[70vh] py-20 sm:py-24 lg:py-28 text-left overflow-hidden bg-[#F2EADF] dark:bg-[#161914] border-b border-[#25231D]/15 dark:border-[#F2EADF]/15 select-none transition-colors duration-300"
    >
      <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 space-y-12 sm:space-y-16">
        
        {/* =========================================================================
            SECTION HEADER
           ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#25231D]/15 dark:border-[#F2EADF]/15">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2.5 text-[#85866A] dark:text-[#9E9F88]">
              <span className="w-6 h-[1px] bg-[#85866A] dark:bg-[#9E9F88]" />
              <span className="font-mono text-xs uppercase tracking-widest">
                {t.skills.tag}
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-serif font-bold text-[#25231D] dark:text-[#F2EADF] leading-[1.05] tracking-tight">
              {t.skills.title} <br />
              <span className="italic font-normal text-[#B96F4F] dark:text-[#C87D5D]">
                {t.skills.titleHighlight}
              </span>
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#25231D]/75 dark:text-[#F2EADF]/75 max-w-md leading-relaxed">
            {t.skills.subtitle}
          </p>
        </div>

        {/* =========================================================================
            BẢNG MA TRẬN NĂNG LỰC TRỰC DIỆN (SWISS EDITORIAL CAPABILITY MATRIX)
            - HOÀN TOÀN LOẠI BỎ HỘP CARD BỌC NGOÀI & TỪNG CARD BỌC TRONG
            - 4 CỘT PHÂN TÁCH BẰNG ĐƯỜNG KẺ HAIRLINE TINH TẾ, KHÔNG GÂY TÙ TÚNG
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#25231D]/15 dark:divide-[#F2EADF]/15">
          
          {/* -----------------------------------------------------------------------
              CỘT 01: KIỂM THỬ PHẦN MỀM & QA
             ----------------------------------------------------------------------- */}
          <div className="relative py-8 md:py-0 md:px-6 xl:px-8 first:pt-0 first:md:pl-0 flex flex-col justify-between space-y-8 group">
            {/* Dấu triện đỏ CTF 2023 Honors Stamp thanh mảnh */}
            <div className="absolute top-0 right-2 md:right-4 rotate-12 border border-[#B96F4F] dark:border-[#C87D5D] rounded-full w-16 h-16 p-0.5 pointer-events-none opacity-80 flex items-center justify-center text-center">
              <div className="border border-dashed border-[#B96F4F] dark:border-[#C87D5D] rounded-full w-full h-full flex flex-col items-center justify-center font-mono text-[5.5px] uppercase font-bold text-[#B96F4F] dark:text-[#C87D5D] leading-tight">
                <span>CTF 2023</span>
                <span className="text-[7px]">HONORS</span>
                <span>HCMUTE</span>
              </div>
            </div>

            <div className="space-y-6">
              {/* Category Marker */}
              <div className="space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-[#25231D]/15 dark:border-[#F2EADF]/15 font-mono text-[11px]">
                  <span className="font-bold text-[#B96F4F] dark:text-[#C87D5D] tracking-wider">
                    01 // TESTING
                  </span>
                  <span className="text-[#25231D]/50 dark:text-[#F2EADF]/50">#QA-9481</span>
                </div>

                <div className="flex items-center gap-2.5 pt-1">
                  <div className="w-8 h-8 rounded-full bg-[#E6D8C5]/70 dark:bg-[#20261C] border border-[#25231D]/15 dark:border-[#F2EADF]/15 flex items-center justify-center text-[#B96F4F] dark:text-[#C87D5D] shrink-0">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-[#25231D] dark:text-[#F2EADF] tracking-tight">
                      {t.skills.ticket01Title}
                    </h3>
                    <p className="font-mono text-[10px] text-[#85866A] dark:text-[#9E9F88] uppercase tracking-wider">
                      {t.skills.ticket01Spec}
                    </p>
                  </div>
                </div>
              </div>

              {/* Danh sách kỹ năng mở, dạng dòng kẻ thanh mảnh (KHÔNG CARD) */}
              <div className="space-y-0 divide-y divide-[#25231D]/10 dark:divide-[#F2EADF]/10 pt-1">
                {[
                  { name: "Test case design", status: language === "vi" ? "Biên & Phân vùng" : "Boundary & Logic" },
                  { name: "Functional testing", status: language === "vi" ? "Luồng Nghiệp vụ" : "Business Flows" },
                  { name: "API testing with Postman", status: language === "vi" ? "Kịch bản Postman" : "Automated Suite" },
                  { name: "Defect tracking with Jira", status: language === "vi" ? "Vòng đời Lỗi Jira" : "Lifecycle Matrix" },
                  { name: "Web UI Testing", status: language === "vi" ? "Giao diện Responsive" : "Cross-browser UI" },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="py-3 flex items-center justify-between gap-2 hover:translate-x-1 transition-transform duration-200"
                  >
                    <span className="font-sans font-medium text-sm text-[#25231D] dark:text-[#F2EADF]">
                      {item.name}
                    </span>
                    <span className="font-mono text-[11px] text-[#B96F4F] dark:text-[#C87D5D] font-medium shrink-0">
                      [✓] {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cột 01 Footer: Tóm tắt năng lực QA */}
            <div className="pt-4 border-t border-[#25231D]/15 dark:border-[#F2EADF]/15 flex items-center justify-between font-mono text-xs">
              <span className="text-[10px] text-[#85866A] dark:text-[#9E9F88] uppercase tracking-wider">
                {language === "vi" ? "PHẠM VI NĂNG LỰC" : "VERIFIED SCOPE"}
              </span>
              <span className="font-bold text-[#B96F4F] dark:text-[#C87D5D]">
                5 CORE QA PRACTICES
              </span>
            </div>
          </div>

          {/* -----------------------------------------------------------------------
              CỘT 02: FRONTEND DEVELOPMENT
             ----------------------------------------------------------------------- */}
          <div className="py-8 md:py-0 md:px-6 xl:px-8 flex flex-col justify-between space-y-8 group">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-[#25231D]/15 dark:border-[#F2EADF]/15 font-mono text-[11px]">
                  <span className="font-bold text-[#30372D] dark:text-[#C8B69E] tracking-wider">
                    02 // FRONTEND
                  </span>
                  <span className="text-[#25231D]/50 dark:text-[#F2EADF]/50">#FE-9482</span>
                </div>

                <div className="flex items-center gap-2.5 pt-1">
                  <div className="w-8 h-8 rounded-full bg-[#E6D8C5]/70 dark:bg-[#20261C] border border-[#25231D]/15 dark:border-[#F2EADF]/15 flex items-center justify-center text-[#30372D] dark:text-[#C8B69E] shrink-0">
                    <Code2 size={16} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-[#25231D] dark:text-[#F2EADF] tracking-tight">
                      {t.skills.ticket02Title}
                    </h3>
                    <p className="font-mono text-[10px] text-[#85866A] dark:text-[#9E9F88] uppercase tracking-wider">
                      {t.skills.ticket02Spec}
                    </p>
                  </div>
                </div>
              </div>

              {/* Danh sách kỹ năng Frontend */}
              <div className="space-y-0 divide-y divide-[#25231D]/10 dark:divide-[#F2EADF]/10 pt-1">
                {[
                  { name: "React", status: language === "vi" ? "Kiến trúc SPA" : "Component SPA" },
                  { name: "NextJS", status: language === "vi" ? "Môi trường Prod" : "Production App" },
                  { name: "TypeScript", status: language === "vi" ? "Kiểm kiểu chặt chẽ" : "Strict Typing" },
                  { name: "JavaScript", status: language === "vi" ? "Chuẩn ES6+" : "Core ES6+" },
                  { name: "Tailwind CSS", status: language === "vi" ? "Thiết kế Token" : "Utility Tokens" },
                  { name: "HTML5 & CSS3", status: language === "vi" ? "Ngữ nghĩa & RWD" : "Semantic & RWD" },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="py-3 flex items-center justify-between gap-2 hover:translate-x-1 transition-transform duration-200"
                  >
                    <span className="font-sans font-medium text-sm text-[#25231D] dark:text-[#F2EADF]">
                      {item.name}
                    </span>
                    <span className="font-mono text-[11px] text-[#85866A] dark:text-[#9E9F88] font-medium shrink-0">
                      [✓] {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cột 02 Footer */}
            <div className="pt-4 border-t border-[#25231D]/15 dark:border-[#F2EADF]/15 flex items-center justify-between font-mono text-xs">
              <span className="text-[10px] text-[#85866A] dark:text-[#9E9F88] uppercase tracking-wider">
                {language === "vi" ? "PHẠM VI NĂNG LỰC" : "VERIFIED SCOPE"}
              </span>
              <span className="font-bold text-[#30372D] dark:text-[#C8B69E]">
                6 PRODUCTION STACKS
              </span>
            </div>
          </div>

          {/* -----------------------------------------------------------------------
              CỘT 03: BACKEND & DATABASES
             ----------------------------------------------------------------------- */}
          <div className="py-8 md:py-0 md:px-6 xl:px-8 flex flex-col justify-between space-y-8 group">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-[#25231D]/15 dark:border-[#F2EADF]/15 font-mono text-[11px]">
                  <span className="font-bold text-[#85866A] dark:text-[#9E9F88] tracking-wider">
                    03 // BACKEND & DB
                  </span>
                  <span className="text-[#25231D]/50 dark:text-[#F2EADF]/50">#BE-9483</span>
                </div>

                <div className="flex items-center gap-2.5 pt-1">
                  <div className="w-8 h-8 rounded-full bg-[#E6D8C5]/70 dark:bg-[#20261C] border border-[#25231D]/15 dark:border-[#F2EADF]/15 flex items-center justify-center text-[#85866A] dark:text-[#9E9F88] shrink-0">
                    <Database size={16} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-[#25231D] dark:text-[#F2EADF] tracking-tight">
                      {t.skills.ticket03Title}
                    </h3>
                    <p className="font-mono text-[10px] text-[#85866A] dark:text-[#9E9F88] uppercase tracking-wider">
                      {t.skills.ticket03Spec}
                    </p>
                  </div>
                </div>
              </div>

              {/* Danh sách kỹ năng Backend & Databases */}
              <div className="space-y-0 divide-y divide-[#25231D]/10 dark:divide-[#F2EADF]/10 pt-1">
                {[
                  { name: "NodeJS", status: language === "vi" ? "Server Runtime" : "Server Runtime" },
                  { name: "Express", status: language === "vi" ? "REST Middleware" : "REST Middleware" },
                  { name: "RESTful APIs", status: language === "vi" ? "Chuẩn OpenAPI" : "OpenAPI Protocol" },
                  { name: "SQL Server", status: language === "vi" ? "CSDL Quan hệ" : "Relational T-SQL" },
                  { name: "MongoDB", status: language === "vi" ? "NoSQL Tài liệu" : "Document NoSQL" },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="py-3 flex items-center justify-between gap-2 hover:translate-x-1 transition-transform duration-200"
                  >
                    <span className="font-sans font-medium text-sm text-[#25231D] dark:text-[#F2EADF]">
                      {item.name}
                    </span>
                    <span className="font-mono text-[11px] text-[#B96F4F] dark:text-[#C87D5D] font-medium shrink-0">
                      [✓] {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cột 03 Footer */}
            <div className="pt-4 border-t border-[#25231D]/15 dark:border-[#F2EADF]/15 flex items-center justify-between font-mono text-xs">
              <span className="text-[10px] text-[#85866A] dark:text-[#9E9F88] uppercase tracking-wider">
                {language === "vi" ? "PHẠM VI NĂNG LỰC" : "VERIFIED SCOPE"}
              </span>
              <span className="font-bold text-[#85866A] dark:text-[#9E9F88]">
                5 APIS & DB PROTOCOLS
              </span>
            </div>
          </div>

          {/* -----------------------------------------------------------------------
              CỘT 04: TOOLS & AI
             ----------------------------------------------------------------------- */}
          <div className="py-8 md:py-0 md:px-6 xl:px-8 last:pb-0 last:md:pr-0 flex flex-col justify-between space-y-8 group">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-[#25231D]/15 dark:border-[#F2EADF]/15 font-mono text-[11px]">
                  <span className="font-bold text-[#85866A] dark:text-[#9E9F88] tracking-wider">
                    04 // TOOLS & AI
                  </span>
                  <span className="text-[#25231D]/50 dark:text-[#F2EADF]/50">#AI-9484</span>
                </div>

                <div className="flex items-center gap-2.5 pt-1">
                  <div className="w-8 h-8 rounded-full bg-[#E6D8C5]/70 dark:bg-[#20261C] border border-[#25231D]/15 dark:border-[#F2EADF]/15 flex items-center justify-center text-[#25231D] dark:text-[#F2EADF] shrink-0">
                    <Sparkles size={16} className="text-[#B96F4F] dark:text-[#C87D5D]" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl text-[#25231D] dark:text-[#F2EADF] tracking-tight">
                      {t.skills.ticket04Title}
                    </h3>
                    <p className="font-mono text-[10px] text-[#85866A] dark:text-[#9E9F88] uppercase tracking-wider">
                      {t.skills.ticket04Spec}
                    </p>
                  </div>
                </div>
              </div>

              {/* Danh sách kỹ năng Tools & AI */}
              <div className="space-y-0 divide-y divide-[#25231D]/10 dark:divide-[#F2EADF]/10 pt-1">
                {[
                  { name: "Git / GitHub", status: language === "vi" ? "Quản lý Phiên bản" : "Version Control" },
                  { name: "Jira", status: language === "vi" ? "Theo dõi Defect" : "Defect Tracking" },
                  { name: "Postman", status: language === "vi" ? "Kiểm thử API" : "API Verification" },
                  { name: "Figma", status: language === "vi" ? "Thiết kế UI/UX" : "UI/UX System" },
                  { name: "AI Dev Tools", status: language === "vi" ? "Codex, Gemini, ChatGPT" : "Codex, Gemini, AI" },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="py-3 flex items-center justify-between gap-2 hover:translate-x-1 transition-transform duration-200"
                  >
                    <span className="font-sans font-medium text-sm text-[#25231D] dark:text-[#F2EADF]">
                      {item.name}
                    </span>
                    <span className="font-mono text-[11px] text-[#85866A] dark:text-[#9E9F88] font-medium shrink-0">
                      [✓] {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cột 04 Footer */}
            <div className="pt-4 border-t border-[#25231D]/15 dark:border-[#F2EADF]/15 flex items-center justify-between font-mono text-xs">
              <span className="text-[10px] text-[#85866A] dark:text-[#9E9F88] uppercase tracking-wider">
                {language === "vi" ? "PHẠM VI NĂNG LỰC" : "VERIFIED SCOPE"}
              </span>
              <span className="font-bold text-[#B96F4F] dark:text-[#C87D5D]">
                5 AI & DEV TOOLS
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
