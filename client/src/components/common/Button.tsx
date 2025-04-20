import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  fullWidth = false,
  className = '',
  type = 'button',
}) => {
  const baseClasses = 'rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none';
  
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-blue-500/30',
    secondary: 'bg-gray-800 text-white hover:bg-gray-700 shadow-lg',
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500/10'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `;
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;