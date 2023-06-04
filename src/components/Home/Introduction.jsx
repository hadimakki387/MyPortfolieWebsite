import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import AboutMeArticle from "./AboutMeArticle";
import SocialMediaLinks from "./SocialMediaLinks";
import { Fade } from "react-reveal";

function Introduction() {
  const [underline, setUnderline] = useState("");
  const handleMouseEnter = () => {
    setUnderline("underline");
  };

  const handleMouseLeave = () => {
    setUnderline("");
  };
 
  return (
    <div class="GlicthContainer HomeBody ">
      <Fade top distance="10%">
        <AboutMeArticle />
      </Fade>

      <Fade bottom distance="15%" delay={600}>
        <Link to="/about" className="arrowDiv">
          <p
            className={`flex  ${underline} `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            See More About Me
            <img
              src="arrowWhite.png"
              alt="arrow"
              width="30px"
              className="arrow"
            />
          </p>
        </Link>

        <SocialMediaLinks />
      </Fade>
    </div>
  );
}

export default Introduction;
