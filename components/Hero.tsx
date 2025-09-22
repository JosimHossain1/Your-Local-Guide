"use client";

import { useState } from 'react';
import { Search, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('destination');

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2413613/pexels-photo-2413613.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Discover{' '}
            <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-amber-500 bg-clip-text text-transparent">
              Authentic
            </span>
            <br />
            Local Experiences
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Connect with passionate local guides who share their culture, stories, and hidden gems. 
            Support communities while creating unforgettable memories.
          </p>

          {/* Search Card */}
          <Card className="p-6 max-w-2xl mx-auto mb-8 animate-slide-up shadow-xl">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="flex mb-4">
                  <Button
                    variant={searchType === 'destination' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSearchType('destination')}
                    className="rounded-r-none"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Destinations
                  </Button>
                  <Button
                    variant={searchType === 'guides' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSearchType('guides')}
                    className="rounded-l-none"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Guides
                  </Button>
                </div>
                
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="text"
                    placeholder={
                      searchType === 'destination' 
                        ? "Where do you want to explore?" 
                        : "Find local guides..."
                    }
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 h-12 px-8"
              >
                Search
              </Button>
            </div>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto animate-scale-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
              <div className="text-muted-foreground">Local Guides</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-1">150+</div>
              <div className="text-muted-foreground">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-500 mb-1">10K+</div>
              <div className="text-muted-foreground">Happy Travelers</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}