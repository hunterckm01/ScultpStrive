import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ProgramCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: "terracotta" | "sage" | "charcoal";
  features: string[];
  delay?: number;
}

export const ProgramCard = ({
  icon: Icon,
  title,
  description,
  color,
  features,
  delay = 0,
}: ProgramCardProps) => {
  const colorClasses = {
    terracotta: {
      bg: "bg-terracotta-50",
      icon: "bg-primary text-primary-foreground",
      border: "border-terracotta-200/50",
      hover: "hover:border-primary/50",
    },
    sage: {
      bg: "bg-sage-50",
      icon: "bg-secondary text-secondary-foreground",
      border: "border-sage-200/50",
      hover: "hover:border-secondary/50",
    },
    charcoal: {
      bg: "bg-charcoal-50",
      icon: "bg-accent text-accent-foreground",
      border: "border-charcoal-200/50",
      hover: "hover:border-accent/50",
    },
  };

  const classes = colorClasses[color];

  return (
    <Card 
      className={`${classes.bg} ${classes.border} ${classes.hover} border hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 animate-slide-up group cursor-pointer`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardHeader className="pb-4">
        <div className={`w-14 h-14 ${classes.icon} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-7 h-7" />
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
        <Button variant="ghost" className="p-0 h-auto text-primary group-hover:gap-3 transition-all">
          Learn More <ArrowRight className="w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  );
};
