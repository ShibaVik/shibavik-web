
import React from 'react';
import { ExternalLink, Users, Zap, TrendingUp } from 'lucide-react';

const SocialLinks = () => {
  const communityStats = [
    { icon: <Users className="w-6 h-6" />, label: "Membres Actifs", value: "10K+" },
    { icon: <Zap className="w-6 h-6" />, label: "Transactions/Jour", value: "50K+" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "ROI Moyen", value: "127%" }
  ];

  return (
    <section className="py-16 tech-bg">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-tech-cyan to-tech-electric bg-clip-text text-transparent">
          🎉 Rejoignez Notre Communauté
        </h2>
        
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          💪 Une famille de crypto-enthousiastes qui partagent stratégies, analyses et découvertes DeFi !
        </p>
        
        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {communityStats.map((stat, index) => (
            <div key={index} className="tech-border rounded-lg p-6 hover:tech-glow transition-all duration-300 bg-gradient-to-b from-black/20 to-black/40">
              <div className="flex items-center justify-center mb-3 text-tech-cyan">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-tech-electric text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <a 
            href="https://linktr.ee/ShibaVik" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-tech-cyan to-tech-electric text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-tech-cyan/25 transition-all duration-300 transform hover:scale-105 group"
          >
            <span>🌟 Découvrir Tous nos Réseaux</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
