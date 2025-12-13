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
      rootMargin: "-10% 0px -40% 0px",
      threshold: 0.1,
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
    <div className="fixed top-6 left-0 right-0 z-[5000] flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto h-16 md:h-14 flex items-center justify-between gap-4 px-6 md:px-8 glass-panel rounded-full shadow-2xl shadow-indigo-500/10">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavigation('profile')}>
          <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-400">DJ</p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.navbarLinks.map((link, index) => (
            <li key={index} className="relative">
              <button
                onClick={() => handleNavigation(link.href.substring(1))}
                className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? "bg-white/10 text-white shadow-inner"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="block md:hidden p-2 text-neutral-300 hover:text-white transition-colors">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        
        {/* Mobile Dropdown */}
        {isOpen && (
           <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] glass-panel rounded-2xl p-4 flex flex-col gap-2 md:hidden">
              {navLinks.navbarLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(link.href.substring(1))}
                  className={`text-sm font-medium px-4 py-3 rounded-xl transition-all duration-300 text-left ${
                    activeSection === link.href.substring(1)
                      ? "bg-white/10 text-white"
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </button>
              ))}
           </div>
        )}
      </nav>
    </div>
  );
};
