import React from 'react';
import ThemeToggle from '../common/ThemeToggle';
import WalletDisplay from '../common/WalletDisplay';

const TopBar: React.FC = () => {
  return (
    <div className="sticky top-0 z-20 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 py-3 px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Wallet Dashboard
        </h1>
        <div className="flex items-center space-x-4">
          <WalletDisplay />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default TopBar;