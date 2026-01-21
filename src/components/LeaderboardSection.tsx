import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Trophy, 
  Medal, 
  Crown, 
  Flame, 
  TrendingUp, 
  Star,
  ChevronRight,
  Zap
} from "lucide-react";

const topPerformers = [
  {
    rank: 1,
    name: "Bach Mitchell",
    avatar: "SM",
    xp: 15420,
    level: "Elite",
    streak: 45,
    badges: 28,
    category: "Weight Loss",
    change: "+2",
  },
  {
    rank: 2,
    name: "Marcus Johnson",
    avatar: "MJ",
    xp: 14850,
    level: "Elite",
    streak: 38,
    badges: 25,
    category: "Muscle Building",
    change: "+1",
  },
  {
    rank: 3,
    name: "Elena Rodriguez",
    avatar: "ER",
    xp: 13920,
    level: "Advanced",
    streak: 52,
    badges: 22,
    category: "Flexibility",
    change: "0",
  },
];

const leaderboards = [
  {
    title: "Weekly XP Leaders",
    icon: Zap,
    color: "terracotta",
    leaders: [
      { rank: 1, name: "David Chen", xp: 2450, avatar: "DC" },
      { rank: 2, name: "Lisa Park", xp: 2380, avatar: "LP" },
      { rank: 3, name: "James Wilson", xp: 2290, avatar: "JW" },
      { rank: 4, name: "Maria Garcia", xp: 2150, avatar: "MG" },
      { rank: 5, name: "Alex Turner", xp: 2080, avatar: "AT" },
    ]
  },
  {
    title: "Longest Streaks",
    icon: Flame,
    color: "sage",
    leaders: [
      { rank: 1, name: "Elena Rodriguez", xp: 52, avatar: "ER", unit: "days" },
      { rank: 2, name: "Sarah Mitchell", xp: 45, avatar: "SM", unit: "days" },
      { rank: 3, name: "Chris Lee", xp: 41, avatar: "CL", unit: "days" },
      { rank: 4, name: "Emma White", xp: 38, avatar: "EW", unit: "days" },
      { rank: 5, name: "Marcus Johnson", xp: 38, avatar: "MJ", unit: "days" },
    ]
  },
  {
    title: "Challenge Champions",
    icon: Trophy,
    color: "terracotta",
    leaders: [
      { rank: 1, name: "Ryan Cooper", xp: 15, avatar: "RC", unit: "won" },
      { rank: 2, name: "Sarah Mitchell", xp: 14, avatar: "SM", unit: "won" },
      { rank: 3, name: "Mia Thompson", xp: 12, avatar: "MT", unit: "won" },
      { rank: 4, name: "Jake Anderson", xp: 11, avatar: "JA", unit: "won" },
      { rank: 5, name: "Sophie Brown", xp: 10, avatar: "SB", unit: "won" },
    ]
  },
  {
    title: "Most Badges Earned",
    icon: Medal,
    color: "sage",
    leaders: [
      { rank: 1, name: "Sarah Mitchell", xp: 28, avatar: "SM", unit: "badges" },
      { rank: 2, name: "Marcus Johnson", xp: 25, avatar: "MJ", unit: "badges" },
      { rank: 3, name: "Elena Rodriguez", xp: 22, avatar: "ER", unit: "badges" },
      { rank: 4, name: "David Chen", xp: 20, avatar: "DC", unit: "badges" },
      { rank: 5, name: "Lisa Park", xp: 18, avatar: "LP", unit: "badges" },
    ]
  },
];

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Crown className="w-5 h-5 text-amber-500" />;
    case 2:
      return <Medal className="w-5 h-5 text-slate-400" />;
    case 3:
      return <Medal className="w-5 h-5 text-amber-700" />;
    default:
      return <span className="text-sm font-bold text-muted-foreground">{rank}</span>;
  }
};

const getRankBg = (rank: number) => {
  switch (rank) {
    case 1:
      return "bg-gradient-to-r from-amber-100 to-amber-50 border-amber-200";
    case 2:
      return "bg-gradient-to-r from-slate-100 to-slate-50 border-slate-200";
    case 3:
      return "bg-gradient-to-r from-orange-100 to-orange-50 border-orange-200";
    default:
      return "bg-muted/30 border-border/50";
  }
};

