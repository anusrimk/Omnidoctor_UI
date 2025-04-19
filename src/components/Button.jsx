import React from "react";

const Button = ({ 
  children, 
  variant = "primary", 
  color = "teal", 
  className = "", 
  icon: Icon,
  ...props 
}) => {
  const styles = {
    primary: {
      base: "px-6 py-2 rounded-md text-white",
      teal: "bg-teal-500 hover:bg-teal-600",
      violet: "bg-violet-500/80 hover:bg-violet-500",
      yellow: "bg-yellow-400/70 hover:bg-yellow-400",
      red: "bg-red-500 hover:bg-red-600"
    },
    icon: {
      base: "p-2 rounded-md",
      teal: "text-teal-500 hover:bg-teal-50",
      violet: "text-violet-500 hover:bg-violet-50",
      yellow: "text-yellow-400 hover:bg-yellow-50",
      red: "text-red-500 hover:bg-red-50"
    }
  };

  const baseStyles = styles[variant]?.base || styles.primary.base;
  const colorStyles = styles[variant]?.[color] || styles.primary.teal;

  return (
    <button
      className={`${baseStyles} ${colorStyles} transition-colors duration-200 flex items-center gap-2 ${className}`}
      {...props}
    >
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
};

export default Button;
