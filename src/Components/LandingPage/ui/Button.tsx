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
    <div className="relative inline-block rounded-full p-[2px] overflow-hidden group">
      {/* Spinning purple gradient border (hidden on hover) */}
      <div
        className="
          absolute inset-0 rounded-full
          bg-[conic-gradient(from_0deg,#8E24AA_-35.11%,#000000_82.19%)]
          animate-spin-slow
          group-hover:hidden
        "
      ></div>

      {/* Gray border (visible only on hover) */}
      <div
        className="
          absolute inset-0 rounded-full border border-[#D8D8D8]
          hidden group-hover:block
        "
      ></div>

      {/* Button itself */}
      <button
        className={`
          relative z-10 px-8 py-[19px] font-semibold text-white rounded-full 
          bg-black transition-colors duration-300 text-sm leading-[100%]
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
