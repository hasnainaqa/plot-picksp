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
    <div className="relative inline-block rounded-full p-[2px] overflow-hidden">
      {/* Spinning gradient border */}
      <div
        className="
          absolute inset-0 rounded-full
          bg-[conic-gradient(from_0deg,#8E24AA_-35.11%,#000000_82.19%)]
          animate-spin-slow
        "
      ></div>

      {/* Gray static base border (D8D8D8) */}
      <div className="absolute inset-0 rounded-full border border-[#D8D8D8]"></div>

      {/* Button itself */}
      <button
        className={`
          relative z-10 px-10 py-3 font-semibold text-white rounded-full 
          bg-black hover:bg-gray-900 transition-colors duration-300
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
