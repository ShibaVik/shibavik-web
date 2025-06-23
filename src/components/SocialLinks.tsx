
import React from 'react';
import { ExternalLink } from 'lucide-react';

const SocialLinks = () => {
  return (
    <section className="py-16 tech-bg">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 bg-gradient-to-r from-tech-cyan to-tech-electric bg-clip-text text-transparent">
          Rejoignez Notre Communauté
        </h2>
        
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Connectez-vous avec la communauté ShibaVik et restez informé des dernières innovations
        </p>
        
        <div className="flex justify-center">
          <a 
            href="https://linktr.ee/ShibaVik" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-tech-cyan to-tech-electric text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-tech-cyan/25 transition-all duration-300 transform hover:scale-105 group"
          >
            <span>Tous nos Réseaux Sociaux</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto">
          {['Twitter', 'Discord', 'Telegram', 'LinkedIn'].map((platform, index) => (
            <div key={index} className="tech-border rounded-lg p-4 hover:tech-glow transition-all duration-300">
              <div className="text-tech-cyan font-medium">{platform}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
