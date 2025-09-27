import React from 'react';
import { Star, MapPin, Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Link from 'next/link';

const GuideCard = ({ guide }) => {
  return (
    <Card className='group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden relative'>
      <CardContent className='p-0'>
        <div>
          <Avatar className='w-full h-52 rounded-none'>
            <AvatarImage
              src={guide.image}
              alt={guide.name}
              className='object-cover group-hover:scale-105 transition-transform duration-300'
            />
            <AvatarFallback className='w-full h-48 rounded-none'>
              {guide.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>

          {guide.verified && (
            <Badge className='absolute top-3 right-3 bg-emerald-500 hover:bg-emerald-600'>
              Verified
            </Badge>
          )}

          <Button
            variant='ghost'
            size='sm'
            className='absolute top-3 left-3 bg-background/80 hover:bg-background/90'
          >
            <Heart className='h-4 w-4' />
          </Button>
        </div>

        <div className='p-4'>
          <div className='flex items-start justify-between mb-2'>
            <div>
              <h3 className='font-semibold text-lg'>{guide.name}</h3>
              <p className='text-muted-foreground flex items-center text-sm'>
                <MapPin className='h-3 w-3 mr-1' />
                {guide.location}
              </p>
            </div>
            <div className='text-right'>
              <div className='flex items-center'>
                <Star className='h-4 w-4 fill-yellow-400 text-yellow-400 mr-1' />
                <span className='font-medium'>{guide.rating}</span>
              </div>
              <p className='text-xs text-muted-foreground'>
                ({guide.reviews} reviews)
              </p>
            </div>
          </div>

          <p className='text-sm text-muted-foreground mb-3 line-clamp-2'>
            {guide.description}
          </p>

          <div className='flex flex-wrap gap-1 mb-3'>
            {guide.specialties.slice(0, 2).map((specialty) => (
              <Badge key={specialty} variant='secondary' className='text-xs'>
                {specialty}
              </Badge>
            ))}
            {guide.specialties.length > 2 && (
              <Badge variant='outline' className='text-xs'>
                +{guide.specialties.length - 2} more
              </Badge>
            )}
          </div>

          <div className='flex items-center justify-between text-sm text-muted-foreground mb-4'>
            <span>{guide.experience} experience</span>
            <span className='font-medium text-foreground'>
              {guide.priceRange}/tour
            </span>
          </div>

          <div className='flex gap-2'>
            <Link href='guides/1'>
              <Button className='flex-1' size='sm'>
                View Profile
              </Button>
            </Link>
            <Link href='/chats'>
              <Button variant='outline' size='sm'>
                <MessageCircle className='h-4 w-4' /> Message Guide
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GuideCard;
