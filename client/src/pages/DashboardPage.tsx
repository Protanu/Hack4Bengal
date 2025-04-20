import React from 'react';
import TopBar from '../components/dashboard/TopBar';
import ScoreDisplay from '../components/dashboard/ScoreDisplay';
import BreakdownCards from '../components/dashboard/BreakdownCards';
import { useWallet } from '../context/WalletContext';
import { useReputationScore } from '../hooks/useReputationScore';

const DashboardPage: React.FC = () => {
  const { wallet } = useWallet();
  const { score, loading, error, fetchScore } = useReputationScore(wallet.address);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-10">
      <TopBar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8">
          <div className="max-w-2xl mx-auto w-full">
            <ScoreDisplay 
              score={score} 
              loading={loading} 
              error={error} 
              onRefresh={fetchScore} 
            />
          </div>
          
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
              Reputation Breakdown
            </h2>
            <BreakdownCards score={score} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;