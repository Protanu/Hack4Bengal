import { useState, useEffect } from 'react';
import { ReputationScore } from '../types';

export const useReputationScore = (address: string) => {
  const [score, setScore] = useState<ReputationScore | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchScore = async () => {
    if (!address) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate mock data - in a real app, this would come from an API
      const mockScore: ReputationScore = {
        score: Math.floor(Math.random() * 40) + 60, // 60-99 range
        transactions: Math.floor(Math.random() * 500) + 50,
        nftHoldings: Math.floor(Math.random() * 20),
        defiProtocols: Math.floor(Math.random() * 8) + 1,
        walletAgeMonths: Math.floor(Math.random() * 36) + 3
      };
      
      setScore(mockScore);
    } catch (err) {
      setError('Failed to fetch reputation score. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (address) {
      fetchScore();
    }
  }, [address]);

  return { score, loading, error, fetchScore };
};