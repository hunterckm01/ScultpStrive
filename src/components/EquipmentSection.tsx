import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Circle, // for kettlebell
  Grip, // for bands
  User, // for bodyweight
  Plane, // for travel
  ArrowRight,
  Play,
  Clock,
  Flame,
  Target
} from "lucide-react";

const equipmentTypes = [
  {
    icon: Circle,
    name: "Kettlebell Training",
    tagline: "Power & Fluidity",
    description: "Master the art of kettlebell training with exercises that build explosive power, core strength, and cardiovascular endurance in one fluid movement.",
    workouts: 45,
    avgDuration: "25-40 min",
    intensity: "Medium-High",
    benefits: [
      "Full-body conditioning",
      "Improved grip strength",
      "Enhanced hip mobility",
      "Metabolic boost"
    ],
    featured: ["Turkish Get-Up", "Swings", "Clean & Press", "Goblet Squats"],
    gradient: "from-primary to-primary/70",
  },
  {
    icon: Grip,
    name: "Resistance Bands",
    tagline: "Versatile & Joint-Friendly",
    description: "Perfect for all fitness levels, resistance bands provide progressive tension for muscle building, rehabilitation, and mobility work without joint stress.",
    workouts: 60,
    avgDuration: "15-30 min",
    intensity: "Low-High",
    benefits: [
      "Joint-friendly resistance",
      "Portable anywhere",
      "Muscle activation",
      "Rehab-friendly"
    ],
    featured: ["Pull-Aparts", "Banded Squats", "Face Pulls", "Monster Walks"],
    gradient: "from-secondary to-secondary/70",
  },
  {
    icon: User,
    name: "Bodyweight Training",
    tagline: "Master Your Body",
    description: "Build incredible strength, control, and body awareness using nothing but your own weight. From basics to advanced calisthenics progressions.",
    workouts: 80,
    avgDuration: "20-45 min",
    intensity: "All Levels",
    benefits: [
      "No equipment needed",
      "Anywhere, anytime",
      "Functional strength",
      "Body control"
    ],
    featured: ["Push-up Variations", "Pistol Squats", "Pull-ups", "Planks"],
    gradient: "from-accent to-accent/70",
  },
  {
    icon: Plane,
    name: "Travel Workouts",
    tagline: "Fitness On The Go",
    description: "Never miss a workout while traveling. Quick, effective routines designed for hotel rooms, airports, or anywhere with limited space.",
    workouts: 50,
    avgDuration: "10-20 min",
    intensity: "Quick & Intense",
    benefits: [
      "No equipment required",
      "Small space friendly",
      "Time efficient",
      "Maintain momentum"
    ],
    featured: ["Hotel HIIT", "Airport Stretches", "Jetlag Recovery", "Quick Burns"],
    gradient: "from-charcoal-600 to-charcoal-400",
  },
];

export const EquipmentSection = () => {
  return (
    <section id="equipment" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Training Methods
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Train Your Way,{" "}
            <span className="text-gradient-hero">Anywhere</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you prefer kettlebells, bands, or pure bodyweight — we have expertly designed 
            programs for every training style and equipment preference.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {equipmentTypes.map((equipment, index) => (
            <Card 
              key={equipment.name}
              variant="interactive"
              className="p-0 overflow-hidden group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6 pb-4">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${equipment.gradient} flex items-center justify-center shadow-soft`}>
                    <equipment.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Play className="w-4 h-4" />
                    {equipment.workouts} workouts
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="font-display text-2xl font-bold mb-1">{equipment.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{equipment.tagline}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {equipment.description}
                </p>

                {/* Stats */}
                <div className="flex gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{equipment.avgDuration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Flame className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{equipment.intensity}</span>
                  </div>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {equipment.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-sm">
                      <Target className="w-3 h-3 text-primary shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured exercises */}
              <div className="bg-muted/30 p-4 border-t border-border/50">
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {equipment.featured.slice(0, 3).map((exercise) => (
                      <span 
                        key={exercise}
                        className="text-xs bg-background/80 px-2 py-1 rounded-full text-muted-foreground"
                      >
                        {exercise}
                      </span>
                    ))}
                    <span className="text-xs text-primary font-medium">
                      +{equipment.workouts - 3} more
                    </span>
                  </div>
                  <Button variant="ghost" size="sm" className="shrink-0">
                    Explore
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
