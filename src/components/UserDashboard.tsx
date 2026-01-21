import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Trophy, 
  Flame, 
  Target, 
  Calendar,
  TrendingUp,
  Award,
  Zap,
  Star,
  ChevronRight,
  Play,
  Clock,
  Dumbbell,
  Heart,
  Activity
} from "lucide-react";

const userData = {
  name: "Alex Johnson",
  avatar: "AJ",
  level: 7,
  levelName: "Intermediate",
  xp: 2450,
  xpToNext: 3500,
  streak: 14,
  totalWorkouts: 89,
  thisWeek: 4,
  totalMinutes: 4250,
  badges: 12,
  challengesWon: 3,
  memberSince: "October 2024",
};

const recentBadges = [
  { name: "Week Warrior", icon: Flame, color: "terracotta" },
  { name: "Core Crusher", icon: Dumbbell, color: "sage" },
  { name: "Challenge Winner", icon: Trophy, color: "terracotta" },
];

const upcomingWorkouts = [
  { day: "Today", time: "6:00 PM", name: "Full Body Strength", duration: "45 min", type: "Strength" },
  { day: "Tomorrow", time: "7:00 AM", name: "Morning Yoga Flow", duration: "30 min", type: "Flexibility" },
  { day: "Wednesday", time: "6:00 PM", name: "HIIT Cardio Blast", duration: "25 min", type: "Cardio" },
];

const activeChallenges = [
  { name: "30-Day Transformation", progress: 67, daysLeft: 12, reward: "500 XP" },
  { name: "Core Crusher", progress: 45, daysLeft: 8, reward: "250 XP" },
];

const weeklyProgress = [
  { day: "Mon", completed: true, minutes: 45 },
  { day: "Tue", completed: true, minutes: 30 },
  { day: "Wed", completed: true, minutes: 50 },
  { day: "Thu", completed: true, minutes: 35 },
  { day: "Fri", completed: false, minutes: 0 },
  { day: "Sat", completed: false, minutes: 0 },
  { day: "Sun", completed: false, minutes: 0 },
];

