
import React from 'react';
import { Coins, Link, Calculator } from 'lucide-react';

const InfoSections = () => {
  const sections = [
    {
      icon: <Coins className="w-12 h-12 text-tech-cyan" />,
      title: "Cryptomonnaie",
      description: "Explorez l'univers des monnaies numériques avec ShibaVik. Notre approche innovante combine sécurité, décentralisation et performance pour créer un écosystème financier révolutionnaire. Découvrez comment les cryptomonnaies transforment l'économie mondiale.",
      features: ["Sécurité maximale", "Décentralisation complète", "Transactions rapides", "Évolutivité optimisée"]
    },
    {
      icon: <Link className="w-12 h-12 text-tech-electric" />,
      title: "Blockchain",
      description: "La technologie blockchain représente le fondement de notre écosystème. Grâce à des protocoles avancés et une architecture robuste, nous garantissons la transparence, l'immutabilité et la fiabilité de toutes les transactions sur notre réseau.",
      features: ["Consensus avancé", "Smart contracts", "Interopérabilité", "Gouvernance décentralisée"]
    },
    {
      icon: <Calculator className="w-12 h-12 text-tech-purple" />,
      title: "Mathématiques Appliquées",
      description: "L'excellence mathématique guide chaque aspect de ShibaVik. Nos algorithmes sophistiqués, basés sur la cryptographie avancée et la théorie des nombres, assurent une sécurité inégalée et des performances optimales.",
      features: ["Cryptographie avancée", "Algorithmes optimisés", "Modélisation statistique", "Analyse prédictive"]
    }
  ];

  return (
    <section className="py-20 tech-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 bg-gradient-to-r from-tech-cyan via-tech-electric to-tech-purple bg-clip-text text-transparent">
          Notre Expertise
        </h2>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="tech-border rounded-2xl p-8 hover:tech-glow transition-all duration-300 group">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {section.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {section.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {section.description}
                </p>
                
                <div className="space-y-2 w-full">
                  {section.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-tech-cyan">
                      <div className="w-2 h-2 bg-tech-cyan rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSections;
