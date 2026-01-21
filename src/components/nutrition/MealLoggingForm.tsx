import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Plus, Utensils } from "lucide-react";

interface Food {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  serving_size: string;
}

interface MealLoggingFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedFood: Food | null;
  onSuccess?: () => void;
}

const mealTypes = [
  { value: "breakfast", label: "Breakfast" },
  { value: "lunch", label: "Lunch" },
  { value: "snack", label: "Snack" },
  { value: "dinner", label: "Dinner" },
];

export const MealLoggingForm = ({ open, onOpenChange, selectedFood, onSuccess }: MealLoggingFormProps) => {
  const [servings, setServings] = useState("1");
  const [mealType, setMealType] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  const calculatedNutrition = selectedFood ? {
    calories: Math.round(selectedFood.calories * parseFloat(servings || "1")),
    protein: Math.round(selectedFood.protein * parseFloat(servings || "1") * 10) / 10,
    carbs: Math.round(selectedFood.carbs * parseFloat(servings || "1") * 10) / 10,
    fats: Math.round(selectedFood.fats * parseFloat(servings || "1") * 10) / 10,
  } : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !selectedFood || !mealType) return;

    setLoading(true);
    try {
      const { error } = await supabase.from("nutrition_logs").insert({
        user_id: user.id,
        food_id: selectedFood.id,
        servings: parseFloat(servings),
        meal_type: mealType,
        calories: calculatedNutrition!.calories,
        protein: calculatedNutrition!.protein,
        carbs: calculatedNutrition!.carbs,
        fats: calculatedNutrition!.fats,
      });

      if (error) throw error;

      toast({
        title: "Meal Logged!",
        description: `${selectedFood.name} added to your ${mealType}.`,
      });
      onOpenChange(false);
      setServings("1");
      setMealType("");
      onSuccess?.();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to log meal",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl font-display">
            <Utensils className="w-5 h-5 text-primary" />
            Log Meal
          </DialogTitle>
        </DialogHeader>

        {selectedFood && (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            {/* Food Info */}
            <div className="p-4 bg-muted/50 rounded-xl">
              <h4 className="font-semibold mb-1">{selectedFood.name}</h4>
              <p className="text-sm text-muted-foreground">
                Per serving ({selectedFood.serving_size})
              </p>
            </div>

            {/* Servings */}
            <div className="space-y-2">
              <Label htmlFor="servings">Servings</Label>
              <Input
                id="servings"
                type="number"
                min="0.25"
                max="10"
                step="0.25"
                value={servings}
                onChange={(e) => setServings(e.target.value)}
                required
              />
            </div>

            {/* Meal Type */}
            <div className="space-y-2">
              <Label>Meal Type</Label>
              <Select value={mealType} onValueChange={setMealType} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select meal type" />
                </SelectTrigger>
                <SelectContent>
                  {mealTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Calculated Nutrition */}
            {calculatedNutrition && (
              <div className="grid grid-cols-4 gap-2 p-4 bg-primary/5 rounded-xl">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">{calculatedNutrition.calories}</div>
                  <div className="text-xs text-muted-foreground">Calories</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-secondary">{calculatedNutrition.protein}g</div>
                  <div className="text-xs text-muted-foreground">Protein</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-accent">{calculatedNutrition.carbs}g</div>
                  <div className="text-xs text-muted-foreground">Carbs</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-muted-foreground">{calculatedNutrition.fats}g</div>
                  <div className="text-xs text-muted-foreground">Fats</div>
                </div>
              </div>
            )}

            <Button type="submit" variant="hero" className="w-full" disabled={loading || !mealType}>
              {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              <Plus className="w-4 h-4 mr-2" />
              Add to Log
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
