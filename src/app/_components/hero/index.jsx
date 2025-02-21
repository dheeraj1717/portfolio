"use client";

import { BackgroundBeams } from "@/app/ui/background-beams";
import { useState, useEffect } from "react";
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiGithub,
} from "react-icons/si";

export const Hero = () => {
  const words = [
    { name: "React", icon: <SiReact /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "GitHub", icon: <SiGithub /> },
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[currentWordIndex].name;

    const typingSpeed = isDeleting ? 50 : 100;
    const nextStepDelay = isDeleting ? 50 : 150;
    const waitBeforeDelete = 1000;

    const typeEffect = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), waitBeforeDelete);
        }
      } else {
        setDisplayedText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? nextStepDelay : typingSpeed);

    return () => clearTimeout(typeEffect);
  }, [charIndex, isDeleting, currentWordIndex]);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-14 sm:px-16 md:px-32 gap-16 min-h-[70vh]">
      <div className="md:w-1/2 flex justify-end items-end flex-col">
        <div className="max-w-[450px] z-10">
          <h1 className="text-[24px] font-bold leading-7">
            Hello, <br /> My name is Dheeraj
          </h1>
          <div className="leading-6 tracking-wide mt-5 text-[#fff9] text-[14px] sm:text-[16px] flex flex-col gap-2">
            <p>
              I’m a MERN Stack Developer passionate about creating dynamic,
              high-performance web applications. With expertise in React.js,
              Node.js, Express.js, and MongoDB, I specialize in building
              seamless, user-friendly digital experiences.
            </p>
            <p>
              I thrive on solving complex challenges and turning ideas into
              reality through clean, efficient code. Whether it’s frontend
              finesse or backend logic, I love crafting solutions that make an
              impact.
            </p>
          </div>
        </div>
      </div>

      {/* Typewriter Effect Section with Icons */}
      <div className="md:w-1/2 flex justify-center items-center text-6xl font-medium text-blue-500 gap-4">
        {words[currentWordIndex].icon}
        {displayedText}
        <span className="blinking-cursor">|</span>
      </div>

      <BackgroundBeams />
    </div>
  );
};
