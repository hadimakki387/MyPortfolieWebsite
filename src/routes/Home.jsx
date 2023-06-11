import React, { useState } from "react";
import NavBar from "../components/Home/NavBar";
import Introduction from "../components/Home/Introduction";
import { Fade } from "react-reveal";
import Cursor from "../components/Cursor";
import SideBar from "../components/SideBar";

function Home() {
  const [sideBar, setSideBar] = useState(false);

  function toggleSideBar() {
    setSideBar(!sideBar);
  }

  return (
    <div className="gradient">
    
      <SideBar sideBar={sideBar} toggleSideBar={toggleSideBar} />
    
      
      <Cursor />
      <Fade top distance="10%">
        <NavBar toggleSideBar={toggleSideBar} />
      </Fade>

      <Introduction />
    </div>
  );
}

export default Home;
