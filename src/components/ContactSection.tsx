import React, { useState } from "react";
import {
  Mail,
  PhoneCall,
  Linkedin,
  Github,
  Download,
  Send,
  Check,
  Copy,
  ArrowUpRight,
  ArrowUp,
  MapPin,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.send(serviceId, templateId, formData, publicKey);
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } catch {
        // Fallback to mailto
        window.open(
          `mailto:${PERSONAL_INFO.email}?subject=Portfolio Message from ${encodeURIComponent(
            formData.name
          )}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
          )}`
        );
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      }
    } else {
      window.open(
        `mailto:${PERSONAL_INFO.email}?subject=Portfolio Message from ${encodeURIComponent(
          formData.name
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <footer id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-left border-t border-slate-200 dark:border-white/[0.08]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 dark:text-white tracking-wider uppercase">
              GET IN TOUCH
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl font-mono">
            Have a project, engineering inquiry, or full-time opportunity? Direct transmission channels and message dispatch below.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20 w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for Full-time Roles &bull; HCM City</span>
        </div>
      </div>

      {/* Main Grid: Left Contact Info (5 cols) + Right Send a Message Card (7 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
        {/* Left Column: Direct Contact Info (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2">
            Contact Channels
          </h3>

          {/* Email Card */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#0E1017] border border-slate-200 dark:border-white/[0.08] hover:border-emerald-500/40 transition-all flex items-center justify-between group shadow-sm dark:shadow-md">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                <Mail size={18} />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                  Email
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-mono text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors truncate block"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={copyEmail}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.03] dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.06] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer shrink-0 ml-2"
              title="Copy email to clipboard"
            >
              {copied ? <Check size={14} className="text-emerald-500 dark:text-emerald-400" /> : <Copy size={14} />}
            </button>
          </div>

          {/* Phone Card */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#0E1017] border border-slate-200 dark:border-white/[0.08] hover:border-emerald-500/40 transition-all flex items-center justify-between group shadow-sm dark:shadow-md">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                <PhoneCall size={18} />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                  Phone
                </div>
                <a
                  href="tel:+84337273891"
                  className="font-mono text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
                >
                  +84 337 273 891
                </a>
              </div>
            </div>

            <a
              href="tel:+84337273891"
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.03] dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/[0.06] text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Location & Timezone Card */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#0E1017] border border-slate-200 dark:border-white/[0.08] flex items-center justify-between shadow-sm dark:shadow-md">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                  Location
                </div>
                <div className="font-mono text-xs font-semibold text-slate-900 dark:text-white">
                  Ho Chi Minh City
                </div>
              </div>
            </div>
          </div>

          {/* Social Links Row - Upgraded Branded Cards Synchronized with Upper Channels */}
          <div className="grid grid-cols-2 gap-3.5 pt-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-2xl bg-white dark:bg-[#0E1017] border border-slate-200 dark:border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 flex items-center justify-between font-mono text-xs shadow-sm dark:shadow-md group hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Github size={18} />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors text-xs">GitHub</div>
                </div>
              </div>
              <ArrowUpRight size={14} className="text-slate-400 dark:text-slate-500 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-2xl bg-white dark:bg-[#0E1017] border border-slate-200 dark:border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 flex items-center justify-between font-mono text-xs shadow-sm dark:shadow-md group hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Linkedin size={18} />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors text-xs">LinkedIn</div>
                </div>
              </div>
              <ArrowUpRight size={14} className="text-slate-400 dark:text-slate-500 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>

        </div>

        {/* Right Column: Send a Message Card (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl p-6 sm:p-8 bg-white dark:bg-[#0E1017] border border-slate-200 dark:border-white/[0.1] shadow-xl dark:shadow-2xl backdrop-blur-md relative overflow-hidden">
          {/* Subtle Ambient Glow inside card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white text-center mb-1">
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Your Name */}
            <div>
              <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#08090C] text-slate-900 dark:text-white border border-slate-200 dark:border-white/[0.08] focus:border-emerald-500 dark:focus:border-emerald-500/60 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 transition-all font-sans text-sm placeholder-slate-400 dark:placeholder-slate-600"
                required
              />
            </div>

            {/* Your Email */}
            <div>
              <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#08090C] text-slate-900 dark:text-white border border-slate-200 dark:border-white/[0.08] focus:border-emerald-500 dark:focus:border-emerald-500/60 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 transition-all font-sans text-sm placeholder-slate-400 dark:placeholder-slate-600"
                required
              />
            </div>

            {/* Your Message */}
            <div>
              <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-2">
                Your Message
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#08090C] text-slate-900 dark:text-white border border-slate-200 dark:border-white/[0.08] focus:border-emerald-500 dark:focus:border-emerald-500/60 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 transition-all font-sans text-sm placeholder-slate-400 dark:placeholder-slate-600 resize-none leading-relaxed"
                required
              />
            </div>

            {/* Success Feedback Alert */}
            {status === "success" && (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-mono text-xs flex items-center justify-center gap-2">
                <Check size={14} />
                <span>Message dispatched successfully!</span>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center pt-3">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 hover:from-emerald-500 hover:to-emerald-300 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer disabled:opacity-50"
              >
                <Send size={14} className={status === "sending" ? "animate-pulse" : ""} />
                <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Colophon */}
      <div className="pt-8 border-t border-slate-200 dark:border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-slate-500 dark:text-slate-400">
        <div>
          Designed &amp; Built by <span className="text-slate-800 dark:text-slate-200 font-semibold">Mai Phan</span>. &copy; {new Date().getFullYear()}. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
