import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, icon, link, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -12 }}
      onClick={() => window.location.href = link}
      className="glass-card rounded-2xl p-8 border border-gold-500/20 cursor-pointer group hover:border-gold-400/60 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(212,175,55,0.1)] transition-all duration-500 relative overflow-hidden flex flex-col items-center text-center h-full bg-maroon-950/40 backdrop-blur-md"
    >
      {/* Background Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon Container */}
      <div className="w-20 h-20 rounded-full border border-gold-400/30 flex items-center justify-center mb-6 gold-glow group-hover:border-gold-400 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] group-hover:bg-maroon-900/80 transition-all duration-500 bg-maroon-950/80 z-10 relative">
        <div className="text-gold-400 text-3xl group-hover:scale-125 transition-transform duration-500 drop-shadow-md">
          {icon}
        </div>
      </div>
      
      {/* Text Content */}
      <div className="z-10 relative flex flex-col flex-grow items-center w-full">
        <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold-400 transition-colors duration-500 drop-shadow-sm">
          {title}
        </h3>
        <p className="text-white/70 font-light text-sm leading-relaxed flex-grow">
          {description}
        </p>
        
        {/* Launch Module Text & Decorative Line Container */}
        <div className="mt-8 h-6 flex items-center justify-center w-full relative">
          <div className="absolute w-12 h-[2px] bg-gold-600/30 group-hover:opacity-0 transition-opacity duration-300" />
          <span className="text-gold-400 text-xs font-bold tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]">
            Launch Module &rarr;
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
