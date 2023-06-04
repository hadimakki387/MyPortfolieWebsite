import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function NavBar() {
  return (
    <div className="NavBar">
      <div>
        <Link to="/">
          <i class="fa-solid fa-house-chimney fa-2x white"></i>
        </Link>
      </div>

      <div>
        <ul className="flex LinksList">
          <Link to={"about"}  >
            <li className="LinksListItems ">
              <a className="Links decorationNone" href="#" >
                ABOUT
              </a>
            </li>
          </Link>
          <Link to={"projets"}>
            <li className="LinksListItems">
              <a className="Links" href="#">
                PROJECTS
              </a>
            </li>
          </Link>
          <Link to={"contact"}>
            <li className="LinksListItems">
              <a className="Links" href="#">
                CONTACT
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
