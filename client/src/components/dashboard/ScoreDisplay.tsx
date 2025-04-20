import React from 'react';
import { RefreshCw, AlertCircle } from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';
import { ReputationScore } from '../../types';

interface ScoreDisplayProps {
  score: ReputationScore | null;
  loading: boolean;
  error: string | null;
  onRefresh: () => void;
}

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score, loading, error, onRefresh }) => {
  // Helper function to determine score color
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-blue-500';
    if (score >= 40) return 'text-yellow-500';
    return 'text-red-500';
  };

  // Helper function for score descriptor
  const getScoreDescriptor = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Fair';
    return 'Poor';
  };

  return (
    <Card className="w-full" glassEffect={true}>
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-600 rounded-lg p-4 mb-6 flex items-start">
          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
          <p>{error}</p>
        </div>
      )}

      <div className="flex flex-col items-center">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          Wallet Reputation Score
        </h2>

        {loading ? (
          <div className="flex flex-col items-center py-8">
            <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full mb-4"></div>
            <p className="text-gray-500 dark:text-gray-400">Analyzing wallet activity...</p>
          </div>
        ) : score ? (
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div className="w-48 h-48 rounded-full border-[16px] border-gray-200 dark:border-gray-700 flex items-center justify-center">
                <div className={`text-6xl font-bold ${getScoreColor(score.score)}`}>
                  {score.score}
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-1 rounded-full text-sm font-medium">
                {getScoreDescriptor(score.score)}
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-center max-w-md mb-6">
              Your wallet has a {getScoreDescriptor(score.score).toLowerCase()} reputation score based on 
              your on-chain activity and behavior patterns.
            </p>

            <Button onClick={onRefresh} variant="outline" className="flex items-center">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh Analysis
            </Button>
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              No score available. Click below to analyze your wallet.
            </p>
            <Button onClick={onRefresh}>
              Analyze Wallet
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ScoreDisplay;