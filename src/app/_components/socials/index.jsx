
import { HiMail } from "react-icons/hi";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";
import { AnimatedTooltip } from "@/app/ui/animated-tooltip";

export const Socials = () => {
  const socialLinks = [
    { id: 1, name: "GitHub", icon: <BiLogoGithub />, link: "https://github.com/dheeraj1717" },
    { id: 2, name: "LinkedIn", icon: <BiLogoLinkedin />, link: "https://www.linkedin.com/in/dheerajjangid1717/" },
    { id: 3, name: "Email", icon: <HiMail />, link: "mailto:dheerajjangid1717@gmail.com" },
    { id: 4, name: "LeetCode", icon: <SiLeetcode />, link: "https://leetcode.com/u/Dheeraj_Jangid/" },
  ];

  return (
    <div className="flex flex-col fixed top-[40%] right-[10px] sm:right-[24px] space-y-4">
      <AnimatedTooltip items={socialLinks} />
    </div>
  );
};