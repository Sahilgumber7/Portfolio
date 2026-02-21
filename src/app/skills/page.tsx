import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { LightbulbIcon } from "lucide-react";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";

const SkillPage = () => {
  return (
    <div className="h-full w-full py-8 md:py-12 flex flex-col items-center justify-center p-4">
      <FramerWrapper
        className="w-full max-w-6xl backdrop-blur-xl bg-white/30 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl flex flex-col gap-10"
        y={0}
        scale={0.95}
      >
        <div className="flex flex-col items-start gap-5">
          <Badge variant="outline" className="gap-1.5 py-1.5 px-4 rounded-full border-primary/20 bg-primary/5">
            <LightbulbIcon className="w-4 h-4" />
            Technical Stack
          </Badge>

          <div className="flex flex-col gap-3">
            <Heading>Skills & Technologies</Heading>
            <p className="font-poppins text-lg md:text-xl text-foreground/70 max-w-3xl leading-relaxed">
              I specialize in building high-performance web applications using modern frameworks.
              My expertise covers the entire development lifecycle, from frontend polish to backend robustness.
            </p>
          </div>
        </div>

        <div className="grid gap-12">
          {/* Programming Languages */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              <h2 className="text-sm uppercase tracking-[0.2em] font-bold text-primary/60 italic">Programming Languages</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
              <SkillsFooter items={portfolioConfig.skills.programmingLanguages} />
            </div>
          </section>

          {/* Frameworks */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              <h2 className="text-sm uppercase tracking-[0.2em] font-bold text-primary/60 italic">Frameworks & Libraries</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
              <SkillsFooter items={portfolioConfig.skills.frameworks} />
            </div>
          </section>

          {/* Tools */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              <h2 className="text-sm uppercase tracking-[0.2em] font-bold text-primary/60 italic">Tools & Ecosystem</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
              <SkillsFooter items={portfolioConfig.skills.tools} />
            </div>
          </section>
        </div>
      </FramerWrapper>
    </div>
  );
};

export default SkillPage;
