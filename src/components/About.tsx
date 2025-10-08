import { GraduationCap, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import SkillBadge from "./SkillBadge";

const About = () => {
  const skills = [
    "Python",
    "SQL",
    "Machine Learning",
    "Deep Learning",
    "Big Data",
    "Data Analysis",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Pandas",
    "NumPy",
  ];

  const tools = [
    "Jupyter Notebook",
    "VS Code",
    "Google Colab",
    "Git",
    "Docker",
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <p className="text-muted-foreground text-lg">
              Passionate about turning data into insights
            </p>
          </div>

          {/* Education Card */}
          <Card className="p-8 hover:shadow-[var(--shadow-soft)] transition-all duration-300 border-2 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[image:var(--gradient-primary)] rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">Education</h3>
                <p className="text-lg font-medium text-primary mb-1">
                  Bachelor of Engineering in Artificial Intelligence and Machine Learning
                </p>
                <p className="text-muted-foreground">
                  Bheemanna Khandre Institute of Technology, Vishveshvaraya University
                </p>
                <p className="text-muted-foreground mt-1">Graduation Year: 2025</p>
              </div>
            </div>
          </Card>

          {/* Career Aspirations */}
          <Card className="p-8 hover:shadow-[var(--shadow-soft)] transition-all duration-300 border-2 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[image:var(--gradient-accent)] rounded-lg">
                <Target className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3">Career Focus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am dedicated to leveraging AI and machine learning to solve real-world problems. 
                  My focus is on developing data-driven solutions that create meaningful impact. I'm actively 
                  seeking opportunities to apply my skills in data science, contributing to innovative projects 
                  while continuously expanding my expertise in emerging technologies.
                </p>
              </div>
            </div>
          </Card>

          {/* Skills Section */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-semibold text-center">Technical Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>

          {/* Tools Section */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-semibold text-center">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool) => (
                <SkillBadge key={tool} skill={tool} variant="secondary" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
