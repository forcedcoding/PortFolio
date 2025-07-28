import { Card } from "@/components/ui/card";
import { Terminal, Brain, Zap } from "lucide-react";
import CircuitPattern from "./CircuitPattern";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-matrix relative overflow-hidden">
      <CircuitPattern />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/50 rounded-full text-sm font-mono text-primary mb-4 animate-pulse-neon">
              &gt; LOADING_PROFILE.EXE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-mono bg-gradient-cyber bg-clip-text text-transparent">
              SYSTEM_ANALYSIS()
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <Terminal className="w-6 h-6 text-primary animate-pulse-neon" />
                  <span className="font-mono text-lg text-primary">&gt; BIOGRAPHY.TXT</span>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed font-mono">
                  // Advanced AI-human hybrid specializing in full-stack architecture.
                  <br />
                  // Neural networks optimized for problem-solving and code generation.
                  <br />
                  // Runtime: 5+ years of continuous operation.
                </p>
                
                <div className="flex items-center gap-3 mt-6">
                  <Brain className="w-6 h-6 text-cyber-purple animate-pulse-neon" />
                  <span className="font-mono text-lg text-cyber-purple">&gt; MISSION.LOG</span>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed font-mono">
                  // Primary directive: Transform complex algorithms into elegant solutions.
                  <br />
                  // Secondary objective: Share knowledge with the collective intelligence.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-card/30 border border-primary/30 backdrop-blur-sm rounded-lg hover:shadow-cyber transition-all duration-300">
                  <div className="text-3xl font-bold text-primary font-mono animate-pulse-neon">127+</div>
                  <div className="text-sm text-muted-foreground font-mono">PROJECTS_EXECUTED</div>
                </div>
                <div className="text-center p-4 bg-card/30 border border-cyber-green/30 backdrop-blur-sm rounded-lg hover:shadow-cyber transition-all duration-300">
                  <div className="text-3xl font-bold text-cyber-green font-mono animate-pulse-neon">5.0</div>
                  <div className="text-sm text-muted-foreground font-mono">YEARS_RUNTIME</div>
                </div>
                <div className="text-center p-4 bg-card/30 border border-cyber-orange/30 backdrop-blur-sm rounded-lg hover:shadow-cyber transition-all duration-300">
                  <div className="text-3xl font-bold text-cyber-orange font-mono animate-pulse-neon">∞</div>
                  <div className="text-sm text-muted-foreground font-mono">LEARNING_RATE</div>
                </div>
                <div className="text-center p-4 bg-card/30 border border-cyber-purple/30 backdrop-blur-sm rounded-lg hover:shadow-cyber transition-all duration-300">
                  <div className="text-3xl font-bold text-cyber-purple font-mono animate-pulse-neon">99.9%</div>
                  <div className="text-sm text-muted-foreground font-mono">EFFICIENCY</div>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-card/30 backdrop-blur-sm border border-primary/30 hover:shadow-cyber hover:scale-105 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-cyber opacity-20 rounded-full -translate-y-10 translate-x-10" />
              
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-primary animate-pulse-neon" />
                <h3 className="text-2xl font-bold font-mono text-primary">&gt; SKILL_MATRIX.DAT</h3>
              </div>
              
              <div className="space-y-6">
                <div className="relative">
                  <div className="flex justify-between text-sm mb-2 font-mono">
                    <span className="text-primary">&gt; FRONTEND_PROTOCOLS</span>
                    <span className="text-cyber-green">98.7%</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-cyber h-3 rounded-full animate-pulse-neon transition-all duration-1000" style={{ width: '98.7%' }} />
                  </div>
                </div>

                <div className="relative">
                  <div className="flex justify-between text-sm mb-2 font-mono">
                    <span className="text-primary">&gt; BACKEND_SYSTEMS</span>
                    <span className="text-cyber-green">94.2%</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-cyber h-3 rounded-full animate-pulse-neon transition-all duration-1000" style={{ width: '94.2%' }} />
                  </div>
                </div>

                <div className="relative">
                  <div className="flex justify-between text-sm mb-2 font-mono">
                    <span className="text-primary">&gt; DATABASE_OPTIMIZATION</span>
                    <span className="text-cyber-green">89.1%</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-cyber h-3 rounded-full animate-pulse-neon transition-all duration-1000" style={{ width: '89.1%' }} />
                  </div>
                </div>

                <div className="relative">
                  <div className="flex justify-between text-sm mb-2 font-mono">
                    <span className="text-primary">&gt; AI_INTEGRATION</span>
                    <span className="text-cyber-green">96.8%</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-cyber h-3 rounded-full animate-pulse-neon transition-all duration-1000" style={{ width: '96.8%' }} />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;