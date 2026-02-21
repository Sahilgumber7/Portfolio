import React from "react";
import { portfolioConfig } from "@/config/portfolio.config";

function TextRotator() {
  return (
    <div className="py-2 flex flex-col justify-start items-start overflow-hidden">
      <div className="font-poppins text-sm sm:text-2xl text-foreground flex flex-wrap items-center gap-x-2" >
        <span>I am a {portfolioConfig.title} &</span>
        <div className="relative h-[24px] sm:h-[48px] overflow-hidden">
          <ul className="block text-left font-rubik text-base sm:text-3xl leading-none animate-text-slide">
            {[...portfolioConfig.skills.roles, portfolioConfig.skills.roles[0]].map((role, index) => (
              <li key={index} className="text-primary h-[24px] sm:h-[48px] flex items-center">
                {role}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TextRotator;
