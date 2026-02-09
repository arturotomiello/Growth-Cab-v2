import React from 'react';
import { ButtonProps } from '../types';

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  fullWidth = false
}) => {
  const baseStyles = "font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95";
  const widthStyle = fullWidth ? "w-full" : "w-auto";
  
  // Styles from JSON Design System
  const variants = {
    primary: "bg-[#004BDD] text-white hover:bg-[#0039A8] rounded-[50px] px-8 py-4 shadow-[rgba(255,255,255,0.2)_0px_1px_0px_0px_inset,rgba(0,0,0,0.16)_0px_2px_8px_0px]",
    secondary: "bg-[#232323] text-white hover:bg-[#333] rounded-[100px] px-8 py-4 shadow-[rgba(0,0,0,0.16)_0px_2px_8px_0px,rgba(255,255,255,0.15)_0px_-1px_0px_0px_inset]",
    outline: "bg-transparent border border-white/20 text-white hover:border-[#004BDD] hover:text-[#004BDD] rounded-[50px] px-6 py-3",
    ghost: "bg-transparent text-textSecondary hover:text-white px-4 py-2"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${widthStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;