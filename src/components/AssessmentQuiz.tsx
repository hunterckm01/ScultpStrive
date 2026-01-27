import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  ChevronLeft,
  Target,
  User,
  Activity,
  Heart,
  Dumbbell,
  Calendar,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from "lucide-react";

interface QuizOption {
  id: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

interface QuizQuestion {
  id: string;
  question: string;
  subtitle?: string;
  type: "single" | "multiple";
  options: QuizOption[];
  category: string;
}

const questions: QuizQuestion[] = [
  {
    id: "goal",
    question: "What's your primary fitness goal?",
    subtitle: "Select the goal that matters most to you right now",
    type: "single",
    category: "Goals",
    options: [
      { id: "weight_loss", label: "Weight Loss", description: "Burn fat and achieve a healthy weight" },
      { id: "muscle_building", label: "Build Muscle", description: "Increase strength and muscle mass" },
      { id: "flexibility", label: "Flexibility & Mobility", description: "Improve range of motion and reduce stiffness" },
      { id: "corrective", label: "Corrective Exercise", description: "Fix posture and movement imbalances" },
      { id: "general_fitness", label: "General Fitness", description: "Overall health and wellness" },
      { id: "sports_performance", label: "Sports Performance", description: "Excel in athletic activities" },
    ]
  },
  {
    id: "age_group",
    question: "What's your age group?",
    subtitle: "This helps us customize exercises for your needs",
    type: "single",
    category: "Profile",
    options: [
      { id: "youth", label: "6-16 years", description: "Youth fitness programs" },
      { id: "young_adult", label: "17-35 years", description: "Peak performance training" },
      { id: "adult", label: "36-54 years", description: "Balanced fitness approach" },
      { id: "senior", label: "55+ years", description: "Senior-focused programs" },
    ]
  },
  {
    id: "gender",
    question: "How do you identify?",
    subtitle: "Some programs are tailored for specific needs",
    type: "single",
    category: "Profile",
    options: [
      { id: "female", label: "Female", description: "Access women's fitness programs" },
      { id: "male", label: "Male", description: "Standard fitness programs" },
      { id: "other", label: "Other / Prefer not to say", description: "Personalized approach" },
    ]
  },
  {
    id: "special_considerations",
    question: "Do any of these apply to you?",
    subtitle: "Select all that apply",
    type: "multiple",
    category: "Profile",
    options: [
      { id: "prenatal", label: "Currently Pregnant", description: "Prenatal exercise modifications" },
      { id: "postnatal", label: "Recently Gave Birth (< 1 year)", description: "Postnatal recovery programs" },
      { id: "injury", label: "Recovering from Injury", description: "Modified exercises available" },
      { id: "chronic", label: "Chronic Health Condition", description: "Adapted programs for your needs" },
      { id: "none", label: "None of the above", description: "Standard programming" },
    ]
  },
  {
    id: "experience",
    question: "What's your current fitness level?",
    subtitle: "Be honest - we'll meet you where you are",
    type: "single",
    category: "Experience",
    options: [
      { id: "beginner", label: "Beginner", description: "New to exercise or returning after a long break" },
      { id: "intermediate", label: "Intermediate", description: "Regular exercise for 6+ months" },
      { id: "advanced", label: "Advanced", description: "Consistent training for 2+ years" },
      { id: "athlete", label: "Athlete", description: "Competitive or professional level" },
    ]
  },
  {
    id: "equipment",
    question: "What equipment do you have access to?",
    subtitle: "Select all that apply",
    type: "multiple",
    category: "Equipment",
    options: [
      { id: "none", label: "Bodyweight Only", description: "No equipment needed" },
      { id: "bands", label: "Resistance Bands", description: "Portable and versatile" },
      { id: "kettlebells", label: "Kettlebells", description: "Functional training" },
      { id: "dumbbells", label: "Dumbbells", description: "Traditional strength training" },
      { id: "full_gym", label: "Full Gym Access", description: "Complete equipment range" },
    ]
  },
  {
    id: "frequency",
    question: "How often can you commit to training?",
    subtitle: "Consistency beats intensity",
    type: "single",
    category: "Schedule",
    options: [
      { id: "2_3", label: "2-3 times per week", description: "Great for beginners" },
      { id: "4_5", label: "4-5 times per week", description: "Optimal for most goals" },
      { id: "6_7", label: "6-7 times per week", description: "For dedicated athletes" },
      { id: "flexible", label: "Flexible / Varies", description: "We'll adapt to your schedule" },
    ]
  },
  {
    id: "time",
    question: "How much time per session?",
    subtitle: "Quality over quantity",
    type: "single",
    category: "Schedule",
    options: [
      { id: "15_30", label: "15-30 minutes", description: "Quick and effective" },
      { id: "30_45", label: "30-45 minutes", description: "Standard workout length" },
      { id: "45_60", label: "45-60 minutes", description: "Comprehensive training" },
      { id: "60_plus", label: "60+ minutes", description: "Extended sessions" },
    ]
  },
];

interface ResultData {
  level: string;
  levelNumber: number;
  programs: string[];
  focusAreas: string[];
  weeklyPlan: string;
  estimatedProgress: string;
}

export const AssessmentQuiz = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [showResults, setShowResults] = useState(false);

