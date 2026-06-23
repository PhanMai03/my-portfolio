import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export const Skills = () => {
  const skills = [
    { name: "HTML", img: "/tech/html.png", color: "#E34F26" },
    { name: "CSS", img: "/tech/css.png", color: "#1572B6" },
    { name: "JavaScript", img: "/tech/javascript.png", color: "#F7DF1E" },
    { name: "ReactJS", img: "/tech/reactjs.png", color: "#61DAFB" },
    { name: "NextJS", img: "/tech/nextjs.png", color: "#FFFFFF" },
    { name: "Typescript", img: "/tech/typescript.png", color: "#3178C6" },
    { name: "Tailwind CSS", img: "/tech/tailwind.png", color: "#06B6D4" },
    { name: "Redux", img: "/tech/redux.png", color: "#764ABC" },
    { name: "Bootstrap", img: "/tech/bootstrap.png", color: "#7952B3" },
    { name: "Git/GitHub", img: "/tech/git.png", color: "#F05032" },
    { name: "Figma", img: "/tech/figma.png", color: "#F24E1E" },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 relative overflow-hidden bg-transparent"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground"
        >
          My <span className="text-primary text-glow">Skills</span>
        </motion.h2>

        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto text-sm sm:text-base font-medium">
          Technical proficiencies and tools I use to build modern web applications.
        </p>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            gap-6
            sm:gap-8
            md:gap-10
            place-items-center
          "
        >
          {skills.map((skill, key) => {
            // NextJS uses a dark logo, so we want it to stand out on dark vs light backgrounds
            const isNextJS = skill.name.toLowerCase() === "nextjs";
            const brandColor = isNextJS ? "#a78bfa" : skill.color;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, delay: key * 0.03 }}
                viewport={{ once: true }}
                className="group relative flex flex-col items-center justify-center cursor-pointer"
              >
                {/* Glow */}
                <div
                  className="
                    absolute inset-0
                    w-20 h-20
                    sm:w-24 sm:h-24
                    blur-[24px]
                    rounded-full
                    opacity-5
                    group-hover:opacity-40
                    transition-all
                    duration-500
                    scale-75
                    group-hover:scale-130
                  "
                  style={{ backgroundColor: brandColor }}
                />

                {/* Card */}
                <div
                  className="
                    relative z-10
                    w-24 h-24
                    sm:w-28 sm:h-28
                    flex items-center justify-center
                    rounded-2xl
                    bg-card/40 dark:bg-white/5
                    border border-border/80 dark:border-white/10
                    backdrop-blur-xs
                    group-hover:border-primary/50 dark:group-hover:border-white/30
                    transition-all duration-300
                    shadow-sm group-hover:shadow-md
                  "
                >
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className={cn(
                      "w-12 h-12 sm:w-14 sm:h-14 object-contain group-hover:scale-110 transition-transform duration-500",
                      isNextJS ? "dark:invert-0 invert" : ""
                    )}
                  />
                </div>

                {/* Name */}
                <div
                  className="
                    mt-4
                    text-[10px]
                    sm:text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    text-foreground/70 dark:text-white/60
                    group-hover:text-primary dark:group-hover:text-white
                    transition-colors
                    duration-300
                  "
                >
                  {skill.name}
                </div>

                {/* Dot */}
                <div
                  className="
                    mt-2
                    w-1.5 h-1.5
                    rounded-full
                    opacity-0
                    group-hover:opacity-100
                    transition-all duration-300
                  "
                  style={{
                    backgroundColor: brandColor,
                    boxShadow: `0 0 10px 2px ${brandColor}`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
