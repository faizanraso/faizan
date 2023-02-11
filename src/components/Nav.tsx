import React from "react";

import { colours } from "../assets/colours";

export const Nav = () => {
  return (
    <nav className="nav-bar py-14 text-center flex-row">
      <a
        className="py-2 px-4 mx-1 text-sm text-[#8b8b8b] font-bold hover:text-[#e4e4e4]"
        href="/"
      >
        About
      </a>
      <a
        href="https://read.cv/faizanraso"
        className="py-2 px-4 mx-1 text-sm text-[#8b8b8b] font-bold hover:text-[#e4e4e4]"
      >
        Resume
      </a>
      <a className="py-2 px-4 mx-1 text-sm text-[#8b8b8b] font-bold hover:text-[#e4e4e4]">
        Socials{" "}
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="caret-down"
          className="w-2 ml-1 inline-block align-middle"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
          ></path>
        </svg>
      </a>
    </nav>
  );
};
