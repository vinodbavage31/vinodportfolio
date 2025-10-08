import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.08),transparent_50%)]" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-[image:var(--gradient-primary)] rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-500" />
              <img
                src={profileImage}
                alt="Vinod Bavage"
                className="relative w-40 h-40 rounded-full object-cover border-4 border-background shadow-[var(--shadow-soft)]"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-[image:var(--gradient-primary)]">
                Vinod Bavage
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              Aspiring Data Scientist
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I have recently completed my graduation in Engineering (AI & ML) and am passionate about 
            applying my skills in data science. Actively seeking opportunities to contribute to impactful projects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              size="lg"
              onClick={() => scrollToSection("portfolio")}
              className="group bg-[image:var(--gradient-primary)] hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              View Portfolio
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 hover:bg-primary/5 transition-all duration-300"
            >
              Contact Me
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
