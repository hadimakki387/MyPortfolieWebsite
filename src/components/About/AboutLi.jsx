import React from "react";



function AboutLi() {
  const Li = [
    {
      title: "The Complete 2023 Web Development Bootcamp.",
      body: "Sure. The Complete 2023 Web Development Bootcamp is an online course that teaches you how to build websites and web applications using HTML, CSS, and JavaScript. The course is taught by Angela Yu, a popular instructor on Udemy.",
      date: 2022,
      source: "Udemy",
      link:"https://www.udemy.com/course/the-complete-web-development-bootcamp/"
    },
    {
      title: "Laracast.",
      body: "Laracasts is a video tutorial platform created by Jeffrey Way, the creator of the Laravel PHP framework. Laracasts offers a wide range of video tutorials on Laravel, covering everything from the basics to advanced topics.",
      date: 2023,
      source: "Laracast",
      link:"https://laracasts.com/"
    },
    {
      title: "Learning Something Great 😉",
      body: "We continue learning everyday.",
      date: "Currently",
      source: "",
    },
  ];

  return Li.map((item, index) => (
   
      <li id={index} className="AboutLi">
      <a
        target="_blank"
        rel="noopener noreferrer"
        id="cardHover"
        aria-label="Open Human Centered Design 101"
        href={item.link}
        className="TitleLink"
      >
        {item.title}
        <small>{item.source}</small>
      </a>
      <a class="float-right" tabindex="-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M17 1c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-12 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2zm13 5v10h-16v-10h16zm2-6h-2v1c0 1.103-.897 2-2 2s-2-.897-2-2v-1h-8v1c0 1.103-.897 2-2 2s-2-.897-2-2v-1h-2v18h20v-18zm4 3v19h-22v-2h20v-17h2zm-17 7h-2v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4h-2v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"></path>
        </svg>
        <b>{item.date}</b>
      </a>
      <p className="">
        {item.body}
      </p>
    </li>
    
    
  ));
}

export default AboutLi;
