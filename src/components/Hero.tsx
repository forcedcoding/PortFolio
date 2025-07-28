import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Zap, Code, Cpu } from "lucide-react";
import cyberHeroBg from "@/assets/cyber-hero-bg.jpg";
import TypingEffect from "./TypingEffect";
import CircuitPattern from "./CircuitPattern";
import MatrixRain from "./MatrixRain";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${cyberHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Circuit Pattern Overlay */}
      <CircuitPattern />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70 z-10" />
      
      {/* Scanning line effect */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line z-20" />
      
      {/* Floating Tech Elements */}
      <div className="absolute inset-0 z-20">
        <div className="absolute top-20 left-20 p-4 bg-primary/10 border border-primary/30 backdrop-blur-sm rounded-lg animate-float">
          <Cpu className="w-8 h-8 text-primary animate-pulse-neon" />
        </div>
        <div className="absolute top-40 right-32 p-4 bg-cyber-orange/10 border border-cyber-orange/30 backdrop-blur-sm rounded-lg animate-float" style={{ animationDelay: '2s' }}>
          <Code className="w-6 h-6 text-cyber-orange animate-pulse-neon" />
        </div>
        <div className="absolute bottom-32 left-1/4 p-4 bg-cyber-green/10 border border-cyber-green/30 backdrop-blur-sm rounded-lg animate-float" style={{ animationDelay: '4s' }}>
          <Zap className="w-5 h-5 text-cyber-green animate-pulse-neon" />
        </div>
        
        {/* Holographic data displays */}
        <div className="absolute top-1/4 right-20 p-3 bg-card/30 border border-primary/50 backdrop-blur-md rounded-md font-mono text-xs text-primary animate-pulse-neon">
          <div>SYSTEM: ONLINE</div>
          <div>STATUS: READY</div>
          <div>CPU: 98.7%</div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-30 relative">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/50 rounded-full text-sm font-mono text-primary mb-4 animate-pulse-neon">
              &gt; SYSTEM INITIALIZED
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-cyber bg-clip-text text-transparent animate-glitch">
              CYBORG_DEV
            </h1>
            
            <div className="text-2xl md:text-4xl text-primary font-mono">
              <TypingEffect 
                text="FULL_STACK_ENGINEER.EXE" 
                speed={80}
                delay={1000}
              />
            </div>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-mono">
                <TypingEffect 
                  text="// Architecting digital realities with cutting-edge algorithms and neural networks" 
                  speed={50}
                  delay={3000}
                />
              </p>
            </div>

            {/* System stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mt-8">
              <div className="text-center p-3 bg-card/30 border border-primary/30 backdrop-blur-sm rounded">
                <div className="text-xl font-bold text-cyber-green">99.9%</div>
                <div className="text-xs text-muted-foreground font-mono">UPTIME</div>
              </div>
              <div className="text-center p-3 bg-card/30 border border-cyber-orange/30 backdrop-blur-sm rounded">
                <div className="text-xl font-bold text-cyber-orange">127</div>
                <div className="text-xs text-muted-foreground font-mono">PROJECTS</div>
              </div>
              <div className="text-center p-3 bg-card/30 border border-cyber-purple/30 backdrop-blur-sm rounded">
                <div className="text-xl font-bold text-cyber-purple">∞</div>
                <div className="text-xs text-muted-foreground font-mono">LEARNING</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="cyber" 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="text-lg px-8 py-6 font-mono"
            >
              &gt; EXECUTE_PORTFOLIO.EXE
            </Button>
            <Button 
              variant="matrix" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8 py-6 font-mono"
            >
              &gt; ESTABLISH_CONNECTION()
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-primary/30 hover:border-primary hover:shadow-cyber hover:scale-110 transition-all duration-300"
            >
              <Github className="w-6 h-6 text-primary group-hover:animate-pulse-neon" />
              <div className="text-xs font-mono text-muted-foreground mt-1">GITHUB</div>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-cyber-blue/30 hover:border-cyber-blue hover:shadow-cyber hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 text-cyber-blue group-hover:animate-pulse-neon" />
              <div className="text-xs font-mono text-muted-foreground mt-1">NETWORK</div>
            </a>
            <a 
              href="mailto:cyborg@dev.ai"
              className="group p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-cyber-orange/30 hover:border-cyber-orange hover:shadow-cyber hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-cyber-orange group-hover:animate-pulse-neon" />
              <div className="text-xs font-mono text-muted-foreground mt-1">CONTACT</div>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
          onClick={() => scrollToSection('about')}
        >
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <div className="text-xs font-mono text-muted-foreground">&gt; SCROLL_DOWN</div>
            <ArrowDown className="w-6 h-6 text-primary group-hover:text-cyber-green transition-colors duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;