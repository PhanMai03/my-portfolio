import { motion } from "framer-motion";

export const Skills = () => {
  const skills = [
    { name: "HTML", img: "/public/tech/html.png" },
    { name: "CSS", img: "/public/tech/css.png" },
    { name: "JavaScript", img: "/public/tech/javascript.png" },
    { name: "ReactJS", img: "/public/tech/reactjs.png" },
    { name: "Typescript", img: "/public/tech/typescript.png" },
    { name: "Tailwind CSS", img: "/public/tech/tailwind.png" },
    { name: "Redux", img: "/public/tech/redux.png" },
    { name: "Bootstrap", img: "/public/tech/bootstrap.png" },
    { name: "Git/GitHub", img: "/public/tech/git.png" },
    { name: "Figma", img: "/public/tech/figma.png" },
  ];

  const neonColor = ["#ff00cc", "#9966ff", "#ffffff"];

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-secondary">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
          {skills.map((skill, key) => {
            const neon = neonColor[key % neonColor.length];

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: key * 0.08 }}
                viewport={{ once: true }}
                className="relative w-32 h-32 border-2 flex flex-col items-center justify-center rounded-xl"
                style={{
                  borderColor: neon,
                  boxShadow: `0 0 10px 6px ${neon}`,
                  background: "transparent",
                }}
              >
                {skill.img && (
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-12 h-12 object-contain mb-2"
                  />
                )}

                <div className="text-sm text-secondary uppercase tracking-wide text-center">
                  {skill.name}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
