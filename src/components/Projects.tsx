import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Monitor, Database, Zap } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import CircuitPattern from "./CircuitPattern";

const Projects = () => {
  const projects = [
    {
      title: "E-COMMERCE_MATRIX_V2.0",
      description: "// Full-stack quantum commerce protocol with React neural networks, Node.js backbone, and Stripe payment integration. Features real-time user authentication and dynamic product optimization algorithms.",
      image: project1,
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe.AI", "TailwindCSS"],
      github: "https://github.com",
      demo: "https://example.com",
      icon: <Monitor className="w-6 h-6 text-cyber-green" />,
      status: "PRODUCTION_READY"
    },
    {
      title: "SOCIAL_ANALYTICS_CORE",
      description: "// Advanced neural dashboard for multi-platform social media management with real-time data visualization, automated post scheduling, and AI-powered performance tracking across quantum networks.",
      image: project2,
      technologies: ["Next.js", "TypeScript", "Chart.js", "Firebase", "AI/ML"],
      github: "https://github.com",
      demo: "https://example.com",
      icon: <Database className="w-6 h-6 text-cyber-blue" />,
      status: "NEURAL_ACTIVE"
    },
    {
      title: "TASK_ORCHESTRATOR_AI",
      description: "// Collaborative project management protocol with quantum drag-and-drop functionality, real-time holographic updates, and team synchronization across multiple dimensions.",
      image: project3,
      technologies: ["React.js", "Express", "Socket.io", "PostgreSQL", "Docker"],
      github: "https://github.com",
      demo: "https://example.com",
      icon: <Zap className="w-6 h-6 text-cyber-orange" />,
      status: "BETA_VERSION"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-matrix relative overflow-hidden">
      <CircuitPattern />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/50 rounded-full text-sm font-mono text-primary mb-4 animate-pulse-neon">
              &gt; LOADING_PORTFOLIO.EXE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-mono bg-gradient-cyber bg-clip-text text-transparent">
              PROJECT_ARCHIVE()
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="group overflow-hidden bg-card/30 backdrop-blur-sm border border-primary/30 hover:border-primary hover:shadow-cyber hover:scale-105 transition-all duration-500 animate-slide-up relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Status indicator */}
                <div className={`absolute top-4 right-4 z-20 px-2 py-1 bg-cyber-green/20 border border-cyber-green/50 rounded text-xs font-mono text-cyber-green`}>
                  {project.status}
                </div>
                <div className="relative group/image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating project icon */}
                  <div className="absolute top-4 left-4 p-2 bg-card/80 backdrop-blur-sm border border-primary/30 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {project.icon}
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold font-mono text-primary">&gt; {project.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed font-mono">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-secondary/30 border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 font-mono"
                        style={{ animationDelay: `${(index * 0.2) + (techIndex * 0.1)}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="cyber" 
                      size="sm"
                      asChild
                      className="flex-1 font-mono"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        LAUNCH
                      </a>
                    </Button>
                    <Button 
                      variant="matrix" 
                      size="sm"
                      asChild
                      className="flex-1 font-mono"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        SOURCE
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" className="font-mono">
              &gt; EXPLORE_FULL_ARCHIVE.EXE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;