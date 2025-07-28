import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Server, Cloud, Smartphone } from "lucide-react";
import CircuitPattern from "./CircuitPattern";

const Skills = () => {
  const skillCategories = [
    {
      title: "FRONTEND_CORE",
      skills: ["React.js", "TypeScript", "Next.js", "Tailwind", "Vue.js", "Angular"],
      icon: <Monitor className="w-8 h-8 text-primary animate-pulse-neon" />,
      color: "primary"
    },
    {
      title: "BACKEND_SYS", 
      skills: ["Node.js", "Python", "Express", "Django", "GraphQL", "REST"],
      icon: <Server className="w-8 h-8 text-cyber-orange animate-pulse-neon" />,
      color: "cyber-orange"
    },
    {
      title: "CLOUD_INFRA",
      skills: ["Docker", "AWS", "K8s", "Firebase", "PostgreSQL", "MongoDB"],
      icon: <Cloud className="w-8 h-8 text-cyber-blue animate-pulse-neon" />,
      color: "cyber-blue"
    },
    {
      title: "NEURAL_NET",
      skills: ["React Native", "Flutter", "ML/AI", "WebRTC", "Socket.io", "Blockchain"],
      icon: <Smartphone className="w-8 h-8 text-cyber-green animate-pulse-neon" />,
      color: "cyber-green"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <CircuitPattern />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/50 rounded-full text-sm font-mono text-primary mb-4 animate-pulse-neon">
              &gt; INITIALIZING_SKILLSET.DAT
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-mono bg-gradient-cyber bg-clip-text text-transparent">
              NEURAL_CAPABILITIES()
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className={`group p-6 bg-card/30 backdrop-blur-sm border border-${category.color}/30 hover:border-${category.color} hover:shadow-cyber hover:scale-105 transition-all duration-500 animate-slide-up relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Animated background effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${category.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="mb-4 flex justify-center">
                      {category.icon}
                    </div>
                    <h3 className={`text-lg font-bold font-mono text-${category.color}`}>
                      &gt; {category.title}
                    </h3>
                  </div>
                
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className={`bg-secondary/30 border border-${category.color}/30 hover:bg-${category.color}/20 hover:border-${category.color} transition-all duration-300 font-mono text-xs`}
                        style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;