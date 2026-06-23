import { ArrowDown } from "lucide-react";

export const MainSection = () => {
  return (
    <section
      id="main"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          <span className="block text-foreground/80 text-2xl md:text-3xl font-medium mb-3 opacity-0 animate-fade-in">
            Hi, I'm
          </span>
          <span className="bg-gradient-to-r from-primary via-indigo-500 to-violet-600 bg-clip-text text-transparent opacity-0 animate-fade-in-delay-1 inline-block">
            Phan Mai
          </span>
          <span className="block text-2xl md:text-4xl font-bold text-foreground/90 mt-3 opacity-0 animate-fade-in-delay-2">
            Frontend Developer
          </span>
        </h1>

        <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-8 opacity-0 animate-fade-in-delay-3 font-medium">
          I am an Information Technology graduate eager to start my career in a
          professional environment where I can apply my knowledge and grow
          through real-world experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-delay-4">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full bg-primary text-white font-semibold tracking-wide shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full border border-border/80 bg-card/40 hover:bg-card/85 backdrop-blur-xs text-foreground font-semibold tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <a
          href="#about"
          className="flex flex-col items-center group cursor-pointer"
        >
          <span className="text-xs font-bold tracking-[0.3em] bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent uppercase">
            Scroll
          </span>
          <ArrowDown className="h-5 w-5 text-primary mt-2 group-hover:scale-125 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
};
