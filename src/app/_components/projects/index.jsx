import Image from "next/image";
import { BiLogoGithub } from "react-icons/bi";
import { FaTowerBroadcast } from "react-icons/fa6";

export const Projects = () => {
  const technologies = [
    "Next.js",
    "React",
    "Prisma",
    "Tailwind",
    "MongoDB",
    "Node.js",
    "Express.js",
  ];
  
  return (
    <div className="max-w-[1200px] mx-auto">
      <h1 className="text-center text-4xl font-bold mb-14">Projects</h1>
      <div className="grid grid-cols-3 gap-x-6 gap-y-12">
        <div className="flex flex-col gap-2 max-w-[400px]">
          <div className="relative max-w-[400px] max-h-[300px] overflow-hidden group">
            <Image
              src="/boxby3.jpg"
              height={400}
              width={400}
              alt="project"
              className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            {/* Overlay container */}
            <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 -my-1">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-sm text-white border border-white px-2 py-1 rounded-full hover:text-black hover:bg-white transition-colors duration-300 cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <h2 className="text-xl font-bold">Streamerr</h2>
          <p>
            A platform supporting live video streaming using NextJs, React,
            Prisma, Tailwind, and MongoDB.
          </p>
          <div className="flex gap-6 text-sm mt-3">
            <a
              href="https://github.com/dheerajkumar/Streamerr"
              target="_blank"
              className="flex items-center gap-1 border rounded-full px-3 py-2"
            >
              <BiLogoGithub size={20}/> GitHub
            </a>
            <a
              href="https://github.com/dheerajkumar/Streamerr"
              target="_blank"
              className="flex items-center gap-1 border rounded-full px-3 py-2"
            >
              <FaTowerBroadcast size={20}/> Live Demo
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 max-w-[400px]">
          <div className="relative max-w-[400px] max-h-[300px] overflow-hidden group">
            <Image
              src="/boxby3.jpg"
              height={400}
              width={400}
              alt="project"
              className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            {/* Overlay container */}
            <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 -my-1">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-sm text-white border border-white px-2 py-1 rounded-full hover:text-black hover:bg-white transition-colors duration-300 cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <h2 className="text-xl font-bold">Streamerr</h2>
          <p>
            A platform supporting live video streaming using NextJs, React,
            Prisma, Tailwind, and MongoDB.
          </p>
          <div className="flex gap-6 text-sm mt-3">
            <a
              href="https://github.com/dheerajkumar/Streamerr"
              target="_blank"
              className="flex items-center gap-1 border rounded-full px-3 py-2"
            >
              <BiLogoGithub size={20}/> GitHub
            </a>
            <a
              href="https://github.com/dheerajkumar/Streamerr"
              target="_blank"
              className="flex items-center gap-1 border rounded-full px-3 py-2"
            >
              <FaTowerBroadcast size={20}/> Live Demo
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 max-w-[400px]">
          <div className="relative max-w-[400px] max-h-[300px] overflow-hidden group">
            <Image
              src="/boxby3.jpg"
              height={400}
              width={400}
              alt="project"
              className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            {/* Overlay container */}
            <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 -my-1">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-sm text-white border border-white px-2 py-1 rounded-full hover:text-black hover:bg-white transition-colors duration-300 cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <h2 className="text-xl font-bold">Streamerr</h2>
          <p>
            A platform supporting live video streaming using NextJs, React,
            Prisma, Tailwind, and MongoDB.
          </p>
          <div className="flex gap-6 text-sm mt-3">
            <a
              href="https://github.com/dheerajkumar/Streamerr"
              target="_blank"
              className="flex items-center gap-1 border rounded-full px-3 py-2"
            >
              <BiLogoGithub size={20}/> GitHub
            </a>
            <a
              href="https://github.com/dheerajkumar/Streamerr"
              target="_blank"
              className="flex items-center gap-1 border rounded-full px-3 py-2"
            >
              <FaTowerBroadcast size={20}/> Live Demo
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 max-w-[400px]">
          <div className="relative max-w-[400px] max-h-[300px] overflow-hidden group">
            <Image
              src="/boxby3.jpg"
              height={400}
              width={400}
              alt="project"
              className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            {/* Overlay container */}
            <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 -my-1">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-sm text-white border border-white px-2 py-1 rounded-full hover:text-black hover:bg-white transition-colors duration-300 cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <h2 className="text-xl font-bold">Streamerr</h2>
          <p>
            A platform supporting live video streaming using NextJs, React,
            Prisma, Tailwind, and MongoDB.
          </p>
          <div className="flex gap-6 text-sm mt-3">
            <a
              href="https://github.com/dheerajkumar/Streamerr"
              target="_blank"
              className="flex items-center gap-1 border rounded-full px-3 py-2"
            >
              <BiLogoGithub size={20}/> GitHub
            </a>
            <a
              href="https://github.com/dheerajkumar/Streamerr"
              target="_blank"
              className="flex items-center gap-1 border rounded-full px-3 py-2"
            >
              <FaTowerBroadcast size={20}/> Live Demo
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 max-w-[400px]">
          <div className="relative max-w-[400px] max-h-[300px] overflow-hidden group">
            <Image
              src="/boxby3.jpg"
              height={400}
              width={400}
              alt="project"
              className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            {/* Overlay container */}
            <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 -my-1">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-sm text-white border border-white px-2 py-1 rounded-full hover:text-black hover:bg-white transition-colors duration-300 cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <h2 className="text-xl font-bold">Streamerr</h2>
          <p>
            A platform supporting live video streaming using NextJs, React,
            Prisma, Tailwind, and MongoDB.
          </p>
          <div className="flex gap-6 text-sm mt-3">
            <a
              href="https://github.com/dheerajkumar/Streamerr"
              target="_blank"
              className="flex items-center gap-1 border rounded-full px-3 py-2"
            >
              <BiLogoGithub size={20}/> GitHub
            </a>
            <a
              href="https://github.com/dheerajkumar/Streamerr"
              target="_blank"
              className="flex items-center gap-1 border rounded-full px-3 py-2"
            >
              <FaTowerBroadcast size={20}/> Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
