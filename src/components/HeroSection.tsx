
import React from 'react';
import { MessageCircle, Send, Linkedin, Youtube, Globe, Instagram, Twitter } from 'lucide-react';

const HeroSection = () => {
  const socialLinks = [
    { icon: <span className="text-lg font-bold">𝕏</span>, url: "https://twitter.com/ShibaVik", label: "X (Twitter)" },
    { icon: <MessageCircle className="w-5 h-5" />, url: "https://discord.gg/ShibaVik", label: "Discord" },
    { icon: <Send className="w-5 h-5" />, url: "https://t.me/ShibaVik", label: "Telegram" },
    { icon: <Linkedin className="w-5 h-5" />, url: "https://linkedin.com/company/shibavik", label: "LinkedIn" },
    { icon: <Youtube className="w-5 h-5" />, url: "https://youtube.com/@ShibaVik", label: "YouTube" },
    { icon: <Instagram className="w-5 h-5" />, url: "https://instagram.com/shibavik", label: "Instagram" },
    { icon: <Globe className="w-5 h-5" />, url: "https://linktr.ee/ShibaVik", label: "Linktree" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background effects with new colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-purple-900/10"></div>
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      {/* Social Links Bar */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex gap-3 p-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 text-gray-300 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 hover:text-white transition-all duration-300"
              title={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-12">
          {/* New 3D Logo without circle */}
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/4733e989-5db4-438e-a3ef-5d3ea88d35a1.png" 
              alt="ShibaVik 3D Logo" 
              className="w-48 h-32 md:w-64 md:h-40 object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            ShibaVik.io
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed max-w-3xl mx-auto">
            Centre de ressources avancées sur la blockchain, les cryptomonnaies et les mathématiques appliquées en finance décentralisée. 
            Explorez les technologies révolutionnaires qui façonnent l'avenir de la finance numérique.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white font-medium rounded-lg hover:from-cyan-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
              Découvrir la Collection NFT
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-medium rounded-lg hover:from-purple-700 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
              Explorer les Ressources
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
