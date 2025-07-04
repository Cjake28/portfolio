import { ArrowRight, ExternalLink, Github } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AuthJWT API",
    description: "A robust JWT‑based auth API with email verification, built on Express, TypeScript & Prisma (MySQL).",
    image: "/projects/AuthJWT.png",
    tags: ["Express.js", "TypeScript", "Prisma", "MySQL", "JWT", "Nodemailer"],
    demoUrl: "#",
    githubUrl: "https://github.com/Cjake28/AuthJWT"
  },
  {
    id: 2,
    title: "AttendEasyAI WebSite",
    description: "A beautiful landing page app using React and Material UI.",
    image: "/projects/AttendEasyAI.png",
    tags: ["React", "Material UI", "Express.js", "Mysql"],
    demoUrl: "https://attendeasyai.up.railway.app",
    githubUrl: "https://github.com/Cjake28/attendance_system",
  },
  {
    id: 3,
    title: "Cemetery Mapping Page",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/Himlayan.png",
    tags: ["React", "Express.js", "Mysql"],
    demoUrl: "https://himlayan.up.railway.app",
    githubUrl: "https://github.com/Cjake28/Cemetery-Mapping-System",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover z-0 relative"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground z-1000">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
               
              </div>
               <div className="absolute bottom-4 left-5">
                  <div className="flex space-x-3">
                  {project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Cjake28"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};