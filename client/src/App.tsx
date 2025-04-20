import React, { useState, useEffect } from 'react';
import { WalletProvider } from './context/WalletContext';
import { ThemeProvider } from './context/ThemeContext';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import Header from './components/common/Header';
import { useWallet } from './context/WalletContext';

// Inner app component that can use context
const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('landing');
  const { wallet } = useWallet();

  // Navigate to dashboard if user is connected
  useEffect(() => {
    if (wallet.isConnected && currentPage === 'landing') {
      setCurrentPage('dashboard');
    }
    
    // Update page title
    document.title = 'ReputaChain | Web3 Wallet Reputation Scoring';
  }, [wallet.isConnected, currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      
      {currentPage === 'landing' ? (
        <LandingPage onNavigate={handleNavigate} />
      ) : (
        <DashboardPage />
      )}
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <WalletProvider>
        <AppContent />
      </WalletProvider>
    </ThemeProvider>
  );
}

export default App;