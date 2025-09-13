import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import MobileWarning from '@/components/MobileWarning';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      
      {!isLoading && (
        <main className="relative">
          <MobileWarning />
          <Header />
          <Hero />
          <Features />
          <Testimonials />
          <FAQ />
          <Footer />
        </main>
      )}
    </>
  );
};

export default Index;
