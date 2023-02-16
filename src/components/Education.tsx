import React from "react";

import { ExperienceCard } from "./ExperienceCard";

import mcmasterIcon from "../assets/images/mcmaster.png";

export const Education = () => {
  return (
    <div className="education-section sm:w-8/12 md:w-3/5 mt-5 mx-auto pt-6 pb-8 px-1">
      <h2 className="text-xl font-bold text-[#9f9f9f]">Education</h2>
      <ExperienceCard
        link="http://www.mcmaster.ca"
        image={mcmasterIcon}
        description="Electrical Engineering (Co-op), BEng"
        company="McMaster University"
        date="2018 - 2023"
      />
    </div>
  );
};
