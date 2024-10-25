"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import navLinks from "./navbarData.json";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const path = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-primary-500 text-primary-100 pt-5`}
    >
      <div className="max-w-[1600px] mx-auto px-4 lg:px-20">
        <nav className="w-full md:h-20 h-16 flex items-center justify-between text-[16px]">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col decoration-transparent cursor-pointer">
              <p className="text-[22px]">Dheeraj </p>
              <h3 className="text-[30px] leading-[28px]"> Jangid.</h3>
            </div>

            <ul
              className={`hidden lg:flex flex-col lg:flex-row lg:items-center rounded-[16px] gap-y-1 lg:space-x-8 p-4 lg:p-0 lg:bg-transparent leading-[29px]`}
            >
              {navLinks.navbarLinks.map((link, index) => (
                <li key={index} className="group relative">
                  <div className="relative hidden lg:flex items-center text-[16px]">
                    <button className="flex items-center gap-2 py-2 px-3 opacity-60 hover:opacity-100 transition-colors duration-300">
                      {link.name}
                    </button>
                  </div>
                  {/* Underline Effect */}
                  <span className="absolute left-2 bottom-0 w-0 h-[2px] bg-[#ab4e4f] transition-all duration-300 group-hover:w-[80%]"></span>
                </li>
              ))}
            </ul>

            {/* Mobile Menu */}
            {isOpen && (
              <ul
                className={`flex flex-col lg:flex-row lg:items-center rounded-[16px] gap-y-1 lg:space-x-8 p-4 lg:p-0 lg:bg-transparent leading-[29px] overflow-y-scroll max-h-screen z-20 ${
                  isOpen
                    ? "absolute left-0 md:top-24 top-16 w-screen bg-primary-500"
                    : "hidden lg:flex"
                }`}
              >
                {navLinks.navbarLinks.map((link, index) => (
                  <li key={index} className="relative">
                    <div>
                      <button className="flex items-center gap-2 py-2 px-3 text-primary-100 hover:text-[#7D6CFF] rounded lg:bg-transparent transition-colors duration-300">
                        {link.name}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <button onClick={toggleMenu} className="block lg:hidden">
              {isOpen ? (
                <X size={32} className="text-primary-100" />
              ) : (
                <Menu size={32} className="text-primary-100" />
              )}
            </button>
          </div>
        </nav>
      </div>
    </nav>
  );
};
