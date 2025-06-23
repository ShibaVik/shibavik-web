
import React from 'react';
import { Coins, Link, Calculator } from 'lucide-react';

const InfoSections = () => {
  const sections = [
    {
      icon: <Coins className="w-8 h-8 text-blue-600" />,
      title: "Cryptomonnaie & Bitcoin",
      subtitle: "Technologie Blockchain et Proof of Work",
      description: "Le Bitcoin représente la première implémentation réussie d'une monnaie numérique décentralisée. Sa sécurité repose sur le mécanisme de Proof of Work (PoW), un système de consensus qui utilise la puissance de calcul pour valider les transactions et sécuriser le réseau.",
      details: [
        {
          title: "Algorithme SHA-256",
          content: "Le Bitcoin utilise l'algorithme de hachage cryptographique SHA-256 pour sécuriser les blocs. Chaque bloc doit satisfaire la condition : Hash(Block) < Target"
        },
        {
          title: "Ajustement de Difficulté",
          content: "La difficulté s'ajuste tous les 2016 blocs selon la formule : Nouvelle_Difficulté = Ancienne_Difficulté × (Temps_Réel / 20160 minutes)"
        },
        {
          title: "Récompense de Minage",
          content: "La récompense diminue de moitié tous les 210,000 blocs (≈4 ans), suivant une progression géométrique de raison 1/2"
        }
      ],
      formula: "Hash(nonce + transactions + prev_hash) < 2^(256-difficulty)/2^256"
    },
    {
      icon: <Link className="w-8 h-8 text-green-600" />,
      title: "Blockchain & Consensus",
      subtitle: "Architecture Décentralisée et Sécurité",
      description: "La blockchain est une structure de données distribuée qui maintient une liste croissante d'enregistrements (blocs) liés cryptographiquement. Le consensus Proof of Work garantit l'intégrité du système sans autorité centrale.",
      details: [
        {
          title: "Structure de Bloc",
          content: "Chaque bloc contient un hash du bloc précédent, créant une chaîne immutable. La modification d'un bloc nécessiterait de recalculer tous les blocs suivants."
        },
        {
          title: "Consensus Distribué",
          content: "Le réseau accepte la chaîne avec le plus de travail cumulé (plus longue chaîne valide), résolvant le problème des généraux byzantins."
        },
        {
          title: "Sécurité Cryptographique",
          content: "La probabilité de réussir une attaque à 51% décroît exponentiellement avec le nombre de confirmations selon P = (q/p)^z"
        }
      ],
      formula: "P(attaque_réussie) = (puissance_attaquant/puissance_réseau)^confirmations"
    },
    {
      icon: <Calculator className="w-8 h-8 text-purple-600" />,
      title: "Mathématiques en DeFi",
      subtitle: "Modélisation et Analyse Quantitative",
      description: "Les mathématiques appliquées en finance décentralisée permettent de modéliser les risques, optimiser les rendements et comprendre les mécanismes complexes des protocoles DeFi. La loi binomiale et l'analyse fonctionnelle sont des outils essentiels.",
      details: [
        {
          title: "Loi Binomiale en Trading",
          content: "Pour n transactions avec probabilité p de succès : P(X=k) = C(n,k) × p^k × (1-p)^(n-k). Espérance E(X) = n×p, Variance Var(X) = n×p×(1-p)"
        },
        {
          title: "Modèle Binomial de Cox-Ross-Rubinstein",
          content: "Prix d'option : C = Σ[C(n,j) × p^j × (1-p)^(n-j) × max(0, S₀×u^j×d^(n-j) - K)] × e^(-r×T)"
        },
        {
          title: "Yield Farming et APY",
          content: "Rendement annualisé composé : APY = (1 + r/n)^n - 1, où r est le taux nominal et n la fréquence de composition"
        }
      ],
      formula: "Impermanent Loss = 2×√(ratio_prix) / (1 + ratio_prix) - 1"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Domaines d'Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Exploration approfondie des technologies blockchain, des cryptomonnaies et de leur modélisation mathématique
          </p>
        </div>
        
        <div className="space-y-16">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-start gap-6 mb-8">
                <div className="p-3 bg-gray-50 rounded-xl">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">
                    {section.title}
                  </h3>
                  <p className="text-lg text-blue-600 mb-4 font-medium">
                    {section.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {section.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-medium text-gray-900 mb-3">
                      {detail.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {detail.content}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="bg-slate-900 rounded-lg p-6">
                <h4 className="text-sm font-medium text-gray-300 mb-3">Formule clé :</h4>
                <code className="text-green-400 font-mono text-sm">
                  {section.formula}
                </code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSections;
