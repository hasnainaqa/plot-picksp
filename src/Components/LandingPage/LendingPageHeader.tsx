import Logo from "./assets/Logo.svg";
import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { label: "Home", href: "#" },
    { label: "How It Works", href: "#" },
    { label: "Rewards", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Contact", href: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`px-[60px] lg:py-[30px] py-4 w-full font-renner text-[16px] font-normal fixed left-0 z-50 transition-all duration-300`}
      style={{
        top: isScrolled ? "0px" : "35px",
        background: "linear-gradient(90deg, rgba(3,0,5,0.1) 0%, #030005 100%)",
      }}
    >
      <div className=" mx-auto flex items-center justify-between">
        <img src={Logo} alt="PlotPicks Logo" className="lg:w-auto w-[125px] lg:h-auto h-[21px]" />
        <nav className="hidden lg:flex items-center space-x-10 text-white font-[400]">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="hover:text-cyan-400 transition"
            >
              {item.label}
            </a>
          ))}
          <button className="h-[48px] rounded-[32px] px-8 py-[19px] text-[14px] font-semibold leading-[100%] text-center [background:linear-gradient(144.46deg,#8E24AA_-35.11%,#000000_82.19%)]">
            Join the Waitlist Now
          </button>
        </nav>
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden mt-4 space-y-3 text-white">
          {menuItems.map((item, index) => (
            <a key={index} href={item.href} className="block">
              {item.label}
            </a>
          ))}
          <button className="w-full bg-gradient-to-r from-[#8E24AA] to-[#000000] px-5 py-2 rounded-full text-sm font-semibold shadow-lg text-center">
            Join the Waitlist Now
          </button>
        </div>
      )}
    </header>
  );
};
export default Header;
