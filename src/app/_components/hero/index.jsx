import { BackgroundBeams } from "@/app/ui/background-beams";
import Image from "next/image";

export const Hero = () => {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-14 sm:px-16  md:px-32 gap-16 min-h-[70vh]">
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
      <div className="md:w-1/2 relative">
        {/* Background Image */}
        <Image
          src="/graybg.png"
          width={400}
          height={400}
          alt="hero image"
          className="absolute top-10 md:top-14 left-10 md:left-16 z-0 w-[320px] h-[320px] md:w-[400px] md:h-[400px]"
        />

        {/* Profile Image */}
        <Image
          src="/Mypic.jpeg"
          width={400}
          height={400}
          alt="hero image"
          className="relative z-10 w-[320px] h-[300px] md:w-[400px] md:h-[400px]"
        />
      </div>

      <BackgroundBeams />
    </div>
  );
};
