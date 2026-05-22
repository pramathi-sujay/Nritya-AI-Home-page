import React from 'react';

const Footer = () => {
  return (
    <footer id="community" className="relative z-10 border-t border-gold-500/20 bg-maroon-950/80 py-12 px-6 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        <div>
          <h2 className="text-2xl font-serif text-gradient-gold tracking-wider mb-2">NrityaAI</h2>
          <p className="text-white/60 text-sm font-light">Preserving Art. Empowering Talent.</p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-white/60 hover:text-gold-400 transition-colors text-sm uppercase tracking-wider">Twitter</a>
          <a href="#" className="text-white/60 hover:text-gold-400 transition-colors text-sm uppercase tracking-wider">Discord</a>
          <a href="#" className="text-white/60 hover:text-gold-400 transition-colors text-sm uppercase tracking-wider">GitHub</a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/5 text-center">
        <p className="text-white/40 text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} NrityaAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
