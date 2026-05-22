import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';
import BackgroundMandalas from './components/BackgroundMandalas';

function App() {
  return (
    <div className="min-h-screen bg-maroon-950 font-sans text-white overflow-hidden relative">
      <BackgroundMandalas />
      <Navbar />
      
      <main className="relative z-10 flex flex-col gap-24">
        <Hero />
        <Features />
        <About />
      </main>

      <Footer />
    </div>
  );
}

export default App;
