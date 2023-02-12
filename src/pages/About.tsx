import React from "react";

import { Nav } from "../components/Nav";
import { Intro } from "../components/Intro";
import { Experience } from "../components/Experience";
import { Education } from "../components/Education";
import { Projects } from "../components/Projects";

function About() {
  return (
    <div className="font-opensans p-5">
      <Nav />
      <Intro />
      <Projects />
      <Experience />
      <Education />
      {/* ADD FOOTER */}
    </div>
  );
}

export default About;
