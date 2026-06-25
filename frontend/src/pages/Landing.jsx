import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import ProblemSection from '../components/landing/ProblemSection';

const Landing = () => {
  return (
    <div className="min-h-screen bg-primary-950 text-white selection:bg-brand-500/30">
      
      <HeroSection />

      <ProblemSection />
    </div>
  );
};

export default Landing;