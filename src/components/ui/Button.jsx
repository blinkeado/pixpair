// Button.jsx
import React from 'react';

/**
 * A customizable button component with rainbow glow effect
 */
export default function Button({ 
  children, 
  className = '', 
  variant = 'primary', 
  size = 'md',
  onClick,
  ...props 
}) {
  const baseClasses = 'rainbow-button';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    text: 'btn-text'
  };
  const sizeClasses = {
    sm: 'text-sm py-1 px-2',
    md: 'text-base py-2 px-4',
    lg: 'text-lg py-3 px-6'
  };
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant] || ''} ${sizeClasses[size] || ''} ${className}`;
  
  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
