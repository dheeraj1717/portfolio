"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BiLogoGithub } from "react-icons/bi";
import { FaTowerBroadcast } from "react-icons/fa6";
import projectsData from "./projectsData.json";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { motion } from "motion/react";

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto py-10 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-5xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
      >
        Projects
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-8 mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CardContainer
              className="inter-var border border-white/5 hover:border-blue-500/50 transition-all duration-300 p-6 rounded-xl bg-transparent"
            >
              <CardBody className="bg-black/40 backdrop-blur-sm border border-white/10 relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] w-auto sm:w-[26rem] h-auto rounded-xl p-6">
                <div className="w-full h-full flex flex-col">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-400 text-sm max-w-sm mt-2"
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
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white text-xs font-bold hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 transform hover:scale-105 active:scale-95 group/btn"
                    >
                      <div className="flex items-center gap-2">
                        <FaTowerBroadcast className="group-hover/btn:animate-pulse" />
                        Try now
                        <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">
                          →
                        </span>
                      </div>
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={project.github}
                      target="__blank"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold hover:opacity-80 transition-all duration-300 transform hover:scale-105 active:scale-95"
                    >
                      <div className="flex items-center gap-2">
                        <BiLogoGithub /> GitHub
                      </div>
                    </CardItem>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
