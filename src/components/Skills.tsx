import { Code2, Database, Brain, BarChart3, GitBranch, LineChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation, getStaggeredDelay } from "@/hooks/useScrollAnimation";
import SectionNeurons from "./SectionNeurons";

const Skills = () => {
  const { ref, isVisible, scrollProgress } = useScrollAnimation(0.1);

  const skillCategories = [
    {
      title: "Programming",
      icon: Code2,
      skills: ["Python", "SQL"],
      gradient: "from-cyan-500 to-blue-500",
      glowColor: "190 100% 50%",
    },
    {
      title: "Data Science",
      icon: BarChart3,
      skills: ["Pandas", "NumPy", "EDA", "Feature Engineering", "Data Cleaning"],
      gradient: "from-emerald-500 to-teal-500",
      glowColor: "160 100% 45%",
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: ["Scikit-learn", "XGBoost", "Model Evaluation", "Hyperparameter Tuning", "SMOTE"],
      gradient: "from-purple-500 to-pink-500",
      glowColor: "280 100% 65%",
    },
    {
      title: "Deep Learning",
      icon: LineChart,
      skills: ["TensorFlow", "Keras", "CNNs", "Image Classification"],
      gradient: "from-rose-500 to-orange-500",
      glowColor: "350 100% 60%",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "SQL Queries", "Data Extraction"],
      gradient: "from-amber-500 to-yellow-500",
      glowColor: "45 100% 50%",
    },
    {
      title: "Tools & Visualization",
      icon: GitBranch,
      skills: ["Git", "GitHub", "Jupyter", "Matplotlib", "Seaborn"],
      gradient: "from-cyan-500 to-teal-500",
      glowColor: "180 100% 45%",
    },
  ];

  return (
    <section id="skills" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/8 via-transparent to-primary/8" />
      
      {/* Animated Neural Network */}
      <SectionNeurons isVisible={isVisible} scrollProgress={scrollProgress} variant="full" className="opacity-20" />
      
      {/* Animated circuit lines */}
      <div 
        className="absolute top-20 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        style={{ 
          transform: `scaleX(${isVisible ? 1 : 0})`,
          transition: 'transform 1.5s ease-out',
        }}
      />
      <div 
        className="absolute bottom-20 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        style={{ 
          transform: `scaleX(${isVisible ? 1 : 0})`,
          transition: 'transform 1.5s ease-out 0.3s',
        }}
      />
      
      {/* Glowing orbs with parallax */}
      <div 
        className="absolute top-1/3 -left-40 w-80 h-80 bg-primary/15 rounded-full blur-[100px] animate-pulse-glow"
        style={{ transform: `translateY(${scrollProgress * 50}px)` }}
      />
      <div 
        className="absolute bottom-1/3 -right-40 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-pulse-glow"
        style={{ animationDelay: '2s', transform: `translateY(${-scrollProgress * 50}px)` }}
      />
      
      <div className="section-container relative z-10">
        <div 
          className={`section-header scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technical skills and tools I use to build data-driven solutions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              style={getStaggeredDelay(index + 1, 120)}
              className={`glass-card border-border/30 hover:border-primary/60 transition-all duration-500 group scroll-hidden-scale ${isVisible ? 'scroll-visible-scale' : ''}`}
            >
              {/* Hover glow effect */}
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, hsl(${category.glowColor}), transparent 70%)` }}
              />
              
              {/* Border glow on hover */}
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: `0 0 30px hsl(${category.glowColor} / 0.3), inset 0 0 20px hsl(${category.glowColor} / 0.1)` }}
              />
              
              <CardHeader className="pb-3 relative">
                <div className="flex items-center gap-3">
                  <div 
                    className={`p-2.5 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg transition-all duration-500 group-hover:scale-110`}
                    style={{ boxShadow: `0 0 20px hsl(${category.glowColor} / 0.4)` }}
                  >
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs font-medium bg-secondary/80 border border-border/50 hover:border-primary/60 hover:bg-primary/15 transition-all duration-300 hover:scale-105"
                      style={{ transitionDelay: `${(index * 50) + (skillIndex * 30)}ms` }}
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
