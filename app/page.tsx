import About from '@/components/About';
import BookingForm from '@/components/Booking-form';
import { FAQ } from '@/components/Faq';
import FeaturedGuides from '@/components/Featured-Guides';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navigation from '@/components/navigation';
import PopularTours from '@/components/Popular-Tour';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Navigation />
      <Hero />
      <FeaturedGuides/>
      <PopularTours/>
      <About/>
      <BookingForm/>
      <Testimonials/>
      <FAQ/>
      <Footer/>
    </main>
  );
}
