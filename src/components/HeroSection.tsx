
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center tech-bg overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-cyan/5 via-transparent to-tech-purple/5"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-tech-cyan/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-electric/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <div className="mb-8 floating">
          <img 
            src="/lovable-uploads/19d1b54c-dad3-4528-811b-78ddd589d847.png" 
            alt="ShibaVik Logo" 
            className="w-64 h-64 md:w-80 md:h-80 mx-auto tech-glow rounded-full"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-tech-cyan to-tech-electric bg-clip-text text-transparent">
          ShibaVik.io
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          L'avenir de la blockchain et des cryptomonnaies avec une approche mathématique innovante
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-gradient-to-r from-tech-cyan to-tech-electric text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-tech-cyan/25 transition-all duration-300 transform hover:scale-105">
            Explorer l'Écosystème
          </button>
          <button className="px-8 py-3 border border-tech-cyan text-tech-cyan font-semibold rounded-lg hover:bg-tech-cyan/10 transition-all duration-300">
            En Savoir Plus
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
