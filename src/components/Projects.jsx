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
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-secondary">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent works. Each project was built with a focus
          on clean code, performance, and modern UI design.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 text-secondary group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Link */}
                <div className="mt-auto">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.url}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
                  >
                    View Project <ExternalLink size={16} />
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
