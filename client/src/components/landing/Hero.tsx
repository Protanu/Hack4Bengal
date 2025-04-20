import React from 'react';
import { useWallet } from '../../context/WalletContext';
import Button from '../common/Button';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const { wallet, connectWallet } = useWallet();

  const handleGetStarted = async () => {
    if (wallet.isConnected) {
      onNavigate('dashboard');
    } else {
      await connectWallet('metamask');
      onNavigate('dashboard');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 -left-24 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 pt-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-gradient-to-r from-blue-500/20 to-blue-600/20 px-4 py-1 rounded-full mb-8">
            <span className="text-blue-400 text-sm font-medium">Web3's Trust Layer</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-100 to-white bg-clip-text text-transparent">
            Assess Your Wallet's Reputation — Instantly.
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            AI-powered scoring for smarter airdrops, safer DeFi lending, and trusted Web3 identity.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              onClick={handleGetStarted}
              className="group"
            >
              <span className="flex items-center">
                Get Started 
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
            >
              Learn More
            </Button>
          </div>
          
          {/* Dashboard Preview */}
          <div className="relative mt-8 rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10"></div>
            <img 
              src="https://images.pexels.com/photos/7567464/pexels-photo-7567464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="ReputaChain Dashboard Preview" 
              className="w-full h-auto rounded-2xl mix-blend-luminosity opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;