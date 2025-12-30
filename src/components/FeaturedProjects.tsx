import { ArrowRight, Brain, BarChart3, Shield, Zap, Leaf, ExternalLink, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const FeaturedProjects = () => {
  const { ref: ref1, isVisible: isVisible1 } = useScrollAnimation(0.2);
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation(0.2);

  const itsmHighlights = [
    { icon: Brain, label: "96% Accuracy", desc: "Priority Prediction" },
    { icon: BarChart3, label: "45K+ Records", desc: "Data Analyzed" },
    { icon: Shield, label: "98% F1-Score", desc: "RFC Prediction" },
    { icon: Zap, label: "XGBoost", desc: "ML Algorithm" },
  ];

  const riceLeafHighlights = [
    { icon: Leaf, label: "4+ Diseases", desc: "Detection" },
    { icon: Brain, label: "CNN Model", desc: "Deep Learning" },
    { icon: Target, label: "Real-time", desc: "Inference" },
    { icon: Zap, label: "Live Demo", desc: "Available" },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Highlighted projects showcasing expertise in Machine Learning, Deep Learning, and Data Analytics
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* ITSM Project */}
          <Card
            ref={ref1}
            className={cn(
              "border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 overflow-hidden relative",
              "opacity-0 translate-y-10",
              isVisible1 && "animate-fade-in opacity-100 translate-y-0"
            )}
          >
            <div className="absolute top-4 right-4">
              <Badge className="bg-primary text-primary-foreground">Featured</Badge>
            </div>
            <CardHeader className="pt-12 pb-4">
              <CardTitle className="text-2xl md:text-3xl font-bold">
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
                {itsmHighlights.map((item, index) => (
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

          {/* Rice Leaf Detection Project */}
          <Card
            ref={ref2}
            className={cn(
              "border-2 border-green-500/20 hover:border-green-500/50 transition-all duration-500 overflow-hidden relative",
              "opacity-0 translate-y-10",
              isVisible2 && "animate-fade-in opacity-100 translate-y-0"
            )}
          >
            <div className="absolute top-4 right-4 flex gap-2">
              <Badge className="bg-green-600 text-white">Live Demo</Badge>
              <Badge variant="outline" className="border-green-500/50 text-green-600">Featured</Badge>
            </div>
            <CardHeader className="pt-12 pb-4">
              <CardTitle className="text-2xl md:text-3xl font-bold">
                Rice Leaf Disease Detection
              </CardTitle>
              <CardDescription className="text-lg mt-2">
                AI-Powered Agricultural Health Monitoring System
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Built a deep learning-based image classification system using Convolutional Neural Networks (CNN) 
                to detect and classify diseases in rice leaves. The application provides real-time inference 
                enabling farmers to quickly identify crop diseases and take preventive measures.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {riceLeafHighlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-4 rounded-lg bg-green-500/10 hover:bg-green-500/20 transition-colors"
                  >
                    <item.icon className="h-6 w-6 text-green-600 mb-2" />
                    <span className="font-semibold text-sm">{item.label}</span>
                    <span className="text-xs text-muted-foreground">{item.desc}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {["Python", "TensorFlow", "Keras", "CNN", "Computer Vision", "Deep Learning"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs bg-green-500/10">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <Button asChild size="lg" className="gap-2 bg-green-600 hover:bg-green-700">
                  <a href="https://riceleafdetection.lovable.app/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 group">
                  <Link to="/rice-leaf-detection">
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

export default FeaturedProjects;
