import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import WalletConnect from './WalletConnect';
import WalletDisplay from './WalletDisplay';
import { useWallet } from '../../context/WalletContext';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { wallet } = useWallet();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || currentPage !== 'landing'
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => handleNavClick('landing')}
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent flex items-center"
          >
            ReputaChain
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <button
              onClick={() => handleNavClick('landing')}
              className={`text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors ${
                currentPage === 'landing' && !wallet.isConnected ? 'text-blue-500 dark:text-blue-400 font-medium' : ''
              }`}
            >
              Home
            </button>
            {wallet.isConnected && (
              <button
                onClick={() => handleNavClick('dashboard')}
                className={`text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors ${
                  currentPage === 'dashboard' ? 'text-blue-500 dark:text-blue-400 font-medium' : ''
                }`}
              >
                Dashboard
              </button>
            )}
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              Docs
            </a>
          </nav>
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            {wallet.isConnected ? <WalletDisplay /> : <WalletConnect />}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          <ThemeToggle />
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 border-b border-gray-200 dark:border-gray-700' : 'max-h-0 overflow-hidden'
        }`}
      >
        <nav className="container mx-auto px-4 py-3 flex flex-col space-y-4">
          <button
            onClick={() => handleNavClick('landing')}
            className={`text-left py-2 ${
              currentPage === 'landing' ? 'text-blue-500 dark:text-blue-400 font-medium' : 'text-gray-600 dark:text-gray-300'
            }`}
          >
            Home
          </button>
          {wallet.isConnected && (
            <button
              onClick={() => handleNavClick('dashboard')}
              className={`text-left py-2 ${
                currentPage === 'dashboard' ? 'text-blue-500 dark:text-blue-400 font-medium' : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              Dashboard
            </button>
          )}
          <a href="#" className="text-gray-600 dark:text-gray-300 py-2">
            Docs
          </a>
          <div className="pt-2 pb-4">
            {wallet.isConnected ? <WalletDisplay /> : <WalletConnect />}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;