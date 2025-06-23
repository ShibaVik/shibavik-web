
import React from 'react';
import { ExternalLink } from 'lucide-react';

const NFTGallery = () => {
  const nftImages = [
    {
      src: "/lovable-uploads/d4155a26-5ef7-48f2-9c7c-e4b9bf1ebc4c.png",
      title: "ShibaVik Blue Edition"
    },
    {
      src: "/lovable-uploads/126a62a8-9037-4649-8a38-5e3f1a9512dc.png",
      title: "ShibaVik Purple Edition"
    },
    {
      src: "/lovable-uploads/1d96b11d-1065-4ecd-95c7-96934bc67c2f.png",
      title: "ShibaVik Classic Edition"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Collection NFT ShibaVik Summer Era
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une collection exclusive disponible sur OpenSea, représentant l'évolution artistique de l'écosystème ShibaVik
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {nftImages.map((nft, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src={nft.src} 
                    alt={nft.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <h3 className="text-xl font-medium text-gray-900 mb-4 text-center">
                  {nft.title}
                </h3>
                
                <a 
                  href="https://opensea.io/collection/shibavik-summer-era"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  <span>Voir sur OpenSea</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="https://opensea.io/collection/shibavik-summer-era"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300"
          >
            <span>Voir la Collection Complète</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NFTGallery;
