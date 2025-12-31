import { Code2, Database, Brain, BarChart3, GitBranch, LineChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import DataFlowDecoration from "./DataFlowDecoration";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const skillCategories = [
    {
      title: "Programming",
      icon: Code2,
      skills: ["Python", "SQL"],
      color: "text-blue-600",
      bgColor: "bg-gradient-to-br from-blue-500/20 to-blue-600/10",
      borderColor: "hover:border-blue-500/30",
    },
    {
      title: "Data Science",
      icon: BarChart3,
      skills: ["Pandas", "NumPy", "EDA", "Feature Engineering", "Data Cleaning"],
      color: "text-emerald-600",
      bgColor: "bg-gradient-to-br from-emerald-500/20 to-emerald-600/10",
      borderColor: "hover:border-emerald-500/30",
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: ["Scikit-learn", "XGBoost", "Model Evaluation", "Hyperparameter Tuning", "SMOTE"],
      color: "text-purple-600",
      bgColor: "bg-gradient-to-br from-purple-500/20 to-purple-600/10",
      borderColor: "hover:border-purple-500/30",
    },
    {
      title: "Deep Learning",
      icon: LineChart,
      skills: ["TensorFlow", "Keras", "CNNs", "Image Classification"],
      color: "text-rose-600",
      bgColor: "bg-gradient-to-br from-rose-500/20 to-rose-600/10",
      borderColor: "hover:border-rose-500/30",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "SQL Queries", "Data Extraction"],
      color: "text-amber-600",
      bgColor: "bg-gradient-to-br from-amber-500/20 to-amber-600/10",
      borderColor: "hover:border-amber-500/30",
    },
    {
      title: "Tools & Visualization",
      icon: GitBranch,
      skills: ["Git", "GitHub", "Jupyter", "Matplotlib", "Seaborn"],
      color: "text-cyan-600",
      bgColor: "bg-gradient-to-br from-cyan-500/20 to-cyan-600/10",
      borderColor: "hover:border-cyan-500/30",
    },
  ];

  return (
    <section id="skills" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      
      <DataFlowDecoration />
      
      <div className="section-container relative z-10">
        <div className={`section-header transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technical skills and tools I use to build data-driven solutions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`glass-card border-2 ${category.borderColor} hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${category.bgColor}`}>
                    <category.icon className={`h-5 w-5 ${category.color}`} />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs font-medium bg-secondary/80 hover:bg-secondary transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
