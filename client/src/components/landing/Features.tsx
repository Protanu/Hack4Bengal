import React from 'react';
import { Brain, Layers, ShieldCheck } from 'lucide-react';
import Card from '../common/Card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="flex flex-col items-center p-8 h-full hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-blue-500/10 text-blue-500 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-center">{description}</p>
    </Card>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Scoring",
      description: "Advanced algorithms analyze your entire wallet history to generate a comprehensive reputation score powered by GPT technology."
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Web3 Native Access",
      description: "Gain insights on your NFT holdings, DeFi protocol interactions, and overall transaction history in one unified dashboard."
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Trust Layer for dApps",
      description: "Enable smarter airdrops, secure DeFi lending decisions, and establish trusted identity across Web3 platforms."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Building the Reputation Layer for Web3
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            ReputaChain provides powerful tools to analyze and score wallet activity,
            creating a foundation of trust for the decentralized economy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;