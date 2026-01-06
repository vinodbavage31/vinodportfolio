import { GraduationCap, Target, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="about" ref={ref} className="section-padding relative overflow-hidden">
      {/* Section gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
      
      {/* Glowing orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3" />
      
      <div className="section-container relative z-10">
        <div className={`section-header transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about turning data into insights and building intelligent solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Brief Background */}
          <Card className={`glass-card-hover border-primary/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl shrink-0 neon-border">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-lg font-medium text-primary mb-1">
                    Bachelor of Engineering in Artificial Intelligence & Machine Learning
                  </p>
                  <p className="text-muted-foreground">
                    Bheemanna Khandre Institute of Technology, Vishveshvaraya University
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">Class of 2025</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Career Focus */}
          <Card className={`glass-card-hover border-accent/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-accent/30 to-accent/10 rounded-xl shrink-0" style={{ boxShadow: 'inset 0 0 20px hsl(280 100% 65% / 0.1), 0 0 20px hsl(280 100% 65% / 0.2)' }}>
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Career Focus</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I specialize in developing machine learning solutions that address real-world business challenges. 
                    My expertise spans predictive analytics, deep learning for computer vision, and building 
                    end-to-end data pipelines. I'm passionate about leveraging Python, SQL, and modern ML frameworks 
                    to create impactful, data-driven applications.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What I'm Looking For */}
          <Card className={`glass-card-hover border-primary/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl shrink-0 neon-border">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">What I'm Looking For</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm actively seeking opportunities as a Data Scientist, Machine Learning Engineer, or Python Developer 
                    where I can apply my skills to solve challenging problems. I'm eager to contribute to innovative 
                    projects while continuing to grow my expertise in emerging AI/ML technologies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
