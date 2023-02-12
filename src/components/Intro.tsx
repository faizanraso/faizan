import React from "react";

export const Intro = () => {
  return (
    <div className="px-1">
      <div className="sm:w-8/12 md:w-2/5 m-auto pt-8 pb-6 ">
        <h1 className="text-3xl font-bold text-[#e4e4e4]">Faizan Rasool</h1>
      </div>
      <div className="sm:w-8/12 md:w-2/5 m-auto text-base leading-7 ">
        <p className="text-[#cecece]">
          Hey, I'm Faizan and I'm an electrical engineering student at{" "}
          <a
            className="underline decoration-solid decoration-1.5 decoration-[#4d4d4d] underline-offset-4 transition ease-in-out delay-50 hover:decoration-[#e4e4e4] duration-300"
            href="https://www.eng.mcmaster.ca/ece"
          >
            McMaster University.{" "}
          </a>
          Inspired by a passion for solving complex problems and driven by my
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
    </div>
  );
};
