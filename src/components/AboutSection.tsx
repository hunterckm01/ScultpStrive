import { Award, ShieldCheck, Target, Users } from "lucide-react"
import { MotiveCard } from "./MotiveCard"

const aboutUsStats = [
    {value: "20+", label: "ACTIVE MEMBERS", icon: Users},
    {value: "2", label: "EXPERT TRAINERS", icon: Award},
    {value: "10+", label: "YEARS EXPERIENCE", icon: Target}
]

const motto = [
    {heading: "OUR MISSION", description: "Sculpt & Strive Fitness is dedicated to creating a space where every member feels supported, challenged, and motivated to reach their personal best."},
    {heading: "OUR VISION", description: "At Sculpt and Strive, we believe true fitness is both an art and a science deeply personal, purpose-driven, and guided by data. We bring together evidence-based training, intelligent nutrition, and mindful recovery to empower every individual to move smarter, grow stronger, and thrive sustainably."}
]

const trainerInfo = [
    {name: "Namita Lamba", certifications: ["CPT", "CNC", "WFS", "SFC", "CES", "PES"]},
    {name: "Sagar Lamba", certifications: ["CPT", "CNC", "PBC", "SFS", "WLS", "YES"]},
]

export const AboutSection = () => {
    return(
        <section id = "about" className=" mt-10 py-20 relative overflow-hidden">
            {/* Background */}
            <div className="bg-gradient-to-b from-background via-muted/20 to-background">

            <div className="container mx-auto px-4 relative z-10"/>
                {/* Section Header*/}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                        About Us
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Sculpt and {" "}
                        <span className="text-gradient-hero">Strive</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">Sculpt and Strive is a results-driven fitness brand dedicated to helping individuals of all ages and fitness levels achieve their health goals. Led by USA certified coaches:</p>
                </div>
                
                {/* Coaches Information */}
                <div className="max-w-2xl mx-auto grid grid-cols-2 gap-4 py-6">
                    {
                        trainerInfo.map((trainer, index)=>(
                            <div className="flex flex-col gap-4 border rounded-xl  hover:transition-all hover:duration-200 hover:shadow-glow px-4 py-2 animate-slide-up">
                                <h2 className = "text-xl font-bold text-center">{trainer.name}</h2>
                                <div>Certifications</div>
                                <ul className="flex flex-col gap-2">
                                    {trainer.certifications.map((certification, index)=>(
                                        <li className="text-sm text-muted-foreground flex gap-2 items-center">
                                            <ShieldCheck />
                                            <p>
                                                {certification}
                                            </p>    
                                            </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }
                </div>


                {/* About Us Stats */}
                <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-12">
                    {aboutUsStats.map((stat) => (
                        <div key = {stat.label} className="text-center border py-3 px-2 rounded-md hover:shadow-glow animate-slide-up">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3 backdrop-blur-sm">
                                <stat.icon className="w-6 h-6 text-secondary"/>
                            </div>
                            <div className="font-display text-2xl md:text-3xl font-bold  mb-1 -mt-2">
                                {stat.value}
                            </div>
                            <div className="text-muted-foreground text-xs md:text-sm font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Our Story Is Remaing */}
                <div className="w-full flex flex-col gap-4 max-w-3xl mx-auto text-center py-4 pb-8">
                    <h2 className="text-xl font-bold">OUR STORY: FITNESS THAT MOVES WITH YOU</h2>
                    <p className="text-lg">At Sculpt & Strive, fitness fits your life...</p>
                    <p className="text-lg">Whether you’re working out at home, at the gym, or while traveling, our flexible programs make it easy to stay consistent anywhere.</p>
                    <p className="text-lg">We design programs that go beyond the physical—focusing on your {" "}<span className="font-bold">strength, mobility, confidence, and overall well-being.</span></p>
                </div>
                
                {/* Our Mission and Vision */}
                <div className="grid md:grid-cols-2 py-4 gap-6 max-w-5xl mx-auto mb-10">
                    {motto.map((motive, index) => (
                        <MotiveCard key = {motive.heading}
                        {...motive}
                        />
                    ))
                    }
                </div>
             </div>
        </section>
    )
}