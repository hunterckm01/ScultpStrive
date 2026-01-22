import { Heart, Users, Baby, Briefcase, Plane, Activity, Shield, Sparkles, HandHeart, Target, TrendingUp, Award, Clock } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const audiences = [
  { icon: Users, label: "Beginners" },
  { icon: Shield, label: "Seniors 55+" },
  { icon: Heart, label: "Youth 6+" },
  { icon: Briefcase, label: "Busy Professionals" },
  { icon: Plane, label: "Travelers" },
  { icon: Baby, label: "Pre/Postnatal" },
  { icon: Activity, label: "Injury Recovery" },
];

const pillars = [
  {
    icon: Target,
    title: "Your Stage",
    description: "We meet you exactly where you are in your fitness journey"
  },
  {
    icon: Activity,
    title: "Your Schedule", 
    description: "Programs that adapt to your life, not the other way around"
  },
  {
    icon: HandHeart,
    title: "Your Comfort",
    description: "A nurturing approach for body, mind, and confidence"
  }
];

const trustStats = [
  // { icon: Users, value: 50000, suffix: "+", label: "Lives Transformed", color: "text-primary" },
  { icon: TrendingUp, value: 98, suffix: "%", label: "Success Rate", color: "text-secondary" },
  { icon: Award, value: 15, suffix: "+", label: "Years Experience", color: "text-primary" },
  { icon: Clock, value: 24, suffix: "/7", label: "Support Available", color: "text-secondary" },
];

const useCountUp = (end: number, duration: number = 2000, startOnView: boolean = true) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, startOnView]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasStarted]);

  return { count, ref };
};

const StatCounter = ({ stat }: { stat: typeof trustStats[0] }) => {
  const { count, ref } = useCountUp(stat.value, 2000);
  
  return (
    <div ref={ref} className="text-center group">
      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
        <stat.icon className={`w-8 h-8 ${stat.color}`} />
      </div>
      <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
        {count.toLocaleString()}<span className={stat.color}>{stat.suffix}</span>
      </div>
      <div className="text-sm text-muted-foreground">{stat.label}</div>
    </div>
  );
};

export const PhilosophySection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2.5 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">We Believe</span>
            </div>

            {/* Main Inspiring Message */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up leading-tight">
              Everyone Deserves to Feel{" "}
              <span className="text-gradient-hero">Strong, Confident</span>
              <br className="hidden sm:block" />
              <span className="text-gradient-hero"> & Cared For</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              —no matter where you start.
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            {pillars.map((pillar, index) => (
              <div 
                key={pillar.title}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:border-primary/30 hover:bg-card/80 transition-all duration-300 group"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <pillar.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>

          {/* Trust Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {trustStats.map((stat) => (
              <StatCounter key={stat.label} stat={stat} />
            ))}
          </div>

          {/* Central Philosophy Card */}
          <div className="bg-gradient-to-br from-card to-card/80 border border-primary/20 rounded-3xl p-8 md:p-12 mb-12 text-center relative overflow-hidden animate-slide-up" style={{ animationDelay: "0.25s" }}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-secondary fill-secondary/30" />
                <span className="text-2xl font-display font-bold text-gradient-hero">@sculptandstrive</span>
              </div>

              <blockquote className="text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed mb-6 font-medium">
                "We meet you at <span className="text-primary font-bold">your stage</span>, <span className="text-primary font-bold">your schedule</span>, and <span className="text-primary font-bold">your comfort level</span>, guiding you with a method that nurtures body, mind, and confidence."
              </blockquote>

              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />

              <p className="text-muted-foreground text-base md:text-lg italic">
                You're not just joining a program—<span className="text-foreground font-semibold">you're choosing support.</span>
              </p>
            </div>
          </div>

          {/* Audience Tags */}
          <div className="text-center mb-10">
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              At Every Age. Every Stage. Every Body.
            </p>
            <div className="flex flex-wrap justify-center gap-3 animate-fade-in" style={{ animationDelay: "0.35s" }}>
              {audiences.map((audience) => (
                <div
                  key={audience.label}
                  className="flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-full px-4 py-2 text-sm text-muted-foreground hover:border-primary/40 hover:text-foreground hover:bg-card transition-all duration-300"
                >
                  <audience.icon className="w-4 h-4 text-primary" />
                  <span>{audience.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 border border-primary/20 rounded-2xl px-8 py-6">
              <p className="text-lg md:text-xl text-foreground font-medium">
                Begin your journey with
              </p>
              <p className="text-2xl md:text-3xl font-display font-bold text-gradient-hero">
                Sculpt and Strive
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Heart className="w-4 h-4 text-secondary fill-secondary" />
                <span>Where your transformation begins</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
