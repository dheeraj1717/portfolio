import { BackgroundBeams } from "@/app/ui/background-beams";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="flex justify-center items-center px-32 gap-16 min-h-[70vh]">
      <div className="w-1/2 flex justify-end items-end flex-col">
        <div className="max-w-[450px] ">
          <h1 className="text-[24px] font-bold leading-7">
            Hello, <br /> My name is Dheeraj
          </h1>
          <div className="leading-6 tracking-wide mt-5 text-[#fff9] text-[16px] flex flex-col gap-2">
            <p>
              I'm currently a software engineer at Microsoft. My areas of
              interest include problem-solving, cloud infrastructure, machine
              learning, and IoT.
            </p>
            <p>
              With a detail-oriented focus, I enjoy creating simple but
              effective solutions to improve application performance, ease of
              maintenance, and user experience.
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 relative">
        <div className="absolute h-[390px] w-[390px] bg-[#26292a] top-0 left-0 translate-x-24 translate-y-24 z-0"></div>
        <Image
          src="/Mypic.jpeg"
          width={400}
          height={400}
          alt="hero image"
          className="relative z-10"
        />
      </div>
      <BackgroundBeams/>
    </div>
  );
};
