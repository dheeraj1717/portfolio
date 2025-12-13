"use client";

// import { BackgroundBeams } from "@/app/ui/background-beams"; // Not used anymore
import { Spotlight } from "../ui/Background";
// import { TextRevealCard } from "../ui/text-reveal-card";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative w-full overflow-hidden pb-5 sm:pb-20 py-20 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center px-4">
          <div className="inline-block mb-4 px-3 py-1 rounded-full border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm">
             <span className="text-neutral-300 text-sm font-medium tracking-wide">Available for new projects</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-500 tracking-tight mb-6 pb-2">
            Dheeraj Jangid
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-medium mb-8 max-w-2xl text-blue-500">
            Full Stack Developer
          </h2>

          <p className="text-neutral-500 text-base md:text-lg leading-relaxed max-w-xl mb-10">
              Transforming conceptual ideas into high-performance, visually stunning digital realities. 
              Specializing in Next.js, React, and modern web architectures.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
             <a href="#projects" className="px-8 py-3.5 rounded-full bg-white text-black font-bold hover:bg-neutral-200 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
               View Works
             </a>
             <a href="#contact" className="px-8 py-3.5 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-sm">
               Contact Me
             </a>
          </div>
      </div>
    </div>
  );
};
