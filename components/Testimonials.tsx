"use client";

import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    tour: "Tokyo Street Food Adventure",
    guide: "Hiroshi Yamamoto",
    review: "Absolutely incredible experience! Hiroshi took us to places we never would have found on our own. The authentic ramen spot hidden in a back alley was life-changing. This is exactly what I hoped for when traveling to Japan.",
    date: "March 2024"
  },
  {
    id: 2,
    name: "Marcus Weber",
    location: "Berlin, Germany",
    avatar: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    tour: "Spice Market & Cooking Class",
    guide: "Youssef El Mansouri",
    review: "Youssef is a fantastic host and incredible cook. Learning to make authentic tagine while hearing stories about Moroccan culture made this so much more than just a cooking class. My family back home loves the recipes!",
    date: "February 2024"
  },
  {
    id: 3,
    name: "Priya Sharma",
    location: "Mumbai, India",
    avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    tour: "Hidden Temples of Angkor",
    guide: "Sopheap Chen",
    review: "Sopheap's knowledge of Cambodian history is extraordinary. She brought the ancient temples to life with her storytelling. The sunrise at a less crowded temple was magical. Supporting local guides like her makes travel meaningful.",
    date: "January 2024"
  },
  {
    id: 4,
    name: "James Mitchell",
    location: "London, UK",
    avatar: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 4,
    tour: "Sunset Flamenco Experience",
    guide: "Carmen Delgado",
    review: "Carmen's passion for flamenco is infectious. The intimate venue she chose was perfect, and the dance lesson afterwards was so much fun despite my two left feet! Great evening in Seville.",
    date: "December 2023"
  },
  {
    id: 5,
    name: "Lisa Chen",
    location: "San Francisco, USA",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    tour: "Northern Lights Photography",
    guide: "Björn Eriksson",
    review: "Björn knows exactly where and when to find the northern lights. His photography tips helped me capture shots I'll treasure forever. The hot chocolate stops kept us warm during the long wait. Truly magical night!",
    date: "November 2023"
  },
  {
    id: 6,
    name: "Carlos Rodriguez",
    location: "Madrid, Spain",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    tour: "Amazon Rainforest Trek",
    guide: "Carlos Mendoza",
    review: "An adventure of a lifetime! Carlos's knowledge of the rainforest ecosystem is incredible. We saw so much wildlife and learned about medicinal plants. The canoe ride at sunset was breathtaking. Highly recommend!",
    date: "October 2023"
  }
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4 mb-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback>
              {testimonial.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-semibold">{testimonial.name}</h4>
              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
          </div>
        </div>
        
        <div className="mb-4">
          <Quote className="h-8 w-8 text-muted-foreground/20 mb-2" />
          <p className="text-muted-foreground leading-relaxed italic">
            &quot;{testimonial.review}&quot;
          </p>
        </div>
        
        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between items-center text-sm">
            <div>
              <p className="font-medium text-primary">{testimonial.tour}</p>
              <p className="text-muted-foreground">with {testimonial.guide}</p>
            </div>
            <p className="text-muted-foreground">{testimonial.date}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from real travelers who&quot;ve experienced the magic of connecting with local guides.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="animate-slide-up">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-950/20 dark:to-emerald-950/20 rounded-xl p-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-muted-foreground">Average Rating</div>
              <div className="flex items-center justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">2,500+</div>
              <div className="text-muted-foreground">Verified Reviews</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500 mb-2">98%</div>
              <div className="text-muted-foreground">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}