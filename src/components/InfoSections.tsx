
import React from 'react';
import { Coins, Link, Calculator, TrendingUp, Shield, Zap } from 'lucide-react';

const InfoSections = () => {
  const sections = [
    {
      icon: <Coins className="w-8 h-8 text-cyan-600" />,
      title: "Cryptomonnaie & Bitcoin",
      subtitle: "Technologie Blockchain et Proof of Work",
      illustration: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&crop=entropy&auto=format",
      color: "from-cyan-500 to-blue-600",
      description: "Le Bitcoin, première cryptomonnaie décentralisée, révolutionne le système financier mondial grâce à sa technologie blockchain innovante. Créé en 2009 par Satoshi Nakamoto, il repose sur un mécanisme de consensus Proof of Work qui garantit la sécurité et l'intégrité du réseau sans autorité centrale. Cette technologie permet des transactions peer-to-peer sécurisées, transparentes et immuables.",
      details: [
        {
          title: "Algorithme SHA-256",
          icon: <Shield className="w-5 h-5 text-cyan-500" />,
          content: "Le Bitcoin utilise l'algorithme de hachage cryptographique SHA-256 (Secure Hash Algorithm) pour sécuriser chaque bloc. Cette fonction de hachage produit une empreinte unique de 256 bits pour chaque ensemble de données, garantissant l'intégrité des transactions. Chaque bloc doit satisfaire la condition mathématique : Hash(Block) < Target, où le Target détermine la difficulté de minage."
        },
        {
          title: "Ajustement Automatique de Difficulté",
          icon: <TrendingUp className="w-5 h-5 text-cyan-500" />,
          content: "Le réseau Bitcoin ajuste automatiquement sa difficulté tous les 2016 blocs (environ 14 jours) pour maintenir un temps de bloc moyen de 10 minutes. La formule utilisée est : Nouvelle_Difficulté = Ancienne_Difficulté × (Temps_Réel_Écoulé / 20160 minutes). Ce mécanisme d'auto-régulation assure la stabilité et la prévisibilité du réseau."
        },
        {
          title: "Halving et Économie Déflationniste",
          icon: <Zap className="w-5 h-5 text-cyan-500" />,
          content: "La récompense de minage diminue de moitié tous les 210,000 blocs (environ 4 ans), suivant une progression géométrique de raison 1/2. Cette politique monétaire programmée crée une rareté numérique avec un plafond maximum de 21 millions de bitcoins, introduisant un modèle économique déflationniste unique dans l'histoire monétaire."
        }
      ],
      formula: "Hash(nonce + transactions + prev_hash) < 2^(256-difficulty) / 2^256",
      additionalFormulas: [
        "Difficulté = Target_Max / Target_Actuel",
        "Temps_Bloc_Moyen = Σ(temps_blocs) / nombre_blocs",
        "Hashrate = Difficulté × 2^32 / Temps_Bloc"
      ]
    },
    {
      icon: <Link className="w-8 h-8 text-purple-600" />,
      title: "Blockchain & Consensus Distribué",
      subtitle: "Architecture Décentralisée et Cryptographie",
      illustration: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop&crop=entropy&auto=format",
      color: "from-purple-500 to-indigo-600",
      description: "La blockchain représente une révolution dans le stockage et la transmission de données. Cette structure de données distribuée maintient une liste croissante d'enregistrements (blocs) liés cryptographiquement et chronologiquement. Le consensus Proof of Work résout le problème des généraux byzantins, permettant à un réseau décentralisé de maintenir un état cohérent sans autorité centrale de confiance.",
      details: [
        {
          title: "Architecture de Chaîne Cryptographique",
          icon: <Link className="w-5 h-5 text-purple-500" />,
          content: "Chaque bloc contient le hash cryptographique du bloc précédent, créant une chaîne immuable et vérifiable. Cette structure garantit qu'une modification dans un bloc nécessiterait de recalculer tous les blocs suivants, rendant la falsification computationnellement impossible. La fonction de hachage agit comme une empreinte digitale unique pour chaque bloc."
        },
        {
          title: "Consensus Byzantin Tolérant aux Pannes",
          icon: <Shield className="w-5 h-5 text-purple-500" />,
          content: "Le protocole résout le problème des généraux byzantins en utilisant la preuve de travail. Le réseau accepte la chaîne avec le plus de travail cumulé (chaîne la plus longue valide), permettant un consensus même si jusqu'à 49% des nœuds sont malveillants. Cette propriété garantit la robustesse du système face aux attaques et aux pannes."
        },
        {
          title: "Sécurité Cryptographique Probabiliste",
          icon: <Calculator className="w-5 h-5 text-purple-500" />,
          content: "La sécurité de la blockchain repose sur des probabilités cryptographiques. La probabilité qu'un attaquant réussisse à réorganiser z blocs décroît exponentiellement selon la formule P = (q/p)^z, où q est la puissance de l'attaquant et p celle du réseau honnête. Chaque confirmation additionnelle renforce exponentiellement la sécurité de la transaction."
        }
      ],
      formula: "P(attaque_réussie) = (puissance_attaquant / puissance_réseau_total)^nombre_confirmations",
      additionalFormulas: [
        "Probabilité_Collision_Hash = 1 - e^(-n×(n-1)/(2×2^256))",
        "Entropie_Bloc = -Σ(p_i × log₂(p_i))",
        "Coût_Attaque_51% = (Hashrate_Réseau × Prix_Électricité × Temps) / 2"
      ]
    },
    {
      icon: <Calculator className="w-8 h-8 text-green-600" />,
      title: "Mathématiques Appliquées en DeFi",
      subtitle: "Modélisation Quantitative et Analyse des Risques",
      illustration: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h-600&fit=crop&crop=entropy&auto=format",
      color: "from-green-500 to-teal-600",
      description: "Les mathématiques appliquées constituent le fondement analytique de la finance décentralisée (DeFi). Elles permettent de modéliser les risques complexes, d'optimiser les rendements et de comprendre les mécanismes sophistiqués des protocoles DeFi. Les outils statistiques comme la loi binomiale, l'analyse fonctionnelle et la théorie des probabilités sont essentiels pour naviguer dans cet écosystème financier innovant.",
      details: [
        {
          title: "Modélisation Stochastique des Prix",
          icon: <TrendingUp className="w-5 h-5 text-green-500" />,
          content: "La loi binomiale modélise les mouvements de prix en DeFi. Pour n transactions avec probabilité p de succès : P(X=k) = C(n,k) × p^k × (1-p)^(n-k). L'espérance mathématique E(X) = n×p et la variance Var(X) = n×p×(1-p) permettent d'évaluer les rendements attendus et la volatilité des investissements décentralisés."
        },
        {
          title: "Évaluation d'Options Décentralisées",
          icon: <Calculator className="w-5 h-5 text-green-500" />,
          content: "Le modèle binomial de Cox-Ross-Rubinstein s'adapte parfaitement aux options DeFi. Le prix d'une option call européenne se calcule : C = Σ[C(n,j) × p^j × (1-p)^(n-j) × max(0, S₀×u^j×d^(n-j) - K)] × e^(-r×T), où u et d représentent les facteurs de hausse et de baisse, r le taux sans risque, et T la maturité."
        },
        {
          title: "Optimisation des Rendements Composés",
          icon: <Zap className="w-5 h-5 text-green-500" />,
          content: "Le yield farming exploite la composition mathématique des intérêts. Le rendement annualisé composé (APY) se calcule : APY = (1 + r/n)^n - 1, où r est le taux nominal et n la fréquence de composition. Les protocoles DeFi permettent une composition continue, maximisant ainsi l'efficacité du capital investi dans l'écosystème décentralisé."
        }
      ],
      formula: "Impermanent_Loss = 2×√(ratio_prix_final/ratio_prix_initial) / (1 + ratio_prix_final/ratio_prix_initial) - 1",
      additionalFormulas: [
        "Sharpe_Ratio = (Rendement_Portefeuille - Taux_Sans_Risque) / Volatilité_Portefeuille",
        "VaR = μ - (z_α × σ × √t)",
        "Black_Scholes_DeFi = S₀×N(d₁) - K×e^(-r×T)×N(d₂)"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 bg-gradient-to-r from-cyan-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
            Domaines d'Expertise Technique
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Plongez dans l'univers complexe des technologies blockchain, de la cryptographie appliquée 
            et des mathématiques financières qui révolutionnent le secteur de la finance décentralisée
          </p>
        </div>
        
        <div className="space-y-20">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
              {/* Header avec illustration */}
              <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 bg-gradient-to-r ${section.color} rounded-2xl text-white shadow-lg`}>
                      {section.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {section.title}
                      </h3>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}>
                        {section.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {section.description}
                  </p>
                </div>
                <div className="relative">
                  <img 
                    src={section.illustration} 
                    alt={section.title}
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-20 rounded-2xl`}></div>
                </div>
              </div>
              
              {/* Détails techniques */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {section.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className={`bg-gradient-to-br ${section.color} p-6 rounded-2xl text-white shadow-lg hover:shadow-xl transition-all duration-300`}>
                    <div className="flex items-center gap-3 mb-4">
                      {detail.icon}
                      <h4 className="font-bold text-lg">
                        {detail.title}
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed opacity-90">
                      {detail.content}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Formules mathématiques */}
              <div className="bg-slate-900 rounded-2xl p-8">
                <h4 className="text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Formules Mathématiques Clés
                </h4>
                <div className="space-y-3">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <p className="text-sm text-gray-400 mb-2">Formule principale :</p>
                    <code className="text-green-400 font-mono text-sm block bg-slate-700 p-2 rounded">
                      {section.formula}
                    </code>
                  </div>
                  {section.additionalFormulas && (
                    <div className="grid md:grid-cols-2 gap-3">
                      {section.additionalFormulas.map((formula, fIndex) => (
                        <code key={fIndex} className="text-cyan-400 font-mono text-xs block bg-slate-800 p-3 rounded">
                          {formula}
                        </code>
                      ))}
                    </div>
                  )}
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
