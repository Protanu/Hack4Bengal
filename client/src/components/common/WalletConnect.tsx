import React, { useState } from 'react';
import { Wallet, ArrowRight } from 'lucide-react';
import { useWallet } from '../../context/WalletContext';
import Button from './Button';
import { WalletProvider as WalletProviderType } from '../../types';

interface WalletOptionProps {
  name: string;
  provider: WalletProviderType;
  onClick: (provider: WalletProviderType) => void;
}

const WalletOption: React.FC<WalletOptionProps> = ({ name, provider, onClick }) => {
  return (
    <button
      className="flex items-center justify-between w-full p-4 rounded-xl text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      onClick={() => onClick(provider)}
    >
      <span className="font-medium">{name}</span>
      <ArrowRight className="h-4 w-4" />
    </button>
  );
};

const WalletConnect: React.FC = () => {
  const { wallet, connectWallet } = useWallet();
  const [showOptions, setShowOptions] = useState(false);

  const handleConnectClick = () => {
    setShowOptions(true);
  };

  const handleOptionClick = async (provider: WalletProviderType) => {
    await connectWallet(provider);
    setShowOptions(false);
  };

  if (wallet.isConnected) {
    return null; // Don't show if already connected
  }

  return (
    <div className="relative">
      <Button
        onClick={handleConnectClick}
        disabled={wallet.isConnecting}
        className="flex items-center gap-2"
      >
        {wallet.isConnecting ? (
          <>Connecting...</>
        ) : (
          <>
            <Wallet className="h-5 w-5" />
            Connect Wallet
          </>
        )}
      </Button>

      {showOptions && (
        <div className="absolute top-full right-0 mt-2 w-56 rounded-xl bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-700 p-3 z-10">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            Choose a wallet provider:
          </p>
          <div className="space-y-2">
            <WalletOption
              name="MetaMask"
              provider="metamask"
              onClick={handleOptionClick}
            />
            <WalletOption
              name="WalletConnect"
              provider="walletconnect"
              onClick={handleOptionClick}
            />
            <WalletOption
              name="Coinbase Wallet"
              provider="coinbase"
              onClick={handleOptionClick}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletConnect;