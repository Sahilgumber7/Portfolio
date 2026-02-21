import { cn } from "@/lib/utils";
import {
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";

const XIcon = (props: any) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props} className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const SocialLinks = () => {
  const links = [
    {
      name: "Instagram",
      link: portfolioConfig.socialLinks.instagram,
      icon: <Instagram />,
    },
    {
      name: "X",
      link: portfolioConfig.socialLinks.twitter,
      icon: <XIcon />,
    },
    {
      name: "Linkedin",
      link: portfolioConfig.socialLinks.linkedin,
      icon: <Linkedin />,
    },
    {
      name: "Github",
      link: portfolioConfig.socialLinks.github,
      icon: <Github />,
    },
  ];

  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125;

        return (
          <FramerWrapper key={indx} delay={timing} y={50}>
            <Link
              target="_blank"
              href={itm.link}
              className={cn(
                buttonVariants({ variant: "outline", size: "icon" }),
                "text-black dark:text-white border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
              )}
            >
              {itm.icon}
            </Link>
          </FramerWrapper>
        );
      })}
    </>
  );
};

export default SocialLinks;
