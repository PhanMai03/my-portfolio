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
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Have a project or want to collaborate? I’m always open to discussing
          new opportunities.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT - Contact Info */}
          <div className="space-y-10">
            <h3 className="text-2xl font-semibold">Contact Info</h3>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/20">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a
                  href="mailto:inet.ngocmai.v6@gmail.com"
                  className="font-medium hover:text-primary transition"
                >
                  inet.ngocmai.v6@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/20">
                <PhoneCall className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <a
                  href="tel:+84337273891"
                  className="font-medium hover:text-primary transition"
                >
                  +84 337 273 891
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">
                Connect with me
              </p>
              <a
                href="https://www.linkedin.com/in/phanmai03/"
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full 
                border border-primary/30 hover:bg-primary hover:text-primary-foreground 
                transition-all duration-300"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT - Form */}
          <div
            className="rounded-2xl p-8 
            bg-white/5 backdrop-blur-md 
            border border-white/10 
            shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg 
                  bg-background border border-input 
                  focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg 
                  bg-background border border-input 
                  focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg 
                  bg-background border border-input 
                  focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  required
                />
              </div>

              {/* Button */}
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-8 py-3 rounded-full 
                  bg-primary text-primary-foreground font-medium
                  hover:shadow-[0_0_20px_rgba(139,93,246,0.6)]
                  hover:scale-105 active:scale-95 transition-all"
                >
                  <Send size={16} /> Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
