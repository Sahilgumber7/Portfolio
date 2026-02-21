import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { User2 } from "lucide-react";
import HeroImage from "@/components/HeroImage";
import { portfolioConfig } from "@/config/portfolio.config";

const AboutPage = () => {
  return (
    <div className="h-full w-full py-8 md:py-12 flex flex-col items-center justify-center p-4">
      <FramerWrapper
        y={0}
        scale={1}
        className="w-full max-w-6xl backdrop-blur-xl bg-white/30 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl flex flex-col md:flex-row gap-12 items-start"
      >
        {/* Left Column - Text Content */}
        <div className="w-full md:w-3/5 flex flex-col items-start gap-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-xl">
              <User2 className="h-6 w-6 text-primary" />
            </div>
            <Badge variant="outline" className="text-sm font-medium px-4 py-1.5 rounded-full border-primary/20 bg-primary/5">
              About Me
            </Badge>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="font-rubik text-4xl md:text-5xl text-primary tracking-tight leading-tight uppercase font-bold">
              {portfolioConfig.title2} & Web Developer, Based In {portfolioConfig.about.personalInfo.nationality}.
            </h2>

            <p className="font-poppins text-lg md:text-xl text-foreground/70 leading-relaxed font-light">
              {portfolioConfig.about.bio}
            </p>
          </div>

          <FramerWrapper
            className="w-full pt-4"
            y={30}
            delay={0.5}
          >
            <div className="p-6 bg-white/20 dark:bg-black/20 rounded-[2rem] border border-white/10">
              <Aboutfooter />
            </div>
          </FramerWrapper>
        </div>

        {/* Right Column - iOS Side Stats */}
        <div className="w-full md:w-2/5 flex flex-col gap-6 font-light">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-[2rem] bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center p-6 text-center group hover:bg-primary hover:text-white transition-all duration-500 shadow-sm">
              <span className="text-4xl font-bold font-rubik">10+</span>
              <span className="text-xs uppercase tracking-[0.2em] mt-2 opacity-60 group-hover:opacity-100 font-bold">Projects</span>
            </div>
            <div className="aspect-square rounded-[2rem] bg-white/20 dark:bg-black/20 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center p-6 text-center group hover:bg-primary hover:text-white transition-all duration-500 shadow-sm">
              <span className="text-4xl font-bold font-rubik">100%</span>
              <span className="text-xs uppercase tracking-[0.2em] mt-2 opacity-60 group-hover:opacity-100 font-bold">Quality</span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="relative group p-2 w-full max-w-[300px]">
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary/20 to-primary/0 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <HeroImage />
            </div>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-primary/10 to-transparent border border-white/10 p-8 flex flex-col items-center text-center backdrop-blur-sm">
            <p className="font-poppins italic text-lg opacity-80 leading-relaxed font-light">&quot;Crafting digital interfaces that blend aesthetics with functionality.&quot;</p>
          </div>
        </div>
      </FramerWrapper>
    </div>
  );
};

export default AboutPage;
