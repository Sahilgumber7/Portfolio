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
import { ArrowUpRight } from "lucide-react";

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
  return (
    <FramerWrapper
      className="w-full"
      y={50}
      scale={1}
      delay={num * 0.1}
      duration={0.3}
    >
      <Card className="w-full h-full flex flex-col backdrop-blur-md bg-white/20 dark:bg-black/20 border-white/10 dark:border-white/5 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:bg-white/40 dark:hover:bg-black/40 transition-all duration-500 group border shadow-sm">
        <CardHeader className="pb-3 border-b border-white/10 bg-white/5">
          <CardTitle className="text-xl font-bold text-primary group-hover:tracking-tight transition-all duration-300 capitalize italic">
            {value.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-grow flex flex-col gap-6 p-6">
          <p className="text-base text-foreground/70 leading-relaxed font-light line-clamp-3 italic">
            {value.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {value.tags.map((tag: string, index: number) => (
              <Badge
                key={index}
                variant="outline"
                className="rounded-full px-3 py-1 text-[10px] uppercase font-bold tracking-widest border-primary/20 bg-primary/5 text-primary/80"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <Link
            href={value.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({
                variant: "custom",
                size: "sm"
              }),
              "w-full rounded-xl py-5 group/btn flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/20"
            )}
          >
            <span className="font-rubik font-bold uppercase tracking-widest text-xs">Explore Project</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
          </Link>
        </CardFooter>
      </Card>
    </FramerWrapper>
  );
};

export default ProjectCards;
