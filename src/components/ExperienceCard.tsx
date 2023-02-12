import React from "react";

export const ExperienceCard = (props: {
  link: string | undefined;
  image: string | undefined;
  company: string | undefined;
  date: string | undefined;
  description: string | undefined;
}) => {
  return (
    <div>
      <div className="flex flex-row pt-8">
        <div>
          <a href={props.link}>
            <img
              src={props.image}
              width={50}
              className="opacity-80 hover:opacity-90 hover:scale-105 duration-200"
            />
          </a>
        </div>
        <div className="">
          <p className="px-4 font-semibold text-[#fefefe]">
            {props.company}{" "}
            <span className="text-xs p-1 ml-1 bg-[#252525] rounded text-[#7b7b7b] font-semibold pb-1 mb-1">
              {props.date}
            </span>
          </p>
          <p className="text-sm px-4 pt-1 font-semibold font-[#9b9b9b]">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};
