import { Card } from "@/components/ui/card";
import {
  Smartphone,
  Brain,
  BarChart3,
  Video,
  MessageCircle,
  Calendar,
  Zap,
  Shield,
  Utensils,
  Users,
  Activity,
  Award,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Positive Mindset",
    description: "Stay patient and kind to yourself. Fitness is a journey—every small step counts toward your goals.",
    category: "Mindset",
  },
  {
    icon: Video,
    title: "HD Video Guidance",
    description: "Every exercise includes professional video demonstrations with form cues and modifications.",
    category: "Training",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track everything from workout volume to sleep quality with beautiful, actionable insights.",
    category: "Progress",
  },
  {
    icon: Utensils,
    title: "Nutrition Planning",
    description: "Macro-calculated meal plans tailored to your goals, preferences, and dietary restrictions.",
    category: "Nutrition",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Flexible workout scheduling that adapts to your life, with smart reminders and recovery days.",
    category: "Planning",
  },
  {
    icon: MessageCircle,
    title: "Expert Support",
    description: "Direct messaging with certified trainers for form checks, questions, and motivation.",
    category: "Support",
  },
  {
    icon: Users,
    title: "Community Groups",
    description: "Join groups with similar goals for accountability, challenges, and celebration.",
    category: "Community",
  },
  {
    icon: Activity,
    title: "Postural Analysis",
    description: "Comprehensive movement screening identifies imbalances before they become injuries.",
    category: "Assessment",
  },
  {
    icon: Smartphone,
    title: "Offline Access",
    description: "Download workouts for offline use — train anywhere, even without internet.",
    category: "Convenience",
  },
  {
    icon: Zap,
    title: "Quick Workouts",
    description: "Time-crunched? Access effective 10-20 minute workouts that deliver results.",
    category: "Efficiency",
  },
  {
    icon: Shield,
    title: "Safe Progressions",
    description: "Evidence-based exercise progressions ensure safe, sustainable improvement.",
    category: "Safety",
  },
  {
    icon: Award,
    title: "Achievements & Badges",
    description: "Earn rewards for consistency, milestones, and challenges completed.",
    category: "Motivation",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Platform Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="text-gradient-hero">Succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From AI-powered programming to expert support, our platform is designed to 
            remove every barrier between you and your goals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              variant="glass"
              className="p-6 group hover:border-primary/30 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Category badge */}
              <div className="inline-block text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full mb-4">
                {feature.category}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
