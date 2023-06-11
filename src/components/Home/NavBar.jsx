import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu";

function NavBar() {

  function ShowMenu() {
    
  }
  return (
    <div className="NavBar">
      <div>
        <Link to={"/"}>
          <i className="fa-solid fa-house-chimney fa-2x white"></i>
        </Link>
      </div>

      <div className="NavBarList">
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
      <div className="HamburgerMenu " onClick={ShowMenu}>
        <HamburgerMenu />
      </div>
    </div>
  );
}

export default NavBar;
