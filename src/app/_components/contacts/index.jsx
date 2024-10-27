import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";

export const Contact = () => {
    return (
      <div className="px-20">
        <h1 className="text-3xl font-bold mt-14 mb-2">Contact!</h1>
        <p className="text-[#9b9c9d] max-w-[400px]">
          Feel free to reach out if you want to build something together, have a question, or just want to connect.
        </p>
        
        {/* Email Link */}
        <a
          href="mailto:dheerajjangid1717@gmail.com"
          className="underline mt-4 inline-block"
          style={{
            textDecorationThickness: '1.5px', 
            textUnderlineOffset: '4px',
          }}
        >
          dheerajjangid1717@gmail.com
        </a>
        <div className="flex gap-3 mt-4">
            <a href=""><BiLogoGithub size={24}/></a>
            <a href=""><BiLogoLinkedin size={24}/></a>
        </div>

        <p className="text-[14px] w-full text-center mb-4 mt-[400px]">Handcrafted by me © 2024.

</p>
      </div>
    );
  };
  