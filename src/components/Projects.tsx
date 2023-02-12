import React from "react";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <div className="projects-section sm:w-8/12 md:w-2/5 mt-5 mx-auto pt-6 pb-4">
      <h2 className="text-xl font-bold text-[#9f9f9f] pb-2 px-1">Projects</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        <ProjectCard
          link="https://github.com/CapstoneS01"
          name="Sky Hunt"
          description="Currently working on equipping drones with computer vision technology - optimzied for missing person searches."
        />
        <ProjectCard
          link="https://github.com/faizanraso/my-pantry"
          name="My Pantry Check"
          description="A pantry inventory management system built using React Native."
        />
      </div>
    </div>
  );
};
