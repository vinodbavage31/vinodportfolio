import { ArrowRight, Sparkles, Code2, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Animated orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-50" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          
          {/* Floating badges */}
          <div className="flex justify-center gap-3 mb-6 flex-wrap animate-fade-in">
            <Badge variant="secondary" className="backdrop-blur-sm bg-primary/10 border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:scale-105">
              <Sparkles className="w-3 h-3 mr-1" />
              AI & ML Engineer
            </Badge>
            <Badge variant="secondary" className="backdrop-blur-sm bg-primary/10 border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:scale-105">
              <Code2 className="w-3 h-3 mr-1" />
              Python Expert
            </Badge>
            <Badge variant="secondary" className="backdrop-blur-sm bg-primary/10 border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:scale-105">
              <Database className="w-3 h-3 mr-1" />
              Data Science
            </Badge>
          </div>

          {/* Profile Image with enhanced effects */}
          <div className="flex justify-center mb-8 animate-scale-in">
            <div className="relative group">
              {/* Outer glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-all duration-700 animate-pulse" />
              
              {/* Ring animation */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-full opacity-75 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Image container with glassmorphism */}
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Vinod Bavage - Aspiring Data Scientist"
                  className="relative w-48 h-48 rounded-full object-cover border-4 border-background shadow-2xl ring-2 ring-primary/20 transition-all duration-500 group-hover:scale-105 group-hover:ring-primary/50"
                />
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>

          {/* Main Content with staggered animations */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-3">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-[gradient_8s_linear_infinite] hover:animate-[gradient_2s_linear_infinite]">
                  Vinod Bavage
                </span>
              </h1>
              <div className="flex items-center justify-center gap-2">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
                <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground">
                  Aspiring Data Scientist
                </h2>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
              </div>
            </div>

            {/* Bio with glassmorphism card */}
            <div className="max-w-3xl mx-auto">
              <div className="backdrop-blur-sm bg-card/30 border border-primary/10 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  I have recently completed my graduation in Engineering (AI & ML) and am passionate about 
                  applying my skills in data science. Actively seeking opportunities to contribute to impactful projects.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in">
            <Button
              size="lg"
              onClick={() => scrollToSection("portfolio")}
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.5)] transition-all duration-300 hover:scale-105 text-lg px-8 py-6"
            >
              <span className="relative z-10 flex items-center">
                View Portfolio
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-primary/30 hover:border-primary bg-background/50 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 hover:scale-105 text-lg px-8 py-6"
            >
              Contact Me
            </Button>
          </div>

          {/* Scroll Indicator with modern design */}
          <div className="pt-16 animate-bounce">
            <div className="relative w-8 h-12 border-2 border-primary/50 rounded-full mx-auto flex justify-center hover:border-primary transition-colors duration-300 cursor-pointer" onClick={() => scrollToSection("about")}>
              <div className="w-1.5 h-3 bg-gradient-to-b from-primary to-accent rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
