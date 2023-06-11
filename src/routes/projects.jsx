import "../css/ProjectInfo.css";
import Cursor from "../components/Cursor";
import NavBar from "../components/Home/NavBar";
import ProjectsLogic from "../components/Projects/ProjectsLogic";
import { Fade } from "react-reveal";
import NextButton from "../components/NextButton";
import ProjectInfo from "../components/Projects/ProjectInfo";
import { useEffect, useState } from "react";
import SocialMediaLinks from "../components/Home/SocialMediaLinks";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };
  function setNull() {
    setSelectedProject(null);
  }
  return (
    <div className="">
      <div className={selectedProject ? "opacity-20" : ""}>
        <Cursor />
        <Fade top distance={"10%"} delay={200}>
          <NavBar />
        </Fade>

        <div className="Projects">
          <h1 className="AboutTitle">Projects.</h1>
          <ProjectsLogic onProjectSelect={handleProjectSelect} />
          <Fade bottom distance="10%" delay={600}>
            <div>
              <NextButton URI="/resume" Content="Lets Go To My Resume." />
              <div className="WindowsSocialMediaDiv">
                <SocialMediaLinks />
              </div>
              
            </div>
          </Fade>
        </div>
      </div>

      <Fade right distance={"7%"}>
        <div className={selectedProject ? "ProjectInfo" : ""}>
          {selectedProject && (
            <ProjectInfo project={selectedProject} setNull={setNull} />
          )}
        </div>
      </Fade>
    </div>
  );
}

export default Projects;
