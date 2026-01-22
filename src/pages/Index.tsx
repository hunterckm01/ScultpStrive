import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { AssessmentSection } from "@/components/AssessmentSection";
import { EquipmentSection } from "@/components/EquipmentSection";
import { NutritionSection } from "@/components/NutritionSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { StatsSection } from "@/components/StatsSection";
import { GroupTrainingSection } from "@/components/GroupTrainingSection";
import { ChallengesSection } from "@/components/ChallengesSection";
import { LevelsSection } from "@/components/LevelsSection";
import { LeaderboardSection } from "@/components/LeaderboardSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { AssessmentQuiz } from "@/components/AssessmentQuiz";
import { UserDashboard } from "@/components/UserDashboard";
import { TrainerSection } from "@/components/TrainerSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { AboutSection } from "@/components/AboutSection";
import { NewTrainerSection } from "@/components/NewTrainerSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <main>
        <HeroSection />
        <PhilosophySection />
        <StatsSection />
        <HowItWorksSection />
        <AssessmentQuiz />
        {/* AssessmentSection */}
        {/* EquipmentSection */}
        {/* <NutritionSection /> */}

        {/* As Guided to remove this and will be implemented on Dashboard Further  */}

        {/* <ChallengesSection />  */}
        {/* <LeaderboardSection />  */}
        {/* <AchievementsSection />  */}
        {/* <UserDashboard /> */}

        <FeaturesSection />
        {/* <GroupTrainingSection /> */}
        {/* <TrainerSection /> */}
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      
    </div>
  );
};

export default Index;
