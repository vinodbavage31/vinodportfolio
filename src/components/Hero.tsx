import { ArrowRight, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-[image:var(--gradient-hero)]">
      <div className="section-container py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-sm" />
              <img
                src={profileImage}
                alt="Vinod Bavage - Data Scientist"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-background shadow-lg"
              />
            </div>
          </div>

          {/* Name & Role */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Vinod Bavage
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium">
              Data Scientist & Machine Learning Engineer
            </p>
          </div>

          {/* Professional Summary */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Recent AI & ML Engineering graduate passionate about transforming data into actionable insights. 
            Specialized in predictive modeling, deep learning, and building end-to-end ML pipelines 
            that solve real-world business problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="gap-2"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <a
                href="https://github.com/vinodbavage31"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/vinodbavage"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <a href="/Vinod_Bavage_Resume.pdf" download className="gap-2">
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12">
            <button
              onClick={() => scrollToSection("about")}
              className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
                <div className="w-1 h-2 bg-current rounded-full mt-2 animate-bounce" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;