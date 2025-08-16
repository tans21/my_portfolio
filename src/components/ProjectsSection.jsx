import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Online Learning System",
    description:
      "An Online Learning Platform that provides users with the ability to enroll in courses, upload courses and navigate to materials uploaded. This project is built using Spring Boot for the backend and React.js for the frontend, with MySQL as the database.",
    image: "/project1.png",
    tags: ["React", "TailwindCSS", "Springboot", "Java", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/tans21/Online-Learning-Platform",
  },
  {
    id: 2,
    title: "Heart Disease Prediction Model",
    description:
      "IA machine learning model performing prediction on whether or not someone has heart disease based on their medical attributes.",
    image: "/project2.png",
    tags: ["Python", "Numpy", "Pandas", "Scikit-learn", "Google Colab"],
    demoUrl: "#",
    githubUrl: "https://github.com/tans21/Heart-Disease-Prediction-Model",
  },
  {
    id: 3,
    title: "Task Manager Application",
    description:
      "This is a simple Task Manager application built using Spring Boot. The application allows users to manage their tasks effectively, including creating, updating, deleting, and viewing tasks.",
    image: "/project4.png",
    tags: ["Java", "Springboot", "JPA", "MySql", "Postman", "Maven"],
    demoUrl: "#",
    githubUrl: "https://github.com/tans21/Task-Manager-Application",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>

                {/* Description with flex-grow */}
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* GitHub + External Links aligned to bottom */}
                <div className="mt-auto flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
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
            </div>
          ))}
        </div>

        {/* Github CTA */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/tans21"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
