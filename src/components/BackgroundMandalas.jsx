import React from 'react';

const BackgroundMandalas = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Left Mandala */}
      <img
        src="/mandala-left.jpg" // Place mandala-left.jpg in the public folder
        alt=""
        className="absolute top-1/2 -left-32 sm:-left-48 md:-left-64 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-auto object-contain opacity-20 mix-blend-screen blur-[2px]"
      />
      
      {/* Right Mandala */}
      <img
        src="/mandala-right.jpg" // Place mandala-right.jpg in the public folder
        alt=""
        className="absolute top-1/2 -right-32 sm:-right-48 md:-right-64 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-auto object-contain opacity-20 mix-blend-screen blur-[2px]"
      />
    </div>
  );
};

export default BackgroundMandalas;
