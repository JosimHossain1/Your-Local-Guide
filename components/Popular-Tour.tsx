"use client";

import { Clock, Users, MapPin, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const tours = [
  {
    id: 1,
    title: "Hidden Temples of Angkor",
    location: "Siem Reap, Cambodia",
    guide: "Sopheap Chen",
    price: 85,
    originalPrice: 120,
    duration: "8 hours",
    groupSize: "Max 8 people",
    rating: 4.9,
    reviews: 42,
    image: "https://images.pexels.com/photos/161401/angkor-wat-cambodia-temple-angkor-161401.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Cultural Heritage",
    highlights: ["Skip-the-line access", "Local breakfast included", "Photography tips"],
    difficulty: "Easy"
  },
  {
    id: 2,
    title: "Tokyo Street Food Adventure",
    location: "Tokyo, Japan",
    guide: "Hiroshi Yamamoto",
    price: 65,
    originalPrice: null,
    duration: "4 hours",
    groupSize: "Max 6 people",
    rating: 5.0,
    reviews: 78,
    image: "https://images.pexels.com/photos/4492492/pexels-photo-4492492.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Culinary Experience",
    highlights: ["8 food tastings", "Local market visit", "Recipe cards"],
    difficulty: "Easy"
  },
  {
    id: 3,
    title: "Sunset Flamenco Experience",
    location: "Seville, Spain",
    guide: "Carmen Delgado",
    price: 55,
    originalPrice: 75,
    duration: "3 hours",
    groupSize: "Max 12 people",
    rating: 4.8,
    reviews: 95,
    image: "https://images.pexels.com/photos/51492/pexels-photo-51492.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Cultural Performance",
    highlights: ["Live flamenco show", "Tapas included", "Dance lesson"],
    difficulty: "Easy"
  },
  {
    id: 4,
    title: "Spice Market & Cooking Class",
    location: "Marrakech, Morocco",
    guide: "Youssef El Mansouri",
    price: 45,
    originalPrice: null,
    duration: "5 hours",
    groupSize: "Max 10 people",
    rating: 4.9,
    reviews: 67,
    image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Culinary Experience",
    highlights: ["Market tour", "Cook traditional tagine", "Spice kit included"],
    difficulty: "Easy"
  },
  {
    id: 5,
    title: "Amazon Rainforest Trek",
    location: "Iquitos, Peru",
    guide: "Carlos Mendoza",
    price: 125,
    originalPrice: 150,
    duration: "Full day",
    groupSize: "Max 6 people",
    rating: 4.7,
    reviews: 34,
    image: "https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Adventure",
    highlights: ["Wildlife spotting", "Canoe ride", "Local lunch"],
    difficulty: "Moderate"
  },
  {
    id: 6,
    title: "Northern Lights Photography",
    location: "Reykjavik, Iceland",
    guide: "Björn Eriksson",
    price: 95,
    originalPrice: null,
    duration: "6 hours",
    groupSize: "Max 8 people",
    rating: 4.9,
    reviews: 56,
    image: "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Photography",
    highlights: ["Photo equipment provided", "Hot chocolate", "Small group"],
    difficulty: "Easy"
  }
];

function TourCard({ tour }: { tour: typeof tours[0] }) {
  const discountPercentage = tour.originalPrice 
    ? Math.round(((tour.originalPrice - tour.price) / tour.originalPrice) * 100)
    : null;

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <Image
            src={tour.image}
            alt={tour.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            height={192}
            width={600}
          />
          
          <div className="absolute top-3 left-3">
            <Badge className="bg-primary/90 hover:bg-primary">
              {tour.category}
            </Badge>
          </div>
          
          <div className="absolute top-3 right-3 flex gap-2">
            {discountPercentage && (
              <Badge className="bg-red-500 hover:bg-red-600">
                -{discountPercentage}%
              </Badge>
            )}
            <Button
              variant="ghost"
              size="sm"
              className="bg-background/80 hover:bg-background/90 p-2"
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="absolute bottom-3 right-3">
            <Badge 
              variant="outline" 
              className={`bg-background/90 ${
                tour.difficulty === 'Easy' ? 'text-green-600' : 
                tour.difficulty === 'Moderate' ? 'text-yellow-600' : 'text-red-600'
              }`}
            >
              {tour.difficulty}
            </Badge>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h3 className="font-semibold text-lg line-clamp-1 mb-1">
                {tour.title}
              </h3>
              <p className="text-muted-foreground flex items-center text-sm">
                <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                {tour.location}
              </p>
            </div>
            <div className="text-right ml-2">
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="font-medium">{tour.rating}</span>
              </div>
              <p className="text-xs text-muted-foreground">({tour.reviews})</p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mb-3">
            by {tour.guide}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {tour.highlights.slice(0, 2).map((highlight) => (
              <Badge key={highlight} variant="secondary" className="text-xs">
                {highlight}
              </Badge>
            ))}
            {tour.highlights.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{tour.highlights.length - 2}
              </Badge>
            )}
          </div>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {tour.duration}
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              {tour.groupSize}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">${tour.price}</span>
                {tour.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    ${tour.originalPrice}
                  </span>
                )}
              </div>
              <span className="text-xs text-muted-foreground">per person</span>
            </div>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700">
              Book Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function PopularTours() {
  return (
    <section id="tours" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Popular Tours & Experiences
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked experiences that showcase the best of local culture and hidden gems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {tours.map((tour) => (
            <div key={tour.id} className="animate-slide-up">
              <TourCard tour={tour} />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Tours
          </Button>
        </div>
      </div>
    </section>
  );
}