import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Clock, 
  Battery, 
  Moon, 
  Heart, 
  Zap,
  Target,
  RefreshCw,
  CheckCircle2,
  Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

type QuestionOption = {
  id: string;
  label: string;
  icon: React.ElementType;
  scores: {
    intensity: number;
    flexibility: number;
    recovery: number;
    consistency: number;
  };
};

type Question = {
  id: string;
  question: string;
  subtitle?: string;
  options: QuestionOption[];
};

const questions: Question[] = [
  {
    id: "schedule",
    question: "How predictable is your weekly schedule?",
    subtitle: "Be honest—life happens!",
    options: [
      { 
        id: "very-predictable", 
        label: "Very predictable—same routine most days", 
        icon: Clock,
        scores: { intensity: 3, flexibility: 1, recovery: 2, consistency: 3 }
      },
      { 
        id: "somewhat-predictable", 
        label: "Somewhat predictable with occasional chaos", 
        icon: Clock,
        scores: { intensity: 2, flexibility: 2, recovery: 2, consistency: 2 }
      },
      { 
        id: "unpredictable", 
        label: "Unpredictable—every week is different", 
        icon: Clock,
        scores: { intensity: 1, flexibility: 3, recovery: 2, consistency: 1 }
      },
      { 
        id: "chaotic", 
        label: "Chaotic—I barely know what tomorrow looks like", 
        icon: Clock,
        scores: { intensity: 0, flexibility: 3, recovery: 3, consistency: 0 }
      },
    ],
  },
  {
    id: "energy",
    question: "How would you describe your typical energy levels?",
    options: [
      { 
        id: "high-stable", 
        label: "High and stable throughout the day", 
        icon: Battery,
        scores: { intensity: 3, flexibility: 1, recovery: 1, consistency: 3 }
      },
      { 
        id: "varies", 
        label: "Varies—some good days, some tough ones", 
        icon: Battery,
        scores: { intensity: 2, flexibility: 2, recovery: 2, consistency: 2 }
      },
      { 
        id: "often-tired", 
        label: "Often tired or running on empty", 
        icon: Battery,
        scores: { intensity: 1, flexibility: 2, recovery: 3, consistency: 1 }
      },
      { 
        id: "exhausted", 
        label: "Chronically exhausted or recovering from burnout", 
        icon: Battery,
        scores: { intensity: 0, flexibility: 3, recovery: 3, consistency: 0 }
      },
    ],
  },
  {
    id: "stress",
    question: "What's your current stress level?",
    options: [
      { 
        id: "low", 
        label: "Low—life feels manageable", 
        icon: Heart,
        scores: { intensity: 3, flexibility: 1, recovery: 1, consistency: 3 }
      },
      { 
        id: "moderate", 
        label: "Moderate—busy but handling it", 
        icon: Heart,
        scores: { intensity: 2, flexibility: 2, recovery: 2, consistency: 2 }
      },
      { 
        id: "high", 
        label: "High—feeling overwhelmed often", 
        icon: Heart,
        scores: { intensity: 1, flexibility: 2, recovery: 3, consistency: 1 }
      },
      { 
        id: "crisis", 
        label: "Crisis mode—just surviving", 
        icon: Heart,
        scores: { intensity: 0, flexibility: 3, recovery: 3, consistency: 0 }
      },
    ],
  },
  {
    id: "sleep",
    question: "How's your sleep quality lately?",
    options: [
      { 
        id: "great", 
        label: "Great—7-9 hours of quality sleep", 
        icon: Moon,
        scores: { intensity: 3, flexibility: 1, recovery: 1, consistency: 3 }
      },
      { 
        id: "okay", 
        label: "Okay—could be better", 
        icon: Moon,
        scores: { intensity: 2, flexibility: 2, recovery: 2, consistency: 2 }
      },
      { 
        id: "poor", 
        label: "Poor—frequently interrupted or not enough", 
        icon: Moon,
        scores: { intensity: 1, flexibility: 2, recovery: 3, consistency: 1 }
      },
      { 
        id: "terrible", 
        label: "Terrible—insomnia or major sleep issues", 
        icon: Moon,
        scores: { intensity: 0, flexibility: 3, recovery: 3, consistency: 0 }
      },
    ],
  },
  {
    id: "pain",
    question: "Do you deal with any physical limitations or pain?",
    options: [
      { 
        id: "none", 
        label: "No limitations—feeling strong", 
        icon: Zap,
        scores: { intensity: 3, flexibility: 1, recovery: 1, consistency: 3 }
      },
      { 
        id: "minor", 
        label: "Minor aches that I work around", 
        icon: Zap,
        scores: { intensity: 2, flexibility: 2, recovery: 2, consistency: 2 }
      },
      { 
        id: "chronic", 
        label: "Chronic pain or recovering from injury", 
        icon: Zap,
        scores: { intensity: 1, flexibility: 3, recovery: 3, consistency: 1 }
      },
      { 
        id: "significant", 
        label: "Significant limitations that affect daily life", 
        icon: Zap,
        scores: { intensity: 0, flexibility: 3, recovery: 3, consistency: 0 }
      },
    ],
  },
  {
    id: "time",
    question: "How much time can you realistically dedicate to workouts?",
    options: [
      { 
        id: "60plus", 
        label: "60+ minutes, 4-5 times a week", 
        icon: Target,
        scores: { intensity: 3, flexibility: 1, recovery: 1, consistency: 3 }
      },
      { 
        id: "30-45", 
        label: "30-45 minutes, 3-4 times a week", 
        icon: Target,
        scores: { intensity: 2, flexibility: 2, recovery: 2, consistency: 2 }
      },
      { 
        id: "15-30", 
        label: "15-30 minutes when I can fit it in", 
        icon: Target,
        scores: { intensity: 1, flexibility: 3, recovery: 2, consistency: 1 }
      },
      { 
        id: "minimal", 
        label: "Barely any—just need something minimal", 
        icon: Target,
        scores: { intensity: 0, flexibility: 3, recovery: 3, consistency: 0 }
      },
    ],
  },
];

