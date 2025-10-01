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
    <div className="relative inline-block rounded-[32px] p-[1px] overflow-hidden group h-[48px]">
      {/* Gradient border (hidden on hover) */}
      <div
        className="
          absolute inset-0 rounded-[32px]
          [background:linear-gradient(144.46deg,#8E24AA_-35.11%,#000000_82.19%)]
          group-hover:hidden animate-spin-slow
        "
      ></div>

      {/* Gray border (visible on hover) */}
      <div
        className="
          absolute inset-0 rounded-[32px] border border-[#D8D8D8]
          hidden group-hover:block
        "
      ></div>

      {/* Button itself */}
      <button
        className={`
          relative z-10 w-full h-full px-8 py-[19px] 
          font-renner font-semibold text-[14px] leading-[100%] text-center
          bg-black text-white rounded-[32px] transition-colors duration-300
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
