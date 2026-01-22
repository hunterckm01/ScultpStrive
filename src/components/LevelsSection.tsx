import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  Zap, 
  Crown, 
  Diamond, 
  Shield, 
  Target, 
  TrendingUp,
  Users,
  Heart,
  Baby,
  Dumbbell,
  Activity,
  Sparkles,
  ChevronRight
} from "lucide-react";

const levels = [
  {
    level: 1,
    name: "Beginner",
    title: "Foundation Builder",
    icon: Shield,
    color: "from-slate-400 to-slate-500",
    bgColor: "bg-slate-100",
    textColor: "text-slate-600",
    borderColor: "border-slate-300",
    xpRequired: 0,
    xpNext: 500,
    benefits: [
      "Access to beginner workouts",
      "Basic nutrition guides",
      "Community forum access",
      "Weekly progress reports"
    ],
    description: "Perfect for those just starting their fitness journey"
  },
  {
    level: 2,
    name: "Intermediate",
    title: "Progress Maker",
    icon: Star,
    color: "from-sage-500 to-sage-600",
    bgColor: "bg-sage-100",
    textColor: "text-sage-700",
    borderColor: "border-sage-300",
    xpRequired: 500,
    xpNext: 1500,
    benefits: [
      "All Beginner benefits",
      "Advanced workout library",
      "Personalized meal plans",
      "Group challenge access",
      "Priority support"
    ],
    description: "For those ready to push beyond the basics"
  },
  {
    level: 3,
    name: "Advanced",
    title: "Fitness Warrior",
    icon: Zap,
    color: "from-terracotta-500 to-terracotta-600",
    bgColor: "bg-terracotta-100",
    textColor: "text-terracotta-600",
    borderColor: "border-terracotta-300",
    xpRequired: 1500,
    xpNext: 3500,
    benefits: [
      "All Intermediate benefits",
      "Expert-level programs",
      "1-on-1 trainer sessions",
      "Custom workout builder",
      "Advanced analytics",
      "Exclusive challenges"
    ],
    description: "Master complex movements and techniques"
  },
  {
    level: 4,
    name: "Elite",
    title: "Champion",
    icon: Crown,
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-100",
    textColor: "text-amber-700",
    borderColor: "border-amber-300",
    xpRequired: 3500,
    xpNext: 7000,
    benefits: [
      "All Advanced benefits",
      "VIP trainer access",
      "Competition prep programs",
      "Nutrition coaching",
      "Recovery optimization",
      "Exclusive community",
      "Event invitations"
    ],
    description: "For dedicated athletes pursuing excellence"
  },
  {
    level: 5,
    name: "Legend",
    title: "Kinetic Master",
    icon: Diamond,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-100",
    textColor: "text-purple-700",
    borderColor: "border-purple-300",
    xpRequired: 7000,
    xpNext: null,
    benefits: [
      "All Elite benefits",
      "Become a mentor",
      "Exclusive merchandise",
      "Lifetime achievements",
      "Hall of Fame entry",
      "Create community challenges",
      "Early feature access",
      "Annual retreat invitation"
    ],
    description: "The pinnacle of fitness achievement"
  },
];


const goalBasedPaths = [
  {
    goal: "Weight Loss",
    icon: TrendingUp,
    phases: ["Kickstart", "Momentum", "Transform", "Maintain"],
    duration: "12-24 weeks",
    color: "terracotta"
  },
  {
    goal: "Muscle Building",
    icon: Dumbbell,
    phases: ["Foundation", "Growth", "Peak", "Refine"],
    duration: "16-32 weeks",
    color: "sage"
  },
  {
    goal: "Flexibility",
    icon: Activity,
    phases: ["Unlock", "Expand", "Flow", "Master"],
    duration: "8-16 weeks",
    color: "terracotta"
  },
  {
    goal: "Corrective Exercise",
    icon: Target,
    phases: ["Assess", "Correct", "Strengthen", "Prevent"],
    duration: "6-12 weeks",
    color: "sage"
  },
];

