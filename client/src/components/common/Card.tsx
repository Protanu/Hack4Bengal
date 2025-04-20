import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glassEffect?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  glassEffect = false,
}) => {
  const baseClasses = 'rounded-[20px] p-6 shadow-lg';
  
  const glassClasses = glassEffect
    ? 'backdrop-blur-md bg-white/10 dark:bg-gray-900/40 border border-white/20 dark:border-gray-800/50'
    : 'bg-white dark:bg-gray-800';
    
  return (
    <div className={`${baseClasses} ${glassClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;