import React from "react";

export const ProjectCard = (props: {
  name: string | null | undefined;
  description: string | null | undefined;
  link: string | undefined;
}) => {
  return (
    <div className="pt-5">
      <div>
        <h3 className="font-semibold font-[#fefefe] ">
          <a
            href={props.link}
            className="rounded transition ease-in-out delay-50 hover:bg-[#4d4d4d] duration-300 px-1"
          >
            {props.name} <span className="text-xs">↗</span>
          </a>
        </h3>
      </div>
      <div>
        <p className="text-sm pt-2 px-1">{props.description}</p>
      </div>
    </div>
  );
};
