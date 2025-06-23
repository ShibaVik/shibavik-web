
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
    <section className="py-20 tech-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-tech-cyan to-tech-electric bg-clip-text text-transparent">
            Collection NFT ShibaVik
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Découvrez notre collection exclusive ShibaVik Summer Era sur OpenSea
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {nftImages.map((nft, index) => (
            <div key={index} className="group relative">
              <div className="tech-border rounded-2xl p-6 hover:tech-glow transition-all duration-300 transform hover:scale-105">
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img 
                    src={nft.src} 
                    alt={nft.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tech-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  {nft.title}
                </h3>
                
                <a 
                  href="https://opensea.io/collection/shibavik-summer-era"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-tech-cyan to-tech-electric text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-tech-cyan/25 transition-all duration-300"
                >
                  <span>Voir sur OpenSea</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://opensea.io/collection/shibavik-summer-era"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-tech-cyan text-tech-cyan font-semibold rounded-lg hover:bg-tech-cyan/10 transition-all duration-300 group"
          >
            <span>Voir la Collection Complète</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NFTGallery;
