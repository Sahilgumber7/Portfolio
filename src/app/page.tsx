import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/animation/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import FramerWrapper from "@/components/animation/FramerWrapper";

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-24 py-16 scroll-smooth">
      {/* HERO SECTION - iPhone Card Style */}
      <section className="min-h-[85vh] flex items-center justify-center p-4">
        <FramerWrapper
          className="w-full max-w-6xl relative overflow-hidden backdrop-blur-xl bg-white/40 dark:bg-black/40 border border-white/20 dark:border-white/10 rounded-[3rem] p-8 md:p-16 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12"
          y={0}
          x={0}
          scale={0.95}
        >
          {/* Background Decorative Gradient */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          {/* LEFT SIDE CONTENT */}
          <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <HeroTexts />
            <div className="h-fit w-full flex justify-center md:justify-start gap-4 mt-8">
              <SocialLinks />
            </div>
            <FramerWrapper y={50} delay={1.1} className="mt-8">
              <DownLoadResumeBtn />
            </FramerWrapper>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative z-10 w-full md:w-[45%] flex justify-center">
            <div className="relative group w-full max-w-[400px]">
              {/* Float effect */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary/20 to-primary/0 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <HeroImage />
            </div>
          </div>
        </FramerWrapper>
      </section>

      {/* GITHUB BUTTON */}
      <GithubBtn />
    </div>
  );
}
