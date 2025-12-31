import { ArrowRight, ExternalLink, Github, Star, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const featuredProjects = [
    {
      title: "ABC TECH — ITSM Incident Analysis & Prediction",
      description:
        "End-to-end ML pipeline analyzing 45K+ ITSM records to predict high-priority incidents (96% accuracy) and identify risky change requests (98% F1-score).",
      technologies: ["Python", "XGBoost", "SQL", "SMOTE", "Scikit-learn"],
      detailsLink: "/abc-tech-itsm",
      liveDemo: "https://proactive-it-insight.lovable.app",
      github: "https://github.com/vinodbavage31/ABC-TECH-PROJECT",
      highlights: ["96% Accuracy", "98% F1-Score", "45K+ Records"],
    },
    {
      title: "Rice Leaf Disease Detection",
      description:
        "Deep learning image classification system using CNNs to detect and classify rice leaf diseases, enabling early intervention for farmers.",
      technologies: ["TensorFlow", "Keras", "CNN", "Python", "Computer Vision"],
      detailsLink: "/rice-leaf-detection",
      liveDemo: "https://riceleafdetection.lovable.app/",
      github: "https://github.com/vinodbavage31",
      highlights: ["4+ Diseases", "Real-time", "CNN Model"],
    },
  ];

  const otherProjects = [
    {
      title: "Game Winner Prediction",
      description:
        "Predictive analytics system to forecast PUBG game outcomes using historical data and ML algorithms.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Data Analysis"],
      github: "https://github.com/vinodbavage31/PUBG-GameWinnerPred",
    },
    {
      title: "House Price Prediction",
      description:
        "Real estate price prediction model using regression techniques and feature engineering for accurate valuations.",
      technologies: ["Python", "Regression", "Feature Engineering"],
      github: "https://github.com/vinodbavage31/House-price-pred",
    },
    {
      title: "Bike Rental Analysis",
      description:
        "Comprehensive analysis and prediction of bike rental trends using temporal patterns and environmental factors.",
      technologies: ["Python", "Time Series", "Pandas", "Visualization"],
      github: "https://github.com/vinodbavage31/bike-rental",
    },
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      {/* Decorative orbs */}
      <div className="absolute top-1/4 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Real-world machine learning and data science projects showcasing practical problem-solving
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-1.5 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Featured Projects</h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="glass-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <CardHeader className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Badge className="mb-3 bg-gradient-to-r from-primary/20 to-accent/20 text-primary hover:from-primary/30 hover:to-accent/30 border-0">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                      <CardTitle className="text-xl leading-tight">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 relative">
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight) => (
                      <Badge key={highlight} variant="outline" className="text-xs font-semibold bg-background/50">
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-secondary/80">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Button asChild size="sm" className="gap-1.5 shadow-md hover:shadow-lg">
                      <Link to={project.detailsLink}>
                        View Details
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                    {project.liveDemo && (
                      <Button asChild variant="outline" size="sm" className="gap-1.5 glass">
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3.5 w-3.5" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button asChild variant="outline" size="sm" className="gap-1.5 glass">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3.5 w-3.5" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-xl font-semibold mb-6">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className="glass-card border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-secondary/80">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild variant="outline" size="sm" className="gap-1.5 w-full glass">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3.5 w-3.5" />
                      View on GitHub
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
