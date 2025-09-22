'use client';

import { Heart, Globe, Users, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const values = [
  {
    icon: Heart,
    title: 'Support Local Communities',
    description:
      'Every booking directly supports local guides and their families, creating sustainable tourism that benefits entire communities.',
  },
  {
    icon: Globe,
    title: 'Authentic Cultural Exchange',
    description:
      'Experience genuine local culture through the eyes of passionate residents who share their stories, traditions, and hidden gems.',
  },
  {
    icon: Users,
    title: 'Personal Connections',
    description:
      'Build meaningful relationships with locals and fellow travelers, creating memories that last long after your journey ends.',
  },
  {
    icon: Shield,
    title: 'Safe & Trusted Platform',
    description:
      'All our guides are verified and reviewed by the community, ensuring safe, reliable, and high-quality experiences for every traveler.',
  },
];

export default function About() {
  return (
    <section id='about' className='py-16 bg-muted/30'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-6'>
            Connecting Travelers with{' '}
            <span className='bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent'>
              Local Hearts
            </span>
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
            Local Wanderer was born from a simple belief: the best travel
            experiences come from connecting with locals who are passionate
            about their homeland. We&appos;re not just a booking platform –
            we&appos;re a bridge between cultures, a catalyst for authentic
            connections, and a champion of sustainable community-based tourism.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
          {values.map((value, index) => (
            <Card
              key={index}
              className='group hover:shadow-lg transition-all duration-300'
            >
              <CardContent className='p-6'>
                <div className='flex items-start space-x-4'>
                  <div className='flex-shrink-0'>
                    <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                      <value.icon className='h-6 w-6 text-white' />
                    </div>
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-xl font-semibold mb-3'>
                      {value.title}
                    </h3>
                    <p className='text-muted-foreground leading-relaxed'>
                      {value.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-950/20 dark:to-emerald-950/20 rounded-2xl p-8 md:p-12'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
            <div>
              <h3 className='text-2xl sm:text-3xl font-bold mb-4'>
                Our Impact So Far
              </h3>
              <p className='text-muted-foreground mb-6 leading-relaxed'>
                Since launching in 2020, we&appos;ve facilitated thousands of
                meaningful connections between travelers and local communities
                across the globe. Here&appos;s what we&appos;ve achieved
                together:
              </p>

              <div className='grid grid-cols-2 gap-6'>
                <div>
                  <div className='text-3xl font-bold text-blue-600 mb-1'>
                    $2.3M+
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    Earned by local guides
                  </div>
                </div>
                <div>
                  <div className='text-3xl font-bold text-emerald-600 mb-1'>
                    45
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    Countries served
                  </div>
                </div>
                <div>
                  <div className='text-3xl font-bold text-amber-500 mb-1'>
                    98%
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    Satisfaction rate
                  </div>
                </div>
                <div>
                  <div className='text-3xl font-bold text-purple-600 mb-1'>
                    15K+
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    Cultural exchanges
                  </div>
                </div>
              </div>
            </div>

            <div className='relative'>
              <Image
                src='https://www.pexels.com/photo/a-group-of-people-standing-on-a-beach-17087532/'
                alt='Local guide sharing culture'
                className='rounded-xl shadow-lg w-full h-64 object-cover'
                width={600}
                height={256}
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
