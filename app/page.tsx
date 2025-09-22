import FeaturedGuides from '@/components/Featured-Guides';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navigation from '@/components/navigation';
import PopularTours from '@/components/Popular-Tour';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Navigation />
      <Hero />
      <FeaturedGuides/>
      <PopularTours/>
      <Footer/>
    </main>
  );
}
