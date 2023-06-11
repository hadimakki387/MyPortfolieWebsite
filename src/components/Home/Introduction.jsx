
import AboutMeArticle from "./AboutMeArticle";
import SocialMediaLinks from "./SocialMediaLinks";
import { Fade } from "react-reveal";
import NextButton from "../NextButton";

function Introduction() {
  
 
  return (
    <div class="GlicthContainer HomeBody ">
      <Fade top distance="10%">
        <AboutMeArticle />
      </Fade>

      
    </div>
  );
}

export default Introduction;
