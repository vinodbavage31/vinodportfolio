import { GraduationCap, Target, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation, getStaggeredDelay } from "@/hooks/useScrollAnimation";
import SectionNeurons from "./SectionNeurons";

const About = () => {
  const { ref, isVisible, scrollProgress } = useScrollAnimation(0.15);

  const cards = [
    {
      icon: GraduationCap,
      title: "Education",
      highlight: "Bachelor of Engineering in Artificial Intelligence & Machine Learning",
      description: "Bheemanna Khandre Institute of Technology, Vishveshvaraya University",
      extra: "Class of 2025",
      color: "primary",
    },
    {
      icon: Target,
      title: "Career Focus",
      description: "I specialize in developing machine learning solutions that address real-world business challenges. My expertise spans predictive analytics, deep learning for computer vision, and building end-to-end data pipelines. I'm passionate about leveraging Python, SQL, and modern ML frameworks to create impactful, data-driven applications.",
      color: "accent",
    },
    {
      icon: Briefcase,
      title: "What I'm Looking For",
      description: "I'm actively seeking opportunities as a Data Scientist, Machine Learning Engineer, or Python Developer where I can apply my skills to solve challenging problems. I'm eager to contribute to innovative projects while continuing to grow my expertise in emerging AI/ML technologies.",
      color: "primary",
    },
  ];

  return (
    <section id="about" ref={ref} className="section-padding relative overflow-hidden">
      {/* Section gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-transparent to-accent/8" />
      
      {/* Animated Neural Network */}
      <SectionNeurons isVisible={isVisible} scrollProgress={scrollProgress} variant="full" className="opacity-25" />
      
      {/* Glowing orbs with parallax */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 bg-primary/15 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-pulse-glow"
        style={{ transform: `translate(-50%, ${-50 + scrollProgress * 30}%)` }}
      />
      <div 
        className="absolute bottom-0 right-0 w-80 h-80 bg-accent/15 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3 animate-pulse-glow"
        style={{ animationDelay: '1.5s', transform: `translate(33%, ${33 - scrollProgress * 30}%)` }}
      />
      
      <div className="section-container relative z-10">
        <div 
          className={`section-header scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about turning data into insights and building intelligent solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {cards.map((card, index) => (
            <Card 
              key={index}
              className={`glass-card-hover border-${card.color}/30 scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
              style={{ 
                ...getStaggeredDelay(index + 1, 150),
                borderColor: card.color === 'primary' ? 'hsl(var(--primary) / 0.3)' : 'hsl(var(--accent) / 0.3)'
              }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div 
                    className={`p-3 rounded-xl shrink-0 transition-all duration-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
                    style={{ 
                      ...getStaggeredDelay(index + 2, 150),
                      background: card.color === 'primary' 
                        ? 'linear-gradient(135deg, hsl(var(--primary) / 0.4), hsl(var(--primary) / 0.15))'
                        : 'linear-gradient(135deg, hsl(var(--accent) / 0.4), hsl(var(--accent) / 0.15))',
                      boxShadow: card.color === 'primary'
                        ? 'inset 0 0 20px hsl(var(--primary) / 0.15), 0 0 25px hsl(var(--primary) / 0.3)'
                        : 'inset 0 0 20px hsl(var(--accent) / 0.15), 0 0 25px hsl(var(--accent) / 0.3)'
                    }}
                  >
                    <card.icon className={`h-6 w-6 ${card.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    {card.highlight && (
                      <p className={`text-lg font-medium mb-1 ${card.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                        {card.highlight}
                      </p>
                    )}
                    <p className="text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                    {card.extra && (
                      <p className="text-sm text-muted-foreground mt-1">{card.extra}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
