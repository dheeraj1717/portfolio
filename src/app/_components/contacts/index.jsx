"use client";
import React from "react";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
// import { BackgroundBeamsWithCollision } from "@/app/ui/background-beams-with-collision";

export const Contact = () => {
  return (
    <div className="min-h-[50vh] flex flex-col justify-center items-center relative py-20">
      <div className="glass-panel p-10 rounded-3xl text-center max-w-[600px] mx-4 relative z-10 hover:bg-white/5 transition-colors duration-500">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">Get In Touch</h1>
        <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
          Feel free to reach out if you want to build something together, have a
          question, or just want to connect.
        </p>

        {/* Email Link */}
        <a
          href="mailto:dheerajjangid1717@gmail.com"
          className="text-2xl font-medium text-white hover:text-blue-400 transition-colors duration-300 border-b-2 border-blue-500/50 hover:border-blue-400 pb-1"
        >
          dheerajjangid1717@gmail.com
        </a>

        <div className="flex gap-6 justify-center mt-10">
          <a
            href="https://github.com/dheeraj1717"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-white hover:scale-110 transition-all duration-300"
          >
            <BiLogoGithub size={32} />
          </a>
          <a
            href="https://linkedin.com/in/dheerajjangid1717"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-white hover:scale-110 transition-all duration-300"
          >
            <BiLogoLinkedin size={32} />
          </a>
        </div>
      </div>
      
      <p className="text-sm text-neutral-500 mt-20">
        Handcrafted by me © 2025
      </p>
    </div>
  );
};
