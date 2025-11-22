import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  const projects = [
    {
      title: "ITSM Predictive Automation & Risk Mitigation",
      description: "Developed an end-to-end Machine Learning pipeline using a 45K-record SQL dataset to transform IT Service Management. The solution achieved 96% accuracy in predicting high-priority incidents and 98% F1-score in proactively identifying high-risk change requests (RFCs).",
      technologies: ["Python", "Machine Learning", "SQL", "Predictive Modeling", "Data Analytics"],
      link: "https://github.com/vinodbavage31/ABC-TECH-PROJECT",
    },
    {
      title: "RiceLeaf Disease Detection",
      description: "Developed a computer vision model to detect and classify rice leaf diseases, helping farmers identify crop health issues early.",
      technologies: ["Deep Learning", "Computer Vision", "TensorFlow", "Image Processing"],
      link: "https://github.com/vinodbavage31/RiceLeaf-disease-detection",
    },
    {
      title: "GameWinnerPred",
      description: "Predictive analytics system to forecast game outcomes using historical data and machine learning algorithms.",
      technologies: ["Python", "Scikit-learn", "Data Analysis", "Predictive Modeling"],
      link: "https://github.com/vinodbavage31/PUBG-GameWinnerPred",
    },
    {
      title: "HousePricePred",
      description: "Real estate price prediction model using multiple regression techniques and feature engineering for accurate property valuations.",
      technologies: ["Python", "Regression", "Feature Engineering", "Data Visualization"],
      link: "https://github.com/vinodbavage31/House-price-pred",
    },
    {
      title: "BikeRental Analysis",
      description: "Comprehensive analysis and prediction of bike rental trends, incorporating temporal patterns and environmental factors.",
      technologies: ["Python", "Time Series", "Pandas", "Statistical Analysis"],
      link: "https://github.com/vinodbavage31/bike-rental",
    },
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Portfolio</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore my collection of data science and machine learning projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
