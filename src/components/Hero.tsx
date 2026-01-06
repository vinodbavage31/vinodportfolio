import { ArrowRight, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";
import SectionNeurons from "./SectionNeurons";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Hero gradient overlay */}
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      
      {/* Animated Neural Network Background */}
      <SectionNeurons isVisible={isLoaded} scrollProgress={0.5} variant="full" className="opacity-20" />
      
      {/* Large decorative orbs with strong glow */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-primary/25 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/25 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/8 rounded-full blur-[150px]" />
      
      {/* Hexagon grid pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
              <path d="M28 0 L56 17 L56 50 L28 67 L0 50 L0 17 Z" fill="none" stroke="hsl(190 100% 50%)" strokeWidth="0.5" />
              <path d="M28 33 L56 50 L56 83 L28 100 L0 83 L0 50 Z" fill="none" stroke="hsl(280 100% 65%)" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="section-container py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Profile Image */}
          <div 
            className={`flex justify-center mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
          >
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-40 blur-xl group-hover:opacity-60 transition-all duration-700 animate-glow" />
              {/* Middle ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary to-accent opacity-50 blur-md" />
              {/* Inner gradient border */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary via-accent to-primary p-0.5">
                <div className="w-full h-full rounded-full bg-background" />
              </div>
              <img
                src={profileImage}
                alt="Vinod Bavage - Data Scientist"
                className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-2 border-primary/30 shadow-2xl"
              />
            </div>
          </div>

          {/* Name & Role */}
          <div 
            className={`space-y-4 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <h1 className="text-5xl md:text-7xl font-bold gradient-text neon-text">
              Vinod Bavage
            </h1>
            <p className="text-xl md:text-2xl font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Data Scientist & Machine Learning Engineer
            </p>
          </div>

          {/* Professional Summary */}
          <p 
            className={`text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            Recent AI & ML Engineering graduate passionate about transforming data into actionable insights. 
            Specialized in predictive modeling, deep learning, and building end-to-end ML pipelines 
            that solve real-world business problems.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-wrap justify-center gap-4 pt-6 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="gap-2 border-primary/50 bg-primary/10 hover:bg-primary/20 hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <a
                href="https://github.com/vinodbavage31"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="gap-2 border-accent/50 bg-accent/10 hover:bg-accent/20 hover:border-accent transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <a
                href="https://www.linkedin.com/in/vinodbavage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="gap-2 border-primary/50 bg-primary/10 hover:bg-primary/20 hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <a href="/Vinod_Bavage_Resume.pdf" download>
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div 
            className={`pt-16 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <button
              onClick={() => scrollToSection("about")}
              className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group"
            >
              <span className="text-sm mb-3">Scroll to explore</span>
              <div className="w-7 h-12 border-2 border-current rounded-full flex justify-center group-hover:border-primary group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all">
                <div className="w-1.5 h-3 bg-current rounded-full mt-2 animate-bounce group-hover:bg-primary" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
