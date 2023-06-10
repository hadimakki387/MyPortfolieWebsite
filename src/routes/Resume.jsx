import NavBar from "../components/Home/NavBar";
import { Link } from "react-router-dom";
import Cursor from "../components/Cursor";
import { Fade } from "react-reveal";
import NextButton from "../components/NextButton";

function Resume() {
  return (
    <div className="">
      <Cursor />
      <Fade top distance="10%" delay={200}>
        <NavBar />
      </Fade>

      <div className="ResumeBody">
        <Fade top distance="10%" delay={400}>
          <h1 className="AboutTitle">Resume.</h1>
        </Fade>
        <Fade top distance="10%" delay={600}>
          <p className="ResumeText">
            Reach out to me via my{" "}
            <Link className="ContactLink" to={"/contact"}>
              Contact Page
            </Link>{" "}
            or{" "}
            <a href="MyCv.pdf" className="ContactLink" download>
              Download
            </a>{" "}
            the resume
          </p>
        </Fade>
        <Fade top distance="8%" delay={800}>
          <div className="resumeImgDiv">
            <img src="Cv.png" alt="Cv" className="resumeImg"></img>
          </div>
        </Fade>
        <Fade top distance="10%" delay={600}>
          <NextButton Content="Are you convinced to contact me now ?" URI="/ContactMe"/>
        </Fade>
        
      </div>
    </div>
  );
}

export default Resume;
