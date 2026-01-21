import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ArrowRight, Calendar, MessageCircle, Trophy } from "lucide-react";

const groupTypes = [
  {
    title: "Prenatal Moms",
    members: 24,
    nextSession: "Tomorrow, 10 AM",
    focus: "Core & Breath Work",
  },
  {
    title: "Senior Strength 55+",
    members: 18,
    nextSession: "Wed, 9 AM",
    focus: "Balance & Mobility",
  },
  {
    title: "Weight Loss Warriors",
    members: 32,
    nextSession: "Today, 6 PM",
    focus: "HIIT Circuit",
  },
  {
    title: "Youth Athletes",
    members: 16,
    nextSession: "Sat, 11 AM",
    focus: "Speed & Agility",
  },
];

export const GroupTrainingSection = () => {
  return (
    <section className="py-24 bg-accent relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Community Training
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-accent-foreground">
            Stronger{" "}
            <span className="text-gradient-hero">Together</span>
          </h2>
          <p className="text-lg text-accent-foreground/70">
            Join groups of like-minded individuals with similar fitness goals. 
            Share the journey, celebrate wins, and push each other forward.
          </p>
        </div>

        {/* Group Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {groupTypes.map((group, index) => (
            <Card
              key={group.title}
              className="bg-card/10 backdrop-blur-sm border-accent-foreground/10 p-6 hover:bg-card/20 transition-all duration-300 hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 gradient-hero rounded-2xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex items-center gap-1 text-accent-foreground/60">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{group.members}</span>
                </div>
              </div>
              
              <h3 className="font-display font-bold text-lg text-accent-foreground mb-3">
                {group.title}
              </h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-accent-foreground/70">
                  <Calendar className="w-4 h-4" />
                  {group.nextSession}
                </div>
                <div className="flex items-center gap-2 text-sm text-accent-foreground/70">
                  <Trophy className="w-4 h-4" />
                  {group.focus}
                </div>
              </div>

              <Button variant="glass" size="sm" className="w-full text-accent-foreground border-accent-foreground/20 hover:bg-accent-foreground/10">
                Join Group
              </Button>
            </Card>
          ))}
        </div>

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-accent flex items-center justify-center text-primary-foreground text-xs font-semibold"
                >
                  {["S", "M", "J", "K"][i - 1]}
                </div>
              ))}
            </div>
            <div className="text-accent-foreground/80">
              <span className="font-semibold text-accent-foreground">500+</span> members active this week
            </div>
          </div>
          
          <Button variant="hero" size="lg">
            Find Your Group
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
