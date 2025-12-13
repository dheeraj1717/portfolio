import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      company: "The Thinktech",
      role: "Associate Software Developer",
      date: "June 2025 - Present",
      details: [
        "Contributing to the development of two large-scale multilingual platforms – a Learning Management System (LMS) and an Insurance CRM supporting multiple insurance products, designed for 20,000+ insurance agents.",
        "Building responsive and scalable frontend applications using React, Vite, TypeScript, and Tailwind CSS.",
        "Ensuring application quality through manual testing and automated unit/integration tests with Jest and React Testing Library.",
        "Involved in requirement gathering and clarifying product needs.",
        "Preparing training documents and onboarding materials for internal teams.",
      ],
    },
    {
      company: "Virtust Technologies",
      role: "Front End Developer",
      date: "July 2024 - Sept 2024",
      details: [
        "Developed a DEX interface with React.js and Tailwind CSS, integrated with the Polygon blockchain for transaction handling.",
        "Implemented wallet connections, token swaps, and real-time transaction monitoring.",
        "Built a CRM with multi-step forms, external API integration, and user management.",
        "Created a multi-page Next.js app, optimized for performance and SEO.",
      ],
    },
    {
      company: "Veritus.ai",
      role: "Front End Developer Intern",
      date: "Dec 2023 - Mar 2024",
      details: [
        "Developed UI components in React.js and Tailwind CSS for a complete interface redesign.",
        "Utilized Recoil for efficient state management.",
        "Refactored codebase for improved maintainability.",
        "Collaborated with design team to implement UI/UX designs accurately.",
      ],
    },
  ];

  return (
    <div className="mx-auto py-5 sm:py-20 px-4 max-w-[1200px] mt-12 lg:mt-0">
      <h1 className="text-center text-4xl sm:text-5xl font-bold mb-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Experience
      </h1>

      {/* Central Vertical Line */}
      <div className="relative">
        <div className="absolute top-0 left-8 sm:left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute top-0 left-8 sm:left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-blue-400 blur-sm"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative mb-16 flex ${
              index % 2 === 0 ? "sm:flex-row-reverse" : "flex-row"
            } items-center`}
          >
            {/* Circle icon */}
            <div className="w-10 h-10 rounded-full absolute left-8 sm:left-1/2 transform -translate-x-1/2 bg-black border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)] flex items-center justify-center text-blue-400 z-10">
              <Briefcase size={20} />
            </div>

            {/* Experience Card */}
            <div
              className={`glass-panel p-4 sm:p-8 rounded-2xl w-[85%] ml-20 sm:ml-0 sm:w-5/12 border-white/5 hover:border-blue-500/30 transition-all duration-300 group hover:bg-white/5 ${
                index % 2 === 0 ? "sm:ml-16" : "sm:mr-16"
              }`}
            >
              <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {exp.company}
              </h2>
              <div className="flex flex-wrap gap-4 items-center mt-2 text-sm text-neutral-400">
                <h3 className="flex items-center gap-1.5 font-medium">
                  <Briefcase size={14} /> {exp.role}
                </h3>
                <span className="hidden sm:block w-1 h-1 rounded-full bg-neutral-600"></span>
                <p className="flex items-center gap-1.5">
                  <Calendar size={14} /> {exp.date}
                </p>
              </div>

              <ul className="mt-6 space-y-3">
                {exp.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="text-neutral-300 text-sm leading-relaxed flex gap-3"
                  >
                    <span className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-blue-500/50"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
