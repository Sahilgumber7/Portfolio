import { Circle, Dna, Globe2, Languages } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

const Aboutfooter = () => {
  const items = [
    {
      name: "Language",
      answer: portfolioConfig.about.personalInfo.language,
      icon: <Languages className="h-6 w-6 text-primary" />,
    },
    {
      name: "Nationality",
      answer: portfolioConfig.about.personalInfo.nationality,
      icon: <Globe2 className="h-6 w-6 text-primary" />,
    },
    {
      name: "Gender",
      answer: portfolioConfig.about.personalInfo.gender,
      icon: <Dna className="h-6 w-6 text-primary" />,
    },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {items.map((val, indx) => (
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-white/30 dark:bg-black/30 border border-white/20 dark:border-white/10 shadow-sm"
          key={indx}
        >
          <div className="text-primary">
            {val.icon}
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest font-bold opacity-50 leading-none mb-1">{val.name}</span>
            <span className="text-sm font-medium leading-none">{val.answer}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Aboutfooter;
