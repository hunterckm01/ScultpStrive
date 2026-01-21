import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight, TrendingUp, Scale, Heart } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    age: 34,
    program: "Prenatal Fitness",
    quote: "The prenatal program helped me stay strong through pregnancy and bounce back faster postpartum. The personalized approach and understanding of each trimester made all the difference. I felt supported every step of the way.",
    rating: 5,
    avatar: "SM",
    result: "Maintained fitness through pregnancy",
    resultIcon: Heart,
    duration: "9 months",
    verified: true,
  },
  {
    name: "Robert Kim",
    age: 68,
    program: "Senior Vitality 55+",
    quote: "At 68, I'm moving better than I did at 50. The focus on functional strength and balance has completely transformed my daily life. I can play with my grandkids without worrying about falls or fatigue.",
    rating: 5,
    avatar: "RK",
    result: "Improved mobility by 40%",
    resultIcon: TrendingUp,
    duration: "8 months",
    verified: true,
  },
  {
    name: "Maria Lopez",
    age: 42,
    program: "Corrective Exercise",
    quote: "Years of desk work left me with chronic pain. The postural assessment identified issues I didn't know I had. Through targeted corrective exercises, I'm pain-free for the first time in years!",
    rating: 5,
    avatar: "ML",
    result: "Pain-free after 6 months",
    resultIcon: Heart,
    duration: "6 months",
    verified: true,
  },
  {
    name: "James Chen",
    age: 45,
    program: "Weight Transformation",
    quote: "Lost 50 pounds and kept it off for over a year. The combination of smart training and nutrition tracking made weight loss feel sustainable, not punishing. The community support was invaluable.",
    rating: 5,
    avatar: "JC",
    result: "Lost 50 lbs sustainably",
    resultIcon: Scale,
    duration: "10 months",
    verified: true,
  },
  {
    name: "Emma Thompson",
    age: 28,
    program: "Women's Fitness",
    quote: "Finally, a program that understands women's bodies! Training around my cycle has been a game-changer. More energy, better results, and no more fighting against my body.",
    rating: 5,
    avatar: "ET",
    result: "Increased strength 30%",
    resultIcon: TrendingUp,
    duration: "5 months",
    verified: true,
  },
  {
    name: "David Park",
    age: 14,
    program: "Youth Fitness (6-16)",
    quote: "My son's confidence and athletic ability have skyrocketed. The age-appropriate training helped him make the varsity soccer team as a freshman!",
    rating: 5,
    avatar: "DP",
    result: "Made varsity team",
    resultIcon: Star,
    duration: "7 months",
    verified: true,
    parentTestimonial: true,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Success Stories
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Real People.{" "}
            <span className="text-gradient-hero">Real Results.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands who have transformed their health with our specialized approach. 
            These are their stories.
          </p>
        </div>

        {/* Featured testimonial */}
        <Card 
          variant="gradient" 
          className="p-8 md:p-12 mb-12 relative overflow-hidden"
        >
          <div className="absolute top-8 right-8 opacity-20">
            <Quote className="w-24 h-24" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                "This platform changed my entire perspective on fitness. At 55, I thought my best days were behind me. 
                Now I'm stronger, more flexible, and more energetic than I was in my 40s."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="font-display font-bold text-lg">TW</span>
                </div>
                <div>
                  <div className="font-semibold">Thomas Williams</div>
                  <div className="text-sm opacity-80">Senior Vitality Program • 14 months</div>
                </div>
              </div>
            </div>
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              <TrendingUp className="w-10 h-10 mx-auto mb-3" />
              <div className="font-display text-4xl font-bold mb-1">35%</div>
              <div className="text-sm opacity-80">Strength Increase</div>
              <div className="h-px bg-white/20 my-4" />
              <div className="font-display text-4xl font-bold mb-1">50%</div>
              <div className="text-sm opacity-80">Better Mobility</div>
            </div>
          </div>
        </Card>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              variant="elevated"
              className="p-6 relative overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-primary/10">
                <Quote className="w-12 h-12" />
              </div>

              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center shrink-0">
                  <span className="text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                    {testimonial.parentTestimonial && <span className="text-muted-foreground"> (Parent)</span>}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.program} • {testimonial.duration}
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Result badge */}
              <div className="flex items-center gap-2 p-3 bg-sage-50 rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <testimonial.resultIcon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{testimonial.result}</div>
                  {testimonial.verified && (
                    <div className="text-xs text-muted-foreground">✓ Verified result</div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Read More Success Stories
            <ArrowRight className="w-5 h-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Over 500+ verified transformations
          </p>
        </div>
      </div>
    </section>
  );
};
