import React from 'react';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Screenshots from '../components/landing/Screenshots';
import Footer from '../components/common/Footer';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Hero onNavigate={onNavigate} />
      <Features />
      <Screenshots />
      <Footer />
    </div>
  );
};

export default LandingPage;