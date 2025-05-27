import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { LightbulbIcon } from "lucide-react";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";

const SkillPage = () => {
  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1">
        <LightbulbIcon className="w-4 h-4" />
        My Skills
      </Badge>

      <div className="flex flex-col gap-3">
        <Heading>My Technical Experience/Skills.</Heading>

        <FramerWrapper y={0} x={200}>
          <p className="font-poppins text-lg w-full text-primary max-sm:text-md">
            I am currently a fresher with a strong understanding of HTML5, CSS3, JavaScript, TypeScript, and React, along with responsive design principles. I specialize in building web applications using JavaScript, TypeScript, React, Next.js, and Node.js.
          </p>
        </FramerWrapper>

        <FramerWrapper y={100} delay={0.3} className="block w-full">
          <section>
            <h1 className="flex items-center gap-2 text-xl font-poppins text-primary font-semibold text_underline relative max-sm:text-lg mb-4">
              Programming Languages
            </h1>
            <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
              <SkillsFooter items={portfolioConfig.skills.programmingLanguages} />
            </div>
          </section>
        </FramerWrapper>

        <FramerWrapper className="block w-full" y={100} delay={0.32}>
          <section>
            <h1 className="flex items-center gap-2 text-xl font-poppins text-primary font-semibold text_underline relative max-sm:text-lg mb-4">
              Frameworks & Libraries
            </h1>
            <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
              <SkillsFooter items={portfolioConfig.skills.frameworks} />
            </div>
          </section>
        </FramerWrapper>

        <FramerWrapper className="block w-full" y={100} delay={0.34}>
          <section>
            <h1 className="flex items-center gap-2 text-xl font-poppins text-primary font-semibold text_underline relative max-sm:text-lg mb-4">
              Tools & Technologies
            </h1>
            <div className="w-full grid grid-cols-7 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
              <SkillsFooter items={portfolioConfig.skills.tools} />
            </div>
          </section>
        </FramerWrapper>
      </div>
    </div>
  );
};

export default SkillPage;
