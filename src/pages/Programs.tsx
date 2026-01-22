import { LevelsSection } from "@/components/LevelsSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { ProgressionSection } from "@/components/ProgressionSection";

const Programs = () => {
    return (
        <div className="min-h-screen bg-background">
            <main>
                <ProgramsSection />
                <ProgressionSection/>      
            </main>
        </div>
    )
}

export default Programs;