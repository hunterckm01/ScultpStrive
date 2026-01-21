import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Star, 
  Flame, 
  Target, 
  Trophy, 
  Zap,
  Heart,
  Users,
  Calendar,
  TrendingUp,
  Dumbbell,
  Medal,
  Crown,
  Sparkles,
  Lock,
  Check
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  category: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  xpReward: number;
  unlocked: boolean;
  progress?: number;
  requirement?: string;
}

const badges: Badge[] = [
  // Milestone Badges
  { id: "first_workout", name: "First Step", description: "Complete your first workout", icon: Zap, category: "Milestones", rarity: "common", xpReward: 50, unlocked: true },
  { id: "week_warrior", name: "Week Warrior", description: "Work out 7 days in a row", icon: Flame, category: "Milestones", rarity: "common", xpReward: 100, unlocked: true },
  { id: "month_master", name: "Month Master", description: "Complete 30 consecutive days", icon: Calendar, category: "Milestones", rarity: "rare", xpReward: 300, unlocked: true, progress: 100 },
  { id: "century_club", name: "Century Club", description: "Log 100 workouts", icon: Trophy, category: "Milestones", rarity: "epic", xpReward: 500, unlocked: false, progress: 67 },
  { id: "year_legend", name: "Year Legend", description: "Stay active for 365 days", icon: Crown, category: "Milestones", rarity: "legendary", xpReward: 1000, unlocked: false, progress: 23 },
  
  // Challenge Badges
  { id: "challenge_starter", name: "Challenge Accepted", description: "Join your first challenge", icon: Target, category: "Challenges", rarity: "common", xpReward: 50, unlocked: true },
  { id: "challenge_winner", name: "Victory!", description: "Win your first challenge", icon: Medal, category: "Challenges", rarity: "rare", xpReward: 200, unlocked: true },
  { id: "challenge_streak", name: "Challenge Streak", description: "Win 5 challenges", icon: Flame, category: "Challenges", rarity: "epic", xpReward: 400, unlocked: false, progress: 60 },
  { id: "challenge_legend", name: "Challenge Legend", description: "Win 20 challenges", icon: Crown, category: "Challenges", rarity: "legendary", xpReward: 800, unlocked: false, progress: 25 },
  
  // Community Badges
  { id: "team_player", name: "Team Player", description: "Join a group training session", icon: Users, category: "Community", rarity: "common", xpReward: 50, unlocked: true },
  { id: "motivator", name: "Motivator", description: "Encourage 10 community members", icon: Heart, category: "Community", rarity: "rare", xpReward: 150, unlocked: false, progress: 80 },
  { id: "mentor", name: "Mentor", description: "Help 5 newcomers get started", icon: Sparkles, category: "Community", rarity: "epic", xpReward: 350, unlocked: false, progress: 40 },
  
  // Specialty Badges
  { id: "flexibility_pro", name: "Flexibility Pro", description: "Complete 20 stretching sessions", icon: Activity, category: "Specialty", rarity: "rare", xpReward: 200, unlocked: true },
  { id: "core_crusher", name: "Core Crusher", description: "Master all core exercises", icon: Dumbbell, category: "Specialty", rarity: "epic", xpReward: 400, unlocked: false, progress: 75 },
  { id: "nutrition_ninja", name: "Nutrition Ninja", description: "Log meals for 30 days straight", icon: Target, category: "Specialty", rarity: "rare", xpReward: 250, unlocked: false, progress: 53 },
  
  // Level Badges
  { id: "level_5", name: "Rising Star", description: "Reach Level 5", icon: Star, category: "Levels", rarity: "common", xpReward: 100, unlocked: true },
  { id: "level_10", name: "Fitness Warrior", description: "Reach Level 10", icon: Star, category: "Levels", rarity: "rare", xpReward: 200, unlocked: false, progress: 70 },
  { id: "level_25", name: "Elite Athlete", description: "Reach Level 25", icon: Star, category: "Levels", rarity: "epic", xpReward: 500, unlocked: false, progress: 28 },
  { id: "level_50", name: "Kinetic Master", description: "Reach Level 50", icon: Crown, category: "Levels", rarity: "legendary", xpReward: 1000, unlocked: false, progress: 14 },
];

// Need to import Activity separately since it's used in badges
import { Activity } from "lucide-react";

const categories = ["All", "Milestones", "Challenges", "Community", "Specialty", "Levels"];

const rarityColors = {
  common: { bg: "bg-slate-100", border: "border-slate-300", text: "text-slate-600", glow: "" },
  rare: { bg: "bg-sage-100", border: "border-sage-400", text: "text-sage-700", glow: "shadow-sage-200" },
  epic: { bg: "bg-terracotta-100", border: "border-terracotta-400", text: "text-terracotta-600", glow: "shadow-terracotta-200" },
  legendary: { bg: "bg-amber-100", border: "border-amber-400", text: "text-amber-700", glow: "shadow-amber-300 shadow-lg" },
};

const rarityLabels = {
  common: "Common",
  rare: "Rare",
  epic: "Epic",
  legendary: "Legendary"
};

