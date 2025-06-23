
import React from 'react';
import { Coins, Link, Calculator } from 'lucide-react';

const InfoSections = () => {
  const sections = [
    {
      icon: <Coins className="w-12 h-12 text-tech-cyan" />,
      title: "🪙 Cryptomonnaie & Bitcoin",
      description: "Plongez dans l'univers du Bitcoin et de son mécanisme révolutionnaire de Proof of Work (PoW). Cette technologie garantit la sécurité et la décentralisation du réseau grâce à un consensus mathématique robuste.",
      features: [
        "⛏️ Mining & Hash Rate: SHA-256",
        "🔗 Proof of Work Consensus",
        "💎 Halving & Reward System",
        "🛡️ Sécurité Cryptographique"
      ],
      technicalDetails: "Le Bitcoin utilise l'algorithme SHA-256 pour sécuriser ses transactions. Chaque bloc doit satisfaire: Hash(Block) < Target, où Target = 2^(256-Difficulty)/2^256"
    },
    {
      icon: <Link className="w-12 h-12 text-tech-electric" />,
      title: "⛓️ Blockchain & Proof of Work",
      description: "La blockchain Bitcoin repose sur un système de preuve de travail où les mineurs résolvent des puzzles cryptographiques. Cette compétition garantit l'intégrité et l'immutabilité des données.",
      features: [
        "🧩 Puzzle Cryptographique",
        "⏱️ Temps de bloc ~10 min",
        "📊 Ajustement de difficulté",
        "🌐 Réseau décentralisé"
      ],
      technicalDetails: "Difficulté ajustée tous les 2016 blocs: Nouveau_Target = Ancien_Target × (Temps_Réel / Temps_Souhaité), où Temps_Souhaité = 20160 minutes"
    },
    {
      icon: <Calculator className="w-12 h-12 text-tech-purple" />,
      title: "📊 Mathématiques en DeFi",
      description: "Les mathématiques sont l'épine dorsale de la finance décentralisée. Découvrez comment la loi binomiale et l'analyse de fonctions permettent d'optimiser les stratégies de trading et de liquidité.",
      features: [
        "📈 Modèle Binomial de Cox-Ross",
        "🎲 Distribution de Probabilités",
        "💹 Calcul d'Options & Dérivés",
        "⚖️ Gestion des Risques"
      ],
      technicalDetails: "Loi Binomiale: P(X=k) = C(n,k) × p^k × (1-p)^(n-k), utilisée pour modéliser les mouvements de prix en finance décentralisée"
    }
  ];

  return (
    <section className="py-20 tech-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4 bg-gradient-to-r from-tech-cyan via-tech-electric to-tech-purple bg-clip-text text-transparent">
          🎯 Notre Expertise Technique
        </h2>
        
        <p className="text-center text-gray-300 mb-16 text-lg">
          💡 Découvrez comment nous transformons la complexité mathématique en solutions accessibles !
        </p>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="tech-border rounded-2xl p-8 hover:tech-glow transition-all duration-300 group bg-gradient-to-b from-black/20 to-black/40">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-tech-cyan/20 to-tech-electric/20 p-4 rounded-full">
                  {section.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {section.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {section.description}
                </p>
                
                <div className="space-y-2 w-full mb-6">
                  {section.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-tech-cyan">
                      <div className="w-2 h-2 bg-tech-cyan rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Technical Formula Box */}
                <div className="w-full bg-black/50 rounded-lg p-4 border border-tech-cyan/30">
                  <h4 className="text-tech-electric text-sm font-semibold mb-2">🔬 Formule Technique:</h4>
                  <p className="text-xs text-gray-300 font-mono leading-relaxed">
                    {section.technicalDetails}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mathematical Deep Dive Section */}
        <div className="mt-16 tech-border rounded-2xl p-8 bg-gradient-to-r from-black/40 to-tech-navy/40">
          <h3 className="text-3xl font-bold text-center text-white mb-6 bg-gradient-to-r from-tech-cyan to-tech-electric bg-clip-text text-transparent">
            🧮 Plongée Mathématique en DeFi
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/30 rounded-lg p-6">
              <h4 className="text-xl font-bold text-tech-cyan mb-4">📊 Fonction Binomiale en Trading</h4>
              <div className="text-gray-300 text-sm space-y-2">
                <p><strong>Espérance:</strong> E(X) = n × p</p>
                <p><strong>Variance:</strong> Var(X) = n × p × (1-p)</p>
                <p><strong>Application:</strong> Modélisation des gains/pertes sur n transactions avec probabilité p de succès</p>
              </div>
            </div>
            
            <div className="bg-black/30 rounded-lg p-6">
              <h4 className="text-xl font-bold text-tech-electric mb-4">⚡ Yield Farming Formula</h4>
              <div className="text-gray-300 text-sm space-y-2">
                <p><strong>APY:</strong> ((1 + r/n)^n) - 1</p>
                <p><strong>Impermanent Loss:</strong> 2×√(ratio) / (1+ratio) - 1</p>
                <p><strong>Optimisation:</strong> Maximiser rewards - gas fees - IL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSections;
