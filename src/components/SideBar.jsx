import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

function SideBar(props) {
  return (
    <div>
      {props.sideBar ? (
        <div className="SideBar">
          <div className="NavBarListMobile">
            <Fade top distance="10%">
              <div className="">
                <Link
                  to={"/about"}
                  className="Links decorationNone alignCenter"
                >
                  about
                </Link>
                <button className="XButton" onClick={props.toggleSideBar}>
                  X
                </button>
              </div>
            </Fade>
            <Fade top distance="10%" delay={200}>
              <div className="">
                <Link to={"/projects"} className="Links">
                  PROJECTS
                </Link>
              </div>
            </Fade>
            <Fade top distance="10%" delay={400}>
              <div className="">
                <Link to={"/contactMe"} className="Links">
                  CONTACT
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SideBar;
