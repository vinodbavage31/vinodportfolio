import { GraduationCap, Target, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about turning data into insights and building intelligent solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Brief Background */}
          <Card className="border-0 shadow-[var(--shadow-card)]">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
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
          <Card className="border-0 shadow-[var(--shadow-card)]">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg shrink-0">
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
          <Card className="border-0 shadow-[var(--shadow-card)]">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
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