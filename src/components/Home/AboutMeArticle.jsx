import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

function Title() {
  return (
    <p className="glitch">
      <span aria-hidden="true">I'M HADI MAKKi</span>
      I'M HADI MAKKi
      <span aria-hidden="true">I'M HADI MAKKi</span>
    </p>
  );
}
function Body1() {
  return (
    <p>
      Experienced and passionate frontend developer skilled in creating dynamic
      and engaging websites. With a proven track record in successful &nbsp;
      <Link to="/projects" className="intermediateLinks">projects</Link>&nbsp; and an internship at XpertBot, I deliver
      effective solutions that captivate users.
    </p>
  );
}
function Body2() {
  return (
    <p>
      Constantly staying ahead of the curve, I embrace continuous learning and
      keep myself updated with the latest industry trends. By actively exploring
      new technologies, frameworks, and insights, I bring cutting-edge resources
      to every project, pushing the boundaries of what's possible in the digital
      realm.
    </p>
  );
}

function AboutMeArticle() {
  return (
    <article>
      <Fade top distance="10%">
        <Title />
      </Fade>
      <Fade top distance="10%" delay={200}>
        <Body1 />
      </Fade>
      <Fade top distance="10%" delay={400}>
        <Body2 />
      </Fade>
    </article>
  );
}

export default AboutMeArticle;
