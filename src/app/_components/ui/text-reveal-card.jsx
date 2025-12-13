"use client";
import React, { useEffect, useRef, useState } from "react"; 
import { motion, useScroll, useTransform } from "motion/react"; 
import { cn } from "@/app/utils/cn"; 

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}) => {
  const [width, setWidth] = useState(0); 
  const cardRef = useRef(null); 

  function mouseMoveHandler(event) {
    const { left, width } = cardRef.current.getBoundingClientRect();
    const relativeX = event.clientX - left;
    setWidth(relativeX);
  }

  function mouseLeaveHandler() {
    setWidth(0);
  }
  function mouseEnterHandler() {
    setWidth(width);
  }

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      ref={cardRef}
      className={cn(
        "bg-[#1d1c20] border border-white/[0.08] w-[40rem] rounded-lg p-8 relative overflow-hidden",
        className
      )}
    >
      {children}

      <div className="h-40  relative flex items-center overflow-hidden">
        <motion.div
            style={{
                width: "100%",
            }}
          className="absolute bg-[#1d1c20] z-20  will-change-transform"
        >
          <p
            className="text-base sm:text-[3rem] py-10 font-bold bg-clip-text text-transparent bg-[#323238]"
          >
            {text}
          </p>
        </motion.div>
        <motion.div
          animate={{
            left: width + "px",
          }}
          className="absolute bg-transparent z-50 h-full will-change-transform" // changed z-index
        >
             {/* Simple cursor line */}
             <div className="bg-gradient-to-b from-transparent via-neutral-200 to-transparent w-[1px] h-full absolute" />
        </motion.div>
        <div className=" overflow-hidden"> 
          <p
            className="text-base sm:text-[3rem] py-10 font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300"
          >
           {revealText}
          </p>
        </div>
      </div>
    </div>
  );
};
