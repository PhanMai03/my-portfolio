import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectItem {
  id: string;
  num: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  role: string;
  period: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  stack: string[];
}

export const ProjectsSection: React.FC = () => {
  const { language } = useLanguage();

  // Khớp 100% với danh mục PROJECTS trong CV mới nhất
  const projects: ProjectItem[] = [
    {
      id: "sharecare",
      num: "01",
      title: "ShareCare",
      category: "ADMINISTRATIVE E-COMMERCE PLATFORM",
      problem:
        language === "vi"
          ? "Hệ thống quản lý bán hàng quần áo quy mô lớn đòi hỏi kiểm soát phân quyền chặt chẽ và tích hợp luồng xử lý đơn hàng thời gian thực."
          : "Administrative e-commerce platform for clothing management requiring centralized role-based access control and live order tracking.",
      solution:
        language === "vi"
          ? "Xây dựng bảng điều khiển quản trị tập trung với RBAC, phân tích doanh thu và các thao tác CRUD sản phẩm/đơn hàng; tích hợp WebSockets hỗ trợ trò chuyện với khách hàng và cập nhật trạng thái trực tiếp."
          : "Built a centralized admin dashboard with RBAC, revenue analytics, and product/order CRUD operations, integrating WebSockets for real-time customer chat and live status updates.",
      role: "Frontend Developer",
      period: "Mar 2025 – May 2025",
      image: "/projects/Management.png",
      liveUrl: "https://share-and-care-admin-lovat.vercel.app/",
      githubUrl: "https://github.com/PhanMai03/E-commerce-Management-System",
      stack: ["React", "NextJS", "Tailwind CSS", "WebSocket", "Postman", "RESTful APIs"],
    },
    {
      id: "bookstore",
      num: "02",
      title: "BookStore",
      category: "ONLINE BOOKSTORE PLATFORM",
      problem:
        language === "vi"
          ? "Nền tảng mua sắm sách trực tuyến cần trải nghiệm duyệt danh mục mượt mà, xử lý đơn hàng chính xác và quản lý kho hàng liên tục."
          : "Online bookstore platform offering smooth catalog browsing, seamless checkout flow, and resilient inventory management.",
      solution:
        language === "vi"
          ? "Xây dựng storefront tương tác với tìm kiếm đa bộ lọc, duyệt theo danh mục và giỏ hàng thanh toán, được hỗ trợ bởi hệ thống quản lý kho admin theo phân quyền và tích hợp RESTful API."
          : "Built an interactive storefront with multi-filter search, category browsing, and cart checkout, backed by role-based admin inventory controls and RESTful API integration.",
      role: "Frontend Developer",
      period: "Apr 2026 – Sep 2026",
      image: "/projects/Book.png",
      liveUrl: "https://book-website-xi-eight.vercel.app/",
      githubUrl: "https://github.com/PhanMai03/book-website",
      stack: ["React", "Tailwind CSS", "RESTful APIs", "JavaScript"],
    },
    {
      id: "agrigomarket",
      num: "03",
      title: "AgrigoMarket",
      category: "AGRICULTURAL E-COMMERCE PLATFORM",
      problem:
        language === "vi"
          ? "Nền tảng thương mại điện tử nông sản kết nối trực tiếp nông dân địa phương với người tiêu dùng và các đơn vị bán buôn."
          : "Agricultural e-commerce platform connecting local farmers directly with consumers and wholesalers.",
      solution:
        language === "vi"
          ? "Phát triển bộ lọc đa tiêu chí (ngày thu hoạch, chứng nhận hữu cơ, địa điểm), luồng giỏ hàng/thanh toán và theo dõi đơn hàng theo thời gian thực; kiểm thử qua kiểm thử UI thủ công đa khung nhìn và kiểm thử API."
          : "Developed multi-criteria filtering (harvest date, organic certification, location), cart/checkout flows, and real-time order tracking, validated via cross-viewport manual UI and API testing.",
      role: "Frontend Developer",
      period: "Nov 2026 – Present",
      image: "/projects/Agrigo.png",
      liveUrl: "https://agrigo-web.vercel.app/",
      githubUrl: "https://github.com/PhanMai03/agrigo-web",
      stack: ["React", "Tailwind CSS", "WebSocket", "Postman", "RESTful APIs"],
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-28 lg:py-32 bg-[#F2EADF] dark:bg-[#161914] text-[#25231D] dark:text-[#F2EADF] border-b border-[#25231D]/15 dark:border-[#F2EADF]/15 transition-colors duration-300"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 space-y-16">
        
        {/* =========================================================================
            SECTION HEADER
           ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#25231D]/15 dark:border-[#F2EADF]/15">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 text-[#5C5549] dark:text-[#B8B9A6]">
              <span className="w-2 h-2 rounded-full bg-[#B96F4F] dark:text-[#C87D5D]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] font-bold">
                03 // FEATURED PROJECTS
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#25231D] dark:text-[#F2EADF] tracking-tight leading-[1.05]">
              {language === "vi" ? "Dự án chọn lọc, " : "Flagship "}
              <span className="font-editorial-italic font-normal text-[#B96F4F] dark:text-[#C87D5D]">
                {language === "vi" ? "kiểm chứng thực tế." : "production work."}
              </span>
            </h2>
          </div>

          <a
            href="https://github.com/PhanMai03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#25231D] dark:text-[#F2EADF] hover:text-[#B96F4F] dark:hover:text-[#C87D5D] transition-colors py-2 group font-bold"
          >
            <span>{language === "vi" ? "Xem Tất Cả Trên GitHub" : "View All On GitHub"}</span>
            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* =========================================================================
            STICKY STACKING CARDS
           ========================================================================= */}
        <div className="space-y-12 sm:space-y-16 max-w-6xl mx-auto">
          {projects.map((proj, idx) => (
            <div
              key={proj.id}
              style={{
                top: `${80 + idx * 24}px`,
              }}
              className="sticky rounded-[28px] p-6 sm:p-10 lg:p-12 bg-[#FAF7F2] dark:bg-[#1C201A] border border-[#25231D]/15 dark:border-[#F2EADF]/15 shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* BÊN TRÁI: THÔNG TIN DỰ ÁN */}
                <div className="lg:col-span-6 space-y-6">
                  
                  {/* Meta row */}
                  <div className="flex items-center justify-between text-xs font-mono text-[#5C5549] dark:text-[#B8B9A6] pb-3 border-b border-[#25231D]/10 dark:border-[#F2EADF]/10">
                    <span className="text-xl font-bold text-[#B96F4F] dark:text-[#C87D5D]">{proj.num}</span>
                    <span className="uppercase tracking-widest">{proj.category}</span>
                    <span>{proj.period}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#25231D] dark:text-[#F2EADF] leading-tight">
                    {proj.title}
                  </h3>

                  {/* Role */}
                  <div className="font-mono text-xs font-bold text-[#B96F4F] dark:text-[#C87D5D] uppercase tracking-wide">
                    {proj.role}
                  </div>

                  {/* Problem & Solution */}
                  <div className="space-y-3 font-sans text-xs sm:text-sm text-[#40362E] dark:text-[#D4C9BD] leading-relaxed">
                    <p>
                      <strong className="text-[#25231D] dark:text-[#F2EADF] font-semibold">{language === "vi" ? "Mô tả bài toán: " : "Overview: "}</strong>
                      {proj.problem}
                    </p>
                    <p>
                      <strong className="text-[#B96F4F] dark:text-[#C87D5D] font-semibold">{language === "vi" ? "Giải pháp kỹ thuật: " : "Technical Solution: "}</strong>
                      {proj.solution}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-[#EAE0D2]/80 dark:bg-[#20261C] border border-[#25231D]/10 dark:border-[#F2EADF]/10 text-[11px] font-mono text-[#25231D] dark:text-[#F2EADF] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Nút xem */}
                  <div className="pt-2 flex items-center gap-4">
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#B96F4F] hover:bg-[#A35C3E] dark:bg-[#C87D5D] dark:hover:bg-[#D98E6E] text-[#F2EADF] font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-sm"
                      >
                        <span>{language === "vi" ? "Trải Nghiệm Live" : "Live Demo"}</span>
                        <ArrowUpRight size={14} />
                      </a>
                    )}

                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#25231D]/20 dark:border-[#F2EADF]/20 hover:border-[#B96F4F] text-[#25231D] dark:text-[#F2EADF] hover:text-[#B96F4F] font-mono text-xs font-medium transition-colors"
                      title="GitHub Repository"
                    >
                      <Github size={15} />
                      <span>Source Code</span>
                    </a>
                  </div>

                </div>

                {/* BÊN PHẢI: MOCKUP ẢNH SẢN PHẨM */}
                <div className="lg:col-span-6">
                  <div className="rounded-2xl overflow-hidden border border-[#25231D]/15 dark:border-[#F2EADF]/15 bg-[#EAE0D2] dark:bg-[#20261C] shadow-inner aspect-[16/11]">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
