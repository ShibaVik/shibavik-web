import React from 'react';
import { X, MessageCircle, Send, Linkedin, Youtube, Globe } from 'lucide-react';

const HeroSection = () => {
  const socialLinks = [
    { icon: <X className="w-5 h-5" />, url: "https://twitter.com/ShibaVik", label: "X (Twitter)" },
    { icon: <MessageCircle className="w-5 h-5" />, url: "https://discord.gg/ShibaVik", label: "Discord" },
    { icon: <Send className="w-5 h-5" />, url: "https://t.me/ShibaVik", label: "Telegram" },
    { icon: <Linkedin className="w-5 h-5" />, url: "https://linkedin.com/company/shibavik", label: "LinkedIn" },
    { icon: <Youtube className="w-5 h-5" />, url: "https://youtube.com/@ShibaVik", label: "YouTube" },
    { icon: <Globe className="w-5 h-5" />, url: "https://linktr.ee/ShibaVik", label: "Linktree" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center tech-bg overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-cyan/10 via-transparent to-tech-purple/10"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-tech-cyan/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-electric/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Social Links at the top */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex gap-4 p-4 bg-black/20 backdrop-blur-md rounded-2xl border border-tech-cyan/30">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gradient-to-r from-tech-cyan/20 to-tech-electric/20 text-white rounded-xl hover:from-tech-cyan/40 hover:to-tech-electric/40 transition-all duration-300 transform hover:scale-110 group"
              title={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 mt-20">
        <div className="mb-8 floating relative">
          {/* Decorative circles around logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 border-2 border-tech-cyan/30 rounded-full animate-spin slow-spin"></div>
            <div className="absolute w-80 h-80 border-2 border-tech-electric/30 rounded-full animate-spin reverse-spin"></div>
            <div className="absolute w-64 h-64 border border-tech-purple/30 rounded-full"></div>
          </div>
          
          <img 
            src="/lovable-uploads/19d1b54c-dad3-4528-811b-78ddd589d847.png" 
            alt="ShibaVik Logo" 
            className="w-64 h-64 md:w-80 md:h-80 mx-auto tech-glow rounded-full relative z-10 border-4 border-tech-cyan/50"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-tech-cyan via-tech-electric to-tech-purple bg-clip-text text-transparent">
          ShibaVik.io
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto">
          🚀 La Communauté Crypto qui Révolutionne la DeFi ! 🎯
        </p>
        
        <p className="text-lg text-tech-cyan mb-8 max-w-3xl mx-auto font-medium">
          Rejoignez notre famille de passionnés qui transforment les mathématiques en opportunités financières décentralisées !
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-gradient-to-r from-tech-cyan to-tech-electric text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-tech-cyan/25 transition-all duration-300 transform hover:scale-105 animate-pulse">
            🎉 Rejoindre la Communauté
          </button>
          <button className="px-8 py-3 border border-tech-cyan text-tech-cyan font-semibold rounded-lg hover:bg-tech-cyan/10 transition-all duration-300">
            📚 Découvrir nos Outils
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
