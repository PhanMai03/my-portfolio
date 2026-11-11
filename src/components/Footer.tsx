import React, { useState } from "react";
import {
  ArrowUpRight,
  Send,
  Check,
  Copy,
  Mail,
  PhoneCall,
  MapPin,
  Github,
  Linkedin,
  Sparkles,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

export const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    setErrorMessage("");

    const accessKey =
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
      import.meta.env.VITE_PUBLIC_KEY ||
      "";

    // Kiểm tra xem đã có Access Key thật hay chưa
    if (!accessKey || accessKey.includes("your_web3forms")) {
      setStatus("error");
      setErrorMessage(
        language === "vi"
          ? "Chưa cấu hình Access Key Web3Forms! Bạn hãy vào trang web3forms.com nhập email để lấy key miễn phí và dán vào file .env."
          : "Web3Forms Access Key is not set in .env! Please get your free access key at web3forms.com."
      );
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `[Portfolio Inquiry] From ${formData.name}`,
          from_name: formData.name,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
        setErrorMessage(data.message || (language === "vi" ? "Mã Access Key Web3Forms không hợp lệ hoặc đã hết hạn." : "Invalid or expired Web3Forms Access Key."));
      }
    } catch (err: unknown) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMessage(
        language === "vi"
          ? "Lỗi kết nối mạng đến máy chủ Web3Forms. Bạn có thể bấm gửi qua Email trực tiếp ở bên dưới."
          : "Network connection error to Web3Forms server. Please use direct email below."
      );
    }
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#20251D] dark:bg-[#121510] text-[#F2EADF] text-left border-t border-[#25231D]/20 dark:border-[#F2EADF]/15 select-none scroll-mt-0 transition-colors duration-300"
    >
      {/* Corner drafting crosshairs */}
      <div className="absolute top-4 left-6 sm:left-12 font-mono text-xs text-[#DECFC0]/50 select-none pointer-events-none">+</div>
      <div className="absolute top-4 right-6 sm:right-12 font-mono text-xs text-[#DECFC0]/50 select-none pointer-events-none">+</div>
      <div className="absolute bottom-4 left-6 sm:left-12 font-mono text-xs text-[#DECFC0]/50 select-none pointer-events-none">+</div>
      <div className="absolute bottom-4 right-6 sm:right-12 font-mono text-xs text-[#DECFC0]/50 select-none pointer-events-none">+</div>

      {/* Terminal Status Ribbon (Dòng trạng thái terminal chạy ngầm) */}
      <div className="w-full border-b border-[#F2EADF]/10 bg-[#161A14]/80 px-6 sm:px-12 py-2.5">
        <div className="max-w-[1520px] mx-auto flex items-center justify-between text-[10px] font-mono tracking-wider text-[#C8B69E]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B96F4F] inline-block animate-pulse" />
            <span className="text-[#F2EADF] font-bold">PING: 24MS</span>
            <span className="opacity-40">//</span>
            <span className="text-[#DECFC0]">STATUS: READY_TO_COLLAB</span>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-[#C8B69E]/70 text-[9px]">
            <span>NODE: SGN-01</span>
            <span className="opacity-40">•</span>
            <span>PORT: 443_SSL</span>
            <span className="opacity-40">•</span>
            <span className="text-[#B96F4F]">PROTOCOL: ACTIVE</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTACT CONTAINER (MẶT PHẲNG MỞ THOÁNG, HOÀN TOÀN KHÔNG DÙNG CARD HỘP BỌC) */}
      <div className="w-full max-w-[1520px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 py-20 sm:py-24 lg:py-28">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* =========================================================================
              CỘT TRÁI: EDITORIAL STATEMENT & THÔNG TIN KẾN NỐI MỞ (5 COLS)
             ========================================================================= */}
          <ScrollReveal className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-[#C8B69E]">
                <span className="w-6 h-[1px] bg-[#C8B69E]" />
                <span className="font-mono text-xs uppercase tracking-widest">
                  {t.contact.tag}
                </span>
              </div>

              {/* Monumental Serif Heading */}
              <h2 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-serif font-bold text-[#F2EADF] leading-[1.05] tracking-tight">
                {t.contact.heading} <br />
                <span className="italic font-normal text-[#DECFC0] dark:text-[#C87D5D]">
                  {t.contact.headingHighlight}
                </span>
              </h2>

              <p className="font-sans text-xs sm:text-sm text-[#F2EADF]/80 max-w-md leading-relaxed pt-1">
                {t.contact.subtitle}
              </p>
            </div>

            {/* Direct Contact sitting openly on the canvas with hairline dividers (NO CARDS) */}
            <div className="space-y-4 pt-2">
              
              {/* Email hiển thị dạng tiêu đề tương tác lớn — Touch Target >= 44px */}
              <div className="space-y-1.5 pb-4 border-b border-[#F2EADF]/15">
                <span className="font-mono text-[10px] text-[#C8B69E] uppercase tracking-wider block">
                  {t.contact.directEmail}
                </span>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="min-h-[44px] inline-flex items-center font-serif text-lg sm:text-xl font-bold text-[#F2EADF] hover:text-[#B96F4F] transition-colors break-all py-1.5"
                  >
                    {PERSONAL_INFO.email}
                  </a>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#F2EADF]/20 hover:border-[#B96F4F] text-[#C8B69E] hover:text-[#F2EADF] text-xs font-mono transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check size={13} className="text-[#F2EADF]" />
                        <span>{language === "vi" ? "Đã chép" : "Copied"}</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>{language === "vi" ? "Sao chép" : "Copy"}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone & Location dưới dạng bảng chỉ mục thanh mảnh — Touch Target >= 44px */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-[#F2EADF]/15 font-sans">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-[#C8B69E] uppercase tracking-wider block">
                    {t.contact.phoneLabel}
                  </span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, "")}`}
                    className="min-h-[44px] font-mono text-sm text-[#F2EADF] hover:text-[#B96F4F] transition-colors flex items-center gap-2 py-1"
                  >
                    <PhoneCall size={14} className="text-[#B96F4F] shrink-0" />
                    <span>{PERSONAL_INFO.phone}</span>
                  </a>
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-[#C8B69E] uppercase tracking-wider block">
                    {t.contact.locationLabel}
                  </span>
                  <div className="min-h-[44px] font-mono text-sm text-[#F2EADF] flex items-center gap-2 py-1">
                    <MapPin size={14} className="text-[#85866A] shrink-0" />
                    <span>Ho Chi Minh City, VN</span>
                  </div>
                </div>
              </div>

              {/* Editorial Social Links dạng Pill thoáng đãng — Touch Target >= 44px */}
              <div className="space-y-2 pt-1">
                <span className="font-mono text-[10px] text-[#C8B69E] uppercase tracking-widest block">
                  {t.contact.connectVerify}
                </span>
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#F2EADF]/20 hover:border-[#B96F4F] text-[#F2EADF] text-xs font-mono hover:text-[#B96F4F] transition-all"
                  >
                    <Github size={14} />
                    <span>GitHub</span>
                    <ArrowUpRight size={12} />
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#F2EADF]/20 hover:border-[#B96F4F] text-[#F2EADF] text-xs font-mono hover:text-[#B96F4F] transition-all"
                  >
                    <Linkedin size={14} />
                    <span>LinkedIn</span>
                    <ArrowUpRight size={12} />
                  </a>

                  <a
                    href="/Phan-Thi-Ngoc-Mai-CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#B96F4F]/50 text-[#DECFC0] text-xs font-mono hover:bg-[#B96F4F] hover:text-[#F2EADF] transition-all"
                  >
                    <span>{language === "vi" ? "Hồ sơ CV [PDF]" : "Resume [PDF]"}</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>

            </div>
          </ScrollReveal>

          {/* =========================================================================
              CỘT PHẢI: KHUNG ĐIỀN THÔNG ĐIỆP MỞ TRÊN CANVAS (KHÔNG HỘP BỌC DÀY CỘP)
             ========================================================================= */}
          <ScrollReveal delay={0.15} className="lg:col-span-7 lg:pl-10 xl:pl-14 lg:border-l border-[#F2EADF]/15 space-y-6">
            
            {/* Form Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#F2EADF]/15">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B96F4F] animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#E6D8C5] font-semibold">
                  {t.contact.formTag}
                </span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#C8B69E]">
                <Sparkles size={12} className="text-[#B96F4F]" />
                <span>{t.contact.formSubtitle}</span>
              </div>
            </div>

            {/* Form Body - Tối giản, thanh thoát */}
            <form onSubmit={handleSubmit} className="space-y-5 font-sans">
              
              {/* Tên & Email song song */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-mono text-[#C8B69E] uppercase tracking-wider">
                    {t.contact.nameLabel} <span className="text-[#B96F4F]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-[#181D15]/80 border border-[#F2EADF]/20 text-[#F2EADF] placeholder-[#F2EADF]/35 focus:outline-none focus:border-[#B96F4F] focus:ring-1 focus:ring-[#B96F4F] text-sm transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] font-mono text-[#C8B69E] uppercase tracking-wider">
                    {t.contact.emailLabel} <span className="text-[#B96F4F]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-[#181D15]/80 border border-[#F2EADF]/20 text-[#F2EADF] placeholder-[#F2EADF]/35 focus:outline-none focus:border-[#B96F4F] focus:ring-1 focus:ring-[#B96F4F] text-sm transition-all"
                  />
                </div>
              </div>

              {/* Nội dung Message */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-mono text-[#C8B69E] uppercase tracking-wider">
                  {t.contact.messageLabel} <span className="text-[#B96F4F]">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-[#181D15]/80 border border-[#F2EADF]/20 text-[#F2EADF] placeholder-[#F2EADF]/35 focus:outline-none focus:border-[#B96F4F] focus:ring-1 focus:ring-[#B96F4F] text-sm transition-all resize-none leading-relaxed"
                />
              </div>

              {/* Thông báo gửi thành công */}
              {status === "success" && (
                <div className="p-3.5 rounded-xl bg-[#B96F4F]/25 border border-[#B96F4F]/60 text-[#F2EADF] font-sans text-xs flex items-center justify-center gap-2 animate-fadeIn">
                  <Check size={16} className="text-[#DECFC0]" />
                  <span>{t.contact.successMessage}</span>
                </div>
              )}

              {/* Thông báo lỗi rõ ràng nếu chưa có Access Key hoặc gặp lỗi mạng */}
              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/50 text-[#F2EADF] font-sans text-xs space-y-2 animate-fadeIn">
                  <div className="flex items-center gap-2 font-bold text-red-300">
                    <span className="text-base">⚠</span>
                    <span>{language === "vi" ? "Chưa thể gửi tin nhắn qua Web3Forms" : "Web3Forms Dispatch Failed"}</span>
                  </div>
                  <p className="text-[#F2EADF]/85 leading-relaxed">
                    {errorMessage}
                  </p>
                  <div className="pt-1">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry from Portfolio - ${encodeURIComponent(
                        formData.name || "Visitor"
                      )}&body=${encodeURIComponent(formData.message || "")}`}
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-[#DECFC0] hover:text-white underline underline-offset-4 transition-colors"
                    >
                      <span>{language === "vi" ? "→ Bấm vào đây để mở Email gửi trực tiếp" : "→ Click here to send via direct mailto"}</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Nút gửi tin nhắn dạng Pill */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-[11px] font-mono text-[#F2EADF]/60">
                  {t.contact.securityNote}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#B96F4F] hover:bg-[#A35D3F] text-[#F2EADF] font-sans text-xs font-medium tracking-wide transition-all duration-300 group cursor-pointer shadow-md hover:shadow-lg disabled:opacity-50"
                >
                  <span>{status === "sending" ? t.contact.sending : t.contact.sendButton}</span>
                  <Send
                    size={13}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </button>
              </div>
            </form>

          </ScrollReveal>

        </div>

      </div>

      {/* BOTTOM COPYRIGHT & TECHNICAL DRAWING FRAME CLOSURE */}
      <div className="border-t border-[#F2EADF]/10 py-6 px-6 sm:px-12 font-sans text-xs text-[#F2EADF]/50 max-w-[1520px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] text-[#B96F4F] font-bold">└</span>
          <p>{t.contact.copyright}</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-[10px] text-[#C8B69E]">
          <span className="hidden md:inline text-[#DECFC0]/60">[SYS_TERMINATE // 10.82°N 106.63°E // REV: 2025.11]</span>
          <span className="opacity-30 hidden md:inline">•</span>
          <span>OFF-GRID Editorial Art Direction × HCMUTE</span>
          <span className="font-mono text-[10px] text-[#B96F4F] font-bold">┘</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
