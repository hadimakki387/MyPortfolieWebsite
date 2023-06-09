import "../css/ProjectInfo.css";
import Cursor from "../components/Cursor";
import NavBar from "../components/Home/NavBar";
import ProjectsLogic from "../components/Projects/ProjectsLogic";
import { Fade } from "react-reveal";
import NextButton from "../components/NextButton";
import ProjectInfo from "../components/Projects/ProjectInfo";
import { useEffect, useState } from "react";
import SocialMediaLinks from "../components/Home/SocialMediaLinks";
import SideBar from "../components/SideBar";

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
  const [sideBar, setSideBar] = useState(false);

  function toggleSideBar() {
    setSideBar(!sideBar);
  }
  return (
    <div className="">
      <SideBar sideBar={sideBar} toggleSideBar={toggleSideBar} />
      <div className={selectedProject ? "opacity-20" : ""}>
        <Cursor />
        <Fade top distance={"10%"} >
          <NavBar toggleSideBar={toggleSideBar} />
        </Fade>

        <div className="Projects">
        <Fade top distance="10%" delay={200}>
          <h1 className="ProjectTitle">Projects.</h1>
        </Fade>
          
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
