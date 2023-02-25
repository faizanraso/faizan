import React from "react";

export const Nav = () => {
  return (
    <nav className="nav-bar py-14 text-center flex-row">
      <a
        className="py-2 pr-4 mx-1 text-sm text-[#8b8b8b] font-bold hover:text-[#e4e4e4]"
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
      <a
        href="https://www.github.com/faizanraso"
        className="py-2 px-4 mx-1 text-sm text-[#8b8b8b] font-bold hover:text-[#e4e4e4]"
      >
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/faizanraso/"
        className="py-2 px-4 mx-1 text-sm text-[#8b8b8b] font-bold hover:text-[#e4e4e4]"
      >
        LinkedIn
      </a>
    </nav>
  );
};
