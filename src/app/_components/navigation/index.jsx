"use client"
import { useEffect, useState } from "react";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("profile");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "-10% 0px -40% 0px", // Detect when section is in upper-middle part of screen
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
  };

  return (
    <ul className="fixed top-1/2 transform -translate-y-1/2 space-y-6 left-[20px] z-50 hidden md:block">
      {["profile", "skills", "experience", "projects", "contact"].map((section) => (
        <li
          key={section}
          className="cursor-pointer group flex items-center gap-4"
          onClick={() => handleNavigation(section)}
        >
          <span
            className={`block transition-all duration-500 rounded-full ${
              activeSection === section
                ? "w-1 h-8 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" 
                : "w-1 h-4 bg-neutral-600 group-hover:bg-neutral-400 group-hover:h-6" 
            } `} 
          />
        </li>
      ))}
    </ul>
  );
};
