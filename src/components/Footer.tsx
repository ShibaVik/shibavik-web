
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 tech-bg border-t border-tech-cyan/20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-tech-cyan to-tech-electric bg-clip-text text-transparent">
              ShibaVik.io
            </h3>
            <p className="text-gray-300">
              L'avenir de la blockchain et des cryptomonnaies
            </p>
          </div>
          
          <div className="border-t border-tech-cyan/20 pt-6">
            <p className="text-gray-400 text-sm">
              © 2024 ShibaVik.io - Tous droits réservés
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
