"use client";

import { Star, MapPin, Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

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

function GuideCard({ guide }: { guide: typeof guides[0] }) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden relative">
      <CardContent className="p-0">
        <div className="">
          <Avatar className="w-full h-52 rounded-none">
            <AvatarImage 
              src={guide.image} 
              alt={guide.name}
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <AvatarFallback className="w-full h-48 rounded-none">
              {guide.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          {guide.verified && (
            <Badge className="absolute top-3 right-3 bg-emerald-500 hover:bg-emerald-600">
              Verified
            </Badge>
          )}
          
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-3 left-3 bg-background/80 hover:bg-background/90"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-semibold text-lg">{guide.name}</h3>
              <p className="text-muted-foreground flex items-center text-sm">
                <MapPin className="h-3 w-3 mr-1" />
                {guide.location}
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="font-medium">{guide.rating}</span>
              </div>
              <p className="text-xs text-muted-foreground">({guide.reviews} reviews)</p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {guide.description}
          </p>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {guide.specialties.slice(0, 2).map((specialty) => (
              <Badge key={specialty} variant="secondary" className="text-xs">
                {specialty}
              </Badge>
            ))}
            {guide.specialties.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{guide.specialties.length - 2} more
              </Badge>
            )}
          </div>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
            <span>{guide.experience} experience</span>
            <span className="font-medium text-foreground">{guide.priceRange}/tour</span>
          </div>
          
          <div className="flex gap-2">
            <Button className="flex-1" size="sm">
              View Profile
            </Button>
            <Button variant="outline" size="sm">
              <MessageCircle className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

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