export const LevelsSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-100 text-sage-700 text-sm font-medium mb-6">
            <Crown className="w-4 h-4" />
            Progression System
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Your Journey, Your
            <span className="gradient-text block">Level of Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Progress through personalized levels based on your goals, age, and fitness journey. 
            Unlock rewards, badges, and exclusive content as you advance.
          </p>
        </div>

        {/* Main Level Progression */}
        <div className="mb-20 ">
          <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
            Universal Progression Levels
          </h3>
          
          {/* Desktop: Horizontal Timeline */}
          <div className="hidden lg:block relative ">
            {/* Connection Line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-slate-300 via-terracotta-400 to-purple-500" />
            
            <div className="grid grid-cols-5 gap-4">
              {levels.map((level, index) => {
                const IconComponent = level.icon;
                return (
                  <div key={level.level} className="relative">
                    {/* Level Circle */}
                    <div className="flex justify-center mb-6">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${level.color} flex items-center justify-center shadow-lg z-10 relative`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <Card variant="interactive" className={`border-2 ${level.borderColor} h-full`}>
                      <CardHeader className="text-center pb-2">
                        <span className={`text-xs font-bold ${level.textColor} uppercase tracking-wider`}>
                          Level {level.level}
                        </span>
                        <CardTitle className="text-lg">{level.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{level.title}</p>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="text-center mb-4">
                          <span className={`text-xs ${level.textColor} font-medium`}>
                            {level.xpNext ? `${level.xpRequired.toLocaleString()} - ${level.xpNext.toLocaleString()} XP` : `${level.xpRequired.toLocaleString()}+ XP`}
                          </span>
                        </div>
                        <ul className="space-y-1">
                          {level.benefits.slice(0, 4).map((benefit, i) => (
                            <li key={i} className="text-xs text-muted-foreground flex items-start gap-1">
                              <span className={`${level.textColor} mt-0.5`}>•</span>
                              {benefit}
                            </li>
                          ))}
                          {level.benefits.length > 4 && (
                            <li className="text-xs text-muted-foreground">
                              +{level.benefits.length - 4} more benefits
                            </li>
                          )}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile: Vertical Cards */}
          <div className="lg:hidden space-y-4">
            {levels.map((level) => {
              const IconComponent = level.icon;
              return (
                <Card key={level.level} variant="interactive" className={`border-2 ${level.borderColor}`}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${level.color} flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-bold ${level.textColor} uppercase`}>Level {level.level}</span>
                          <span className="text-lg font-display font-bold text-foreground">{level.name}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{level.title}</p>
                        <p className="text-xs text-muted-foreground">{level.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        
        {/* Goal-Based Progression Paths */}
        <div>
          <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
            Goal-Based Training Phases
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {goalBasedPaths.map((path) => {
              const IconComponent = path.icon;
              const gradientClass = path.color === 'terracotta' 
                ? 'from-terracotta-500 to-terracotta-600' 
                : 'from-sage-500 to-sage-600';
              
              return (
                <Card key={path.goal} variant="interactive">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${gradientClass} flex items-center justify-center mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{path.goal}</CardTitle>
                    <p className="text-sm text-muted-foreground">{path.duration}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      {/* Vertical line */}
                      <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-muted" />
                      
                      <div className="space-y-3">
                        {path.phases.map((phase, index) => (
                          <div key={phase} className="flex items-center gap-3 relative">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold z-10 ${
                              index === 0 
                                ? `bg-gradient-to-br ${gradientClass} text-white` 
                                : 'bg-muted text-muted-foreground'
                            }`}>
                              {index + 1}
                            </div>
                            <span className={`text-sm ${index === 0 ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>
                              {phase}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Card variant="gradient" className="inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-white/90 mb-6 max-w-lg">
                Take our assessment to discover your starting level and get a personalized progression path.
              </p>
              <Button variant="secondary" size="lg" className="bg-white text-terracotta-600 hover:bg-white/90">
                Find Your Level
                <Target className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
