import React from "react";
import NavBar from "../components/Home/NavBar";
import { Fade } from "react-reveal";
import AboutLi from "../components/About/AboutLi";
import Cursor from "../components/Cursor";
import NextButton from "../components/NextButton";
import SocialMediaLinks from "../components/Home/SocialMediaLinks";

function About() {
  return (
    <div className="gradient AboutBody">
      <Cursor />
      <Fade top distance={"10%"} delay={200}>
        <NavBar />
      </Fade>
      <Fade top distance={"10%"} delay={500}>
        <h1 className="AboutTitle">About Me.</h1>
        <article className="AboutArticle">
          <h4 className="">My Reads.</h4>
          <ul class="timeline AboutUl">
            <AboutLi />
          </ul>
        </article>
        <Fade bottom distance="10%" delay={700}>
          <div>
            <NextButton URI="/projects" Content="Lets Continue To Projects" />
            <div className="WindowsSocialMediaDiv">
              <SocialMediaLinks />
            </div>
            
          </div>
        </Fade>
      </Fade>
    </div>
  );
}

export default About;
