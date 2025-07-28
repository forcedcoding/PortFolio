import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              John Doe
            </div>
            <p className="text-muted-foreground text-sm">
              © {currentYear} All rights reserved. Made with{" "}
              <Heart className="inline w-4 h-4 text-red-500 mx-1" />
              by John Doe
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 hover:scale-110 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:john@example.com"
              className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;