type TrainingApproach = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  color: string;
  gradient: string;
  icon: React.ElementType;
};

const trainingApproaches: TrainingApproach[] = [
  {
    id: "performance",
    name: "Performance Builder",
    tagline: "Push your limits, see real gains",
    description: "You're in a great position to pursue progressive training with structured intensity. Your lifestyle supports consistent effort and recovery.",
    features: [
      "Progressive overload programs",
      "Strength & conditioning focus",
      "Performance tracking & goals",
      "Weekly intensity targets"
    ],
    color: "text-empowerment",
    gradient: "from-empowerment/20 to-empowerment/5",
    icon: Zap,
  },
  {
    id: "balanced",
    name: "Balanced Progression",
    tagline: "Steady progress that fits your life",
    description: "You need flexibility with structure. Our adaptive programming adjusts to your energy and schedule while keeping you moving forward.",
    features: [
      "Flexible workout scheduling",
      "Energy-based intensity adjustments",
      "Mix of strength & recovery days",
      "Sustainable progression pace"
    ],
    color: "text-secondary",
    gradient: "from-secondary/20 to-secondary/5",
    icon: Target,
  },
  {
    id: "recovery",
    name: "Recovery-First Training",
    tagline: "Rebuild, restore, return stronger",
    description: "Right now, your body needs gentler support. We'll focus on movement that heals, restores energy, and builds a foundation for future progress.",
    features: [
      "Low-impact movement sessions",
      "Stress-reducing workouts",
      "Sleep & recovery optimization",
      "Gentle mobility & flexibility"
    ],
    color: "text-nurturing",
    gradient: "from-nurturing/20 to-nurturing/5",
    icon: Heart,
  },
  {
    id: "micro",
    name: "Micro-Dose Fitness",
    tagline: "Small wins, big impact over time",
    description: "When life is overwhelming, we go minimal but consistent. Short, effective sessions that keep you connected to movement without adding stress.",
    features: [
      "5-15 minute sessions",
      "No-equipment options",
      "Stress-free scheduling",
      "Habit-building focus"
    ],
    color: "text-vitality",
    gradient: "from-vitality/20 to-vitality/5",
    icon: Sparkles,
  },
];

