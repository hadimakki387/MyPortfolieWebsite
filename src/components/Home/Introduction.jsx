
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
      <Fade bottom distance="15%" delay={600}>
        <NextButton URI="/about" Content="See More About Me"/>
        <div className="WindowsSocialMediaDiv">
          <SocialMediaLinks/>
        </div>
      </Fade>
      
    </div>
  );
}

export default Introduction;
