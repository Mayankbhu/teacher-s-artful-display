
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Philosophy from '@/components/Philosophy';
import Subjects from '@/components/Subjects';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Welcome toast that appears when the page loads
    toast({
      title: "Welcome to Ms. Johnson's Portfolio",
      description: "Explore my teaching journey and educational philosophy",
      duration: 5000,
    });
  }, [toast]);
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Philosophy />
      <Subjects />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
