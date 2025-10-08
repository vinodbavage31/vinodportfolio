import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  skill: string;
  variant?: "default" | "secondary";
}

const SkillBadge = ({ skill, variant = "default" }: SkillBadgeProps) => {
  return (
    <Badge
      variant={variant}
      className={`px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-110 hover:shadow-[var(--shadow-soft)] ${
        variant === "default"
          ? "bg-[image:var(--gradient-primary)] text-primary-foreground border-0"
          : "bg-secondary hover:bg-secondary/80"
      }`}
    >
      {skill}
    </Badge>
  );
};

export default SkillBadge;
