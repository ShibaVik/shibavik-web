
import React from 'react';
import { ExternalLink, Palette, Sparkles } from 'lucide-react';

const NFTGallery = () => {
  const nftImages = [
    {
      src: "/lovable-uploads/d4155a26-5ef7-48f2-9c7c-e4b9bf1ebc4c.png",
      title: "ShibaVik Blue Edition",
      description: "Design futuriste avec des tons cyan et bleus"
    },
    {
      src: "/lovable-uploads/126a62a8-9037-4649-8a38-5e3f1a9512dc.png",
      title: "ShibaVik Purple Edition", 
      description: "Esthétique élégante aux nuances violettes"
    },
    {
      src: "/lovable-uploads/1d96b11d-1065-4ecd-95c7-96934bc67c2f.png",
      title: "ShibaVik Classic Edition",
      description: "Version iconique aux couleurs chaudes"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header avec illustration de la grille colorée */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/9096175a-b70f-4db6-9813-cb2097291cdd.png" 
              alt="Collection ShibaVik Variations" 
              className="w-full max-w-4xl h-64 object-cover rounded-3xl shadow-2xl"
            />
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <Palette className="w-8 h-8 text-purple-600" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Collection NFT ShibaVik Summer Era
            </h2>
            <Sparkles className="w-8 h-8 text-cyan-600" />
          </div>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Une collection exclusive et limitée disponible sur OpenSea, représentant l'évolution artistique 
            de l'écosystème ShibaVik à travers des designs uniques et des palettes de couleurs innovantes
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {nftImages.map((nft, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-2xl mb-6 bg-gradient-to-br from-gray-100 to-gray-50">
                  <img 
                    src={nft.src} 
                    alt={nft.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {nft.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {nft.description}
                  </p>
                  
                  <a 
                    href="https://opensea.io/collection/shibavik-summer-era"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
                  >
                    <span>Découvrir sur OpenSea</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="https://opensea.io/collection/shibavik-summer-era"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold rounded-2xl hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-cyan-500/25 transform hover:scale-105"
          >
            <Sparkles className="w-6 h-6" />
            <span className="text-lg">Explorer la Collection Complète</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NFTGallery;
