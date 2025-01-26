"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BiLogoGithub } from "react-icons/bi";
import { FaTowerBroadcast } from "react-icons/fa6";
import projectsData from "./projectsData.json";

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto">
      <h1 className="text-center text-4xl font-bold mb-14">Projects</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col gap-4 w-[380px] h-[440px] rounded-md shadow-lg relative"
          >
            {/* Image Section */}
            <div className="relative w-full h-[250px] overflow-hidden rounded-md group">
              <Image
                src={project.image}
                fill
                alt={project.title}
                className="object-cover rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-sm text-white border border-white px-2 py-1 rounded-full hover:text-black hover:bg-white transition-colors duration-300 cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {/* Project Info */}
           <div className="flex flex-col gap-3 px-2">
           <h2 className="text-xl font-bold">{project.title}</h2>
            <p className="text-sm flex-1">{project.description}</p>
           
            </div>
             {/* Action Buttons */}
             <div className="flex gap-4 text-sm absolute bottom-4 px-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-2 hover:bg-gray-200 transition"
              >
                <BiLogoGithub size={20} /> GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-2 hover:bg-gray-200 transition"
              >
                <FaTowerBroadcast size={20} /> Live Demo
              </a>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};
