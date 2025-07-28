// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { ExternalLink, Github } from "lucide-react";
// import project1 from "@/assets/project1.jpg";
// import project2 from "@/assets/project2.jpg";
// import project3 from "@/assets/project3.jpg";
// import project4 from "@/assets/project4.jpg";
// const Projects = () => {
//   const projects = [
//     {
//       title: "Moodify",
//       description: "Moodify is a MERN-based web app that detects facial expressions using face-api.js and recommends movies based on the user's mood. It offers a personalized entertainment experience by combining real-time emotion detection with curated content.",
//       image: project1,
//       technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "face-api.js"],
//       github: "https://github.com",
//       demo: "https://example.com"
//     },
//     {
//       title: "ChatRoom",
//       description: "ChatRoom is a real-time messenger app built with the MERN stack and Socket.io. It allows users to chat instantly in a responsive interface, with messages stored in MongoDB for persistence.",
//       image: project2,
//       technologies: ["Next.js", "TypeScript", "Socket.io", "Mongoose", "Tailwind CSS"],
//       github: "https://github.com",
//       demo: "https://example.com"
//     },
//     {
//       title: "ForcedCoding",
//       description: "forcedCoding is a MERN-based coding platform where students can solve coding problems, participate in contests, and get instant feedback on their code. It features a built-in code editor, problem display, and submission evaluation system designed for learning and practice.",
//       image: project4,
//       technologies: [
//   "MongoDB",
//   "Express.js",
//   "React.js",
//   "Node.js",
//   "CodeMirror (Code Editor)",
//   "Tailwind CSS",
//   "JWT (Authentication)",
//   "Axios",
//   "Mongoose",
//   "Vite"
// ],
//       github: "https://github.com",
//       demo: "https://example.com"
//     },
//     {
//   title: "Musify",
//   description: "Musify is a dynamic music streaming web app built with React. It lets users browse, play, and manage songs seamlessly, with responsive UI, local playback, and support for facial expression-based recommendations.",
//   image: project2,
//   technologies: ["React", "Vite", "Tailwind CSS", "face-api.js", "JavaScript"],
//   github: "https://github.com", // replace with actual GitHub link
//   demo: "https://example.com"   // replace with actual demo link
// }

//   ];

//   return (
//     <section id="projects" className="py-20 bg-gradient-secondary">
//       <div className="container mx-auto px-6">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
//             Featured Projects
//           </h2>
          
//           <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <Card 
//                 key={project.title}
//                 className="overflow-hidden bg-card/50 backdrop-blur-sm border-white/10 hover:shadow-card hover:scale-105 transition-all duration-300 animate-slide-up"
//                 style={{ animationDelay: `${index * 0.2}s` }}
//               >
//                 <div className="relative group">
//                   <img 
//                     src={project.image} 
//                     alt={project.title}
//                     className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </div>
                
//                 <div className="p-6 space-y-4">
//                   <h3 className="text-xl font-bold">{project.title}</h3>
//                   <p className="text-muted-foreground text-sm leading-relaxed">
//                     {project.description}
//                   </p>
                  
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech) => (
//                       <Badge 
//                         key={tech}
//                         variant="secondary"
//                         className="text-xs bg-secondary/50"
//                       >
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
                  
//                   <div className="flex gap-3 pt-4">
//                     <Button 
//                       variant="default" 
//                       size="sm"
//                       asChild
//                       className="flex-1"
//                     >
//                       <a href={project.demo} target="_blank" rel="noopener noreferrer">
//                         <ExternalLink className="w-4 h-4 mr-2" />
//                         Live Demo
//                       </a>
//                     </Button>
//                     <Button 
//                       variant="outline" 
//                       size="sm"
//                       asChild
//                       className="flex-1"
//                     >
//                       <a href={project.github} target="_blank" rel="noopener noreferrer">
//                         <Github className="w-4 h-4 mr-2" />
//                         Code
//                       </a>
//                     </Button>
//                   </div>
//                 </div>
//               </Card>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <Button variant="hero" size="lg">
//               View All Projects
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Moodify",
      description: "Moodify is a MERN-based web app that detects facial expressions using face-api.js and recommends movies based on the user's mood. It offers a personalized entertainment experience by combining real-time emotion detection with curated content.",
      image: project1,
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "face-api.js"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "ChatRoom",
      description: "ChatRoom is a real-time messenger app built with the MERN stack and Socket.io. It allows users to chat instantly in a responsive interface, with messages stored in MongoDB for persistence.",
      image: project2,
      technologies: ["Next.js", "TypeScript", "Socket.io", "Mongoose", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "ForcedCoding",
      description: "forcedCoding is a MERN-based coding platform where students can solve coding problems, participate in contests, and get instant feedback on their code. It features a built-in code editor, problem display, and submission evaluation system designed for learning and practice.",
      image: project4,
      technologies: [
        "MongoDB", "Express.js", "React.js", "Node.js", "CodeMirror (Code Editor)",
        "Tailwind CSS", "JWT (Authentication)", "Axios", "Mongoose", "Vite"
      ],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Musify",
      description: "Musify is a dynamic music streaming web app built with React. It lets users browse, play, and manage songs seamlessly, with responsive UI, local playback, and support for facial expression-based recommendations.",
      image: project2,
      technologies: ["React", "Vite", "Tailwind CSS", "face-api.js", "JavaScript"],
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="overflow-hidden bg-card/50 backdrop-blur-sm border-white/10 hover:shadow-card hover:scale-[1.02] transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-4 space-y-3">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-[10px] px-2 py-1 bg-secondary/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge className="text-[10px] px-2 py-1 bg-muted">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="default"
                      size="sm"
                      asChild
                      className="flex-1 text-xs px-2 py-1"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 text-xs px-2 py-1"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
