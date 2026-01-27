import { Facebook, Instagram, Star } from "lucide-react"
import Sagar from '../assets/Sagar.jpeg'
import Namita from '../assets/Namita.jpeg'

export const NewTrainerSection = () => {
    const trainerDetails = [
        {
            name: "Sagar Lamba", 
            rating: 4.9,
            experience: 10,
            Instagram: "https://www.instagram.com/titan_beast_strength/",
            Facebook: "https://www.facebook.com/people/Sculpt-And-Strive/61576293194411/",
            profile: Sagar    
        },
        {
         name: "Namita Lamba",
         rating: 4.8,
         experience: 6,
         Instagram: "https://www.instagram.com/shape_to_strength/", Facebook: "https://www.facebook.com/people/Sculpt-And-Strive/61576293194411/",
        profile: Namita
        },
    ]
    return (
        <section id = "trainers" className="py-20 mt-10 relative overflow-hidden">
            {/* Trainer Section Information */}
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center flex flex-col gap-4">
                    <h2 className="font-bold text-4xl"> OUR EXPERT <span className="text-gradient-hero">TRAINERS</span></h2>
                    <p className="text-muted-foreground">Our certified professionals are here to guide you on your fitness journey with expertise and motivation.</p>
                </div>

                {/* Trainer Cards */}
                <div className="grid md:grid-cols-2 max-w-3xl gap-8 mx-auto py-8 ">
                    {trainerDetails.map((trainer, index) => (
                        <div className="border text-center py-4 rounded-3xl hover:shadow-glow shadow-md animate-slide-up transition-all duration-100">
                            <div className="flex flex-col gap-4 items-center">
                                <img src = {trainer.profile} className="rounded-full 
                                w-48 h-48"/>
                                <h2 className="text-xl font-semibold">{trainer.name}</h2>
                                <div className="flex justify-center items-center gap-2">
                                    <div className="flex">
                                        <Star className="text-yellow-300 text-[10px]"/>
                                        <p className="text-lg">{trainer.rating}</p>
                                    </div>
                                        
                                    <p className="text-muted-foreground text-sm">({trainer.experience} {" "} Years)</p>
                                </div>
                                <div className="flex gap-6 justify-center ">
                                    <a href={trainer.Instagram} target = "_blank">
                                    <button  className="bg-pink-500 rounded-md px-3 py-1 text-white flex items-center gap-1"><Instagram size = {16}/>Instagram</button>
                                    </a>

                                    <a href={trainer.Facebook} target="_blank" rel="noopener noreferrer">
                                    <button className="bg-blue-600 rounded-md px-3 py-1 flex items-center gap-2 text-white">
                                    <Facebook size={16} />
                                         Facebook
                                    </button>
                                    </a>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}