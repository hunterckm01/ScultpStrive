import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Eye, Move, HandMetal, Crosshair } from "lucide-react";
import { useState } from "react";

const assessments = [
  {
    icon: Eye,
    title: "Static Posture",
    description: "Analyze standing alignment from multiple angles to identify structural imbalances.",
  },
  {
    icon: Move,
    title: "Dynamic Movement",
    description: "Observe movement quality during walking, stepping, and transitional patterns.",
  },
  {
    icon: HandMetal,
    title: "Push & Pull",
    description: "Evaluate upper body mechanics and scapular stability during resistance patterns.",
  },
  {
    icon: Crosshair,
    title: "Overhead Squat",
    description: "Comprehensive full-body assessment revealing mobility and stability deficits.",
  },
];

export const AssessmentSection = () => {
  return (
    <section
      id="assessments"
      className="py-24 bg-muted/30 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Postural Assessment
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Move Better.{" "}
              <span className="text-gradient-hero">Feel Better.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our comprehensive assessment protocol identifies movement
              dysfunctions before they become injuries. Through detailed
              analysis, we create your personalized corrective roadmap.
            </p>

            {/* Assessment cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {assessments.map((assessment, index) => (
                <Card
                  key={assessment.title}
                  variant="glass"
                  className="p-4 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 gradient-hero rounded-xl flex items-center justify-center shrink-0">
                      <assessment.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {assessment.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {assessment.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Button
              asChild
              variant="hero"
              size="lg"
              className="cursor-pointer pointer-events-auto"
            >
              <a
                href="https://calendly.com/sculptandstrive/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Your Assessment
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>

          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl border border-border/30 flex items-center justify-center relative overflow-hidden">
              {/* Body outline visualization */}
              <svg
                viewBox="0 0 200 300"
                className="w-48 h-72 text-foreground/20"
              >
                {/* Simplified body outline */}
                <ellipse
                  cx="100"
                  cy="30"
                  rx="25"
                  ry="30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="100"
                  y1="60"
                  x2="100"
                  y2="150"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="100"
                  y1="80"
                  x2="50"
                  y2="130"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="100"
                  y1="80"
                  x2="150"
                  y2="130"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="100"
                  y1="150"
                  x2="70"
                  y2="280"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="100"
                  y1="150"
                  x2="130"
                  y2="280"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>

              {/* Assessment points */}
              {[
                { x: "50%", y: "10%", label: "Head Position" },
                { x: "50%", y: "30%", label: "Shoulder Alignment" },
                { x: "50%", y: "50%", label: "Spinal Curvature" },
                { x: "50%", y: "70%", label: "Hip Level" },
                { x: "30%", y: "90%", label: "Knee Tracking" },
              ].map((point, i) => (
                <div
                  key={i}
                  className="absolute flex items-center gap-2"
                  style={{
                    left: point.x,
                    top: point.y,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap bg-card/80 backdrop-blur-sm px-2 py-1 rounded-lg hidden sm:block">
                    {point.label}
                  </span>
                </div>
              ))}

              {/* Connecting lines decoration */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full">
                  <line
                    x1="10%"
                    y1="10%"
                    x2="90%"
                    y2="10%"
                    stroke="hsl(var(--primary))"
                    strokeWidth="0.5"
                    strokeDasharray="5,5"
                  />
                  <line
                    x1="10%"
                    y1="30%"
                    x2="90%"
                    y2="30%"
                    stroke="hsl(var(--primary))"
                    strokeWidth="0.5"
                    strokeDasharray="5,5"
                  />
                  <line
                    x1="10%"
                    y1="50%"
                    x2="90%"
                    y2="50%"
                    stroke="hsl(var(--primary))"
                    strokeWidth="0.5"
                    strokeDasharray="5,5"
                  />
                  <line
                    x1="10%"
                    y1="70%"
                    x2="90%"
                    y2="70%"
                    stroke="hsl(var(--primary))"
                    strokeWidth="0.5"
                    strokeDasharray="5,5"
                  />
                  <line
                    x1="10%"
                    y1="90%"
                    x2="90%"
                    y2="90%"
                    stroke="hsl(var(--primary))"
                    strokeWidth="0.5"
                    strokeDasharray="5,5"
                  />
                </svg>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-card shadow-elevated border border-border/50 rounded-2xl p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 gradient-sage rounded-xl flex items-center justify-center">
                  <Crosshair className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <div className="font-display font-bold text-xl">360°</div>
                  <div className="text-sm text-muted-foreground">
                    Full Analysis
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
