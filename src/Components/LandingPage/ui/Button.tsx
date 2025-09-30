// Button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div className="relative inline-block rounded-full p-[1px] group">
      {/* Gradient border */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 via-purple-700 to-black transition-opacity duration-300 group-hover:opacity-50"></div>

      {/* Button */}
      <button
        className={`relative px-8 py-3 font-semibold text-white rounded-full bg-black w-full ${className}`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
