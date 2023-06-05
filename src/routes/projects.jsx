import React, { useState } from "react";
import Cursor from "../components/Cursor";
import NavBar from "../components/Home/NavBar";
import ProjectsLogic from "../components/Projects/ProjectsLogic";
import { Fade } from "react-reveal";
import NextButton from "../components/NextButton";

function Projects() {
  return (
    <div>
    <Cursor />
    <Fade top distance={"10%"} delay={200}>
      <NavBar />
    </Fade>
      
      <div className="Projects">
        
        <Fade top distance={"10%"} delay={500}>
          <h1 className="AboutTitle">Projects.</h1>
          <ProjectsLogic />
          <NextButton URI="/resume" Content="Lets Go To My Resume." />
        </Fade>
      </div>
    </div>
  );
}

export default Projects;
