import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

const EducationPage = () => {
  return (
    <div className="h-full w-full py-8 md:py-12 flex flex-col items-center justify-center p-4">
      <FramerWrapper
        className="w-full max-w-6xl backdrop-blur-xl bg-white/30 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl flex flex-col gap-10"
        y={0}
        scale={1}
      >
        <div className="flex flex-col items-start gap-5">
          <Badge variant="outline" className="gap-1.5 py-1.5 px-4 rounded-full border-primary/20 bg-primary/5">
            <Briefcase className="h-4 w-4" aria-hidden="true" />
            Professional Journey
          </Badge>

          <div className="flex flex-col gap-3">
            <Heading>Work Experience</Heading>
            <p className="font-poppins text-lg md:text-xl text-foreground/70 max-w-3xl leading-relaxed">
              My career path has been driven by a passion for creating impactful digital solutions.
              Here is a timeline of the roles and companies that have shaped my expertise.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full">
          {portfolioConfig.experience.map((exp, index) => (
            <FramerWrapper
              key={index}
              y={50}
              delay={0.2 + index * 0.1}
              className="group relative"
            >
              <div className="flex flex-col md:flex-row gap-6 p-6 rounded-[2rem] bg-white/20 dark:bg-black/20 border border-white/10 hover:bg-white/40 dark:hover:bg-black/40 transition-all duration-500 shadow-sm hover:shadow-xl">
                {/* Period - iOS Date Style */}
                <div className="md:w-1/4 flex flex-col justify-center">
                  <div className="px-4 py-2 rounded-full bg-primary/10 text-primary font-rubik text-sm w-fit">
                    {exp.period}
                  </div>
                </div>

                {/* Details */}
                <div className="md:w-3/4 space-y-3">
                  <h3 className="text-2xl font-rubik font-bold text-primary group-hover:tracking-tight transition-all duration-300">
                    {exp.role} <span className="text-primary/40 mx-2">@</span> {exp.company}
                  </h3>
                  <p className="font-poppins text-base text-foreground/70 leading-relaxed font-light">
                    {exp.description}
                  </p>
                </div>
              </div>
            </FramerWrapper>
          ))}
        </div>
      </FramerWrapper>
    </div>
  );
};

export default EducationPage;