export const AchievementsSection = () => {
  const unlockedCount = badges.filter(b => b.unlocked).length;
  const totalXP = badges.filter(b => b.unlocked).reduce((sum, b) => sum + b.xpReward, 0);
  
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-100 text-sage-700 text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Achievements & Badges
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Collect Badges &
            <span className="gradient-text block">Celebrate Milestones</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Earn badges as you progress, unlock exclusive rewards, and showcase your fitness journey
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card variant="elevated" className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto rounded-full bg-terracotta-100 flex items-center justify-center mb-3">
                <Award className="w-6 h-6 text-terracotta-600" />
              </div>
              <p className="text-3xl font-display font-bold text-foreground">{unlockedCount}</p>
              <p className="text-sm text-muted-foreground">Badges Earned</p>
            </CardContent>
          </Card>
          <Card variant="elevated" className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto rounded-full bg-sage-100 flex items-center justify-center mb-3">
                <Target className="w-6 h-6 text-sage-700" />
              </div>
              <p className="text-3xl font-display font-bold text-foreground">{badges.length - unlockedCount}</p>
              <p className="text-sm text-muted-foreground">To Unlock</p>
            </CardContent>
          </Card>
          <Card variant="elevated" className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto rounded-full bg-terracotta-100 flex items-center justify-center mb-3">
                <Zap className="w-6 h-6 text-terracotta-600" />
              </div>
              <p className="text-3xl font-display font-bold text-foreground">{totalXP.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">XP from Badges</p>
            </CardContent>
          </Card>
          <Card variant="elevated" className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-100 flex items-center justify-center mb-3">
                <Crown className="w-6 h-6 text-amber-600" />
              </div>
              <p className="text-3xl font-display font-bold text-foreground">
                {badges.filter(b => b.rarity === 'legendary' && b.unlocked).length}
              </p>
              <p className="text-sm text-muted-foreground">Legendary Badges</p>
            </CardContent>
          </Card>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat, index) => (
            <Button 
              key={cat} 
              variant={index === 0 ? "hero" : "outline"} 
              size="sm"
              className={index === 0 ? "" : "hover:bg-muted"}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Rarity Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(rarityLabels).map(([key, label]) => (
            <div key={key} className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded-full ${rarityColors[key as keyof typeof rarityColors].bg} ${rarityColors[key as keyof typeof rarityColors].border} border-2`} />
              <span className="text-sm text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>

        {/* Badges Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {badges.map((badge) => {
            const IconComponent = badge.icon;
            const colors = rarityColors[badge.rarity];
            
            return (
              <Card 
                key={badge.id} 
                variant="interactive"
                className={`relative overflow-hidden transition-all duration-300 ${
                  badge.unlocked 
                    ? `border-2 ${colors.border} ${colors.glow}` 
                    : 'opacity-70 grayscale hover:grayscale-0 hover:opacity-100'
                }`}
              >
                <CardContent className="p-4 text-center">
                  {/* Rarity Tag */}
                  <div className="absolute top-2 right-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${colors.bg} ${colors.text} font-medium`}>
                      {rarityLabels[badge.rarity]}
                    </span>
                  </div>
                  
                  {/* Badge Icon */}
                  <div className={`w-16 h-16 mx-auto rounded-full ${colors.bg} flex items-center justify-center mb-3 relative ${
                    badge.unlocked ? '' : 'bg-muted'
                  }`}>
                    {badge.unlocked ? (
                      <IconComponent className={`w-8 h-8 ${colors.text}`} />
                    ) : (
                      <Lock className="w-6 h-6 text-muted-foreground" />
                    )}
                    {badge.unlocked && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  
                  {/* Badge Info */}
                  <h4 className="font-display font-bold text-foreground mb-1">{badge.name}</h4>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{badge.description}</p>
                  
                  {/* Progress or XP */}
                  {!badge.unlocked && badge.progress !== undefined ? (
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium text-foreground">{badge.progress}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            badge.rarity === 'legendary' ? 'bg-amber-500' :
                            badge.rarity === 'epic' ? 'bg-terracotta-500' :
                            badge.rarity === 'rare' ? 'bg-sage-500' : 'bg-slate-400'
                          }`}
                          style={{ width: `${badge.progress}%` }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full ${colors.bg}`}>
                      <Zap className={`w-3 h-3 ${colors.text}`} />
                      <span className={`text-xs font-medium ${colors.text}`}>+{badge.xpReward} XP</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Achievement */}
        <Card variant="gradient" className="mt-12">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center border-4 border-white/30">
                  <Crown className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="text-white/80 text-sm font-medium">NEXT LEGENDARY BADGE</span>
                <h3 className="text-2xl font-display font-bold text-white mt-2">Strive Master</h3>
                <p className="text-white/90 mt-2">
                  Reach Level 50 to unlock this prestigious badge and join the elite ranks of our fitness community.
                </p>
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-white/80 mb-2">
                    <span>Level 7 / 50</span>
                    <span>14%</span>
                  </div>
                  <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white rounded-full w-[14%]" />
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Button variant="secondary" size="lg" className="bg-white text-terracotta-600 hover:bg-white/90">
                  View All Achievements
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
