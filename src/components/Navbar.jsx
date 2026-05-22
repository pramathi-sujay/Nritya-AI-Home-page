import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Features', to: 'features' },
    { name: 'About Us', to: 'about' },
    { name: 'Community', to: 'community' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-maroon-950/90 backdrop-blur-md border-b border-white/10 py-4 shadow-lg'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative">

        {/* LEFT: Logo and Subtitle */}
        <div className="flex items-center gap-4 cursor-pointer z-10" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {/* CSS Cropped Circular Logo */}
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-gold-400/50 shadow-[0_0_15px_rgba(212,175,55,0.4)] relative shrink-0 gold-glow">
            <img
              src="/logo nritya AI.jpg"
              alt="NrityaAI Emblem"
              className="absolute top-0 left-0 h-full w-auto max-w-none object-cover object-left"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-serif text-gradient-gold tracking-wider leading-none mb-1">
              NrityaAI
            </h1>
            <span className="text-[9px] md:text-[11px] text-white/70 uppercase tracking-[0.25em] font-medium">
              Preserving Art. Empowering Talent.
            </span>
          </div>
        </div>

        {/* RIGHT: Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 z-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={800}
              offset={-80}
              spy={true}
              activeClass="text-gold-400 font-semibold"
              className="text-white/80 hover:text-gold-400 transition-colors cursor-pointer text-sm uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button placeholder */}
        <div className="md:hidden z-10 flex items-center">
          <button className="text-gold-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