export const LifestyleQuiz = () => {
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [resultData, setResultData] = useState<{ result: TrainingApproach; saved: boolean } | null>(null);

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const calculateScores = (currentAnswers: Record<string, string>) => {
    let totalScores = { intensity: 0, flexibility: 0, recovery: 0, consistency: 0 };
    
    Object.entries(currentAnswers).forEach(([questionId, answerId]) => {
      const question = questions.find(q => q.id === questionId);
      const option = question?.options.find(o => o.id === answerId);
      if (option) {
        totalScores.intensity += option.scores.intensity;
        totalScores.flexibility += option.scores.flexibility;
        totalScores.recovery += option.scores.recovery;
        totalScores.consistency += option.scores.consistency;
      }
    });

    return totalScores;
  };

  const calculateResult = (currentAnswers: Record<string, string>): TrainingApproach => {
    const totalScores = calculateScores(currentAnswers);
    const avgIntensity = totalScores.intensity / questions.length;
    const avgRecovery = totalScores.recovery / questions.length;

    if (avgIntensity >= 2.5 && avgRecovery <= 1.5) {
      return trainingApproaches[0]; // Performance
    } else if (avgIntensity >= 1.5 && avgIntensity < 2.5) {
      return trainingApproaches[1]; // Balanced
    } else if (avgRecovery >= 2.5 && avgIntensity >= 0.5) {
      return trainingApproaches[2]; // Recovery
    } else {
      return trainingApproaches[3]; // Micro
    }
  };

  const saveResults = async (finalAnswers: Record<string, string>) => {
    if (!user) return false;

    const scores = calculateScores(finalAnswers);
    const result = calculateResult(finalAnswers);

    try {
      const { error } = await supabase
        .from('lifestyle_quiz_results')
        .insert({
          user_id: user.id,
          schedule_answer: finalAnswers.schedule || '',
          energy_answer: finalAnswers.energy || '',
          stress_answer: finalAnswers.stress || '',
          sleep_answer: finalAnswers.sleep || '',
          pain_answer: finalAnswers.pain || '',
          time_answer: finalAnswers.time || '',
          intensity_score: scores.intensity,
          flexibility_score: scores.flexibility,
          recovery_score: scores.recovery,
          consistency_score: scores.consistency,
          recommended_approach: result.id,
        });

      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error saving quiz results:', error);
      return false;
    }
  };

  const handleNext = async () => {
    if (!selectedOption) return;
    
    const newAnswers = { ...answers, [currentQuestion.id]: selectedOption };
    setAnswers(newAnswers);
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
      setSelectedOption(answers[questions[currentStep + 1]?.id] || null);
    } else {
      // Final question - calculate and save
      setIsSaving(true);
      const result = calculateResult(newAnswers);
      let saved = false;

      if (user) {
        saved = await saveResults(newAnswers);
        if (saved) {
          toast.success("Your results have been saved!");
        }
      }

      setResultData({ result, saved });
      setShowResults(true);
      setIsSaving(false);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      setSelectedOption(answers[questions[currentStep - 1].id] || null);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
    setSelectedOption(null);
    setResultData(null);
  };

  if (showResults && resultData) {
    const { result, saved } = resultData;
    const ResultIcon = result.icon;
    
    return (
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mb-6">
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
            Your Ideal Training Approach
          </h3>
          <p className="text-muted-foreground">Based on your current lifestyle and needs</p>
        </div>

        <div className={cn(
          "bg-gradient-to-br rounded-3xl p-8 border border-border/50 mb-8 animate-scale-in",
          result.gradient
        )}>
          <div className="flex items-start gap-4 mb-6">
            <div className={cn("w-14 h-14 rounded-2xl bg-background/80 flex items-center justify-center", result.color)}>
              <ResultIcon className="w-7 h-7" />
            </div>
            <div>
              <h4 className={cn("font-display text-2xl font-bold", result.color)}>{result.name}</h4>
              <p className="text-muted-foreground font-medium">{result.tagline}</p>
            </div>
          </div>
          
          <p className="text-foreground mb-6 leading-relaxed">
            {result.description}
          </p>

          <div className="grid grid-cols-2 gap-3">
            {result.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className={cn("w-4 h-4 flex-shrink-0", result.color)} />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
          
          {!user && (
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Sign up to save your results and track your progress over time!
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="hero" size="lg" className="flex-1 group">
            Start Your Personalized Plan
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={handleRestart}
            className="flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Retake Quiz
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
          <span>Question {currentStep + 1} of {questions.length}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question */}
      <div className="mb-8 animate-fade-in" key={currentQuestion.id}>
        <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
          {currentQuestion.question}
        </h3>
        {currentQuestion.subtitle && (
          <p className="text-muted-foreground">{currentQuestion.subtitle}</p>
        )}
      </div>

      {/* Options */}
      <div className="space-y-3 mb-8">
        {currentQuestion.options.map((option, index) => {
          const Icon = option.icon;
          const isSelected = selectedOption === option.id;
          
          return (
            <button
              key={option.id}
              onClick={() => handleOptionSelect(option.id)}
              className={cn(
                "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 group",
                "hover:border-primary/50 hover:bg-primary/5",
                isSelected 
                  ? "border-primary bg-primary/10" 
                  : "border-border bg-card/50"
              )}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center gap-4">
                <div className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                  isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                )}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={cn(
                  "font-medium transition-colors",
                  isSelected ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                )}>
                  {option.label}
                </span>
                {isSelected && (
                  <CheckCircle2 className="w-5 h-5 text-primary ml-auto animate-scale-in" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={handleBack}
          disabled={currentStep === 0}
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        
        <Button
          variant="hero"
          onClick={handleNext}
          disabled={!selectedOption || isSaving}
          className="gap-2"
        >
          {isSaving ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              {currentStep === questions.length - 1 ? "See Results" : "Next"}
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};
