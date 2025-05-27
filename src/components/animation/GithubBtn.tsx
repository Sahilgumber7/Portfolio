import { Github } from "lucide-react";
import Link from "next/link";

const GithubBtn = () => {
  return (
    <Link
      href={"https://github.com/sahilgumber7"}
      target="_blank"
      className="animate-pulse absolute left-0 bottom-16 sm:bottom-5 flex rounded-r-full justify-center items-center gap-2 z-50 w-fit h-fit px-3 py-1.5 shadow-md border-y border-r border-black dark:border-white text-black dark:text-white hover:bg-primary hover:text-white dark:hover:text-black hover:animate-none transition"
    >
      <Github />
      <span className="font-rubik text-xl max-sm:text-lg">Github</span>
    </Link>
  );
};

export default GithubBtn;
