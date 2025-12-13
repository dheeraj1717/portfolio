"use client";
import React from "react";
// import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
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
  SiTailwindcss,
  SiTypescript,
  SiDocker,
  SiFigma,
  SiPostgresql
} from "react-icons/si";

export const Skills = () => {
    const skills = [
        { name: "React", icon: <SiReact className="text-blue-400"/> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white"/> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600"/> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500"/> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400"/> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600"/> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600"/> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400"/> },
        { name: "HTML5", icon: <SiHtml5 className="text-orange-500"/> },
        { name: "CSS3", icon: <SiCss3 className="text-blue-500"/> },
        { name: "MySQL", icon: <SiMysql className="text-blue-300"/> },
        { name: "GitHub", icon: <SiGithub className="text-white"/> },
    ];

  return (
    <div className="py-5 max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, idx) => (
                <div 
                    key={idx}
                    className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-blue-500/50 hover:bg-neutral-800/80 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300 group cursor-default"
                >
                    <div className="text-4xl group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300 drop-shadow-lg">
                        {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">
                        {skill.name}
                    </span>
                </div>
            ))}
        </div>
    </div>
  );
};
