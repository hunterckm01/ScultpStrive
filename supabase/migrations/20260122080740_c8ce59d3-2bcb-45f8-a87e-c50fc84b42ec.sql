-- Drop existing region check constraint and add new one that includes USDA
ALTER TABLE public.foods DROP CONSTRAINT IF EXISTS foods_region_check;

-- Add new constraint allowing USA, India, and USDA
ALTER TABLE public.foods ADD CONSTRAINT foods_region_check 
CHECK (region IN ('USA', 'India', 'USDA'));