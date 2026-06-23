import { Linkedin, Mail, PhoneCall, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-transparent">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
          Get In <span className="text-primary text-glow">Touch</span>
        </h2>
        <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto font-medium">
          Have a project or want to collaborate? I’m always open to discussing
          new opportunities.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-left">
          {/* LEFT - Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground">Contact Info</h3>

            {/* Email */}
            <div className="flex items-center gap-4 group p-4 rounded-2xl bg-card/45 dark:bg-white/5 border border-border/80 dark:border-white/10 hover:border-primary/30 transition-all duration-300">
              <div className="p-3.5 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">Email</p>
                <a
                  href="mailto:inet.ngocmai.v6@gmail.com"
                  className="font-bold text-foreground hover:text-primary transition-colors"
                >
                  inet.ngocmai.v6@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 group p-4 rounded-2xl bg-card/45 dark:bg-white/5 border border-border/80 dark:border-white/10 hover:border-primary/30 transition-all duration-300">
              <div className="p-3.5 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                <PhoneCall className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">Phone</p>
                <a
                  href="tel:+84337273891"
                  className="font-bold text-foreground hover:text-primary transition-colors"
                >
                  +84 337 273 891
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="pt-2">
              <p className="text-xs font-bold text-foreground/60 uppercase tracking-wider mb-4">
                Connect with me
              </p>
              <a
                href="https://www.linkedin.com/in/phanmai03/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full 
                border border-primary text-primary font-semibold hover:bg-primary hover:text-white 
                transition-all duration-300 shadow-sm hover:shadow-primary/20 hover:scale-105"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT - Form */}
          <div
            className="rounded-2xl p-8 
            bg-card/45 dark:bg-white/5 backdrop-blur-xs 
            border border-border/80 dark:border-white/10 
            shadow-sm hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-foreground/80 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl 
                  bg-background text-foreground border border-border/80 
                  focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-foreground/80 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl 
                  bg-background text-foreground border border-border/80 
                  focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-foreground/80 mb-2">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-xl 
                  bg-background text-foreground border border-border/80 
                  focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none"
                  required
                />
              </div>

              {/* Button */}
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-8 py-3.5 rounded-full 
                  bg-primary text-white font-bold tracking-wide
                  shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/25
                  hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  <Send size={15} /> Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
