import React from "react";
import NavBar from "../components/Home/NavBar";
import Introduction from "../components/Home/Introduction";
import { Fade } from "react-reveal";
import Cursor from "../components/Cursor";
import NextButton from "../components/NextButton";
import SocialMediaLinks from "../components/Home/SocialMediaLinks";

function Home() {
  return (
    <div className="gradient ">
    <Cursor/>
      <Fade top distance="10%">
        <NavBar />
      </Fade>

      <Introduction />
      <Fade bottom distance="15%" delay={600}>
        <NextButton URI="/about" Content="See More About Me"/>
        <div className="WindowsSocialMediaDiv">
          <SocialMediaLinks/>
        </div>
      </Fade>
      
    </div>
  );
}

export default Home;
