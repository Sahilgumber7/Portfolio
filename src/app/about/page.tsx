import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
import HeroImage from "@/components/HeroImage";
import { portfolioConfig } from "@/config/portfolio.config";
import Image from "next/image";

const page = () => {
  const items = portfolioConfig.about.hobbies.map((hobby) => ({ hobby }));

  return (
    <div className="h-full w-full flex flex-col md:flex-row gap-10 items-start justify-between overflow-hidden">
      {/* Left Column - Text Content */}
      <div className="w-full md:w-1/2 flex flex-col items-start gap-5">
        <Badge variant="secondary" className="gap-1.5 py-1">
          <User2 className="h-4 w-4" />
          About me
        </Badge>

        <div className="flex flex-col gap-5">
          <Heading>
            {portfolioConfig.title} And Web <br /> Developer, Based In{" "}
            {portfolioConfig.about.personalInfo.nationality}.
          </Heading>

          <FramerWrapper y={0} x={100}>
            <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
              {portfolioConfig.about.bio}
            </p>
          </FramerWrapper>
        </div>

        <FramerWrapper
          className="w-full flex flex-row justify-between max-lg:flex-col"
          y={100}
          delay={0.3}
        >
          <Aboutfooter />
        </FramerWrapper>

        <FramerWrapper className="block" y={100} delay={0.31}>
          <h1 className="gap-2 text-xl font-poppins text-primary font-semibold flex icon_underline relative max-sm:text-lg">
            <Heart className="h-6 w-6" /> Hobbies
          </h1>

          <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
            {items.map((val, indx) => (
              <div
                key={indx}
                className="flex gap-2 justify-center items-center flex-row text-lg text-primary pt-1 max-lg:justify-start"
              >
                <Circle className="h-3 w-3" /> {val.hobby}
              </div>
            ))}
          </div>
        </FramerWrapper>
      </div>

      {/* Right Column - Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <HeroImage />
      </div>
    </div>
  );
};

export default page;