export const LeaderboardSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-terracotta-100 text-terracotta-600 text-sm font-medium mb-6">
            <Trophy className="w-4 h-4" />
            Leaderboards
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Top Performers &
            <span className="gradient-text block">Community Champions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See who's leading the pack and get inspired by our most dedicated members
          </p>
        </div>

        {/* Top 3 Showcase */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {topPerformers.map((performer, index) => {
            const isFirst = index === 0;
            return (
              <Card 
                key={performer.rank} 
                variant={isFirst ? "gradient" : "elevated"}
                className={`${isFirst ? '' : 'border-2'} ${index === 1 ? 'border-slate-200' : index === 2 ? 'border-orange-200' : ''} ${isFirst ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                <CardContent className={`p-6 ${isFirst ? 'text-white' : ''}`}>
                  <div className="text-center">
                    {/* Rank Badge */}
                    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 ${
                      isFirst ? 'bg-white/20' : getRankBg(performer.rank)
                    }`}>
                      {getRankIcon(performer.rank)}
                    </div>
                    
                    {/* Avatar */}
                    <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-2xl font-bold mb-4 ${
                      isFirst 
                        ? 'bg-white/20 text-white border-4 border-white/30' 
                        : 'bg-terracotta-100 text-terracotta-600 border-4 border-terracotta-200'
                    }`}>
                      {performer.avatar}
                    </div>
                    
                    <h3 className={`text-xl font-display font-bold mb-1 ${isFirst ? 'text-white' : 'text-foreground'}`}>
                      {performer.name}
                    </h3>
                    <p className={`text-sm mb-4 ${isFirst ? 'text-white/80' : 'text-muted-foreground'}`}>
                      {performer.category} • {performer.level}
                    </p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className={`p-2 rounded-lg ${isFirst ? 'bg-white/10' : 'bg-muted/50'}`}>
                        <p className={`text-lg font-bold ${isFirst ? 'text-white' : 'text-foreground'}`}>
                          {performer.xp.toLocaleString()}
                        </p>
                        <p className={`text-xs ${isFirst ? 'text-white/70' : 'text-muted-foreground'}`}>XP</p>
                      </div>
                      <div className={`p-2 rounded-lg ${isFirst ? 'bg-white/10' : 'bg-muted/50'}`}>
                        <p className={`text-lg font-bold ${isFirst ? 'text-white' : 'text-foreground'}`}>
                          {performer.streak}
                        </p>
                        <p className={`text-xs ${isFirst ? 'text-white/70' : 'text-muted-foreground'}`}>Streak</p>
                      </div>
                      <div className={`p-2 rounded-lg ${isFirst ? 'bg-white/10' : 'bg-muted/50'}`}>
                        <p className={`text-lg font-bold ${isFirst ? 'text-white' : 'text-foreground'}`}>
                          {performer.badges}
                        </p>
                        <p className={`text-xs ${isFirst ? 'text-white/70' : 'text-muted-foreground'}`}>Badges</p>
                      </div>
                    </div>
                    
                    {/* Rank Change */}
                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                      isFirst 
                        ? 'bg-white/20 text-white' 
                        : performer.change.startsWith('+') 
                          ? 'bg-green-100 text-green-700'
                          : 'bg-muted text-muted-foreground'
                    }`}>
                      {performer.change.startsWith('+') && <TrendingUp className="w-4 h-4" />}
                      {performer.change === '0' ? 'No change' : `${performer.change} this week`}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Category Leaderboards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaderboards.map((board) => {
            const IconComponent = board.icon;
            const headerBg = board.color === 'terracotta' 
              ? 'bg-gradient-to-r from-terracotta-500 to-terracotta-600' 
              : 'bg-gradient-to-r from-sage-500 to-sage-600';
            
            return (
              <Card key={board.title} variant="elevated" className="overflow-hidden">
                <div className={`${headerBg} p-4`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-white">{board.title}</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    {board.leaders.map((leader) => (
                      <div 
                        key={`${board.title}-${leader.rank}`}
                        className={`flex items-center gap-3 p-2 rounded-lg border ${getRankBg(leader.rank)}`}
                      >
                        <div className="w-8 h-8 flex items-center justify-center">
                          {getRankIcon(leader.rank)}
                        </div>
                        <div className="w-9 h-9 rounded-full bg-terracotta-100 flex items-center justify-center text-sm font-bold text-terracotta-600">
                          {leader.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">{leader.name}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-foreground">
                            {leader.xp.toLocaleString()}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {leader.unit || 'XP'}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full mt-4 text-muted-foreground hover:text-foreground">
                    View Full Leaderboard
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Your Ranking CTA */}
        <Card variant="sage" className="mt-12">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-sage-200 flex items-center justify-center">
                  <Star className="w-8 h-8 text-sage-700" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-charcoal-700">
                    Want to see your ranking?
                  </h3>
                  <p className="text-charcoal-600">
                    Join the community and start earning XP to climb the leaderboards!
                  </p>
                </div>
              </div>
              <Button variant="hero" size="lg">
                Start Your Journey
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
