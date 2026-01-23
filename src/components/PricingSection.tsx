import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 29,
    period: "month",
    description: "Perfect for beginners ready to start their fitness journey",
    features: [
      "Access to 50+ basic workouts",
      "Basic nutrition tracking",
      "Progress dashboard",
      "Community access",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Transform",
    price: 59,
    period: "month",
    description: "Our most popular plan for serious transformation",
    features: [
      "Access to 300+ workouts",
      "AI-powered program customization",
      "Advanced nutrition planning",
      "Postural assessment tools",
      "Group training access",
      "Priority trainer support",
      "Progress analytics",
      "Offline workout access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Elite",
    price: 99,
    period: "month",
    description: "Premium experience with 1-on-1 expert guidance",
    features: [
      "Everything in Transform",
      "Weekly 1-on-1 trainer calls",
      "Custom meal plans",
      "Monthly body composition analysis",
      "VIP community access",
      "Priority scheduling",
      "Family account (up to 4)",
      "Exclusive workshops",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-muted/20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Simple Pricing
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Invest in{" "}
            <span className="text-gradient-hero">Your Health</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Transparent pricing with no hidden fees. All plans include a 7-day free trial. 
            Cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              variant={plan.popular ? "gradient" : "elevated"}
              className={`p-8 relative animate-slide-up ${
                plan.popular ? "md:-mt-4 md:mb-4 ring-2 ring-primary shadow-glow" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className={`font-display text-2xl font-bold mb-2 ${plan.popular ? "text-primary-foreground" : ""}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
                <div className={`flex items-end justify-center gap-1 ${plan.popular ? "text-primary-foreground" : ""}`}>
                  <span className="text-lg">$</span>
                  <span className="font-display text-5xl font-bold">{plan.price}</span>
                  <span className={`text-sm mb-2 ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    /{plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      plan.popular ? "bg-white/20" : "bg-primary/10"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? "text-white" : "text-primary"}`} />
                    </div>
                    <span className={`text-sm ${plan.popular ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href = "https://calendly.com/sculptandstrive/30min" target="_blank">
                <Button 
                  variant={plan.popular ? "glass" : "hero"} 
                  className={`w-full ${plan.popular ? "text-primary-foreground border-white/30 hover:bg-white/20" : ""}`}
                  size="lg"
                  >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </Card>
          ))}
        </div>

        {/* Guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-card border border-border/50 rounded-full px-6 py-3">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm">
              <span className="font-semibold">30-day money-back guarantee</span>
              <span className="text-muted-foreground"> — No questions asked</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
