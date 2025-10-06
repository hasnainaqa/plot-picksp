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
    <div className="relative inline-block rounded-[32px] p-[1px] overflow-hidden group h-[50px]">
  <div
    className="
      absolute inset-0 rounded-[32px]
      [background:linear-gradient(144.46deg,#8E24AA_-35.11%,#000000_82.19%)]
      animate-spin-slow group-hover:animate-none
    "
  ></div>

  <div
    className="absolute inset-0 rounded-[32px] pointer-events-none"
    style={{
      background:
        "linear-gradient(to bottom,#030005 100%)",
    }}
  ></div>
      <div
        className="absolute inset-0 rounded-[32px] [background:linear-gradient(to_top_left,#06F1BA_0%,#0385FF_100%)]
          blur-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
      ></div>
      <button
        className={`relative z-10 w-full h-full px-8 font-renner font-semibold text-[14px] leading-[100%] text-center
          bg-[#030005] text-white rounded-[32px] transition-colors duration-500
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
