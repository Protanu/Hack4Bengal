import React from 'react';
import { History, Wallet, Database, Clock } from 'lucide-react';
import Card from '../common/Card';
import { ReputationScore } from '../../types';

interface MetricCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  description: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon, description }) => {
  return (
    <Card className="h-full">
      <div className="flex items-start">
        <div className="rounded-lg p-3 bg-blue-500/10 text-blue-500 mr-4">
          {icon}
        </div>
        <div>
          <h3 className="text-gray-700 dark:text-gray-300 font-medium mb-1">{title}</h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{value}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </Card>
  );
};

interface BreakdownCardsProps {
  score: ReputationScore | null;
  loading: boolean;
}

const BreakdownCards: React.FC<BreakdownCardsProps> = ({ score, loading }) => {
  if (loading || !score) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="h-40 animate-pulse">
            <div className="flex items-start">
              <div className="rounded-lg h-12 w-12 bg-gray-200 dark:bg-gray-700 mr-4"></div>
              <div className="w-full">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-3"></div>
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-3"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    );
  }

  const metrics = [
    {
      title: "Transactions",
      value: score.transactions.toLocaleString(),
      icon: <History className="h-6 w-6" />,
      description: "Total number of transactions from this wallet"
    },
    {
      title: "NFT Holdings",
      value: score.nftHoldings.toLocaleString(),
      icon: <Wallet className="h-6 w-6" />,
      description: "Number of NFTs currently in your wallet"
    },
    {
      title: "DeFi Protocols",
      value: score.defiProtocols.toLocaleString(),
      icon: <Database className="h-6 w-6" />,
      description: "Different DeFi protocols interacted with"
    },
    {
      title: "Wallet Age",
      value: `${score.walletAgeMonths} months`,
      icon: <Clock className="h-6 w-6" />,
      description: "Time since first transaction"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {metrics.map((metric, index) => (
        <MetricCard
          key={index}
          title={metric.title}
          value={metric.value}
          icon={metric.icon}
          description={metric.description}
        />
      ))}
    </div>
  );
};

export default BreakdownCards;