import { useState } from "react";
import { Heart, Brain, Moon, Zap, Shield, Clock, ArrowRight, Check, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LifestyleQuiz } from "@/components/LifestyleQuiz";
import logo from "@/assets/sculpt-and-strive-logo.jpg";

const adaptiveFactors = [
  { icon: Brain, label: "Stress and mental load" },
  { icon: Moon, label: "Sleep and recovery" },
  { icon: Zap, label: "Energy, fatigue, and overwhelm" },
];

const designedForFeatures = [
  "Short, effective sessions",
  "Flexible plans",
  "Consistency over intensity",
];

export const RealLifeFitnessSection = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
      {/* Watermark logo */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          filter: 'grayscale(100%)',
        }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Fitness for <span className="text-gradient-hero">Real Life.</span>
            <br />
            <span className="text-muted-foreground">Not Ideal Weeks.</span>
          </h2>
          
          <div className="max-w-2xl mx-auto space-y-4 mt-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              At Sculpt & Strive, we believe most people don't fail at fitness—
              <span className="text-foreground font-semibold"> fitness fails them.</span>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              It's built for perfect schedules, endless motivation, and bodies that never get tired, injured, or stressed.
            </p>
            <p className="text-lg font-medium text-primary">
              Real life doesn't work like that.
            </p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
          {/* Built to Last Card */}
          <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 group">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Built to Last — <span className="text-primary">Not Burn You Out</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We don't believe in extremes, 30-day challenges, or "no excuses" culture.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We build fitness that fits your life—through busy seasons, injuries, aging, and restarts.
            </p>
            <div className="bg-primary/5 rounded-xl p-4 border-l-4 border-primary">
              <p className="text-sm font-medium text-foreground italic">
                "If a program only works when life is calm, it's not a good program."
              </p>
            </div>
          </div>

          {/* Training That Adapts Card */}
          <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-secondary/30 transition-all duration-300 group">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary/10 rounded-2xl mb-6 group-hover:bg-secondary/20 transition-colors">
              <Zap className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Training That <span className="text-secondary">Adapts to You</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Your training adjusts to:
            </p>
            <div className="space-y-3 mb-6">
              {adaptiveFactors.map((factor) => (
                <div key={factor.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <factor.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-foreground font-medium">{factor.label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <p className="text-muted-foreground">Some days progress is <span className="text-foreground font-semibold">intensity</span>.</p>
              <p className="text-muted-foreground">Some days progress is <span className="text-foreground font-semibold">recovery</span>.</p>
              <p className="text-primary font-bold mt-2">Both count.</p>
            </div>
          </div>
        </div>

        {/* Pain-Aware Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-nurturing/10 via-card to-nurturing/10 rounded-3xl p-8 md:p-12 border border-nurturing/20 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-nurturing/20 rounded-full mb-6">
              <Heart className="w-8 h-8 text-nurturing" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Pain-Aware. Female-Focused. <span className="text-nurturing">Fear-Free.</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              We help you train safely, confidently, and sustainably—especially through life stages that most programs ignore.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              <span className="px-4 py-2 bg-background/80 rounded-full border border-border">No shame</span>
              <span className="px-4 py-2 bg-background/80 rounded-full border border-border">No punishment</span>
              <span className="px-4 py-2 bg-background/80 rounded-full border border-border">No burnout</span>
            </div>
            <p className="text-foreground font-medium mt-6">
              Just smart, supportive training that lasts.
            </p>
          </div>
        </div>

        {/* Designed for Busy Humans */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-vitality/10 rounded-2xl mb-6">
            <Clock className="w-7 h-7 text-vitality" />
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">
            Designed for <span className="text-vitality">Busy, Real Humans</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {designedForFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
                <Check className="w-4 h-4 text-vitality" />
                <span className="text-foreground font-medium">{feature}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-muted-foreground">
            Fitness you don't quit—<span className="text-foreground font-semibold">because it finally fits.</span>
          </p>
        </div>

        {/* Interactive Quiz Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl border border-border/50 overflow-hidden">
            <button
              onClick={() => setShowQuiz(!showQuiz)}
              className="w-full p-6 md:p-8 flex items-center justify-between hover:bg-muted/30 transition-colors"
            >
              <div className="text-left">
                <h3 className="font-display text-xl md:text-2xl font-bold mb-1">
                  Find Your Perfect Training Approach
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Take our 2-minute lifestyle quiz to get personalized recommendations
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 ml-4">
                {showQuiz ? (
                  <ChevronUp className="w-6 h-6 text-primary" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-primary" />
                )}
              </div>
            </button>
            
            {showQuiz && (
              <div className="p-6 md:p-8 pt-0 border-t border-border/50 animate-fade-in">
                <LifestyleQuiz />
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-xl mx-auto text-center bg-card/80 backdrop-blur-sm rounded-3xl p-8 border border-border/50">
          <a href = "https://calendly.com/sculptandstrive/30min" target = "_blank">
            <Button variant="hero" size="xl" className="mb-4 group">
              Try Sculpt & Strive Risk-Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <p className="text-sm text-muted-foreground mb-2">
            If it doesn't feel right within 14 days, you get a full refund.
          </p>
          <p className="text-sm font-medium text-primary">
            Because when fitness works in real life, you don't have to force it.
          </p>
        </div>
      </div>
    </section>
  );
};
