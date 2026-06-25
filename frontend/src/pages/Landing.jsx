import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import ProblemSection from '../components/landing/ProblemSection';
import SolutionSection from '../components/landing/SolutionSection';
import FeatureSection from '../components/landing/FeatureSection';
const Landing = () => {
  return (
    <div className="min-h-screen bg-primary-950 text-white selection:bg-brand-500/30">
      
      <HeroSection />

      <ProblemSection />
      <SolutionSection />
      <FeatureSection />
    </div>
  );
};

export default Landing;