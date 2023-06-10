import "../css/ProjectInfo.css";
import Cursor from "../components/Cursor";
import NavBar from "../components/Home/NavBar";
import ProjectsLogic from "../components/Projects/ProjectsLogic";
import { Fade } from "react-reveal";
import NextButton from "../components/NextButton";
import ProjectInfo from "../components/Projects/ProjectInfo";
import { useState } from "react";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };
  function setNull() {
    setSelectedProject(null)
  };
  return (
    <div >
    <div className={selectedProject?"opacity-20":""}>
      <Cursor />
      <Fade top distance={"10%"} delay={200}>
        <NavBar />
      </Fade>

      <div className="Projects">
        
          <h1 className="AboutTitle">Projects.</h1>
          <ProjectsLogic onProjectSelect={handleProjectSelect}/>

          <NextButton URI="/resume" Content="Lets Go To My Resume." />
       
      </div>
    </div>
      
      <Fade right distance={"7%"}>
        <div className={selectedProject ? "ProjectInfo" : "hidden"} >
          {selectedProject && <ProjectInfo project={selectedProject}  setNull={setNull} />}
        </div>
      </Fade>
    </div>
  );
}

export default Projects;
