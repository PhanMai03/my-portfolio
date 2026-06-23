import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Clothing E-commerce",
    description: "An online store with product search, cart, and checkout.",
    image: "/projects/Clothing.png",
    url: "https://github.com/PhanMai1603/Ecommerce_Project_Nhom07_02CLC",
    tags: ["Html", "Css", "Javascript"],
  },
  {
    id: 2,
    title: "Clothing Ecommerce Management System",
    description: "Admin system for managing products, orders, and users.",
    image: "/projects/Management.png",
    url: "https://github.com/PhanMai1603/E-commerce-Management-System",
    tags: ["TypeScript", "NextJs"],
  },
  {
    id: 3,
    title: "My Portfolio",
    description: "Personal portfolio website to showcase my projects.",
    image: "/projects/portifolio.png",
    url: "https://github.com/PhanMai1603/my-portfolio",
    tags: ["ReactJs", "TailwindCSS"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-transparent">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
          Featured <span className="text-primary text-glow">Projects</span>
        </h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto font-medium">
          Here are some of my recent works. Each project was built with a focus
          on clean code, performance, and modern UI design.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card/45 dark:bg-white/5 border border-border/80 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 text-left">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 text-sm mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Link */}
                <div className="mt-auto pt-2">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.url}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-xs font-bold shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/25 hover:bg-primary/95 transition-all duration-300 hover:scale-102"
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
