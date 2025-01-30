"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import navLinks from "./navbarData.json";
import { BackgroundBeams } from "@/app/ui/background-beams";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavigation = (section) => {
    const target = document.getElementById(section);
    const navbarHeight = 100; // Adjust this value to match your navbar height
    const position = target.offsetTop - navbarHeight;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });

    setIsOpen(false); // Close the menu after navigation in mobile view
  };

  return (
    <nav className="w-full z-[1000] text-primary-100 py-5 bg-primary-500">
      {" "}
      {/* Ensure high z-index */}
      <div className="max-w-[1600px] mx-auto px-4 lg:px-20 relative">
        <nav className="w-full md:h-20 h-16 flex items-center justify-between text-[16px] relative z-[1000]">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col decoration-transparent cursor-pointer">
              <p className="text-[18px] sm:text-[22px]">Dheeraj</p>
              <h3 className="text-[24px] sm:text-[30px] leading-[28px]">Jangid.</h3>
            </div>

            <ul className="hidden lg:flex flex-col lg:flex-row lg:items-center rounded-[16px] gap-y-1 lg:space-x-8 p-4 lg:p-0 lg:bg-transparent leading-[29px]">
              {navLinks.navbarLinks.map((link, index) => (
                <li key={index} className="group relative">
                  <button
                    onClick={() => handleNavigation(link.href.substring(1))}
                    className={`flex items-center gap-2 py-2 px-3 transition-colors duration-300 ${
                      activeSection === link.href.substring(1)
                        ? "opacity-100"
                        : "opacity-60 hover:opacity-100 hover:transition-colors duration-300"
                    }`}
                  >
                    {link.name}
                  </button>
                  <span
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] bg-[#ab4e4f] transition-all duration-300 ${
                      activeSection === link.href.substring(1)
                        ? "w-[85%]"
                        : "w-0 group-hover:w-[85%]"
                    }`}
                  ></span>
                </li>
              ))}
            </ul>

            {/* Mobile Menu */}
            {isOpen && (
              <ul className="flex flex-col lg:hidden rounded-[16px] gap-y-1 p-4 bg-primary-500 leading-[29px] overflow-y-scroll max-h-screen z-[1000] absolute left-0 md:top-24 top-16 w-screen">
                {navLinks.navbarLinks.map((link, index) => (
                  <li key={index} className="relative">
                    <button
                      onClick={() => handleNavigation(link.href.substring(1))}
                      className={`flex items-center gap-2 py-2 px-3 text-primary-100 hover:text-[#7D6CFF] rounded transition-colors duration-300 ${
                        activeSection === link.href.substring(1)
                          ? "text-[#ab4e4f]"
                          : ""
                      }`}
                    >
                      {link.name}
                    </button>
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
