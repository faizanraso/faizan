import React from "react";

import { Nav } from "../components/Nav";
import { Intro } from "../components/Intro";
import { Experience } from "../components/Experience";
import { Education } from "../components/Education";

function About() {
  return (
    <div className="font-opensans">
      <Nav />
      <Intro />
      <Experience />
      <Education />
    </div>
  );
}

export default About;
