import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

const EducationPage = () => {
  return (
    <section className="h-full w-full relative flex flex-col items-start gap-6 overflow-hidden px-4 max-w-5xl mx-auto">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Briefcase className="h-4 w-4" aria-hidden="true" />
        Education
      </Badge>

      <div className="flex flex-col gap-4 w-full">
        <Heading>My Education</Heading>

        <div className="w-full flex flex-col ">
          {portfolioConfig.education.map((edu, index) => (
            <article
              key={index}
              className="flex flex-col sm:flex-row w-full"
              aria-label={`Education period: ${edu.period}`}
            >
              <FramerWrapper
                y={0}
                x={-100}
                delay={0.35 + index * 0.1}
                className="sm:w-1/4 font-rubik flex items-center justify-start sm:justify-center text-lg max-sm:text-base text-muted-foreground dark:text-muted-foreground-dark"
              >
                <time dateTime={edu.period.replace(/\s/g, "")}>{edu.period}</time>
              </FramerWrapper>

              <FramerWrapper
                y={0}
                x={100}
                delay={0.35 + index * 0.1}
                className="relative sm:w-3/4 border-l-4 border-l-gray-700 dark:border-l-gray-400 p-4 gap-3 education_point"
              >
                <h3 className="text-2xl font-rubik max-sm:text-xl font-semibold text-primary dark:text-primary-light">
                  {edu.degree}, <br /> {edu.institution}
                </h3>
                <p className="font-poppins text-base max-sm:text-sm text-primary dark:text-primary-light mt-2">
                  {edu.description}
                </p>
              </FramerWrapper>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationPage;
