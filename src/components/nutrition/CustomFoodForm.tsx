import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, PlusCircle, Apple } from "lucide-react";

interface CustomFoodFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

const mealTypes = [
  { value: "breakfast", label: "Breakfast" },
  { value: "lunch", label: "Lunch" },
  { value: "snack", label: "Snack" },
  { value: "dinner", label: "Dinner" },
];

export const CustomFoodForm = ({ open, onOpenChange, onSuccess }: CustomFoodFormProps) => {
  const [foodName, setFoodName] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fats, setFats] = useState("");
  const [mealType, setMealType] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  const resetForm = () => {
    setFoodName("");
    setCalories("");
    setProtein("");
    setCarbs("");
    setFats("");
    setMealType("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !mealType) return;

    setLoading(true);
    try {
      const { error } = await supabase.from("nutrition_logs").insert({
        user_id: user.id,
        custom_food_name: foodName,
        servings: 1,
        meal_type: mealType,
        calories: parseInt(calories),
        protein: parseFloat(protein),
        carbs: parseFloat(carbs),
        fats: parseFloat(fats),
      });

      if (error) throw error;

      toast({
        title: "Custom Food Logged!",
        description: `${foodName} has been added to your ${mealType}.`,
      });
      onOpenChange(false);
      resetForm();
      onSuccess?.();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to log custom food",
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
            <Apple className="w-5 h-5 text-secondary" />
            Add Custom Food
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* Food Name */}
          <div className="space-y-2">
            <Label htmlFor="foodName">Food Name</Label>
            <Input
              id="foodName"
              placeholder="e.g., Homemade Salad"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
              required
            />
          </div>

          {/* Nutrition Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="calories">Calories</Label>
              <Input
                id="calories"
                type="number"
                min="0"
                placeholder="0"
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="protein">Protein (g)</Label>
              <Input
                id="protein"
                type="number"
                min="0"
                step="0.1"
                placeholder="0"
                value={protein}
                onChange={(e) => setProtein(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="carbs">Carbs (g)</Label>
              <Input
                id="carbs"
                type="number"
                min="0"
                step="0.1"
                placeholder="0"
                value={carbs}
                onChange={(e) => setCarbs(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fats">Fats (g)</Label>
              <Input
                id="fats"
                type="number"
                min="0"
                step="0.1"
                placeholder="0"
                value={fats}
                onChange={(e) => setFats(e.target.value)}
                required
              />
            </div>
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

          {/* Preview */}
          {calories && protein && carbs && fats && (
            <div className="grid grid-cols-4 gap-2 p-4 bg-secondary/5 rounded-xl">
              <div className="text-center">
                <div className="text-lg font-bold text-primary">{calories}</div>
                <div className="text-xs text-muted-foreground">Calories</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-secondary">{protein}g</div>
                <div className="text-xs text-muted-foreground">Protein</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-accent">{carbs}g</div>
                <div className="text-xs text-muted-foreground">Carbs</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-muted-foreground">{fats}g</div>
                <div className="text-xs text-muted-foreground">Fats</div>
              </div>
            </div>
          )}

          <Button type="submit" variant="hero" className="w-full" disabled={loading || !mealType}>
            {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            <PlusCircle className="w-4 h-4 mr-2" />
            Log Custom Food
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
