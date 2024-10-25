import { MailIcon } from "lucide-react";
import { HiMail } from "react-icons/hi";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";

export const Socials = () => {
  return (
    <div className="flex flex-col fixed top-1/2 right-[24px]">
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
      </ul>
    </div>
  );
};
