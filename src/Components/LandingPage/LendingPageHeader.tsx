import Logo from "./assets/Logo.svg";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Lucide icons
import { motion, AnimatePresence } from "framer-motion";

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
      className={`lg:px-[60px] md:pl-8 md:pr-4 px-4 lg:py-[30px] py-4 w-full font-renner text-[16px] font-normal fixed left-0 z-50 transition-all duration-300`}
      style={{
        top: isScrolled ? "0px" : "35px",
        background: "linear-gradient(90deg, rgba(3,0,5,0.1) 0%, #030005 100%)",
      }}
    >
      <div className="  flex items-center justify-between">
        <img
          src={Logo}
          alt="PlotPicks Logo"
          className="lg:w-[221px] w-[125px] lg:h-[37px] h-[21px]"
        />
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
          <button className="h-[48px] rounded-[32px] px-8 text-[14px] font-semibold leading-[100%] text-center [background:linear-gradient(144.46deg,#8E24AA_-35.11%,#000000_82.19%)]">
            Join the Waitlist Now
          </button>
        </nav>
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="lg:hidden mt-3 md:flex justify-end overflow-hidden"
          >
            <div
              className="flex flex-col space-y-4 text-white p-6 rounded-2xl shadow-xl md:px-20
                      backdrop-blur-md bg-[#030005]/80 border border-white/10"
            >
              {menuItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.25 }}
                  className="hover:text-cyan-400 transition-colors duration-200 flex"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: menuItems.length * 0.05, duration: 0.3 }}
                className="h-[48px] rounded-[32px] px-8 text-[14px] font-semibold leading-[100%] text-center [background:linear-gradient(144.46deg,#8E24AA_-35.11%,#000000_82.19%)]"
              >
                Join the Waitlist Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Header;