export const UserDashboard = () => {
  const xpProgress = (userData.xp / userData.xpToNext) * 100;
  const weeklyGoal = 5;
  const weeklyCompleted = weeklyProgress.filter(d => d.completed).length;
  
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-terracotta-100 text-terracotta-600 text-sm font-medium mb-6">
            <User className="w-4 h-4" />
            Your Dashboard
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Welcome Back,
            <span className="gradient-text block">{userData.name.split(' ')[0]}!</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Profile & Level */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card variant="gradient">
              <CardContent className="p-6 text-center text-white">
                <div className="w-24 h-24 mx-auto rounded-full bg-white/20 flex items-center justify-center text-3xl font-bold mb-4 border-4 border-white/30">
                  {userData.avatar}
                </div>
                <h3 className="text-2xl font-display font-bold">{userData.name}</h3>
                <p className="text-white/80 mb-4">Member since {userData.memberSince}</p>
                
                {/* Level Progress */}
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/80 text-sm">Level {userData.level}</span>
                    <span className="text-white font-bold">{userData.levelName}</span>
                  </div>
                  <div className="h-3 bg-white/20 rounded-full overflow-hidden mb-2">
                    <div 
                      className="h-full bg-white rounded-full transition-all duration-500"
                      style={{ width: `${xpProgress}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-white/70">
                    <span>{userData.xp.toLocaleString()} XP</span>
                    <span>{userData.xpToNext.toLocaleString()} XP</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card variant="elevated">
                <CardContent className="p-4 text-center">
                  <Flame className="w-8 h-8 text-terracotta-500 mx-auto mb-2" />
                  <p className="text-2xl font-display font-bold text-foreground">{userData.streak}</p>
                  <p className="text-xs text-muted-foreground">Day Streak</p>
                </CardContent>
              </Card>
              <Card variant="elevated">
                <CardContent className="p-4 text-center">
                  <Award className="w-8 h-8 text-sage-600 mx-auto mb-2" />
                  <p className="text-2xl font-display font-bold text-foreground">{userData.badges}</p>
                  <p className="text-xs text-muted-foreground">Badges</p>
                </CardContent>
              </Card>
              <Card variant="elevated">
                <CardContent className="p-4 text-center">
                  <Dumbbell className="w-8 h-8 text-terracotta-500 mx-auto mb-2" />
                  <p className="text-2xl font-display font-bold text-foreground">{userData.totalWorkouts}</p>
                  <p className="text-xs text-muted-foreground">Workouts</p>
                </CardContent>
              </Card>
              <Card variant="elevated">
                <CardContent className="p-4 text-center">
                  <Clock className="w-8 h-8 text-sage-600 mx-auto mb-2" />
                  <p className="text-2xl font-display font-bold text-foreground">{Math.floor(userData.totalMinutes / 60)}h</p>
                  <p className="text-xs text-muted-foreground">Total Time</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Badges */}
            <Card variant="sage">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-charcoal-700">
                  <span className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-sage-600" />
                    Recent Badges
                  </span>
                  <Button variant="ghost" size="sm" className="text-sage-700">
                    View All
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {recentBadges.map((badge, i) => {
                    const IconComponent = badge.icon;
                    return (
                      <div key={i} className="text-center">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-2 ${
                          badge.color === 'terracotta' ? 'bg-terracotta-200' : 'bg-sage-200'
                        }`}>
                          <IconComponent className={`w-7 h-7 ${
                            badge.color === 'terracotta' ? 'text-terracotta-600' : 'text-sage-700'
                          }`} />
                        </div>
                        <p className="text-xs text-charcoal-600 font-medium">{badge.name}</p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Middle Column - Weekly Progress & Workouts */}
          <div className="space-y-6">
            {/* Weekly Progress */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-terracotta-500" />
                  Weekly Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-muted-foreground">This Week</span>
                  <span className="font-bold text-foreground">{weeklyCompleted} / {weeklyGoal} workouts</span>
                </div>
                
                {/* Week Days */}
                <div className="flex justify-between gap-2 mb-6">
                  {weeklyProgress.map((day, i) => (
                    <div key={day.day} className="flex-1 text-center">
                      <div className={`h-20 rounded-lg mb-2 flex items-end justify-center pb-2 transition-colors ${
                        day.completed 
                          ? 'bg-gradient-to-t from-terracotta-500 to-terracotta-400' 
                          : i === 4 ? 'bg-muted border-2 border-dashed border-terracotta-300' : 'bg-muted'
                      }`}>
                        {day.completed && (
                          <span className="text-white text-xs font-bold">{day.minutes}m</span>
                        )}
                        {i === 4 && !day.completed && (
                          <span className="text-terracotta-500 text-xs">Today</span>
                        )}
                      </div>
                      <span className={`text-xs ${day.completed ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                        {day.day}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Weekly Stats */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 rounded-xl">
                  <div className="text-center">
                    <p className="text-lg font-bold text-foreground">
                      {weeklyProgress.reduce((sum, d) => sum + d.minutes, 0)}
                    </p>
                    <p className="text-xs text-muted-foreground">Minutes</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-foreground">
                      {Math.round(weeklyProgress.reduce((sum, d) => sum + d.minutes, 0) * 7.5)}
                    </p>
                    <p className="text-xs text-muted-foreground">Calories</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-terracotta-600">+{weeklyCompleted * 50}</p>
                    <p className="text-xs text-muted-foreground">XP Earned</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Workouts */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-sage-600" />
                  Upcoming Workouts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingWorkouts.map((workout, i) => (
                    <div 
                      key={i}
                      className={`p-4 rounded-xl border transition-colors ${
                        i === 0 ? 'bg-terracotta-50 border-terracotta-200' : 'bg-muted/50 border-border'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              i === 0 ? 'bg-terracotta-200 text-terracotta-700' : 'bg-muted text-muted-foreground'
                            }`}>
                              {workout.day} • {workout.time}
                            </span>
                            <span className="text-xs text-muted-foreground">{workout.duration}</span>
                          </div>
                          <h4 className="font-semibold text-foreground">{workout.name}</h4>
                          <p className="text-xs text-muted-foreground">{workout.type}</p>
                        </div>
                        {i === 0 && (
                          <Button variant="hero" size="sm">
                            <Play className="w-4 h-4 mr-1" />
                            Start
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View Full Schedule
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Challenges & Goals */}
          <div className="space-y-6">
            {/* Active Challenges */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-terracotta-500" />
                  Active Challenges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeChallenges.map((challenge, i) => (
                    <div key={i} className="p-4 rounded-xl bg-muted/50 border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{challenge.name}</h4>
                        <span className="text-xs px-2 py-1 rounded-full bg-terracotta-100 text-terracotta-600">
                          {challenge.daysLeft} days left
                        </span>
                      </div>
                      <div className="mb-2">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-muted-foreground">{challenge.progress}% complete</span>
                          <span className="text-terracotta-600 font-medium">{challenge.reward}</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-terracotta-500 to-terracotta-400 rounded-full"
                            style={{ width: `${challenge.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Browse Challenges
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Goals Overview */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-sage-600" />
                  Monthly Goals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Workouts (20)</span>
                      <span className="font-medium text-foreground">14/20</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-terracotta-500 rounded-full w-[70%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Active Minutes (600)</span>
                      <span className="font-medium text-foreground">425/600</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-sage-500 rounded-full w-[71%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Calories Burned (8000)</span>
                      <span className="font-medium text-foreground">5,840/8000</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-terracotta-500 rounded-full w-[73%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Badges Earned (5)</span>
                      <span className="font-medium text-foreground">3/5</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-sage-500 rounded-full w-[60%]" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card variant="gradient">
              <CardContent className="p-6">
                <h3 className="text-lg font-display font-bold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="secondary" className="w-full bg-white/20 text-white hover:bg-white/30 justify-start">
                    <Play className="w-5 h-5 mr-3" />
                    Start Today's Workout
                  </Button>
                  <Button variant="secondary" className="w-full bg-white/20 text-white hover:bg-white/30 justify-start">
                    <Heart className="w-5 h-5 mr-3" />
                    Log Nutrition
                  </Button>
                  <Button variant="secondary" className="w-full bg-white/20 text-white hover:bg-white/30 justify-start">
                    <TrendingUp className="w-5 h-5 mr-3" />
                    View Progress
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
