export type WalletProviderType = 'metamask' | 'walletconnect' | 'coinbase';

export interface WalletState {
  address: string;
  isConnected: boolean;
  isConnecting: boolean;
  provider: WalletProviderType | null;
}

export interface ReputationScore {
  score: number;
  transactions: number;
  nftHoldings: number;
  defiProtocols: number;
  walletAgeMonths: number;
}

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}