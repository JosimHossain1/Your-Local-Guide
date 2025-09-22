"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "How do I book a tour with a local guide?",
    answer: "Booking is simple! Browse our featured guides or tours, select your preferred experience, fill out the booking form with your details and preferred dates, and submit your request. You'll receive confirmation within 2 hours, and we'll connect you directly with your guide to finalize details."
  },
  {
    question: "Are your local guides verified and trustworthy?",
    answer: "Absolutely! All our guides go through a thorough verification process including background checks, local certification verification, and community recommendations. Every guide has verified reviews from previous travelers, and we maintain a high standard through our rating system."
  },
  {
    question: "What's included in the tour price?",
    answer: "Tour inclusions vary by experience, but typically include the guide's expertise, planned activities, and any entrance fees mentioned in the tour description. Food, transportation, and additional activities may be extra unless specifically noted. Each tour listing clearly outlines what's included and what's optional."
  },
  {
    question: "Can I customize a tour to my interests?",
    answer: "Yes! Most of our guides are happy to customize experiences based on your interests, mobility needs, and time constraints. When booking, use the special requests section to communicate your preferences. Many guides offer fully personalized tours for groups."
  },
  {
    question: "What's your cancellation policy?",
    answer: "We offer flexible cancellation policies that vary by tour and guide. Generally, you can cancel up to 24-48 hours before your tour for a full refund. Emergency cancellations are handled case-by-case. Specific cancellation terms are provided when you book."
  },
  {
    question: "How do I pay for my tour?",
    answer: "We accept all major credit cards, PayPal, and local payment methods in many regions. Payment is secure through our platform, and we only release payment to guides after your tour is completed. Some tours may require a deposit with the balance paid on the day of the tour."
  },
  {
    question: "What if weather affects my outdoor tour?",
    answer: "Guides will contact you if weather conditions make a tour unsafe or unenjoyable. In most cases, they'll offer alternative indoor activities, reschedule your tour, or provide a full refund. Your safety and enjoyment are our top priorities."
  },
  {
    question: "Do guides speak English?",
    answer: "All our featured guides speak conversational English at minimum, with many being fluent or native speakers. Each guide's profile lists their languages, and you can filter searches by language preference. We also have guides who speak other languages like Spanish, French, Mandarin, and more."
  },
  {
    question: "Is travel insurance recommended?",
    answer: "We strongly recommend travel insurance for all international trips. While our guides maintain appropriate local insurance, travel insurance can protect you against trip cancellations, medical emergencies, and unexpected situations. Many providers offer affordable day-trip coverage."
  },
  {
    question: "How do I leave a review after my tour?",
    answer: "After your tour, you'll receive an email with a link to leave a review. Your feedback helps other travelers choose experiences and helps us maintain quality standards. We encourage honest, detailed reviews that help future travelers know what to expect."
  }
];

export function FAQ() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about booking tours with local guides.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-medium pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-muted/50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help you plan the perfect local experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-sm">
                <strong>Email:</strong> support@localwanderer.com
              </div>
              <div className="text-sm">
                <strong>Phone:</strong> +1 (555) 123-TOUR
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}