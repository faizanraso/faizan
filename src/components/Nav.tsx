import React from "react";

import { colours } from "../assets/colours";

export const Nav = () => {
  return (
    <div className="nav-bar py-20 text-center">
      <a className="py-2 px-4 mx-1 text-sm text-[#8b8b8b]" href="/">
        About
      </a>
      <a className="py-2 px-4 mx-1 text-sm text-[#8b8b8b]">Resume</a>
      <a className="py-2 px-4 mx-1 text-sm text-[#8b8b8b]">Socials</a>
    </div>
  );
};
