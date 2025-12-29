import { ArrowRight, Brain, BarChart3, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const FeaturedProject = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const highlights = [
    { icon: Brain, label: "96% Accuracy", desc: "Priority Prediction" },
    { icon: BarChart3, label: "45K+ Records", desc: "Data Analyzed" },
    { icon: Shield, label: "98% F1-Score", desc: "RFC Prediction" },
    { icon: Zap, label: "XGBoost", desc: "ML Algorithm" },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card
            ref={ref}
            className={cn(
              "border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 overflow-hidden",
              "opacity-0 translate-y-10",
              isVisible && "animate-fade-in opacity-100 translate-y-0"
            )}
          >
            <div className="absolute top-4 right-4">
              <Badge className="bg-primary text-primary-foreground">Featured Project</Badge>
            </div>
            <CardHeader className="pt-12 pb-4">
              <CardTitle className="text-3xl md:text-4xl font-bold">
                ABC TECH — ITSM Incident Analysis & Prediction
              </CardTitle>
              <CardDescription className="text-lg mt-2">
                Proactive ITSM Incident Analysis & Predictive Automation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Developed an end-to-end Machine Learning pipeline using a 45K-record SQL dataset to transform 
                IT Service Management. The solution achieved 96% accuracy in predicting high-priority incidents 
                and 98% F1-score in proactively identifying high-risk change requests (RFCs).
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <item.icon className="h-6 w-6 text-primary mb-2" />
                    <span className="font-semibold text-sm">{item.label}</span>
                    <span className="text-xs text-muted-foreground">{item.desc}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {["Python", "Machine Learning", "XGBoost", "SQL", "SMOTE", "Data Analytics"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="pt-4">
                <Button asChild size="lg" className="gap-2 group">
                  <Link to="/abc-tech-itsm">
                    View Project
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
