import About from '@/components/About';
import BookingForm from '@/components/Booking-form';
import { FAQ } from '@/components/Faq';
import FeaturedGuides from '@/components/Featured-Guides';
import Hero from '@/components/Hero';
import PopularTours from '@/components/Popular-Tour';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Hero />
      <FeaturedGuides/>
      <PopularTours/>
      <About/>
      <BookingForm/>
      <Testimonials/>
      <FAQ/>
    </main>
  );
}
