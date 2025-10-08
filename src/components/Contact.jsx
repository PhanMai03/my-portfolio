import {
  Instagram,
  Linkedin,
  Mail,
  PhoneCall,
  Send,
  Twitter,
} from "lucide-react";
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
        import.meta.env.VITE_SERVICE_ID, // ID Service trong EmailJS
        import.meta.env.VITE_TEMPLATE_ID, // ID Template trong EmailJS
        formData, // dữ liệu form
        import.meta.env.VITE_PUBLIC_KEY // Public Key EmailJS
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
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-secondary">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
          Have a project or want to collaborate ? I'm always open to discussing
          new opportunities
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact</h3>
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/20">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:inet.ngocmai.v6@gmail.com"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  inet.ngocmai.v6@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/20">
                <PhoneCall className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Phone Number</h4>
                <a
                  href="tel:+1234567890"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  +(84) 337.273.891
                </a>
              </div>
            </div>

            <div className="pt-8 text-white">
              <h4 className="font-semibold mb-4">Contact with Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/phanmai03/" target="_blank">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-m font-medium mb-2 text-foreground"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground 
                           focus:outline-hidden focus:ring-2 focus:ring-primary"
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-m font-medium mb-2 text-foreground"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground 
                           focus:outline-hidden focus:ring-2 focus:ring-primary"
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-m font-medium mb-2 text-foreground"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground 
                           focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  required
                  placeholder="Enter your message"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2 rounded-full bg-primary text-primary-foreground 
               font-medium transition-all duration-300 
               hover:shadow-[0_0_10px_rgba(139,93,246,0.5)] hover:scale-105 active:scale-95"
                >
                  <Send size={16} /> Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
