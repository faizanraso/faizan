import React from "react";

import { Nav } from "../components/Nav";
import mcmasterLogo from "../assets/images/mcmaster-icon.png";

function About() {
  return (
    <div className="font-opensans">
      <Nav />
      <div className="sm:w-8/12 md:w-6/12 m-auto pt-8 pb-6">
        <h1 className="text-3xl font-bold text-[#e4e4e4]">Faizan Rasool</h1>
      </div>
      <div className="sm:w-8/12 md:w-6/12 m-auto text-base leading-7 ">
        <p className="text-[#cecece]">
          Hey, I'm Faizan and I'm an electrical engineering student at{" "}
          <a
            className="underline decoration-solid decoration-1.5 decoration-[#4d4d4d] underline-offset-4 transition ease-in-out delay-50 hover:decoration-[#e4e4e4] duration-300"
            href="https://www.eng.mcmaster.ca/ece"
          >
            McMaster University.{" "}
          </a>
          Inspired by a passion for solving complex problems and driven by a
          love for technology, I aim to make a difference as an engineer.
        </p>
        <br />
        <p>
          Currently, I'm wrapping up my final semester of school and searching
          for full time opportunities. When I'm not busy, I like to hit the gym
          with some friends or watch some basketball.
        </p>
        <br />
        <p>
          If you would like to get in touch, you can reach me at{" "}
          <a
            className="underline decoration-solid decoration-1.5 decoration-[#4d4d4d] underline-offset-4 transition ease-in-out delay-50 hover:decoration-[#e4e4e4] duration-300"
            href="mailto:faizanraso@outlook.com"
          >
            faizanraso@outlook.com
          </a>
        </p>
      </div>
      <div className="education-section sm:w-8/12 md:w-6/12 mt-6 mx-auto pt-8 pb-6">
        <h2 className="text-2xl font-bold text-[#9f9f9f]">Education</h2>
        <div className="flex flex-row">
          <div>
            <img src={mcmasterLogo} width={60} />
          </div>
          <div className="flex flex-column">
            <div className="flex flex-row">
              <h4>McMaster University</h4>
              <p>2018 - 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
