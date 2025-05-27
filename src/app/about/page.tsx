import Aboutfooter from "@/components/Aboutfooter";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
import HeroImage from "@/components/HeroImage";
import { portfolioConfig } from "@/config/portfolio.config";


const page = () => {

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
            {portfolioConfig.title2} And Web <br /> Developer, Based In{" "}
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

      </div>

      {/* Right Column - Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <HeroImage />
      </div>
    </div>
  );
};

export default page;
