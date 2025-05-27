import { cn } from "@/lib/utils";
import {
  Instagram,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import FramerWrapper from "./animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";

const SocialLinks = () => {
  const links = [
    {
      name: "Instagram",
      link: portfolioConfig.socialLinks.instagram,
      icon: <Instagram />,
    },
    {
      name: "Twitter",
      link: portfolioConfig.socialLinks.twitter,
      icon: <Twitter />,
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
