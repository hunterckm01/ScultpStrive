import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const plans = [
    {
    name: "Basic Plan",
    tag: null,
    features: [
        "Initial Fitness & Posture Assessment",
        "Monthly Workout Plan",
        "Weekly Progress Check-In",
        "Access to Workout Recordings"
    ]
    },
    {
    name: "Standard Plan",
    tag: "Popular",
    features: [
      "Everything in Basic",
      "Nutrition Coaching (Bi-Weekly)",
      "2 Monthly Support Calls",
      "Posture & Mobility Guidance"
    ]
  },
  {
    name: "Premium Plan",
    tag: null,
    features: [
      "Everything in Standard",
      "Behaviour & Habit Coaching",
      "Weekly Coaching Calls",
      "Advanced Posture Analysis"
    ]
  },
  {
    name: "Elite 1:1 Coaching - 45 Minutes",
    tag: null,
    features: [
      "1:1 Personal Training (45 mins)",
      "5 Days a Week (20 Sessions a Month)",
      "Supplement & Nutrition Guidance",
      "Unlimited Chat Support"
    ]
  },
  {
    name: "Elite 1:1 Coaching - 30 Minutes",
    tag: null,
    features: [
      "1:1 Personal Training (30 mins)",
      "5 Days a Week (20 Sessions a Month)",
      "Nutrition & Supplement Guidance",
      "Weekly Progress Feedback"
    ]
  },
  {
    name: "Senior Fitness Group PT (30 Minutes - 3 Days/Week)",
    tag: null,
    features: [
      "Low-Impact Senior-Friendly Workouts",
      "3 Days/Week • 30-Minute Sessions",
      "12 Guided Sessions Per Month",
      "Balance, Mobility & Joint-Friendly Training"
    ]
  },
  {
    name: "Youth Fitness Group PT (30 Minutes - 3 Days/Weeek)",
    tag: null,
    features: [
      "Fun & Engaging Youth Training",
      "3 Days/Week • 30-Minute Sessions",
      "12 Skill-Building Sessions Per Month",
      "Strength, Agility & Confidence Development"
    ]
  },
  {
    name: "Pre & Post Natal Group PT (30 Minutes - 3 Days/Weeek)",
    tag: null,
    features: [
      "Safe Pregnancy & Postpartum-Friendly Sessions",
      "3 Days/Week • 30-Minute Sessions",
      "12 Guided Sessions Per Month",
      "Core Strength, Mobility & Recovery"
    ]
  },
  {
    name: "Menopausal Stage Fitness & Nutrition Plan",
    tag: null,
    features: [
      "Initial Fitness & Posture Assessment",
      "Monthly Workout Plan (Hormone-Friendly)",
      "Weekly Progress Check-In",
      "Nutrition Guidance for Menopause Support"
    ]
  },
  {
    name: "Posture Corrective Exercise Solution",
    tag: null,
    features: [
      "Initial Fitness & Posture Assessment",
      "Monthly Workout Plan",
      "Weekly Progress Check-In",
      "Access to Workout Recordings"
    ]
  },
  {
    name: "Elite 1:1 Coaching - 45 Minutes (12 Sessions/ 3 Days a Week)",
    tag: null,
    features: [
      "1:1 Personal Training (45 mins)",
      "3 Days/Week – 12 Sessions per Month",
      "Nutrition & Supplement Guidance",
      "Weekly Progress Tracking"
    ]
  },
  {
    name: "Elite 1:1 Coaching - 45 Minutes (12 Sessions)",
    tag: null,
    features: [
      "1:1 Personal Training (30 mins)",
      "Nutrition & Supplement Guidance",
      "3 Days/Week – 12 Sessions per Month",
      "Weekly Progress Feedback"
    ]
  }
]

export const PlansSection = () => {
    return(
        <section id = "plan" className="py-20 mt-10 relative overflow-hidden">
            <div className="container mx-auto px-8 relative z-10 ">
                <h2 className="text-4xl font-bold text-center">Fitness Coaching  <span className="text-gradient-hero">Requirements Plans</span></h2>

                {/* All Available Plans Mapping */}
                <div className="grid md:grid-cols-3 gap-4 py-8">
                    {
                        plans.map((plan, index) => (
                            <div className="flex flex-col gap-4 border rounded-xl py-6 px-4 transition-all duration-100 hover:shadow-glow justify-between animate-slide-up">
                                {plan.tag ? <div className=" text-center text-sm text-yellow-600 font-semibold flex gap-1 items-center justify-center"><Star size={14}/><p> Popular</p>
                                </div> : <></>}
                                <h2 className="text-xl font-semibold text-center ">{plan.name}</h2>
                                <ul className="mt-4 mb-2 flex flex-col gap-1">
                                    {
                                        plan.features.map((feature, index)=>(
                                            <li className="text-muted-foreground">{feature}</li>
                                        ))
                                    }
                                </ul>
                                <a href = "https://calendly.com/sculptandstrive/30min?month=2025-09" target="_blank">
                                <Button variant = "default" size = "default" >
                                    Enquiry Now
                                </Button>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}