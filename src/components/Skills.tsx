import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
      icon: "🎨"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express","MongoDB"],
      icon: "⚙️"
    },
    {
      title: "Tools & Cloud",
      skills: [+"Github", "AWS", "Git", "Figma","Mongoose", "Vercel"],
      icon: "☁️"
    },
    {
      title: "Others",
      skills: ["REST APIs", "WebRTC", "Socket.io"],
      icon: "📱"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className="p-6 bg-card/50 backdrop-blur-sm border-white/10 hover:shadow-card hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-primary/20 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
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