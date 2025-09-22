import FeaturedGuides from '@/components/Featured-Guides';
import Hero from '@/components/Hero';
import Navigation from '@/components/navigation';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Navigation />
      <Hero />
      <FeaturedGuides/>
    </main>
  );
}
