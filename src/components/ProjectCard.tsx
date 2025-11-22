import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const ProjectCard = ({ title, description, technologies, link }: ProjectCardProps) => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <Card 
      ref={ref}
      className={cn(
        "group hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:scale-[1.02] border-2 hover:border-primary/50",
        "opacity-0 translate-y-10",
        isVisible && "animate-fade-in opacity-100 translate-y-0"
      )}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-2xl group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          {link !== "#" && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs hover:bg-primary/10 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
