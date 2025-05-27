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
    <div className="flex flex-col gap-4">
      {items.map((val, indx) => (
        <div className="flex items-start gap-3" key={indx}>
          {val.icon}
          <div>
            <h2 className="text-lg font-semibold text-primary">{val.name}</h2>
            <div className="flex items-center gap-2 text-sm text-primary">
              <Circle className="h-2 w-2" />
              {val.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Aboutfooter;
