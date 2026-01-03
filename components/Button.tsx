import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  to, 
  onClick, 
  variant = 'primary', 
  children, 
  className = '',
  type = 'button'
}) => {
  const baseClasses = "inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 border focus:outline-none transform hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:scale-95 active:shadow-none";
  
  const variants = {
    primary: "bg-[#14a2ff] border-[#14a2ff] text-white hover:bg-black hover:border-black hover:text-white",
    outline: "bg-transparent border-black text-black hover:bg-black hover:text-white",
    white: "bg-white border-white text-black hover:bg-transparent hover:text-white"
  };

  const finalClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={finalClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={finalClasses}>
      {children}
    </button>
  );
};

export default Button;