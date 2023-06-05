import React from "react";
import NavBar from "../components/Home/NavBar";
import Introduction from "../components/Home/Introduction";
import { Fade } from "react-reveal";
import Cursor from "../components/Cursor";

function Home() {
  return (
    <div className="gradient HomeBody">
    <Cursor/>
      <Fade top distance="10%">
        <NavBar />
      </Fade>

      <Introduction />
    </div>
  );
}

export default Home;
