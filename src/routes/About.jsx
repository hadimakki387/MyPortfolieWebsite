import React from "react";
import NavBar from "../components/Home/NavBar";
import Introduction from "../components/Home/Introduction";
import { Fade } from "react-reveal";
import AboutLi from "../components/About/AboutLi";

function About() {
  return (
    <Fade delay={200}>
        <div className="gradient AboutBody">
    <NavBar/>
    <h1 className="AboutTitle">
        About Me.
    </h1>
      <article className="AboutArticle">
        <h4 className="">My Reads.</h4>
        <ul class="timeline AboutUl">
          <AboutLi />
        </ul>
      </article>

    </div>
    </Fade>
    
  );
}

export default About;
