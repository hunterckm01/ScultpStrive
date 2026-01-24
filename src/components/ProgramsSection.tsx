import { useState } from "react";
import { ProgramCard } from "./ProgramCard";
import {
  Baby,
  Heart,
  Users,
  Activity,
  Dumbbell,
  Flame,
  Zap,
  Target,
  Sparkles,
} from "lucide-react";
import { Button } from "./ui/button";

const programs = [
  {
    icon: Baby,
    title: "Pre & Postnatal Fitness",
    description: "Safe, effective programs designed for every stage of your motherhood journey.",
    color: "sage" as const,
    features: ["Trimester-specific workouts", "Pelvic floor recovery", "Diastasis recti healing"],
  },
  {
    icon: Heart,
    title: "Senior Vitality 55+",
    description: "Age-defying fitness that enhances mobility, strength, and quality of life.",
    color: "terracotta" as const,
    features: ["Balance & fall prevention", "Joint-friendly movements", "Functional strength"],
  },
  {
    icon: Target,
    title: "Corrective Exercise",
    description: "Identify imbalances and restore optimal movement patterns through specialized assessment.",
    color: "charcoal" as const,
    features: ["Postural assessment", "Movement screening", "Personalized corrections"],
  },
  {
    icon: Sparkles,
    title: "Women's Fitness",
    description: "Programs honoring the unique physiology of women through every life phase.",
    color: "terracotta" as const,
    features: ["Hormonal cycle training", "Bone density focus", "Metabolic optimization"],
  },
  {
    icon: Users,
    title: "Youth Fitness (6-16)",
    description: "Building healthy habits and athletic foundations for the next generation.",
    color: "sage" as const,
    features: ["Age-appropriate training", "Sport performance", "Motor skill development"],
  },
  {
    icon: Flame,
    title: "Weight Transformation",
    description: "Sustainable body composition changes through smart training and nutrition synergy.",
    color: "charcoal" as const,
    features: ["Metabolic conditioning", "Nutrition tracking", "Progress analytics"],
  },
  {
    icon: Activity,
    title: "Flexibility & Mobility",
    description: "Unlock your body's potential with dynamic stretching and mobility protocols.",
    color: "sage" as const,
    features: ["Dynamic stretching", "Fascial release", "Range of motion"],
  },
  {
    icon: Dumbbell,
    title: "Core & Strength",
    description: "Build a powerful foundation with targeted core training and progressive strength.",
    color: "terracotta" as const,
    features: ["Functional core work", "Progressive overload", "Mind-muscle connection"],
  },
  {
    icon: Zap,
    title: "Travel & Bodyweight",
    description: "Stay fit anywhere with equipment-free workouts designed for your lifestyle.",
    color: "charcoal" as const,
    features: ["No equipment needed", "Quick sessions", "Hotel room ready"],
  },
];

export const ProgramsSection = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  return (
    <section id="programs" className="py-24 pb-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 " />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Specialized Programs
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            One Platform.{" "}
            <span className="text-gradient-hero">Every Journey.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're preparing for motherhood, seeking senior vitality, or
            training the next generation — we have a specialized path designed
            just for you.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <ProgramCard key={program.title} {...program} delay={index * 100} />
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <a href = "https://calendly.com/sculptandstrive/30min?month=2025-09" target="_blank">
          <Button variant="hero" size="lg">
            Learn More
          </Button>
        </a>
      </div>
    </section>
  );
};
