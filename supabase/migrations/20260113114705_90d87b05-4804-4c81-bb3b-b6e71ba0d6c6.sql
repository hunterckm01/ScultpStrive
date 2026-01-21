-- Create foods table with USA and India food databases
CREATE TABLE public.foods (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  region TEXT NOT NULL CHECK (region IN ('USA', 'India')),
  category TEXT NOT NULL,
  serving_size TEXT NOT NULL DEFAULT '100g',
  calories INTEGER NOT NULL DEFAULT 0,
  protein DECIMAL(6,2) NOT NULL DEFAULT 0,
  carbs DECIMAL(6,2) NOT NULL DEFAULT 0,
  fats DECIMAL(6,2) NOT NULL DEFAULT 0,
  fiber DECIMAL(6,2) DEFAULT 0,
  sugar DECIMAL(6,2) DEFAULT 0,
  sodium DECIMAL(6,2) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create user diet plans table
CREATE TABLE public.user_diet_plans (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  name TEXT NOT NULL,
  daily_calorie_goal INTEGER NOT NULL DEFAULT 2000,
  protein_goal_pct INTEGER NOT NULL DEFAULT 30,
  carbs_goal_pct INTEGER NOT NULL DEFAULT 45,
  fats_goal_pct INTEGER NOT NULL DEFAULT 25,
  start_date DATE NOT NULL DEFAULT CURRENT_DATE,
  end_date DATE,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create nutrition logs table for tracking
CREATE TABLE public.nutrition_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  food_id UUID REFERENCES public.foods(id),
  custom_food_name TEXT,
  meal_type TEXT NOT NULL CHECK (meal_type IN ('breakfast', 'lunch', 'dinner', 'snack')),
  servings DECIMAL(4,2) NOT NULL DEFAULT 1,
  calories INTEGER NOT NULL,
  protein DECIMAL(6,2) NOT NULL,
  carbs DECIMAL(6,2) NOT NULL,
  fats DECIMAL(6,2) NOT NULL,
  logged_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create daily adherence tracking table
CREATE TABLE public.diet_adherence (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  diet_plan_id UUID REFERENCES public.user_diet_plans(id) ON DELETE CASCADE,
  log_date DATE NOT NULL,
  total_calories INTEGER NOT NULL DEFAULT 0,
  total_protein DECIMAL(6,2) NOT NULL DEFAULT 0,
  total_carbs DECIMAL(6,2) NOT NULL DEFAULT 0,
  total_fats DECIMAL(6,2) NOT NULL DEFAULT 0,
  calorie_adherence_pct DECIMAL(5,2) DEFAULT 0,
  protein_adherence_pct DECIMAL(5,2) DEFAULT 0,
  carbs_adherence_pct DECIMAL(5,2) DEFAULT 0,
  fats_adherence_pct DECIMAL(5,2) DEFAULT 0,
  overall_adherence_pct DECIMAL(5,2) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, log_date)
);

-- Enable RLS on all tables
ALTER TABLE public.foods ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_diet_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.nutrition_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.diet_adherence ENABLE ROW LEVEL SECURITY;

-- Foods table is publicly readable (food database)
CREATE POLICY "Foods are viewable by everyone" 
ON public.foods FOR SELECT USING (true);

-- User diet plans policies
CREATE POLICY "Users can view their own diet plans" 
ON public.user_diet_plans FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own diet plans" 
ON public.user_diet_plans FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own diet plans" 
ON public.user_diet_plans FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own diet plans" 
ON public.user_diet_plans FOR DELETE USING (auth.uid() = user_id);

-- Nutrition logs policies
CREATE POLICY "Users can view their own nutrition logs" 
ON public.nutrition_logs FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own nutrition logs" 
ON public.nutrition_logs FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own nutrition logs" 
ON public.nutrition_logs FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own nutrition logs" 
ON public.nutrition_logs FOR DELETE USING (auth.uid() = user_id);

-- Diet adherence policies
CREATE POLICY "Users can view their own adherence" 
ON public.diet_adherence FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own adherence" 
ON public.diet_adherence FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own adherence" 
ON public.diet_adherence FOR UPDATE USING (auth.uid() = user_id);

-- Create updated_at trigger function if not exists
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for updated_at
CREATE TRIGGER update_user_diet_plans_updated_at
BEFORE UPDATE ON public.user_diet_plans
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_diet_adherence_updated_at
BEFORE UPDATE ON public.diet_adherence
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_foods_region ON public.foods(region);
CREATE INDEX idx_foods_category ON public.foods(category);
CREATE INDEX idx_nutrition_logs_user_date ON public.nutrition_logs(user_id, logged_at);
CREATE INDEX idx_diet_adherence_user_date ON public.diet_adherence(user_id, log_date);