import { Github } from "lucide-react";
import Link from "next/link";

const GithubBtn = () => {
  return (
    <Link
      href={"https://github.com/sahilgumber7"}
      target="_blank"
      className="fixed left-5 top-5 flex rounded-full justify-center items-center gap-2 z-50 w-fit h-fit px-4 py-2 backdrop-blur-md bg-white/20 dark:bg-black/20 border border-black/10 dark:border-white/10 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition shadow-lg"
    >
      <Github className="h-4 w-4" />
      <span className="font-rubik text-sm">Github</span>
    </Link>
  );
};

export default GithubBtn;
