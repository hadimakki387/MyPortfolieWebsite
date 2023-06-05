import React from 'react';

function ProjectsLogic() {
  const Projects = [
    {
      name: "walkie",
      description: "Dog walking Service website",
      technologies: [
        "nodeJs",
        "expressJs",
        "ejs",
        "mongoDB",
        "TailwindCss"
      ],
      img: "walkie.png"
    },
    {
      name: "Plan Selecting Page",
      description: "A plan for selecting gaming plans",
      technologies: [
        "ReactJs",
        "Css3",
      ],
      img: "PlanSelectingPage.png"
    }
  ];

  return (
    Projects.map((project, index) => (
      <figure className="projectFigure" key={index}>
        <img src={project.img} alt="sample99" className="ProjectImg" />
        <figcaption className="">
          <h3>{project.name}</h3>
          <h4>{project.description}</h4>
          <br />
          <div className="TechnologiesDiv">
            {project.technologies.map((technology, index) => (
              <h4 className="Technologies" key={index}>{technology}</h4>
            ))}
          </div>
        </figcaption>
        <a href="#"></a>
      </figure>
    ))
  );
}

export default ProjectsLogic;
