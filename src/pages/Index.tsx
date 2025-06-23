
import React from 'react';
import HeroSection from '../components/HeroSection';
import NFTGallery from '../components/NFTGallery';
import InfoSections from '../components/InfoSections';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <NFTGallery />
      <InfoSections />
      <Footer />
    </div>
  );
};

export default Index;
