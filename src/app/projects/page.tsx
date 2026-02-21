import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

const projectsPage = () => {
  return (
    <div className="h-full w-full py-8 md:py-12 flex flex-col items-center justify-center p-4">
      <FramerWrapper
        className="w-full max-w-6xl backdrop-blur-xl bg-white/30 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl flex flex-col gap-12"
        y={0}
        scale={0.95}
      >
        {/* Header Section */}
        <div className="flex flex-col items-start gap-5">
          <Badge variant="outline" className="gap-1.5 py-1.5 px-4 rounded-full border-primary/20 bg-primary/5">
            <Layers className="h-4 w-4" />
            Portfolio
          </Badge>

          <div className="flex flex-col gap-3 text-left w-full">
            <Heading>Featured Projects</Heading>
            <p className="font-poppins text-lg md:text-xl text-foreground/70 max-w-3xl leading-relaxed font-light">
              I love building innovative digital experiences. Here you'll find a curated
              collection of my creative endeavors and technical projects.
            </p>
          </div>
        </div>

        {/* Main Projects Section */}
        <section className="space-y-8 w-full">
          <div className="flex items-center gap-4">
            <h2 className="text-sm uppercase tracking-[0.2em] font-bold text-primary/60 italic">Featured Work</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioConfig.projects.map((val, indx) => (
              <ProjectCards key={indx} value={val} num={indx} />
            ))}
          </div>
        </section>

        {/* Client Work Section */}
        <section className="space-y-8 w-full">
          <div className="flex items-center gap-4">
            <h2 className="text-sm uppercase tracking-[0.2em] font-bold text-primary/60 italic">Client Collaborations</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioConfig.clientProjects.map((val, indx) => (
              <ProjectCards key={indx} value={val} num={indx} />
            ))}
          </div>
        </section>
      </FramerWrapper>
    </div>
  );
};

export default projectsPage;
