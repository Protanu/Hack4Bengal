import React from 'react';
import Card from '../common/Card';

const Screenshots: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Get Deep Insights Into Your Wallet
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Our intuitive dashboard provides comprehensive analytics and scoring to help you 
            understand and improve your on-chain reputation.
          </p>
        </div>
        
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl max-w-5xl mx-auto">
          <Card glassEffect={true} className="p-0">
            <img 
              src="https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="ReputaChain Dashboard" 
              className="w-full h-auto rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-purple-900/20 rounded-3xl"></div>
          </Card>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border border-gray-100 dark:border-gray-700">
            <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-1">Transactions Analyzed</p>
            <p className="text-3xl font-bold text-blue-500">1.2M+</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border border-gray-100 dark:border-gray-700">
            <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-1">Wallets Scored</p>
            <p className="text-3xl font-bold text-blue-500">25K+</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border border-gray-100 dark:border-gray-700">
            <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-1">DeFi Protocols</p>
            <p className="text-3xl font-bold text-blue-500">120+</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border border-gray-100 dark:border-gray-700">
            <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-1">NFT Collections</p>
            <p className="text-3xl font-bold text-blue-500">750+</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;