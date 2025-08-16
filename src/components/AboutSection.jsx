import { Bot, Cloud, Monitor, Server } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-10">
            <h3 className="text-2xl font-semibold">
              Curious Software Engineer & Creative Problem Solver
            </h3>

            <p className="text-muted-foreground">
              As a passionate software engineer, I thrive on turning ideas into
              seamless, user-friendly applications. From solving complex bugs to
              crafting intuitive interfaces, I’m driven by curiosity,
              creativity, and the joy of building things that make an impact.
            </p>

            <p className="text-muted-foreground">
              I thrive on solving challenges with simple yet powerful solutions,
              and I’m always exploring new tools and ideas to grow as a
              developer in this fast-changing digital world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Backend Engineering (Java & Spring Boot)
                  </h4>
                  <p className="text-muted-foreground">
                    Building scalable server-side systems with clean
                    architecture and optimized performance using Java and Spring
                    Boot.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full-Stack Development (React.js)
                  </h4>
                  <p className="text-muted-foreground">
                    Crafting dynamic, responsive interfaces with React.js,
                    delivering user-centric and maintainable front-end
                    solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Generative AI & Intelligent Systems
                  </h4>
                  <p className="text-muted-foreground">
                    Designing context-aware applications using LLMs and RAG
                    pipelines to enhance user experiences with intelligent
                    functionality.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Cloud & Data Infrastructure (AWS & PostgreSQL)
                  </h4>
                  <p className="text-muted-foreground">
                    Deploying and managing resilient, cost-efficient systems on AWS, 
                    with a focus on automation and robust PostgreSQL data management.
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