import '../globals.css'
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navigation from '@/components/navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Local Wanderer - Authentic Local Tours & Cultural Experiences',
  description:
    'Connect with passionate local guides and discover authentic cultural experiences. Support local communities while exploring hidden gems.',
  keywords:
    'local tours, cultural experiences, travel guides, authentic travel, local guides',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navigation />

          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
