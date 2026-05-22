import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-black">

      {/* Cinematic Layered Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-maroon-950 via-black to-maroon-950"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-maroon-900/30 via-transparent to-black opacity-90"></div>
      
      {/* Subtle Vignette */}
      <div className="absolute inset-0 z-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)] pointer-events-none"></div>

      {/* Floating particles using framer-motion */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gold-400 rounded-full blur-[1px]"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            opacity: Math.random() * 0.3 + 0.1
          }}
          animate={{
            y: [null, Math.random() * -150 - 50],
            opacity: [null, Math.random() * 0.5 + 0.1, 0]
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

        {/* LEFT SIDE: Typography */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-start text-left lg:py-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            className="h-[2px] w-24 bg-gradient-to-r from-gold-400 to-transparent mb-8 gold-glow origin-left"
          />
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gradient-gold leading-[1.1] tracking-wide drop-shadow-lg">
            AI FOR <br />
            BHARATIYA <br />
            NATYA
          </h2>
          <p className="mt-8 text-lg sm:text-xl md:text-2xl text-white/80 max-w-xl font-serif font-light leading-relaxed border-l-2 border-gold-500/30 pl-6 drop-shadow-md">
            Preserving Classical Dance through Artificial Intelligence and Semantic Analysis
          </p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(212,175,55,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-10 py-4 rounded-full bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 text-maroon-950 font-bold tracking-widest uppercase text-sm shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-500"
          >
            Explore Platform
          </motion.button>
        </motion.div>

        {/* RIGHT SIDE: Dancer Image with Subtle Halo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="relative flex justify-center items-center h-[500px] lg:h-[800px] lg:translate-x-8"
        >
          {/* Subtle Circular Mandala Halo */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="absolute w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[550px] lg:h-[550px] rounded-full blur-[2px]"
            style={{
              backgroundImage: 'url(/mandala-right.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              mixBlendMode: 'screen',
              opacity: 0.12
            }}
          />

          {/* Soft Ambient Glow Behind Dancer */}
          <div className="absolute w-[250px] sm:w-[350px] lg:w-[450px] h-[400px] sm:h-[500px] lg:h-[700px] bg-maroon-500/10 blur-[100px] rounded-full" />
          <div className="absolute w-[200px] lg:w-[300px] h-[300px] lg:h-[500px] bg-gold-500/10 blur-[80px] rounded-full rotate-12" />

          {/* Dancer Image - Floating with transparent blending */}
          <motion.div
            animate={{ y: [-12, 12, -12] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-full h-full flex items-center justify-center"
          >
            <img
              src="hero section image.png"
              alt="Bharatanatyam Dancer"
              className="w-full max-w-[450px] sm:max-w-[500px] lg:max-w-[750px] h-auto object-contain"
              style={{
                filter: 'drop-shadow(0 0 40px rgba(212,175,55,0.15)) drop-shadow(0 30px 50px rgba(0,0,0,0.8))'
              }}
            />
          </motion.div>

          {/* Elegant shadow beneath dancer for realistic depth */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.2, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 lg:bottom-16 w-[150px] sm:w-[200px] lg:w-[350px] h-[10px] lg:h-[15px] bg-black blur-[15px] rounded-[100%]"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
