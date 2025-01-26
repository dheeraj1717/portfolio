import { HiMail } from "react-icons/hi";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";

export const Socials = () => {
  return (
    <div className="flex flex-col fixed top-[40%] right-[24px]">
      <ul className="text-2xl gap-4 flex flex-col">
        <li className="cursor-pointer transition-transform hover:scale-125">
          <BiLogoGithub />
        </li>
        <li className="cursor-pointer transition-transform hover:scale-125">
          <BiLogoLinkedin />
        </li>
        <li className="cursor-pointer transition-transform hover:scale-125">
          <HiMail />
        </li>
        <li className="cursor-pointer transition-transform hover:scale-125">
          <SiLeetcode />
        </li>
      </ul>
    </div>
  );
};
