import Logo from "./assets/Logo.svg";
import React, { useEffect, useState } from "react";


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // true if page is scrolled
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`px-[60px] py-[30px] w-full font-renner text-[16px] font-normal fixed left-0 z-50 transition-all duration-300`}
      style={{
        top: isScrolled ? "0px" : "35px",
        background:
          "linear-gradient(90deg, rgba(3,0,5,0.1) 0%, #030005 100%)",
      }}
    >
      <div className=" mx-auto flex items-center justify-between">
        <img src={Logo} alt="PlotPicks Logo" />
        <nav className="hidden lg:flex items-center space-x-10 text-white font-[400]">
          <a href="#" className="hover:text-cyan-400 transition">
            Home
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            How It Works
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            Rewards
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            FAQ
          </a>
          <a href="#" className="hover:text-cyan-400 transition">
            Contact
          </a>
          <button className="bg-gradient-to-b from-[#8E24AA] to-[#000000] px-8 py-[18px] rounded-[32px] text-[14px] font-semibold transition text-center leading-[100%]">
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
          <a href="#" className="block">
            Home
          </a>
          <a href="#" className="block">
            How It Works
          </a>
          <a href="#" className="block">
            Rewards
          </a>
          <a href="#" className="block">
            FAQ
          </a>
          <a href="#" className="block">
            Contact
          </a>
          <button className="w-full bg-gradient-to-r from-[#8E24AA] to-[#000000] px-5 py-2 rounded-full text-sm font-semibold shadow-lg text-center">
            Join the Waitlist Now
          </button>
        </div>
      )}
    </header>
  );
}
export default Header;