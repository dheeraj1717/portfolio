import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
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
    <div className="mx-auto py-10 px-4 max-w-[1200px] 2xl:my-20">
      <h1 className="text-center text-4xl font-bold mb-10">Experience</h1>

      {/* Central Vertical Line */}
      <div className="relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full border-r-2 border-gray-300"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative mb-10 flex ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            } items-start`}
          >
            {/* Circle icon */}
            <div className="w-6 h-6 bg-primary-500 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white">
              <Briefcase size={24} />
            </div>

            {/* Experience Card */}
            <div
              className={`bg-[#26292a] p-6 rounded-lg w-5/12 ${
                index % 2 === 0 ? "ml-2" : "mr-2"
              }`}
            >
              <h2 className="text-[#b84042] text-xl font-semibold ">
                {exp.company}
              </h2>
              <h3 className="flex items-center gap-2 font-medium mt-2">
                <Briefcase size={18} className="" /> {exp.role}
              </h3>
              <p className="flex items-center gap-2 mt-1">
                <Calendar size={18} /> {exp.date}
              </p>
              <ul className="mt-3 list-disc ml-5 space-y-1">
                {exp.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
