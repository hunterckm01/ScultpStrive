import { useEffect, useState, useRef } from "react";
import { Users, Dumbbell, Trophy, Clock, TrendingUp, Heart } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 20,
    suffix: "+",
    label: "Active Members",
    description: "Transforming lives globally",
  },
  {
    icon: Dumbbell,
    value: 50,
    suffix: "+",
    label: "Workout Programs",
    description: "For every goal & level",
  },
  {
    icon: Trophy,
    value: 98,
    suffix: "%",
    label: "Success Rate",
    description: "Members achieving goals",
  },
  {
    icon: Clock,
    value: 260,
    suffix: "+",
    label: "Training Hours",
    description: "Delivered monthly",
  },
  {
    icon: TrendingUp,
    value: 85,
    suffix: "%",
    label: "Retention Rate",
    description: "Members stay 12+ months",
  },
  {
    icon: Heart,
    value: 15,
    suffix: "+",
    label: "Specialized Programs",
    description: "For every life stage",
  },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="font-display text-4xl md:text-5xl font-bold text-gradient-hero">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

export const StatsSection = () => {
  return (
    <section className="py-20 bg-accent relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }} />
      </div>

      {/* Decorative gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
            Trusted by Thousands Worldwide
          </h2>
          <p className="text-accent-foreground/70 max-w-2xl mx-auto">
            Our numbers tell the story of real transformations, lasting results, and a community dedicated to better health.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-card/10 backdrop-blur-sm mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className="font-semibold text-accent-foreground mt-1">{stat.label}</div>
              <div className="text-sm text-accent-foreground/60">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
