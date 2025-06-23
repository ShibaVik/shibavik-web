
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-slate-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-xl font-light text-gray-300 mb-2">
              ShibaVik.io
            </h3>
            <p className="text-gray-400">
              Ressources blockchain, cryptomonnaies et mathématiques appliquées
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              © 2024 ShibaVik.io - Centre de ressources éducatives
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