  const handleSingleSelect = (questionId: string, optionId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
  };

  const handleMultipleSelect = (questionId: string, optionId: string) => {
    setAnswers(prev => {
      const current = (prev[questionId] as string[]) || [];
      if (current.includes(optionId)) {
        return { ...prev, [questionId]: current.filter(id => id !== optionId) };
      }
      return { ...prev, [questionId]: [...current, optionId] };
    });
  };

  const isOptionSelected = (questionId: string, optionId: string) => {
    const answer = answers[questionId];
    if (Array.isArray(answer)) {
      return answer.includes(optionId);
    }
    return answer === optionId;
  };

  const canProceed = () => {
    const current = questions[currentQuestion];
    const answer = answers[current.id];
    if (current.type === "multiple") {
      return Array.isArray(answer) && answer.length > 0;
    }
    return !!answer;
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateResults = (): ResultData => {
    const goal = answers.goal as string;
    const experience = answers.experience as string;
    const ageGroup = answers.age_group as string;
    
    let levelNumber = 1;
    if (experience === "intermediate") levelNumber = 2;
    if (experience === "advanced") levelNumber = 3;
    if (experience === "athlete") levelNumber = 4;
    
    const levels = ["Beginner", "Intermediate", "Advanced", "Elite"];
    const level = levels[levelNumber - 1];
    
    const programs: string[] = [];
    if (goal === "weight_loss") programs.push("Fat Burn Accelerator", "HIIT Training");
    if (goal === "muscle_building") programs.push("Strength Foundations", "Muscle Builder");
    if (goal === "flexibility") programs.push("Flexibility Flow", "Mobility Mastery");
    if (goal === "corrective") programs.push("Posture Correction", "Movement Restoration");
    if (ageGroup === "senior") programs.push("Senior Strength", "Balance & Stability");
    if (ageGroup === "youth") programs.push("Youth Champions", "Fun Fitness");
    
    const focusAreas: string[] = [];
    if (goal === "weight_loss") focusAreas.push("Cardio", "Nutrition Tracking", "HIIT");
    if (goal === "muscle_building") focusAreas.push("Progressive Overload", "Recovery", "Protein Intake");
    if (goal === "flexibility") focusAreas.push("Dynamic Stretching", "Yoga", "Mobility Work");
    
    return {
      level,
      levelNumber,
      programs: programs.slice(0, 3),
      focusAreas: focusAreas.slice(0, 3),
      weeklyPlan: `${answers.frequency === "2_3" ? "3" : answers.frequency === "4_5" ? "5" : answers.frequency === "6_7" ? "6" : "4"} sessions/week`,
      estimatedProgress: "8-12 weeks to see significant results"
    };
  };

  if (!started) {
    return (
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <Card variant="elevated" className="max-w-3xl mx-auto">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="w-20 h-20 mx-auto rounded-full gradient-hero flex items-center justify-center mb-6">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Find Your Perfect Starting Point
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Take our 2-minute assessment to discover your fitness level, get personalized program recommendations, 
                and start your transformation journey today.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-4 rounded-xl bg-muted/50">
                  <User className="w-8 h-8 text-terracotta-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground">Personalized</h4>
                  <p className="text-sm text-muted-foreground">Tailored to your goals & needs</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/50">
                  <Activity className="w-8 h-8 text-sage-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground">8 Questions</h4>
                  <p className="text-sm text-muted-foreground">Quick and comprehensive</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/50">
                  <Sparkles className="w-8 h-8 text-terracotta-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground">Instant Results</h4>
                  <p className="text-sm text-muted-foreground">Get your plan immediately</p>
                </div>
              </div>
              
              <Button variant="hero" size="xl" onClick={() => setStarted(true)}>
                Start Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  if (showResults) {
    const results = calculateResults();
    
    return (
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <Card variant="elevated" className="max-w-4xl mx-auto overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 p-8 text-center text-white">
              <div className="w-20 h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-display font-bold mb-2">Your Assessment Results</h2>
              <p className="text-white/90">Based on your responses, here's your personalized fitness profile</p>
            </div>
            
            <CardContent className="p-8">
              {/* Level Badge */}
              <div className="text-center mb-8">
                <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-terracotta-100 to-sage-100 border-2 border-terracotta-200">
                  <p className="text-sm text-muted-foreground mb-1">Your Starting Level</p>
                  <h3 className="text-4xl font-display font-bold gradient-text">
                    Level {results.levelNumber}: {results.level}
                  </h3>
                </div>
              </div>
              
              {/* Results Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card variant="interactive">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-charcoal-700">
                      <Dumbbell className="w-5 h-5 text-sage-600" />
                      Recommended Programs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {results.programs.map((program, i) => (
                        <li key={i} className="flex items-center gap-2 text-charcoal-600">
                          <CheckCircle2 className="w-4 h-4 text-sage-600" />
                          {program}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card variant="interactive">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-terracotta-500" />
                      Focus Areas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {results.focusAreas.map((area, i) => (
                        <li key={i} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-terracotta-500" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card variant="interactive">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-sage-600" />
                      Weekly Plan
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-display font-bold text-foreground">{results.weeklyPlan}</p>
                    <p className="text-sm text-muted-foreground">Optimized for your schedule</p>
                  </CardContent>
                </Card>
                
                <Card variant="interactive">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-terracotta-500" />
                      Expected Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold text-foreground">{results.estimatedProgress}</p>
                    <p className="text-sm text-muted-foreground">With consistent effort</p>
                  </CardContent>
                </Card>
              </div>
              
              {/* CTA */}
              <div className="text-center space-y-4">
                <a href = "https://calendly.com/sculptandstrive/30min" target="_blank">
                <Button variant="hero" size="xl">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                </a>
                <p className="text-sm text-muted-foreground">
                  Or{" "}
                  <button 
                    onClick={() => { setShowResults(false); setCurrentQuestion(0); setAnswers({}); }}
                    className="text-terracotta-600 hover:underline"
                  >
                    retake the assessment
                  </button>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  const current = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <Card variant="elevated" className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="h-2 bg-muted">
            <div 
              className="h-full bg-gradient-to-r from-terracotta-500 to-terracotta-400 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <CardContent className="p-8">
            {/* Question Counter */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                {current.category}
              </span>
            </div>
            
            {/* Question */}
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
              {current.question}
            </h3>
            {current.subtitle && (
              <p className="text-muted-foreground mb-8">{current.subtitle}</p>
            )}
            
            {/* Options */}
            <div className="space-y-3 mb-8">
              {current.options.map((option) => {
                const isSelected = isOptionSelected(current.id, option.id);
                return (
                  <button
                    key={option.id}
                    onClick={() => {
                      if (current.type === "single") {
                        handleSingleSelect(current.id, option.id);
                      } else {
                        handleMultipleSelect(current.id, option.id);
                      }
                    }}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                      isSelected 
                        ? 'border-terracotta-500 bg-terracotta-50' 
                        : 'border-border hover:border-terracotta-300 hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        isSelected 
                          ? 'border-primary bg-primary' 
                          : 'border-muted-foreground'
                      }`}>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-slate-100" />}
                      </div>
                      <div>
                        <p className={`font-semibold ${isSelected ? 'text-terracotta-700' : 'text-foreground'}`}>
                          {option.label}
                        </p>
                        {option.description && (
                          <p className="text-sm text-muted-foreground">{option.description}</p>
                        )}
                      </div>
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
                disabled={currentQuestion === 0}
                className="text-muted-foreground"
              >
                <ChevronLeft className="w-5 h-5 mr-1" />
                Back
              </Button>
              <Button 
                variant="hero" 
                onClick={handleNext}
                disabled={!canProceed()}
              >
                {currentQuestion === questions.length - 1 ? 'See Results' : 'Continue'}
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
