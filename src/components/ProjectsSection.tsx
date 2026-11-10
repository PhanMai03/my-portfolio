import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const ProjectsSection: React.FC = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      id: "clothing-ecommerce",
      num: "01",
      tag: language === "vi" ? "Frontend & Kiểm thử QA" : "Frontend & QA",
      title: "Clothing E-Commerce Management",
      description:
        language === "vi"
          ? "Hệ thống quản trị bán hàng hoàn chỉnh với xác thực người dùng, phân quyền RBAC, quản lý sản phẩm/đơn hàng và bộ kiểm thử API toàn diện bằng Postman."
          : "Full-featured e-commerce admin dashboard with authentication, RBAC, CRUD operations, and Postman API testing.",
      image: "/projects/Management.png",
      liveUrl: "https://share-and-care-admin-lovat.vercel.app/",
      githubUrl: "https://github.com/PhanMai03/E-commerce-Management-System",
      stack: ["ReactJS", "NextJS", "Tailwind CSS", "RESTful APIs", "Postman"],
    },
    {
      id: "book-website",
      num: "02",
      tag: language === "vi" ? "Nền tảng Web" : "Web Platform",
      title: "Book Website & Reader Platform",
      description:
        language === "vi"
          ? "Nền tảng mua sắm sách trực tuyến với tính năng tìm kiếm thông minh, lọc danh mục, giỏ hàng lưu trữ, quy trình đặt hàng COD và bảng điều khiển quản trị."
          : "Full-featured online bookstore platform with advanced debounced search, category filtering, persistent shopping cart, COD checkout & admin dashboard.",
      image: "/projects/Book.png",
      liveUrl: "https://book-website-xi-eight.vercel.app/",
      githubUrl: "https://github.com/PhanMai03/book-website",
      stack: ["ReactJS", "Tailwind CSS", "RESTful APIs", "JavaScript"],
    },
    {
      id: "agrigo-marketplace",
      num: "03",
      tag: language === "vi" ? "Thương mại & Chuỗi cung ứng" : "Supply Chain & E-Com",
      title: "AgriGo Marketplace Platform",
      description:
        language === "vi"
          ? "Sàn thương mại nông sản số với bộ lọc thuộc tính đa tầng, logic giỏ hàng nhiều mức giá và tích hợp API xác thực chuẩn OpenAPI."
          : "Digital agricultural commerce platform with real-time faceted filters, multi-tier cart logic, and OpenAPI verified endpoint consumption.",
      image: "/projects/Agrigo.png",
      liveUrl: "https://github.com/PhanMai03/agrigo-web",
      githubUrl: "https://github.com/PhanMai03/agrigo-web",
      stack: ["React", "TypeScript", "Tailwind CSS", "REST API", "Vite"],
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col justify-center py-20 sm:py-24 lg:py-24 text-left overflow-hidden bg-[#EAE0D2] dark:bg-[#1C201A] border-b border-[#25231D]/15 dark:border-[#F2EADF]/15 transition-colors duration-300"
    >
      <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 space-y-12 sm:space-y-16">
        
        {/* =========================================================================
            SECTION HEADER
           ========================================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-[#25231D]/15 dark:border-[#F2EADF]/15">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5 text-[#85866A] dark:text-[#9E9F88]">
              <span className="w-6 h-[1px] bg-[#85866A] dark:bg-[#9E9F88]" />
              <span className="font-mono text-xs uppercase tracking-widest">
                {t.projects.tag}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-serif font-bold text-[#25231D] dark:text-[#F2EADF] leading-[1.06] tracking-tight">
              {t.projects.title} <br />
              <span className="italic font-normal text-[#B96F4F] dark:text-[#C87D5D]">
                {t.projects.titleHighlight}
              </span>
            </h2>
          </div>

          <a
            href="https://github.com/PhanMai03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#25231D]/75 dark:text-[#F2EADF]/75 hover:text-[#B96F4F] dark:hover:text-[#C87D5D] transition-colors pb-1"
          >
            <span>{language === "vi" ? "Xem tất cả dự án trên GitHub" : "View all projects on GitHub"}</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* =========================================================================
            BỐ CỤC LOOKBOOK DỰ ÁN MỞ (HOÀN TOÀN LOẠI BỎ HỘP CARD NỀN DÀY CỘP)
            - 3 CỘT PHÂN TÁCH BẰNG ĐƯỜNG KẺ HAIRLINE DỌC
            - HÌNH ẢNH GIAO DIỆN ĐẶT TRỰC DIỆN NHƯ MỘT BẢN THIẾT KẾ KIẾN TRÚC
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#25231D]/15 dark:divide-[#F2EADF]/15">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="py-8 lg:py-0 lg:px-8 xl:px-10 first:pt-0 first:lg:pl-0 last:pb-0 last:lg:pr-0 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-5">
                {/* Header Dòng Chỉ Mục Editorial */}
                <div className="flex items-center justify-between pb-2 border-b border-[#25231D]/15 dark:border-[#F2EADF]/15">
                  <span className="font-mono text-xs font-bold text-[#B96F4F] dark:text-[#C87D5D] tracking-wider">
                    PLATE // {proj.num}
                  </span>
                  <span className="font-mono text-[10.5px] uppercase text-[#85866A] dark:text-[#9E9F88] tracking-wider">
                    {proj.tag}
                  </span>
                </div>

                {/* Khung hiển thị giao diện tối giản dạng Bản Kỹ Thuật (không card nền dày) */}
                <div className="rounded-xl overflow-hidden border border-[#25231D]/15 dark:border-[#F2EADF]/15 bg-[#E6D8C5]/40 dark:bg-[#181D15] shadow-sm flex flex-col">
                  {/* Thanh điều khiển tối giản */}
                  <div className="h-6 px-3 bg-[#E6D8C5]/80 dark:bg-[#20261C] border-b border-[#25231D]/15 dark:border-[#F2EADF]/15 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#B96F4F]/80" />
                      <span className="w-2 h-2 rounded-full bg-[#85866A]/80" />
                      <span className="w-2 h-2 rounded-full bg-[#C8B69E]/80" />
                    </div>
                    <span className="font-mono text-[9px] text-[#25231D]/60 dark:text-[#F2EADF]/60 truncate">
                      {proj.id}.app
                    </span>
                  </div>

                  {/* Ảnh Screenshot Project */}
                  <div className="relative w-full aspect-[1890/980] overflow-hidden bg-[#F2EADF] dark:bg-[#151813]">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover object-top block transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Tiêu đề & Mô tả */}
                <div className="space-y-2 pt-1">
                  <h3 className="font-serif font-bold text-2xl text-[#25231D] dark:text-[#F2EADF] tracking-tight group-hover:text-[#B96F4F] dark:group-hover:text-[#C87D5D] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-[#25231D]/80 dark:text-[#F2EADF]/80 leading-relaxed line-clamp-3">
                    {proj.description}
                  </p>
                </div>

                {/* Tech Stack hiển thị dạng chuỗi typography mở */}
                <div className="pt-1 flex flex-wrap items-center gap-1.5">
                  {proj.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-full font-mono text-[10.5px] text-[#30372D] dark:text-[#D4C9BD] bg-[#E6D8C5]/60 dark:bg-[#20261C] border border-[#25231D]/10 dark:border-[#F2EADF]/10 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* 2 NÚT HÀNH ĐỘNG GITHUB & LIVE DEMO TINH TẾ */}
              <div className="pt-4 border-t border-[#25231D]/15 dark:border-[#F2EADF]/15 flex items-center justify-between gap-3">
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#25231D]/75 dark:text-[#F2EADF]/75 hover:text-[#B96F4F] dark:hover:text-[#C87D5D] transition-colors py-1 group/git"
                >
                  <Github size={13} className="group-hover/git:rotate-12 transition-transform" />
                  <span>GitHub</span>
                  <ArrowUpRight size={12} />
                </a>

                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#B96F4F] dark:bg-[#C87D5D] hover:bg-[#A35D3F] dark:hover:bg-[#B56D4E] text-[#F2EADF] font-mono text-xs font-medium tracking-wide transition-all shadow-xs cursor-pointer group/live"
                >
                  <span>{language === "vi" ? "Trải nghiệm" : "Live Demo"}</span>
                  <ArrowUpRight size={13} className="group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
