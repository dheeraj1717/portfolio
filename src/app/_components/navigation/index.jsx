"use client"
import { useEffect, useState } from "react";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("profile");

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
  };

  return (
    <ul className="fixed top-1/2 transform -translate-y-1/2 space-y-4 left-[20px]">
      {["profile", "experience", "projects", "contact"].map((section) => (
        <li
          key={section}
          className="cursor-pointer"
          onClick={() => handleNavigation(section)}
        >
          <span
            className={`block transition-all duration-300 ${
              activeSection === section
                ? "w-10 h-[2px] bg-white" 
                : "w-6 hover:w-8 h-[2px] bg-gray-400 opacity-50" 
            } `} 
          />
        </li>
      ))}
    </ul>
  );
};
