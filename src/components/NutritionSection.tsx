import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import {
  Utensils,
  Target,
  BarChart3,
  Apple,
  Beef,
  Wheat,
  Droplets,
  ArrowRight,
  Search,
  Globe,
  Leaf,
  TrendingUp,
  CheckCircle2,
  Plus,
  Flame,
  LogIn,
  LogOut,
  User,
  PlusCircle,
  ChartLine,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { AuthModal } from "@/components/auth/AuthModal";
import { MealLoggingForm } from "@/components/nutrition/MealLoggingForm";
import { CustomFoodForm } from "@/components/nutrition/CustomFoodForm";
import { NutritionAnalytics } from "@/components/nutrition/NutritionAnalytics";
import { DietPlanForm } from "@/components/nutrition/DietPlanForm";
import {USAFoods, IndianFoods, USDAFoods } from '@/data'
// const FOOD_API_KEY = import.meta.env.VITE_FOODBASE_API_KEY

type Region = "USA" | "India" | "USDA";

// Types for food database
interface Food {
  id: string;
  name: string;
  region: string;
  category: string;
  serving_size: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  fiber: number | null;
}

// 
  const getNutrient = (nutrients: any[], name: string) => {
    const n = nutrients.find((x) => x.nutrient?.name === name);
    return n ? Math.round(n.amount) : 0;
  };
// 

const nutritionGoals = [
  { label: "Weight Loss", icon: Target, color: "bg-primary/10 text-primary" },
  { label: "Muscle Gain", icon: Beef, color: "bg-secondary/10 text-secondary" },
  { label: "Energy Boost", icon: Droplets, color: "bg-accent/10 text-accent" },
  { label: "Athletic Performance", icon: BarChart3, color: "bg-primary/10 text-primary" },
  { label: "Prenatal Nutrition", icon: Apple, color: "bg-secondary/10 text-secondary" },
  { label: "Senior Vitality", icon: Wheat, color: "bg-accent/10 text-accent" },
];

const macroData = [
  { label: "Protein", value: 35, color: "bg-primary" },
  { label: "Carbs", value: 40, color: "bg-secondary" },
  { label: "Fats", value: 25, color: "bg-accent" },
];

// Demo adherence data for visualization
const weeklyAdherence = [
  { day: "Mon", adherence: 92 },
  { day: "Tue", adherence: 88 },
  { day: "Wed", adherence: 95 },
  { day: "Thu", adherence: 78 },
  { day: "Fri", adherence: 85 },
  { day: "Sat", adherence: 72 },
  { day: "Sun", adherence: 90 },
];

const mapRawFoodToFood = (item: any, region: Region): Food => {
  return {
    id: item.food_id,
    name: item.food_name,
    region,
    category: item.category,
    serving_size: "100g",
    calories: item.nutrition_per_100g.calories,
    protein: item.nutrition_per_100g.protein,
    carbs: item.nutrition_per_100g.carbs,
    fats: item.nutrition_per_100g.fat,
    fiber: item.nutrition_per_100g.fiber ?? null,
  };
};


export const NutritionSection = () => {
  const { user, signOut } = useAuth();
  const [selectedRegion, setSelectedRegion] = useState<"USA" | "India" | "USDA">("USDA");
  const [searchQuery, setSearchQuery] = useState("");
  const [foods, setFoods] = useState<Food[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);
  
  // Modal states
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [mealLogModalOpen, setMealLogModalOpen] = useState(false);
  const [customFoodModalOpen, setCustomFoodModalOpen] = useState(false);
  const [dietPlanModalOpen, setDietPlanModalOpen] = useState(false);
  
  // View state
  const [activeView, setActiveView] = useState<"browser" | "analytics">("browser");
  
  // Demo adherence percentage
  const overallAdherence = 86;

  useEffect(() => {
    fetchFoods();
  }, [selectedRegion, searchQuery]);

 const fetchFoods = async () => {
   setLoading(true);

   try {
     let rawData = selectedRegion === "USA" ? USAFoods : selectedRegion === "India" ? IndianFoods : USDAFoods;

     console.log(rawData);

     if (searchQuery) {
       const q = searchQuery.toLowerCase();
       rawData = rawData.filter((food) =>
         food.food_name.toLowerCase().includes(q),
       );
     }

     rawData = [...rawData].sort((a, b) =>
       a.category.localeCompare(b.category),
     );

     rawData = rawData.slice(0, 20);

     const mappedFoods: Food[] = rawData.map((item) =>
       mapRawFoodToFood(item, selectedRegion),
     );

     // Fake network delay
     await new Promise((r) => setTimeout(r, 400));

     setFoods(mappedFoods);
   } catch (error) {
     console.error("Error fetching foods:", error);
   } finally {
     setLoading(false);
   }
 };



  // const fetchFoods = async () => {
  //   setLoading(true);
  //   try {
  //     let query = supabase
  //       .from("foods")
  //       .select("*")
  //       .eq("region", selectedRegion)
  //       .order("category", { ascending: true });

  //     if (searchQuery) {
  //       query = query.ilike("name", `%${searchQuery}%`);
  //     }

  //     const { data, error } = await query.limit(20);
      
  //     if (error) throw error;
  //     setFoods(data || []);
  //   } catch (error) {
  //     console.error("Error fetching foods:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const getAdherenceColor = (value: number) => {
    if (value >= 90) return "text-secondary";
    if (value >= 70) return "text-primary";
    return "text-destructive";
  };

  const getAdherenceBarColor = (value: number) => {
    if (value >= 90) return "bg-secondary";
    if (value >= 70) return "bg-primary";
    return "bg-destructive";
  };

  const handleAddToLog = () => {
    if (!user) {
      setAuthModalOpen(true);
      return;
    }
    if (selectedFood) {
      setMealLogModalOpen(true);
    }
  };

  const handleStartTracking = () => {
    if (!user) {
      window.open("https://calendly.com/sculptandstrive/30min", "_blank");
      // setAuthModalOpen(true);
      return;
    }
    setActiveView("analytics");
  };

  return (
    <section
      id="nutrition"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Smart Nutrition
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Fuel Your <span className="text-gradient-hero">Transformation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Track your nutrition with our comprehensive Global food
            database. Monitor your diet adherence and achieve your fitness
            goals.
          </p>
        </div>

        {/* Auth Status Bar */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {user ? (
            <div className="flex items-center gap-3 bg-card border border-border rounded-full px-4 py-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-medium">{user.email}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => signOut()}
                className="text-muted-foreground hover:text-foreground"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <></>
            // <Button
            //   variant="outline"
            //   onClick={() => setAuthModalOpen(true)}
            //   className="gap-2"
            // >
            //   <LogIn className="w-4 h-4" />
            //   Sign In to Track
            // </Button>
          )}

          {user && (
            <div className="flex gap-2">
              <Button
                variant={activeView === "browser" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveView("browser")}
              >
                <Globe className="w-4 h-4 mr-2" />
                Food Browser
              </Button>
              <Button
                variant={activeView === "analytics" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveView("analytics")}
              >
                <ChartLine className="w-4 h-4 mr-2" />
                Analytics
              </Button>
            </div>
          )}
        </div>

        {/* Conditional Content based on view */}
        {user && activeView === "analytics" ? (
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-end gap-2 mb-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCustomFoodModalOpen(true)}
              >
                <PlusCircle className="w-4 h-4 mr-2" />
                Add Custom Food
              </Button>
              <Button
                variant="hero"
                size="sm"
                onClick={() => setDietPlanModalOpen(true)}
              >
                <Target className="w-4 h-4 mr-2" />
                Set Goals
              </Button>
            </div>
            <NutritionAnalytics setDietPlanModalOpen={setDietPlanModalOpen} />
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8 items-start animate-slide-up">
            {/* Left Side - Food Database Browser */}
            <Card variant="elevated" className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 gradient-hero rounded-xl flex items-center justify-center">
                    <Globe className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Food Database</h3>
                    <p className="text-sm text-muted-foreground">
                      Global Foods
                    </p>
                  </div>
                </div>
                {user && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCustomFoodModalOpen(true)}
                    className="text-primary"
                  >
                    <PlusCircle className="w-4 h-4 mr-1" />
                    Custom
                  </Button>
                )}
              </div>

              {/* Region Tabs */}
              <Tabs
                value={selectedRegion}
                onValueChange={(v) => setSelectedRegion(v as Region)}
                className="mb-4"
              >
                <TabsList className="grid w-full grid-cols-1">
                  {/* <TabsTrigger value="USA" className="flex items-center gap-2">
                    <span className="text-lg">🇺🇸</span> USA
                  </TabsTrigger>
                  <TabsTrigger
                    value="India"
                    className="flex items-center gap-2"
                  >
                    <span className="text-lg">🇮🇳</span> India
                  </TabsTrigger> */}
                  {/* Global */}
                  <TabsTrigger
                    value="USDA"
                    className="flex items-center gap-2"
                  >
                    <span className="text-lg">USDA</span> Global
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              {/* Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search foods..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Food List */}
              <ScrollArea className="h-[320px] pr-4">
                {loading ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                ) : foods.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                    <Leaf className="w-12 h-12 mb-2 opacity-50" />
                    <p>No foods found</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {foods.map((food) => (
                      <div
                        key={food.id}
                        onClick={() => setSelectedFood(food)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all hover:shadow-soft ${
                          selectedFood?.id === food.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/30"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-sm">
                            {food.name}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {food.category}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Flame className="w-3 h-3" />
                            {food.calories ?? "NA"} cal
                          </span>
                          <span>P: {food.protein ?? "NA"}g</span>
                          <span>C: {food.carbs ?? "NA"}g</span>
                          <span>F: {food.fats ?? "NA"}g</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Serving: {food.serving_size}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ScrollArea>

              {/* Quick Add Button */}
              {selectedFood && (
                <Button
                  className="w-full mt-4"
                  variant="hero"
                  onClick={handleAddToLog}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  {user
                    ? `Add ${selectedFood.name} to Log`
                    : "Sign In to Log Meals"}
                </Button>
              )}
            </Card>

            {/* Right Side - Tracking Dashboard & Adherence */}
            <div className="space-y-6">
              {/* Adherence Card */}
              <Card variant="elevated" className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 gradient-sage rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Diet Adherence</h3>
                      <p className="text-sm text-muted-foreground">
                        Weekly Performance
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className={`font-display text-3xl font-bold ${getAdherenceColor(overallAdherence)}`}
                    >
                      {overallAdherence}%
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Overall Score
                    </div>
                  </div>
                </div>

                {/* Weekly Adherence Bars */}
                <div className="grid grid-cols-7 gap-2 mb-6">
                  {weeklyAdherence.map((day) => (
                    <div key={day.day} className="text-center">
                      <div className="h-20 bg-muted rounded-lg relative overflow-hidden mb-1">
                        <div
                          className={`absolute bottom-0 left-0 right-0 ${getAdherenceBarColor(day.adherence)} transition-all duration-500 rounded-lg`}
                          style={{ height: `${day.adherence}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {day.day}
                      </span>
                      <div
                        className={`text-xs font-semibold ${getAdherenceColor(day.adherence)}`}
                      >
                        {day.adherence}%
                      </div>
                    </div>
                  ))}
                </div>

                {/* Adherence Breakdown */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-muted/50 rounded-xl">
                    <div className="text-lg font-bold text-primary">92%</div>
                    <div className="text-xs text-muted-foreground">
                      Calories
                    </div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-xl">
                    <div className="text-lg font-bold text-secondary">88%</div>
                    <div className="text-xs text-muted-foreground">Protein</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-xl">
                    <div className="text-lg font-bold text-accent">78%</div>
                    <div className="text-xs text-muted-foreground">Macros</div>
                  </div>
                </div>
              </Card>

              {/* Today's Progress Card */}
              <Card variant="elevated" className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 gradient-hero rounded-xl flex items-center justify-center">
                      <Utensils className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Today's Nutrition</h3>
                      <p className="text-sm text-muted-foreground">
                        1,847 / 2,200 cal
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    <span className="font-semibold text-secondary">
                      On Track
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">
                      Daily Progress
                    </span>
                    <span className="font-semibold">84%</span>
                  </div>
                  <Progress value={84} className="h-3" />
                </div>

                {/* Macro Distribution */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    Macro Distribution
                  </h4>
                  <div className="flex gap-2 h-4 rounded-lg overflow-hidden">
                    {macroData.map((macro) => (
                      <div
                        key={macro.label}
                        className={`${macro.color} transition-all duration-500`}
                        style={{ width: `${macro.value}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-sm">
                    {macroData.map((macro) => (
                      <div
                        key={macro.label}
                        className="flex items-center gap-2"
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${macro.color}`}
                        />
                        <span className="text-muted-foreground">
                          {macro.label}
                        </span>
                        <span className="font-semibold">{macro.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Log */}
                <div className="grid grid-cols-4 gap-2">
                  {["Breakfast", "Lunch", "Snack", "Dinner"].map((meal, i) => (
                    <div
                      key={meal}
                      className={`p-3 rounded-xl border text-center ${
                        i < 2
                          ? "border-secondary/30 bg-secondary/5"
                          : "border-border bg-muted/50"
                      }`}
                    >
                      <div className="text-xs text-muted-foreground mb-1">
                        {meal}
                      </div>
                      <div
                        className={`font-semibold text-xs ${i < 2 ? "text-secondary" : "text-muted-foreground"}`}
                      >
                        {i < 2 ? "✓ Done" : "Pending"}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Goal Tags */}
              <div className="flex flex-wrap gap-2">
                {nutritionGoals.map((goal) => (
                  <div
                    key={goal.label}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${goal.color} transition-all hover:scale-105 cursor-pointer text-sm`}
                  >
                    <goal.icon className="w-3.5 h-3.5" />
                    <span className="font-medium">{goal.label}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={handleStartTracking}
              >
                {user ? "View Full Analytics" : "Start Tracking Your Diet"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
      <MealLoggingForm
        open={mealLogModalOpen}
        onOpenChange={setMealLogModalOpen}
        selectedFood={selectedFood}
        onSuccess={() => setSelectedFood(null)}
      />
      <CustomFoodForm
        open={customFoodModalOpen}
        onOpenChange={setCustomFoodModalOpen}
      />
      <DietPlanForm
        open={dietPlanModalOpen}
        onOpenChange={setDietPlanModalOpen}
      />
    </section>
  );
};
