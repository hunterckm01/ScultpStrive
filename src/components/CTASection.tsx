import { Heart, Shield, Check, Star, Users, Award, Sparkles, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthModal } from "./auth/AuthModal";
import { useState } from "react";

const trustStats = [
  { value: "14,400+", label: "Lives Transformed", icon: Users },
  { value: "98%", label: "Client Satisfaction", icon: Star },
  { value: "10+", label: "Years of Excellence", icon: Award },
];

const miniTestimonials = [
  {
    name: "Vijay patil",
    quote:
      "Sculpt and Strive is an amazing online fitness platform. The workouts are effective, well-planned, and easy to follow. The trainers are motivating and make every session enjoyable.",
    avatar: "V",
  },
  {
    name: "Sanjay Singh",
    quote:
      "I love how Sculpt and Strive keeps me consistent with my fitness goals. The online classes are energetic, challenging, and perfect for working out from home. Highly recommended!",
    avatar: "S",
  },
  {
    name: "Prashant Seth",
    quote:
      "These online fitness classes are great for all fitness levels. Sculpt and Strive provides clear instructions and excellent guidance. I’ve noticed real improvements in my strength and stamina..",
    avatar: "P",
  },
  // {
  //   name: "Pravesh sadashiv",
  //   quote:
  //     "Sculpt and Strive has transformed my daily routine. The workouts are time-efficient and deliver real results. It feels like having a personal trainer at home!",
  //   avatar: "P",
  // },
  // {
  //   name: "Manpreet Singh",
  //   quote:
  //     "The best part about Sculpt and Strive is the positive energy and support. The online classes are fun, motivating, and well-structured. Totally worth it!",
  //   avatar: "M",
  // },
];

const guarantees = [
  { icon: Shield, text: "7-Day Free Trial", subtext: "No commitment required" },
  { icon: Heart, text: "14-Day Money Back", subtext: "100% risk-free guarantee" },
  { icon: Sparkles, text: "Personalized Plan", subtext: "Built just for you" },
];

export const CTASection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-[10%] w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-[5%] w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* We Believe Badge - Enhanced */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20 shadow-lg">
            <Heart className="w-5 h-5 text-white fill-white animate-pulse" />
            <span className="text-sm font-bold text-white tracking-wide uppercase">
              We Believe In Your Journey
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Your Transformation
            <br />
            <span className="relative">
              Starts Today
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M2 10C50 3 150 3 298 10"
                  stroke="hsl(var(--secondary))"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Emotional Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-4 max-w-2xl mx-auto leading-relaxed">
            Join thousands who stopped waiting for "someday" and started living
            their{" "}
            <span className="text-secondary font-bold">
              healthiest, happiest life
            </span>
            .
          </p>

          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Every body deserves a program that respects where they are and
            celebrates where they're going.
          </p>
        </div>

        {/* Trust Stats Row */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-12">
          {trustStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mb-3 backdrop-blur-sm">
                <stat.icon className="w-6 h-6 text-secondary" />
              </div>
              <div className="font-display text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-white/60 text-xs md:text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mini Testimonials */}
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12 ">
          {miniTestimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:bg-white/15 transition-all duration-300 group "
            >
              <Quote className="w-6 h-6 text-secondary/60 mb-3 group-hover:text-secondary transition-colors" />
              <p className="text-white/90 text-sm mb-4 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center text-white text-sm font-bold">
                  {testimonial.avatar}
                </div>
                <span className="text-white/70 text-sm font-medium">
                  {testimonial.name}
                </span>
                <div className="flex ml-auto">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 text-secondary fill-secondary"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3  gap-3 md:gap-6 max-w-3xl mx-auto mb-12">
          {guarantees.map((guarantee) => (
            <div
              key={guarantee.text}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300"
            >
              <guarantee.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-white font-bold text-sm md:text-base mb-1">
                {guarantee.text}
              </div>
              <div className="text-white/50 text-xs md:text-sm">
                {guarantee.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="https://calendly.com/sculptandstrive/30min?month=2025-09"
            target="_blank"
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold px-10 py-6 text-lg rounded-xl shadow-2xl shadow-black/20 group transition-all duration-300 hover:scale-105"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a
            href="https://calendly.com/sculptandstrive/30min?month=2025-09"
            target="_blank"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white bg-transparent hover:bg-white/10 font-semibold px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
            >
              See How It Works
            </Button>
          </a>
        </div>

        {/* Bottom Trust Elements */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm">
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-secondary" />
            No credit card required
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-secondary" />
            Cancel anytime
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-secondary" />
            Expert support included
          </span>
        </div>

        {/* Trust Badge */}
        {/* <div className="mt-10 flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {["S", "M", "J", "A", "R"].map((initial, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-white text-xs font-bold border-2 border-white/20"
              >
                {initial}
              </div>
            ))}
          </div> */}
        {/* <p className="text-white/80 text-sm">
            <span className="font-bold text-white">2,847</span> people started their journey this week
          </p> */}
        {/* </div> */}
      </div>
    </section>
  );
};
