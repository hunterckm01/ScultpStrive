import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Target,
  Flame,
  Beef,
  Wheat,
  Droplets,
  Calendar,
  Award,
  AlertCircle,
} from "lucide-react";
import { format, subDays, startOfDay, endOfDay } from "date-fns";

interface DailyStats {
  date: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

interface DietPlan {
  id: string;
  name: string;
  daily_calorie_goal: number;
  protein_goal_pct: number;
  carbs_goal_pct: number;
  fats_goal_pct: number;
}

export const NutritionAnalytics = ({setDietPlanModalOpen}) => {
  const { user } = useAuth();
  const [weeklyStats, setWeeklyStats] = useState<DailyStats[]>([]);
  const [todayStats, setTodayStats] = useState<DailyStats | null>(null);
  const [dietPlan, setDietPlan] = useState<DietPlan | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  const fetchData = async () => {
    if (!user) return;
    setLoading(true);

    try {
      // Fetch active diet plan
      const { data: planData } = await supabase
        .from("user_diet_plans")
        .select("*")
        .eq("user_id", user.id)
        .eq("is_active", true)
        .maybeSingle();

      setDietPlan(planData);

      // Fetch last 7 days of nutrition logs
      const today = new Date();
      const weekAgo = subDays(today, 6);

      const { data: logsData } = await supabase
        .from("nutrition_logs")
        .select("*")
        .eq("user_id", user.id)
        .gte("logged_at", startOfDay(weekAgo).toISOString())
        .lte("logged_at", endOfDay(today).toISOString());

      // Group by day
      const dailyMap = new Map<string, DailyStats>();
      
      for (let i = 6; i >= 0; i--) {
        const date = format(subDays(today, i), "yyyy-MM-dd");
        dailyMap.set(date, { date, calories: 0, protein: 0, carbs: 0, fats: 0 });
      }

      logsData?.forEach((log) => {
        const date = format(new Date(log.logged_at), "yyyy-MM-dd");
        const existing = dailyMap.get(date);
        if (existing) {
          existing.calories += log.calories;
          existing.protein += log.protein;
          existing.carbs += log.carbs;
          existing.fats += log.fats;
        }
      });

      const stats = Array.from(dailyMap.values());
      setWeeklyStats(stats);
      setTodayStats(stats[stats.length - 1] || null);
    } catch (error) {
      console.error("Error fetching analytics:", error);
    } finally {
      setLoading(false);
    }
  };

  const calorieGoal = dietPlan?.daily_calorie_goal || 2000;
  const proteinGoalGrams = (calorieGoal * (dietPlan?.protein_goal_pct || 30) / 100) / 4;
  const carbsGoalGrams = (calorieGoal * (dietPlan?.carbs_goal_pct || 45) / 100) / 4;
  const fatsGoalGrams = (calorieGoal * (dietPlan?.fats_goal_pct || 25) / 100) / 9;

  const getAdherenceColor = (actual: number, goal: number) => {
    const pct = (actual / goal) * 100;
    if (pct >= 90 && pct <= 110) return "text-secondary";
    if (pct >= 70 && pct <= 130) return "text-primary";
    return "text-destructive";
  };

  const getProgressColor = (actual: number, goal: number) => {
    const pct = (actual / goal) * 100;
    if (pct >= 90 && pct <= 110) return "bg-secondary";
    if (pct >= 70 && pct <= 130) return "bg-primary";
    return "bg-destructive";
  };

  const weeklyAverage = {
    calories: Math.round(weeklyStats.reduce((acc, d) => acc + d.calories, 0) / 7),
    protein: Math.round(weeklyStats.reduce((acc, d) => acc + d.protein, 0) / 7),
    carbs: Math.round(weeklyStats.reduce((acc, d) => acc + d.carbs, 0) / 7),
    fats: Math.round(weeklyStats.reduce((acc, d) => acc + d.fats, 0) / 7),
  };

  const calorieAdherence = Math.round((weeklyAverage.calories / calorieGoal) * 100);
  const proteinAdherence = Math.round((weeklyAverage.protein / proteinGoalGrams) * 100);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="flex items-center gap-2 mb-2">
            <Flame className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Today's Calories</span>
          </div>
          <div className="text-2xl font-bold text-primary">{todayStats?.calories || 0}</div>
          <div className="text-xs text-muted-foreground">/ {calorieGoal} goal</div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-secondary/10 to-secondary/5">
          <div className="flex items-center gap-2 mb-2">
            <Beef className="w-4 h-4 text-secondary" />
            <span className="text-sm text-muted-foreground">Protein</span>
          </div>
          <div className="text-2xl font-bold text-secondary">{todayStats?.protein.toFixed(0) || 0}g</div>
          <div className="text-xs text-muted-foreground">/ {Math.round(proteinGoalGrams)}g goal</div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-accent/10 to-accent/5">
          <div className="flex items-center gap-2 mb-2">
            <Wheat className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Carbs</span>
          </div>
          <div className="text-2xl font-bold">{todayStats?.carbs.toFixed(0) || 0}g</div>
          <div className="text-xs text-muted-foreground">/ {Math.round(carbsGoalGrams)}g goal</div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-muted to-muted/50">
          <div className="flex items-center gap-2 mb-2">
            <Droplets className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Fats</span>
          </div>
          <div className="text-2xl font-bold">{todayStats?.fats.toFixed(0) || 0}g</div>
          <div className="text-xs text-muted-foreground">/ {Math.round(fatsGoalGrams)}g goal</div>
        </Card>
      </div>

      {/* Weekly Chart */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Weekly Overview</h3>
          </div>
          <div className="flex items-center gap-2">
            {calorieAdherence >= 80 && calorieAdherence <= 120 ? (
              <div className="flex items-center gap-1 text-secondary text-sm">
                <TrendingUp className="w-4 h-4" />
                On Track
              </div>
            ) : (
              <div className="flex items-center gap-1 text-destructive text-sm">
                <AlertCircle className="w-4 h-4" />
                Needs Attention
              </div>
            )}
          </div>
        </div>

        {/* Bar Chart */}
        <div className="grid grid-cols-7 gap-2 mb-6">
          {weeklyStats.map((day) => {
            const pct = Math.min((day.calories / calorieGoal) * 100, 100);
            return (
              <div key={day.date} className="text-center">
                <div className="h-24 bg-muted rounded-lg relative overflow-hidden mb-1">
                  <div
                    className={`absolute bottom-0 left-0 right-0 transition-all duration-500 rounded-lg ${
                      pct >= 90 && pct <= 110 ? "bg-secondary" : pct >= 70 ? "bg-primary" : "bg-muted-foreground"
                    }`}
                    style={{ height: `${pct}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground">
                  {format(new Date(day.date), "EEE")}
                </span>
                <div className="text-xs font-semibold">{day.calories}</div>
              </div>
            );
          })}
        </div>

        {/* Adherence Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-3 bg-muted/50 rounded-xl">
            <div className={`text-xl font-bold ${getAdherenceColor(weeklyAverage.calories, calorieGoal)}`}>
              {calorieAdherence}%
            </div>
            <div className="text-xs text-muted-foreground">Calorie Adherence</div>
          </div>
          <div className="text-center p-3 bg-muted/50 rounded-xl">
            <div className={`text-xl font-bold ${getAdherenceColor(weeklyAverage.protein, proteinGoalGrams)}`}>
              {proteinAdherence}%
            </div>
            <div className="text-xs text-muted-foreground">Protein Adherence</div>
          </div>
          <div className="text-center p-3 bg-muted/50 rounded-xl">
            <div className="text-xl font-bold">{weeklyAverage.calories}</div>
            <div className="text-xs text-muted-foreground">Avg Daily Cal</div>
          </div>
          <div className="text-center p-3 bg-muted/50 rounded-xl">
            <div className="text-xl font-bold">{weeklyAverage.protein}g</div>
            <div className="text-xs text-muted-foreground">Avg Daily Protein</div>
          </div>
        </div>
      </Card>

      {/* Today's Progress Breakdown */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-6">
          <Target className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">Today's Progress</h3>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-primary" />
                Calories
              </span>
              <span>{todayStats?.calories || 0} / {calorieGoal}</span>
            </div>
            <Progress 
              value={Math.min(((todayStats?.calories || 0) / calorieGoal) * 100, 100)} 
              className="h-3" 
            />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="flex items-center gap-2">
                <Beef className="w-4 h-4 text-secondary" />
                Protein
              </span>
              <span>{todayStats?.protein.toFixed(0) || 0}g / {Math.round(proteinGoalGrams)}g</span>
            </div>
            <Progress 
              value={Math.min(((todayStats?.protein || 0) / proteinGoalGrams) * 100, 100)} 
              className="h-3" 
            />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="flex items-center gap-2">
                <Wheat className="w-4 h-4 text-accent" />
                Carbs
              </span>
              <span>{todayStats?.carbs.toFixed(0) || 0}g / {Math.round(carbsGoalGrams)}g</span>
            </div>
            <Progress 
              value={Math.min(((todayStats?.carbs || 0) / carbsGoalGrams) * 100, 100)} 
              className="h-3" 
            />
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="flex items-center gap-2">
                <Droplets className="w-4 h-4 text-muted-foreground" />
                Fats
              </span>
              <span>{todayStats?.fats.toFixed(0) || 0}g / {Math.round(fatsGoalGrams)}g</span>
            </div>
            <Progress 
              value={Math.min(((todayStats?.fats || 0) / fatsGoalGrams) * 100, 100)} 
              className="h-3" 
            />
          </div>
        </div>
      </Card>

      {!dietPlan && (
        <Card className="p-6 border-dashed border-2 border-primary/30 bg-primary/5">
          <div className="text-center">
            <Award className="w-12 h-12 text-primary mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Set Your Goals</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Create a personalized diet plan to track your nutrition adherence effectively.
            </p>
            <Button variant="hero" size="sm" onClick = {()=>setDietPlanModalOpen(true)}>
              Create Diet Plan
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};
