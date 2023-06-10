import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <div>
        <Link to={"/"}>
          <i className="fa-solid fa-house-chimney fa-2x white"></i>
        </Link>
      </div>

      <div>
        <ul className="flex LinksList">
          <li className="LinksListItems">
            <Link to={"/about"} className="Links decorationNone">
              ABOUT
            </Link>
          </li>
          <li className="LinksListItems">
            <Link to={"/projects"} className="Links">
              PROJECTS
            </Link>
          </li>
          <li className="LinksListItems">
            <Link to={"/contactMe"} className="Links">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
