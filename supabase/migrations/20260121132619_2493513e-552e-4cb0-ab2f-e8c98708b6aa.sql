-- Create table for lifestyle quiz results
CREATE TABLE public.lifestyle_quiz_results (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  
  -- Individual question answers
  schedule_answer TEXT NOT NULL,
  energy_answer TEXT NOT NULL,
  stress_answer TEXT NOT NULL,
  sleep_answer TEXT NOT NULL,
  pain_answer TEXT NOT NULL,
  time_answer TEXT NOT NULL,
  
  -- Calculated scores
  intensity_score NUMERIC NOT NULL DEFAULT 0,
  flexibility_score NUMERIC NOT NULL DEFAULT 0,
  recovery_score NUMERIC NOT NULL DEFAULT 0,
  consistency_score NUMERIC NOT NULL DEFAULT 0,
  
  -- Result
  recommended_approach TEXT NOT NULL,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.lifestyle_quiz_results ENABLE ROW LEVEL SECURITY;

-- Create policies for user access
CREATE POLICY "Users can view their own quiz results" 
ON public.lifestyle_quiz_results 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own quiz results" 
ON public.lifestyle_quiz_results 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own quiz results" 
ON public.lifestyle_quiz_results 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own quiz results" 
ON public.lifestyle_quiz_results 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_lifestyle_quiz_results_updated_at
BEFORE UPDATE ON public.lifestyle_quiz_results
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for faster queries by user
CREATE INDEX idx_lifestyle_quiz_results_user_id ON public.lifestyle_quiz_results(user_id);
CREATE INDEX idx_lifestyle_quiz_results_created_at ON public.lifestyle_quiz_results(created_at DESC);