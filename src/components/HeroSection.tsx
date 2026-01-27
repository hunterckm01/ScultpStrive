import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Shield, Heart, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/sculpt-and-strive-logo.jpg";

export const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Welcome! Check your inbox for next steps.");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Enhanced multi-layer gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-secondary/8" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-primary/5" />
      
      {/* Logo watermark - large centered */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.04] pointer-events-none -mt-6 sm:mt-6"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          filter: 'grayscale(100%)',
        }}
      />
      
      {/* Floating orbs for depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-fade-in mt-10">
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-semibold text-primary">We Believe In You</span>
          </div>

          {/* Main Heading - Clear & Direct */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-[1.1] animate-slide-up">
            Get Fit.{" "}
            <span className="text-gradient-hero">Stay Healthy.</span>
            <br />
            <span className="text-muted-foreground text-3xl sm:text-4xl md:text-5xl">At Any Age.</span>
          </h1>

          {/* Single Clear Value Proposition */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Whether you're a beginner, senior, new mom, or busy professional — 
            we create <span className="text-foreground font-medium">your personalized plan</span> that fits your life.
          </p>

          {/* Simple Email Capture - Main CTA */}
          <div className="max-w-md mx-auto mb-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-14 bg-card/80 backdrop-blur-sm border-border rounded-xl text-base px-5"
                  disabled={isSubmitting}
                />
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="xl" 
                  className="h-14 px-8 rounded-xl font-bold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "..." : "Start Free"}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
            ) : (
              <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-3" />
                <p className="font-bold text-foreground text-lg">You're In! 🎉</p>
                <p className="text-sm text-muted-foreground">Check your email to start your journey.</p>
              </div>
            )}
          </div>

          {/* Trust Line */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-primary" />
              7-day free trial
            </span>
            <span className="hidden sm:inline">•</span>
            <span>No credit card</span>
            <span className="hidden sm:inline">•</span>
            <span className="font-medium text-primary">14-day money-back guarantee</span>
          </div>

          {/* Social Proof Stats - Clean Row */}
          <div className="flex items-center justify-center gap-8 md:gap-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { number: "20+", label: "Happy Members" },
              { number: "98%", label: "Success Rate" },
              { number: "2+", label: "Expert Trainers" },
            ].map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl md:text-3xl font-bold text-gradient-hero">{stat.number}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
