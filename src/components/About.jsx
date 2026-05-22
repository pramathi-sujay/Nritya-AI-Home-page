import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative py-32 px-6 md:px-12 z-10 flex flex-col items-center justify-center min-h-[70vh]">
      
      {/* Subtle Section Corner Mandalas */}
      <div 
        className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 opacity-10 mix-blend-screen bg-no-repeat bg-contain"
        style={{ backgroundImage: 'url(/mandala-left.jpg)', transform: 'rotate(-45deg) translate(-20%, -20%)' }}
      />
      <div 
        className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-10 mix-blend-screen bg-no-repeat bg-contain"
        style={{ backgroundImage: 'url(/mandala-right.jpg)', transform: 'rotate(135deg) translate(-20%, -20%)' }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-10">
            About <span className="text-gradient-gold">Us</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold-500/50 mx-auto mb-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 text-lg md:text-xl text-white/80 font-light leading-relaxed tracking-wide"
        >
          <p>
            <span className="text-gold-400 font-serif text-2xl mr-1">"</span>
            NrityaAI was developed with the vision of preserving India’s rich cultural heritage while making classical dance learning more interactive, intelligent, and accessible.
          </p>
          <p>
            Inspired by the Smart India Hackathon problem statement on identifying mudras in Bharatiya Natya forms, the project uses AI to support dancers and cultural institutions.
          </p>
          <p className="font-medium text-gold-400/90 pt-4 border-t border-gold-500/20 inline-block px-12">
            NrityaAI bridges tradition and technology to preserve art for future generations.
            <span className="text-gold-400 font-serif text-2xl ml-1">"</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
