
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 tech-bg relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-tech-dark/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-tech-cyan to-white bg-clip-text text-transparent">
              Innovation Technologique
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              ShibaVik représente l'avant-garde de l'innovation blockchain, fusionnant les mathématiques appliquées 
              avec les technologies décentralisées pour créer un écosystème unique et révolutionnaire.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Notre approche scientifique et méthodique nous permet de développer des solutions durables 
              et évolutives dans l'univers des cryptomonnaies.
            </p>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-tech-cyan/20 to-tech-electric/20 rounded-2xl blur-xl"></div>
              <img 
                src="/lovable-uploads/c25d8ab7-7750-4655-85e3-02df1c34cb70.png" 
                alt="ShibaVik Innovation" 
                className="relative w-80 h-80 object-contain floating tech-border rounded-2xl p-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
