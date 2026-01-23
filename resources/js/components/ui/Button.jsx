import React from 'react';

export const Button = ({ children, href, variant = 'primary', className = '' }) => {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClasses = {
    primary: 'bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500',
    secondary: 'bg-coral-500 text-white hover:bg-coral-600 focus:ring-coral-500',
    outline: 'border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white focus:ring-teal-500',
  };
  return (
    <a href={href} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </a>
  );
};
