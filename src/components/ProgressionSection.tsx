import { Baby, ChevronRight, Heart, Sparkles, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const clientTypes = [
  {
    type: "Youth (6-16)",
    icon: Sparkles,
    color: "terracotta",
    levels: [
      { name: "Explorer", age: "6-9", focus: "Fun movement, basic coordination, games" },
      { name: "Adventurer", age: "10-12", focus: "Skill development, team sports, agility" },
      { name: "Challenger", age: "13-16", focus: "Strength foundations, sport-specific training" },
    ]
  },
  {
    type: "Women's Fitness",
    icon: Heart,
    color: "sage",
    levels: [
      { name: "Bloom", focus: "Core strength, flexibility, body confidence" },
      { name: "Thrive", focus: "Strength training, HIIT, nutrition balance" },
      { name: "Empower", focus: "Advanced training, performance, leadership" },
    ]
  },
  {
    type: "Senior Fitness (55+)",
    icon: Users,
    color: "terracotta",
    levels: [
      { name: "Active Start", focus: "Mobility, balance, gentle strength" },
      { name: "Vital Living", focus: "Functional fitness, endurance, flexibility" },
      { name: "Golden Strong", focus: "Advanced strength, sports, active lifestyle" },
    ]
  },
  {
    type: "Pre/Postnatal",
    icon: Baby,
    color: "sage",
    levels: [
      { name: "First Trimester", focus: "Safe cardio, core stability, energy" },
      { name: "Second Trimester", focus: "Strength maintenance, posture, breathing" },
      { name: "Third Trimester", focus: "Gentle movement, relaxation, preparation" },
      { name: "Recovery", focus: "Core rehab, gradual return, healing" },
    ]
  },
];

export const ProgressionSection = () => {
    return (
        <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Client-Type Specific Levels */}
        <div className="mb-20 mt-10">
          <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
            Specialized Progression Paths
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {clientTypes.map((client) => {
              const IconComponent = client.icon;
              const colorClasses = client.color === 'terracotta' 
                ? 'bg-terracotta-500 border-terracotta-200' 
                : 'bg-sage-500 border-sage-200';
              const badgeClasses = client.color === 'terracotta'
                ? 'bg-terracotta-100 text-terracotta-700'
                : 'bg-sage-100 text-sage-700';
              
              return (
                <Card key={client.type} variant="elevated" className={`border-2 ${client.color === 'terracotta' ? 'border-terracotta-100' : 'border-sage-100'}`}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl ${colorClasses} flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{client.type}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {client.levels.map((level, index) => (
                        <div 
                          key={level.name}
                          className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                        >
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${badgeClasses}`}>
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-foreground">{level.name}</span>
                              {'age' in level && (
                                <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                                  Ages {level.age}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{level.focus}</p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-muted-foreground" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

            </div>
        </section>
    )
}