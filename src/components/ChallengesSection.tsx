import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Flame, Target, Users, Calendar, Star, Zap, Award, Clock, TrendingUp } from "lucide-react";

const challenges = [
  {
    id: 1,
    title: "30-Day Transformation",
    description: "Complete daily workouts and nutrition goals for 30 consecutive days",
    participants: 2847,
    duration: "30 Days",
    difficulty: "Intermediate",
    reward: "500 Points + Badge",
    category: "Weight Loss",
    color: "terracotta",
    icon: Flame,
    progress: 67,
    daysLeft: 12,
    featured: true,
  },
  {
    id: 2,
    title: "Mobility Master",
    description: "Complete 20 stretching sessions focusing on full-body flexibility",
    participants: 1523,
    duration: "2 Weeks",
    difficulty: "Beginner",
    reward: "250 Points + Badge",
    category: "Flexibility",
    color: "sage",
    icon: Target,
    progress: 45,
    daysLeft: 8,
    featured: false,
  },
  {
    id: 3,
    title: "Core Crusher",
    description: "Build a stronger core with progressive ab and back exercises",
    participants: 1891,
    duration: "3 Weeks",
    difficulty: "Advanced",
    reward: "400 Points + Badge",
    category: "Core Training",
    color: "terracotta",
    icon: Zap,
    progress: 30,
    daysLeft: 15,
    featured: false,
  },
  {
    id: 4,
    title: "Senior Strength",
    description: "Low-impact strength building designed for 55+ fitness enthusiasts",
    participants: 892,
    duration: "4 Weeks",
    difficulty: "Beginner",
    reward: "350 Points + Badge",
    category: "Senior Fitness",
    color: "sage",
    icon: Star,
    progress: 55,
    daysLeft: 18,
    featured: false,
  },
  {
    id: 5,
    title: "Youth Champions",
    description: "Fun fitness activities and games for kids aged 6-16",
    participants: 1245,
    duration: "2 Weeks",
    difficulty: "All Levels",
    reward: "300 Points + Badge",
    category: "Youth Fitness",
    color: "terracotta",
    icon: Award,
    progress: 80,
    daysLeft: 5,
    featured: false,
  },
  {
    id: 6,
    title: "Prenatal Wellness",
    description: "Safe, effective exercises for expecting mothers at every trimester",
    participants: 678,
    duration: "Ongoing",
    difficulty: "Beginner",
    reward: "Weekly Badges",
    category: "Pre-Postnatal",
    color: "sage",
    icon: Target,
    progress: 0,
    daysLeft: null,
    featured: false,
  },
];

const weeklyChallenge = {
  title: "This Week's Community Challenge",
  goal: "Complete 10,000 collective minutes of exercise",
  current: 7845,
  target: 10000,
  participants: 3421,
  endsIn: "3 days",
  prize: "All participants get 100 bonus points!",
};

export const ChallengesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-terracotta-100 text-terracotta-600 text-sm font-medium mb-6">
            <Trophy className="w-4 h-4" />
            Challenges & Competitions
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Push Your Limits with
            <span className="gradient-text block">Exciting Challenges</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join community challenges, compete with others, earn rewards, and stay motivated on your fitness journey
          </p>
        </div>

        {/* Weekly Community Challenge Banner */}
        <Card variant="gradient" className="mb-12 overflow-hidden">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <span className="text-white/80 text-sm font-medium">COMMUNITY CHALLENGE</span>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mt-2">
                  {weeklyChallenge.title}
                </h3>
                <p className="text-white/90 mt-2">{weeklyChallenge.goal}</p>
                
                {/* Progress Bar */}
                <div className="mt-6 max-w-xl">
                  <div className="flex justify-between text-sm text-white/80 mb-2">
                    <span>{weeklyChallenge.current.toLocaleString()} minutes</span>
                    <span>{weeklyChallenge.target.toLocaleString()} minutes</span>
                  </div>
                  <div className="h-4 bg-white/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white rounded-full transition-all duration-1000"
                      style={{ width: `${(weeklyChallenge.current / weeklyChallenge.target) * 100}%` }}
                    />
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-6">
                  <div className="flex items-center gap-2 text-white/90">
                    <Users className="w-5 h-5" />
                    <span>{weeklyChallenge.participants.toLocaleString()} participating</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <Clock className="w-5 h-5" />
                    <span>Ends in {weeklyChallenge.endsIn}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Award className="w-5 h-5" />
                    <span className="font-semibold">{weeklyChallenge.prize}</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Button variant="secondary" size="lg" className="bg-white text-terracotta-600 hover:bg-white/90">
                  Join Challenge
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Featured Challenge */}
        {challenges.filter(c => c.featured).map((challenge) => (
          <Card key={challenge.id} variant="elevated" className="mb-12 overflow-hidden border-2 border-terracotta-200">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3 bg-gradient-to-br from-terracotta-500 to-terracotta-600 p-8 flex flex-col justify-center items-center text-center">
                <span className="px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full mb-4">
                  ⭐ FEATURED CHALLENGE
                </span>
                <challenge.icon className="w-16 h-16 text-white mb-4" />
                <h3 className="text-2xl font-display font-bold text-white mb-2">{challenge.title}</h3>
                <p className="text-white/90">{challenge.description}</p>
              </div>
              <div className="lg:w-2/3 p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Challenge Details</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-terracotta-500" />
                        <span className="text-foreground">Duration: {challenge.duration}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Target className="w-5 h-5 text-terracotta-500" />
                        <span className="text-foreground">Difficulty: {challenge.difficulty}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-terracotta-500" />
                        <span className="text-foreground">{challenge.participants.toLocaleString()} participants</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Trophy className="w-5 h-5 text-terracotta-500" />
                        <span className="text-foreground">Reward: {challenge.reward}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Your Progress</h4>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-foreground">{challenge.progress}% Complete</span>
                        <span className="text-muted-foreground">{challenge.daysLeft} days left</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-terracotta-500 to-terracotta-400 rounded-full transition-all duration-1000"
                          style={{ width: `${challenge.progress}%` }}
                        />
                      </div>
                    </div>
                    <Button variant="hero" size="lg" className="w-full">
                      Continue Challenge
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}

        {/* Challenge Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.filter(c => !c.featured).map((challenge) => {
            const IconComponent = challenge.icon;
            const colorClasses = challenge.color === 'terracotta' 
              ? 'bg-terracotta-100 text-terracotta-600 border-terracotta-200' 
              : 'bg-sage-100 text-sage-700 border-sage-200';
            const iconBg = challenge.color === 'terracotta' 
              ? 'bg-terracotta-500' 
              : 'bg-sage-500';
            
            return (
              <Card key={challenge.id} variant="interactive" className="overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorClasses}`}>
                      {challenge.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl mt-4">{challenge.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{challenge.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{challenge.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{challenge.participants.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    {challenge.progress > 0 && (
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-muted-foreground">{challenge.progress}% complete</span>
                          {challenge.daysLeft && (
                            <span className="text-muted-foreground">{challenge.daysLeft} days left</span>
                          )}
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all duration-1000 ${
                              challenge.color === 'terracotta' 
                                ? 'bg-terracotta-500' 
                                : 'bg-sage-500'
                            }`}
                            style={{ width: `${challenge.progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2 text-terracotta-600">
                        <Trophy className="w-4 h-4" />
                        <span className="text-sm font-medium">{challenge.reward}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        {challenge.progress > 0 ? 'Continue' : 'Join'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Challenges
            <TrendingUp className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
