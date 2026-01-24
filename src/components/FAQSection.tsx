import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "How is Sculpt and Strive different from other fitness apps?",
    answer: "Sculpt and Strive is the only platform that specializes in life-stage fitness — from prenatal to senior, youth to corrective exercise. Unlike generic fitness apps, every program is designed by certified specialists who understand your unique needs. Our comprehensive postural assessment tools and AI-powered programming ensure truly personalized training."
  },
  {
    question: "What equipment do I need to get started?",
    answer: "Nothing! We have extensive bodyweight-only programs. However, if you have access to kettlebells, resistance bands, or gym equipment, we have specialized programs for each. Our travel workouts are designed for hotel rooms with zero equipment."
  },
  {
    question: "Is this suitable for complete beginners?",
    answer: "Absolutely. Every program starts with a thorough assessment and places you at the right starting point. All exercises include modifications for different fitness levels. Our senior and youth programs are specifically designed for those new to structured fitness."
  },
  {
    question: "How does the postural assessment work?",
    answer: "Our assessment includes four components: static posture analysis (standing alignment), dynamic movement screening (walking and transitions), push/pull pattern evaluation, and overhead squat assessment. Using your smartphone camera and our AI, we identify imbalances and create your corrective exercise roadmap."
  },
  {
    question: "Can I use Sculpt and Strive during pregnancy?",
    answer: "Yes! Our prenatal program is designed by certified pre/postnatal specialists. Workouts are modified for each trimester and focus on maintaining strength, managing discomfort, and preparing for birth. Always consult your healthcare provider before starting any exercise program during pregnancy."
  },
  {
    question: "Is the Senior Vitality program safe for people with health conditions?",
    answer: "Our 55+ programs are designed with safety as the priority, focusing on balance, joint-friendly movements, and functional strength. We recommend consulting with your doctor before starting. Many members with conditions like arthritis, osteoporosis, and heart conditions successfully use our programs under their physician's guidance."
  },
  {
    question: "How does nutrition tracking work?",
    answer: "Our smart nutrition system calculates macros based on your specific goals (weight loss, muscle gain, prenatal needs, etc.). You can log meals manually, scan barcodes, or use our meal planning feature. The system adapts recommendations based on your training intensity and progress."
  },
  {
    question: "What's included in the group training?",
    answer: "Group training connects you with others who share similar goals — prenatal moms, seniors, weight loss journeys, youth athletes, and more. Groups include scheduled live sessions, accountability challenges, shared wins, and a supportive community chat."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, all plans are month-to-month with no long-term commitment. Cancel anytime from your account settings. We also offer a 30-day money-back guarantee if you're not satisfied."
  },
  {
    question: "Do you offer family plans?",
    answer: "Yes! Our Elite plan includes family accounts for up to 4 members. This is perfect for families with youth athletes, parents, and grandparents who can all have personalized programs under one subscription."
  },
];

export const FAQSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Questions & Answers
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked{" "}
              <span className="text-gradient-hero">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about starting your transformation journey.
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-2xl px-6 data-[state=open]:shadow-soft transition-all"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still have questions */}
          <div className="text-center mt-12 p-8 bg-muted/30 rounded-3xl border border-border/50">
            <h3 className="font-display text-xl font-bold mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help you find the perfect program for your goals.
            </p>
              <Button variant="hero" size="lg" asChild>
                <a href="https://api.whatsapp.com/message/WGFG665AKDQ4B1?autoload=1&app_absent=0&utm_source=ig" target="_blank">
                  <MessageCircle className="w-5 h-5" />
                  <span>
                    Chat with Us
                  </span>
                </a>
              </Button> 
          </div>
        </div>
      </div>
    </section>
  );
};
