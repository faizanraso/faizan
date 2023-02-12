import React from "react";

import { ExperienceCard } from "./ExperienceCard";

import mcmasterIcon from "../assets/images/mcmaster.png";
import hydrooneIcon from "../assets/images/hydroone.png";
import paperIcon from "../assets/images/paper.png";

export const Experience = () => {
  return (
    <div className="experiences-section sm:w-8/12 md:w-6/12 mt-4 mx-auto pt-6 pb-4">
      <h2 className="text-2xl font-bold text-[#9f9f9f]">Experience</h2>
      <ExperienceCard
        link="http://www.hydroone.ca"
        image={hydrooneIcon}
        description="Advanced Metering Infrastructure - Complex Metering"
        company="Hydro One"
        date="2021 - 2022"
      />
      <ExperienceCard
        link="http://www.paper.co"
        image={paperIcon}
        description="STEM Tutor - Computer Science & Mathematics"
        company="Paper"
        date="2021 - Present"
      />
      <ExperienceCard
        link="http://www.mcmaster.ca"
        image={mcmasterIcon}
        description="Teaching Assistant - Integrated Cornerstone Design Projects in Engineering"
        company="McMaster"
        date="2021 - 2021"
      />
    </div>
  );
};
