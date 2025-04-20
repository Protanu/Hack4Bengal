import React from 'react';
import { useWallet } from '../../context/WalletContext';
import Button from './Button';

const WalletDisplay: React.FC = () => {
  const { wallet, disconnectWallet } = useWallet();

  if (!wallet.isConnected) {
    return null;
  }

  // Format address to show first and last 6 characters
  const formatAddress = (address: string) => {
    if (!address) return '';
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <div className="flex items-center space-x-3">
      <div className="flex items-center bg-blue-500/10 px-3 py-1.5 rounded-lg">
        <div className="h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></div>
        <span className="text-sm font-mono text-blue-500 dark:text-blue-400">
          {formatAddress(wallet.address)}
        </span>
      </div>
      <Button 
        variant="outline" 
        size="sm" 
        onClick={disconnectWallet}
      >
        Disconnect
      </Button>
    </div>
  );
};

export default WalletDisplay;