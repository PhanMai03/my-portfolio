import { Bug, Code, Palette } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-transparent">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          About <span className="text-primary">Me</span>
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Biography */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-2xl font-bold text-foreground">
              Web Developer & Problem Solver
            </h3>
            <p className="text-foreground/75 leading-relaxed">
              I am a Software Engineering graduate eager to start my career in a
              professional environment where I can apply my knowledge, write
              efficient code, and grow through real-world experience.
            </p>
            <p className="text-foreground/75 leading-relaxed">
              With a strong willingness to learn and adapt to new technologies,
              I strive to build highly interactive, responsive, and
              user-friendly web applications that deliver real value to clients
              and teams.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-primary text-white font-semibold shadow-md shadow-primary/10 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105 active:scale-95"
              >
                Get in Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1kKV7_--CHH3ZadyKf9jTQjv7NfPr1LeK/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-border/80 bg-card/20 backdrop-blur-xs text-foreground font-semibold hover:bg-card/60 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column - Service Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {/* Card 1: Web Development */}
            <div className="group relative bg-card/45 dark:bg-white/5 border border-border/70 dark:border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">
                    Web Development
                  </h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Building robust, interactive, and responsive web applications using React, HTML5, CSS3, and JavaScript.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Solve Bug */}
            <div className="group relative bg-card/45 dark:bg-white/5 border border-border/70 dark:border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                  <Bug className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">
                    Solve Bugs
                  </h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Analyzing codebases, finding logic flaws, and debugging issues to ensure clean, error-free execution.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: UI Design */}
            <div className="group relative bg-card/45 dark:bg-white/5 border border-border/70 dark:border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40 sm:col-span-2 lg:col-span-1">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-1">
                    UI Design
                  </h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Crafting beautiful layouts, dynamic transitions, and polished interfaces with Tailwind CSS and Framer Motion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};