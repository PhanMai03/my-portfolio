import { ArrowDown } from "lucide-react";
export const MainSection = () => {
  return (
    <section
      id="main"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold">
          <span className="opacity-0 animate-fade-in">Hi, I'm</span>
          <span className="text-primary opacity-0 animate-fade-in-delay-1">
            {" "}
            Phan Mai
          </span>
          <span className="text-gradient opacity-0 animate-fade-in-delay-2">
            {" "}
            Frontend Developer
          </span>
        </h1>

        <p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          I am an Information Technology graduate eager to start my career in a
          professional environment where I can apply my knowledge and grow
          through real-world experience.
        </p>

        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
          <a
            href="#projects"
            className="px-6 py-2 rounded-full bg-primary text-primary-foreground
        font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,93,246,0.5)]
        hover:scale-105 active:scale-95"
          >
            View My Projects
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <a
          href="#skills"
          className="flex flex-col items-center group cursor-pointer"
        >
          <span className="text-xs md:text-sm font-semibold bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent tracking-[0.3em] uppercase">
            Scroll
          </span>
          <ArrowDown className="h-6 w-6 text-primary mt-2 group-hover:scale-125 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
};
