import React from "react";

import { ExperienceCard } from "./ExperienceCard";

import mcmasterIcon from "../assets/images/mcmaster.png";

export const Education = () => {
  return (
    <div className="education-section sm:w-8/12 md:w-6/12 mt-4 mx-auto pt-6 pb-8">
      <h2 className="text-2xl font-bold text-[#9f9f9f]">Education</h2>
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
