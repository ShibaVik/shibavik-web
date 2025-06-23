
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import InfoSections from '../components/InfoSections';
import SocialLinks from '../components/SocialLinks';
import NFTGallery from '../components/NFTGallery';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <InfoSections />
      <SocialLinks />
      <NFTGallery />
      <Footer />
    </div>
  );
};

export default Index;
