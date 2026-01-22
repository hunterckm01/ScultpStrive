import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  GraduationCap, 
  Instagram, 
  Linkedin,
  ArrowRight
} from "lucide-react";

const trainers = [
  {
    name: "Dr. Sarah Chen",
    title: "Head of Corrective Exercise",
    specialties: ["Postural Assessment", "Movement Screening", "Injury Prevention"],
    certifications: ["DPT", "CSCS", "FMS Level 2"],
    experience: "15+ years",
    bio: "Former physical therapist turned movement specialist, Sarah combines clinical expertise with practical training.",
    avatar: "SC",
    gradient: "from-primary to-primary/70",
  },
  {
    name: "Marcus Johnson",
    title: "Senior Fitness Coach",
    specialties: ["Senior Fitness", "Functional Training", "Fall Prevention"],
    certifications: ["NASM-CPT", "SFC", "ACE-GFI"],
    experience: "12+ years",
    bio: "Passionate about helping adults 55+ maintain independence through evidence-based training programs.",
    avatar: "MJ",
    gradient: "from-secondary to-secondary/70",
  },
  {
    name: "Elena Rodriguez",
    title: "Pre/Postnatal Specialist",
    specialties: ["Prenatal Fitness", "Postpartum Recovery", "Diastasis Recti"],
    certifications: ["ACE-CPT", "PROnatal", "AFPA Postnatal"],
    experience: "10+ years",
    bio: "Mother of three and certified specialist helping women stay strong through every phase of motherhood.",
    avatar: "ER",
    gradient: "from-terracotta-500 to-terracotta-400",
  },
  {
    name: "James Park",
    title: "Youth Athletic Development",
    specialties: ["Youth Fitness", "Sport Performance", "Motor Development"],
    certifications: ["NSCA-CSCS", "IYCA", "USA Weightlifting"],
    experience: "8+ years",
    bio: "Former collegiate athlete dedicated to building strong foundations in young athletes ages 6-16.",
    avatar: "JP",
    gradient: "from-accent to-charcoal-500",
  },
];

export const TrainerSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-muted/20">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Expert Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Meet Your{" "}
            <span className="text-gradient-hero">Transformation Team</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            World-class trainers with specialized certifications and decades of combined experience. 
            Every program is designed by experts who truly understand your needs.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <Card 
              key={trainer.name}
              variant="elevated"
              className="p-6 text-center group animate-slide-up "
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Avatar */}
              <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${trainer.gradient} flex items-center justify-center mb-4 shadow-soft group-hover:scale-105 transition-transform duration-300`}>
                <span className="font-display text-2xl font-bold text-white">
                  {trainer.avatar}
                </span>
              </div>

              {/* Info */}
              <h3 className="font-display text-xl font-bold mb-1">{trainer.name}</h3>
              <p className="text-primary text-sm font-medium mb-3">{trainer.title}</p>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {trainer.bio}
              </p>

              {/* Experience badge */}
              <div className="inline-flex items-center gap-2 bg-muted rounded-full px-3 py-1 mb-4">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{trainer.experience}</span>
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap justify-center gap-1 mb-4">
                {trainer.certifications.map((cert) => (
                  <span 
                    key={cert}
                    className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full"
                  >
                    {cert}
                  </span>
                ))}
              </div>

              {/* Specialties */}
              <div className="border-t border-border/50 pt-4">
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-2">
                  <GraduationCap className="w-3 h-3" />
                  Specialties
                </div>
                <div className="flex flex-wrap justify-center gap-1">
                  {trainer.specialties.map((specialty) => (
                    <span 
                      key={specialty}
                      className="text-xs text-muted-foreground"
                    >
                      {specialty}
                      {trainer.specialties.indexOf(specialty) < trainer.specialties.length - 1 && " • "}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="flex justify-center gap-3 mt-4">
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="glass" size="lg">
            View All 50+ Trainers
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
