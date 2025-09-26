'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Star,
  MapPin,
  BadgeCheck,
  Languages,
  Briefcase,
  ThumbsUp,
} from 'lucide-react';

export default function GuideProfilePage() {
  // Dummy data – replace with API data
  const guide = {
    name: 'Josim Hossain',
    bio: 'Passionate tour guide with 5+ years of experience showing travelers the hidden gems of Dhaka & Chittagong. Specialized in culture, history, and street food tours.',
    profilePicture: 'https://randomuser.me/api/portraits/men/45.jpg',
    languages: ['Bangla', 'English', 'Hindi'],
    specialties: ['Historical Tours', 'Food Tours', 'City Walks'],
    location: 'Dhaka, Bangladesh',
    verified: true,
    experience: 5,
    totalTours: 120,
    rating: 4.8,
    reviews: 87,
    tours: [
      { title: 'Old Dhaka Heritage Walk', price: 1500, duration: '4 hours' },
      { title: 'Street Food Crawl', price: 1000, duration: '3 hours' },
    ],
    contact: {
      email: 'josim@example.com',
      phone: '+880123456789',
      website: 'https://guides-bd.com/josim',
    },
    reviewsList: [
      {
        user: 'Arafat Rahman',
        avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
        rating: 5,
        comment:
          'Amazing tour! Josim showed us hidden places in Old Dhaka that we would never find ourselves.',
        likes: 14,
      },
      {
        user: 'Sarah Khan',
        avatar: 'https://randomuser.me/api/portraits/women/30.jpg',
        rating: 4,
        comment:
          'Very knowledgeable guide, friendly and professional. Highly recommend his food tour.',
        likes: 9,
      },
    ],
  };

  return (
    <div className='max-w-6xl mx-auto py-10 px-4 space-y-8 my-20'>
      {/* Profile Header */}
      <Card className='shadow-xl border rounded-2xl'>
        <CardContent className='flex flex-col md:flex-row items-center gap-6 p-8'>
          <Avatar className='w-32 h-32'>
            <AvatarImage src={guide.profilePicture} alt={guide.name} />
            <AvatarFallback>{guide.name.charAt(0)}</AvatarFallback>
          </Avatar>

          <div className='flex-1 space-y-3 text-center md:text-left'>
            <h1 className='text-3xl font-bold flex items-center gap-2 justify-center md:justify-start'>
              {guide.name}
              {guide.verified && (
                <BadgeCheck className='w-6 h-6 text-green-500' />
              )}
            </h1>
            <p className='text-muted-foreground'>{guide.bio}</p>

            <div className='flex flex-wrap justify-center md:justify-start gap-3'>
              <Badge variant='secondary' className='flex items-center gap-1'>
                <MapPin className='w-4 h-4' /> {guide.location}
              </Badge>
              <Badge variant='secondary' className='flex items-center gap-1'>
                <Briefcase className='w-4 h-4' /> {guide.experience}+ yrs Exp.
              </Badge>
              <Badge variant='secondary' className='flex items-center gap-1'>
                <Star className='w-4 h-4 text-yellow-500' /> {guide.rating} (
                {guide.reviews} reviews)
              </Badge>
            </div>

            <div className='flex justify-center md:justify-start gap-3 mt-3'>
              <Button size='lg'>Book Now</Button>
              <Button variant='outline' size='lg'>
                Message Guide
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Languages & Specialties */}
      <div className='grid md:grid-cols-2 gap-6'>
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <Languages className='w-5 h-5' /> Languages
            </CardTitle>
          </CardHeader>
          <CardContent className='flex flex-wrap gap-2'>
            {guide.languages.map((lang, i) => (
              <Badge key={i}>{lang}</Badge>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className='flex items-center gap-2'>
              <Briefcase className='w-5 h-5' /> Specialties
            </CardTitle>
          </CardHeader>
          <CardContent className='flex flex-wrap gap-2'>
            {guide.specialties.map((spec, i) => (
              <Badge key={i} variant='outline'>
                {spec}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Tours */}
      <Card>
        <CardHeader>
          <CardTitle>Available Tours</CardTitle>
        </CardHeader>
        <CardContent className='grid md:grid-cols-2 gap-4'>
          {guide.tours.map((tour, i) => (
            <div
              key={i}
              className='border rounded-xl p-4 space-y-2 shadow-sm hover:shadow-md transition'
            >
              <h3 className='font-semibold text-lg'>{tour.title}</h3>
              <p className='text-sm text-muted-foreground'>
                Duration: {tour.duration}
              </p>
              <p className='font-bold'>৳{tour.price}</p>
              <Button size='sm' variant='outline'>
                View Tour
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Reviews Section */}
      <Card>
        <CardHeader>
          <CardTitle>Traveler Reviews</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          {guide.reviewsList.map((review, i) => (
            <div
              key={i}
              className='flex gap-4 p-4 border rounded-xl shadow-sm hover:bg-muted/50'
            >
              <Avatar>
                <AvatarImage src={review.avatar} alt={review.user} />
                <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className='flex-1'>
                <div className='flex items-center justify-between'>
                  <p className='font-semibold'>{review.user}</p>
                  <div className='flex items-center gap-1'>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className='w-4 h-4 text-yellow-500 fill-yellow-500'
                      />
                    ))}
                  </div>
                </div>
                <p className='text-sm text-muted-foreground mt-1'>
                  {review.comment}
                </p>
                <Button
                  variant='ghost'
                  size='sm'
                  className='flex items-center gap-1 mt-2'
                >
                  <ThumbsUp className='w-4 h-4' /> {review.likes}
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
