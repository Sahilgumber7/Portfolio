import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FramerWrapper from "./animation/FramerWrapper";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, FolderGit2, Globe, Laptop, Smartphone } from "lucide-react";

interface ProjectCardProps {
  value: {
    title: string;
    description: string;
    tags: string[];
    link: string;
  };
  num: number;
}

const ProjectCards: React.FC<ProjectCardProps> = ({ value, num }) => {
  // Determine icon based on tags/title
  const getIcon = () => {
    const lowerTags = value.tags.map(t => t.toLowerCase());
    const lowerTitle = value.title.toLowerCase();
    const combined = [...lowerTags, lowerTitle].join(" ");

    if (combined.includes("mobile") || combined.includes("react native") || combined.includes("app")) {
      return <Smartphone className="h-6 w-6" />;
    }
    if (combined.includes("next.js") || combined.includes("react") || combined.includes("web") || combined.includes("landing") || combined.includes("website")) {
      return <Globe className="h-6 w-6" />;
    }
    if (combined.includes("laptop") || combined.includes("desktop") || combined.includes("backend")) {
      return <Laptop className="h-6 w-6" />;
    }
    return <FolderGit2 className="h-6 w-6" />;
  };

  return (
    <FramerWrapper
      className="w-full h-full"
      y={30}
      scale={1}
      delay={num * 0.05}
      duration={0.4}
    >
      <div className="group relative w-full h-full flex flex-col backdrop-blur-xl bg-white/40 dark:bg-black/40 border border-white/30 dark:border-white/10 rounded-[2.5rem] p-4 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
        {/* INNER CONTENT AREA */}
        <div className="relative z-10 flex flex-col h-full bg-white/40 dark:bg-white/5 rounded-[2rem] p-6 border border-white/20 dark:border-white/5 overflow-hidden">

          {/* Header row */}
          <div className="flex items-start justify-between mb-6">
            <div className="p-4 rounded-2xl bg-primary text-primary-foreground shadow-lg animate-bounce-subtle">
              {getIcon()}
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Project {num + 1}</span>
              <div className="h-1 w-8 bg-primary/20 rounded-full mt-1" />
            </div>
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-primary mb-3">
            {value.title}
          </h3>

          <p className="text-sm md:text-base text-foreground/60 leading-relaxed font-normal line-clamp-4 mb-6">
            {value.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto mb-8">
            {value.tags.map((tag: string, index: number) => (
              <Badge
                key={index}
                variant="secondary"
                className="rounded-full px-3 py-1 text-[10px] font-medium bg-primary/5 text-primary/70 border-none hover:bg-primary/10 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <Link
            href={value.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({
                variant: "custom",
                size: "lg"
              }),
              "w-full rounded-2xl py-7 group/btn flex items-center justify-center gap-3 shadow-xl hover:shadow-primary/20 transition-all duration-500 bg-primary text-primary-foreground relative overflow-hidden"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-shimmer" />
            <span className="font-rubik font-bold uppercase tracking-[0.2em] text-xs">Launch Experience</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
          </Link>
        </div>
      </div>
    </FramerWrapper>
  );
};

export default ProjectCards;
