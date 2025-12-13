"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BiLogoGithub } from "react-icons/bi";
import { FaTowerBroadcast } from "react-icons/fa6";
import projectsData from "./projectsData.json";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto py-10 px-4">
      <h1 className="text-center text-5xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Projects
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-8 mx-auto">
        {projects.map((project) => (
          <CardContainer
            key={project.id}
            className="inter-var border border-white/10 hover:border-blue-500/70 transition-all duration-300 p-6 rounded-xl"
          >
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black w-auto sm:w-[26rem] h-auto">
              <div className="w-full h-full flex flex-col">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {project.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {project.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={project.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={project.title}
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={project.demo}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    <div className="flex items-center gap-2">
                      <FaTowerBroadcast /> Try now →
                    </div>
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={project.github}
                    target="__blank"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    <div className="flex items-center gap-2">
                      <BiLogoGithub /> GitHub
                    </div>
                  </CardItem>
                </div>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};
