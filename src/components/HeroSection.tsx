
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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-cyan-900/5"></div>
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
      
      {/* Social Links */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex gap-3 p-3 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 text-gray-300 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-300"
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
          <img 
            src="/lovable-uploads/19d1b54c-dad3-4528-811b-78ddd589d847.png" 
            alt="ShibaVik Logo" 
            className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full border border-white/20"
          />
          
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6">
            ShibaVik.io
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed">
            Centre de ressources sur la blockchain, les cryptomonnaies et les mathématiques appliquées en finance décentralisée
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Découvrir la Collection NFT
            </button>
            <button className="px-6 py-3 border border-gray-500 text-gray-300 font-medium rounded-lg hover:bg-white/5 transition-colors duration-300">
              Explorer les Ressources
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
