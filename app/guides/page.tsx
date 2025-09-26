"use client";
import { Button } from '@/components/ui/button';
import GuideCard from '@/components/GuideCard';

const guides = [
  {
    id: 1,
    name: "Amira Hassan",
    location: "Cairo, Egypt",
    rating: 4.9,
    reviews: 127,
    specialties: ["Historical Tours", "Local Cuisine", "Architecture"],
    languages: ["English", "Arabic", "French"],
    priceRange: "$25-45",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    description: "Passionate historian sharing Cairo's ancient stories and hidden gems.",
    experience: "5 years",
    verified: true
  },
  {
    id: 2,
    name: "Kenji Tanaka",
    location: "Kyoto, Japan",
    rating: 5.0,
    reviews: 89,
    specialties: ["Cultural Tours", "Tea Ceremony", "Gardens"],
    languages: ["English", "Japanese"],
    priceRange: "$35-60",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    description: "Traditional culture enthusiast showcasing authentic Japanese experiences.",
    experience: "8 years",
    verified: true
  },
  {
    id: 3,
    name: "Isabella Rodriguez",
    location: "Barcelona, Spain",
    rating: 4.8,
    reviews: 156,
    specialties: ["Art Tours", "Food & Wine", "Nightlife"],
    languages: ["English", "Spanish", "Catalan"],
    priceRange: "$30-50",
    image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    description: "Local artist sharing Barcelona's vibrant culture and hidden artistic treasures.",
    experience: "4 years",
    verified: true
  },
  {
    id: 4,
    name: "Raj Patel",
    location: "Mumbai, India",
    rating: 4.9,
    reviews: 203,
    specialties: ["Street Food", "Markets", "Bollywood"],
    languages: ["English", "Hindi", "Gujarati"],
    priceRange: "$15-35",
    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    description: "Born and raised Mumbaikar sharing the soul of the city through food and stories.",
    experience: "6 years",
    verified: true
  }
];


export default function FeaturedGuides() {
  return (
    <section id="guides" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Meet Our Featured Local Guides
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the world through the eyes of passionate locals who know their cities inside out.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {guides.map((guide) => (
            <div key={guide.id} className="animate-slide-up">
              <GuideCard guide={guide} />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg">
            Explore All Guides
          </Button>
        </div>
      </div>
    </section>
  );
}