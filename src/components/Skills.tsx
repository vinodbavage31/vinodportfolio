import { Code2, Database, Brain, BarChart3, GitBranch, LineChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code2,
      skills: ["Python", "SQL"],
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
    },
    {
      title: "Data Science",
      icon: BarChart3,
      skills: ["Pandas", "NumPy", "EDA", "Feature Engineering", "Data Cleaning"],
      color: "text-emerald-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: ["Scikit-learn", "XGBoost", "Model Evaluation", "Hyperparameter Tuning", "SMOTE"],
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/30",
    },
    {
      title: "Deep Learning",
      icon: LineChart,
      skills: ["TensorFlow", "Keras", "CNNs", "Image Classification"],
      color: "text-rose-600",
      bgColor: "bg-rose-50 dark:bg-rose-950/30",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "SQL Queries", "Data Extraction"],
      color: "text-amber-600",
      bgColor: "bg-amber-50 dark:bg-amber-950/30",
    },
    {
      title: "Tools & Visualization",
      icon: GitBranch,
      skills: ["Git", "GitHub", "Jupyter", "Matplotlib", "Seaborn"],
      color: "text-cyan-600",
      bgColor: "bg-cyan-50 dark:bg-cyan-950/30",
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technical skills and tools I use to build data-driven solutions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="border hover:border-primary/30 hover:shadow-[var(--shadow-soft)] transition-all duration-300"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category.bgColor}`}>
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
                      className="text-xs font-medium"
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