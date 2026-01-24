import { Card } from "@/components/ui/card";
import { 
  ClipboardCheck, 
  Target, 
  Dumbbell, 
  TrendingUp, 
  ArrowRight,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Complete Your Assessment",
    description: "Start with our comprehensive postural and movement assessment. We analyze static posture, dynamic movement, push/pull patterns, and overhead squat mechanics.",
    details: [
      "4-point postural analysis",
      "Movement pattern screening",
      "Flexibility evaluation",
      "Goal setting consultation"
    ],
    color: "primary" as const,
  },
  {
    number: "02",
    icon: Target,
    title: "Get Your Custom Plan",
    description: "Based on your assessment results, life stage, and goals, we create a personalized training and nutrition program just for you.",
    details: [
      "AI-powered program design",
      "Macro-calculated meal plans",
      "Equipment preferences",
      "Schedule optimization"
    ],
    color: "secondary" as const,
  },
  {
    number: "03",
    icon: Dumbbell,
    title: "Train With Purpose",
    description: "Access your workouts anytime, anywhere. Whether it's kettlebells, bands, bodyweight, or gym training — every session moves you forward.",
    details: [
      "Video-guided exercises",
      "Real-time form feedback",
      "Progress tracking",
      "Community support"
    ],
    color: "accent" as const,
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Track & Evolve",
    description: "Monitor your progress with detailed analytics. Your program adapts as you improve, ensuring continuous results.",
    details: [
      "Weekly progress reports",
      "Body composition tracking",
      "Performance metrics",
      "Program adjustments"
    ],
    color: "primary" as const,
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-muted/20">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        {/* <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full" /> */}
        {/* <div className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full" /> */}
        {/* <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-accent rounded-full" /> */}
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Your Transformation Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Simple Steps to{" "}
            <span className="text-gradient-hero">Lasting Change</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our proven 4-step process has helped thousands achieve their fitness goals. 
            From assessment to achievement, we guide you every step of the way.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transform -translate-y-1/2 opacity-20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Arrow between cards (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-muted-foreground/30" />
                  </div>
                )}

                <Card variant="elevated" className="p-6 h-full relative group hover:shadow-glow transition-all duration-300">
                  {/* Step number */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 gradient-hero rounded-full flex items-center justify-center text-primary-foreground font-display font-bold text-sm shadow-soft">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                    step.color === 'primary' ? 'gradient-hero' : 
                    step.color === 'secondary' ? 'gradient-dark' : 'gradient-dark'
                  }`}>
                    <step.icon className={`w-7 h-7 ${
                      step.color === 'accent' ? 'text-accent-foreground' : 
                      step.color === 'secondary' ? 'text-secondary-foreground' : 'text-primary-foreground'
                    }`} />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details list */}
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-16">
            <Button  className="group hover:scale-105 cursor-pointer" >
              Start Your Journey Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
       

          <p className="text-sm text-muted-foreground mt-4">
            Free assessment • No commitment required
          </p>
        </div> */}
      </div>
    </section>
  );
};
