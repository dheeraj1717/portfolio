"use client";
import React, { useRef } from "react";
import { Spotlight } from "../ui/Background";
import { motion, useScroll, useTransform } from "motion/react";

export const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <div ref={targetRef} className="flex flex-col items-center justify-center min-h-screen relative w-full overflow-hidden pb-5 sm:pb-20 py-20 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center px-4"
      >
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-500 tracking-tight mb-6 pb-2"
          >
            Dheeraj Jangid
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl font-medium mb-8 max-w-2xl text-blue-500"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-neutral-500 text-base md:text-lg leading-relaxed max-w-xl mb-10"
          >
              Transforming conceptual ideas into high-performance, visually stunning digital realities. 
              Specializing in Next.js, React, and modern web architectures.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5"
          >
             <a href="#projects" className="px-8 py-3.5 rounded-full bg-white text-black font-bold hover:bg-neutral-200 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
               View Works
             </a>
             <a href="#contact" className="px-8 py-3.5 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-sm">
               Contact Me
             </a>
          </motion.div>
      </motion.div>
    </div>
  );
};
