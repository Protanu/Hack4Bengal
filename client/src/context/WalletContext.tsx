import React, { createContext, useContext, useState } from 'react';
import { WalletProviderType, WalletState } from '../types';

interface WalletContextType {
  wallet: WalletState;
  connectWallet: (provider: WalletProviderType) => Promise<void>;
  disconnectWallet: () => void;
}

const initialState: WalletState = {
  address: '',
  isConnected: false,
  isConnecting: false,
  provider: null
};

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wallet, setWallet] = useState<WalletState>(initialState);

  // Mock wallet connection for demonstration
  const connectWallet = async (provider: WalletProviderType) => {
    setWallet(prev => ({ ...prev, isConnecting: true }));
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generate a random Ethereum address
    const randomAddr = `0x${Array.from({length: 40}, () => 
      Math.floor(Math.random() * 16).toString(16)).join('')}`;
    
    setWallet({
      address: randomAddr,
      isConnected: true,
      isConnecting: false,
      provider
    });
  };

  const disconnectWallet = () => {
    setWallet(initialState);
  };

  return (
    <WalletContext.Provider value={{ wallet, connectWallet, disconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = (): WalletContextType => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};