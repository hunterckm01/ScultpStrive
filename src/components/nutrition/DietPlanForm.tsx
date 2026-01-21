import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Target, Flame, Beef, Wheat, Droplets } from "lucide-react";

interface DietPlanFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export const DietPlanForm = ({ open, onOpenChange, onSuccess }: DietPlanFormProps) => {
  const [planName, setPlanName] = useState("My Diet Plan");
  const [calorieGoal, setCalorieGoal] = useState("2000");
  const [proteinPct, setProteinPct] = useState(30);
  const [carbsPct, setCarbsPct] = useState(45);
  const [fatsPct, setFatsPct] = useState(25);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  // Calculate grams from percentages
  const calories = parseInt(calorieGoal) || 2000;
  const proteinGrams = Math.round((calories * proteinPct / 100) / 4);
  const carbsGrams = Math.round((calories * carbsPct / 100) / 4);
  const fatsGrams = Math.round((calories * fatsPct / 100) / 9);

  const adjustMacros = (type: "protein" | "carbs" | "fats", value: number) => {
    const diff = value - (type === "protein" ? proteinPct : type === "carbs" ? carbsPct : fatsPct);
    
    if (type === "protein") {
      setProteinPct(value);
      const remaining = carbsPct + fatsPct;
      if (remaining > 0) {
        setCarbsPct(Math.max(5, carbsPct - Math.round(diff * carbsPct / remaining)));
        setFatsPct(Math.max(5, 100 - value - Math.max(5, carbsPct - Math.round(diff * carbsPct / remaining))));
      }
    } else if (type === "carbs") {
      setCarbsPct(value);
      const remaining = proteinPct + fatsPct;
      if (remaining > 0) {
        setFatsPct(Math.max(5, fatsPct - Math.round(diff * fatsPct / remaining)));
        setProteinPct(Math.max(5, 100 - value - Math.max(5, fatsPct - Math.round(diff * fatsPct / remaining))));
      }
    } else {
      setFatsPct(value);
      const remaining = proteinPct + carbsPct;
      if (remaining > 0) {
        setCarbsPct(Math.max(5, carbsPct - Math.round(diff * carbsPct / remaining)));
        setProteinPct(Math.max(5, 100 - value - Math.max(5, carbsPct - Math.round(diff * carbsPct / remaining))));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    try {
      // First, deactivate any existing active plans
      await supabase
        .from("user_diet_plans")
        .update({ is_active: false })
        .eq("user_id", user.id)
        .eq("is_active", true);

      // Create new plan
      const { error } = await supabase.from("user_diet_plans").insert({
        user_id: user.id,
        name: planName,
        daily_calorie_goal: calories,
        protein_goal_pct: proteinPct,
        carbs_goal_pct: carbsPct,
        fats_goal_pct: fatsPct,
        is_active: true,
      });

      if (error) throw error;

      toast({
        title: "Diet Plan Created!",
        description: "Your personalized diet plan is now active.",
      });
      onOpenChange(false);
      onSuccess?.();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to create diet plan",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl font-display">
            <Target className="w-5 h-5 text-primary" />
            Create Diet Plan
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Plan Name */}
          <div className="space-y-2">
            <Label htmlFor="planName">Plan Name</Label>
            <Input
              id="planName"
              placeholder="e.g., Weight Loss Plan"
              value={planName}
              onChange={(e) => setPlanName(e.target.value)}
              required
            />
          </div>

          {/* Calorie Goal */}
          <div className="space-y-2">
            <Label htmlFor="calorieGoal" className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-primary" />
              Daily Calorie Goal
            </Label>
            <Input
              id="calorieGoal"
              type="number"
              min="1000"
              max="5000"
              step="50"
              value={calorieGoal}
              onChange={(e) => setCalorieGoal(e.target.value)}
              required
            />
          </div>

          {/* Macro Distribution */}
          <div className="space-y-4">
            <Label className="text-sm font-medium">Macro Distribution</Label>
            
            {/* Protein */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="flex items-center gap-2">
                  <Beef className="w-4 h-4 text-secondary" />
                  Protein
                </span>
                <span className="font-semibold">{proteinPct}% ({proteinGrams}g)</span>
              </div>
              <Slider
                value={[proteinPct]}
                onValueChange={([v]) => adjustMacros("protein", v)}
                min={10}
                max={50}
                step={5}
                className="py-2"
              />
            </div>

            {/* Carbs */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="flex items-center gap-2">
                  <Wheat className="w-4 h-4 text-accent" />
                  Carbs
                </span>
                <span className="font-semibold">{carbsPct}% ({carbsGrams}g)</span>
              </div>
              <Slider
                value={[carbsPct]}
                onValueChange={([v]) => adjustMacros("carbs", v)}
                min={10}
                max={60}
                step={5}
                className="py-2"
              />
            </div>

            {/* Fats */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-muted-foreground" />
                  Fats
                </span>
                <span className="font-semibold">{fatsPct}% ({fatsGrams}g)</span>
              </div>
              <Slider
                value={[fatsPct]}
                onValueChange={([v]) => adjustMacros("fats", v)}
                min={10}
                max={50}
                step={5}
                className="py-2"
              />
            </div>
          </div>

          {/* Preview */}
          <div className="p-4 bg-muted/50 rounded-xl">
            <h4 className="font-semibold mb-3 text-sm">Daily Targets</h4>
            <div className="grid grid-cols-4 gap-3 text-center">
              <div>
                <div className="text-lg font-bold text-primary">{calories}</div>
                <div className="text-xs text-muted-foreground">Calories</div>
              </div>
              <div>
                <div className="text-lg font-bold text-secondary">{proteinGrams}g</div>
                <div className="text-xs text-muted-foreground">Protein</div>
              </div>
              <div>
                <div className="text-lg font-bold text-accent">{carbsGrams}g</div>
                <div className="text-xs text-muted-foreground">Carbs</div>
              </div>
              <div>
                <div className="text-lg font-bold">{fatsGrams}g</div>
                <div className="text-xs text-muted-foreground">Fats</div>
              </div>
            </div>
          </div>

          <Button type="submit" variant="hero" className="w-full" disabled={loading}>
            {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            Create Diet Plan
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
