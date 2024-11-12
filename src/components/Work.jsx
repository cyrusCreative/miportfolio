import React from "react";

// Componenet
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "./images/crea8ives.png",
    title: "Crea8ives",
    tags: ["Web-design", "E-Commerce"],
    projectLink: "https://www.crea8ives.com/",
  },
  {
    imgSrc: "./images/portfolio.png",
    title: "Portfolio Website",
    tags: ["Web-design", "Portfolio"],
    projectLink: "https://cyruscreative.github.io/cyrusloaded.io/#",
  },
  {
    imgSrc: "./images/todo.png",
    title: "Todo List",
    tags: ["Web-design"],
    projectLink: "https://cyruscreative.github.io/todo_list/",
  },
  {
    imgSrc: "./images/fulexam.png",
    title: "Enhance Academic Management System",
    tags: ["EMS", "Desktop App"],
    projectLink: "",
  },
];

const Work = () => {
  return (
    <>
      <section id="work" className="section">
        <div className="container">
          <h2 className="headline-2 mb-8 reveal-up">My Portfolio Highlights</h2>
          <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(270px,_1fr))]">
            {works.map(({ imgSrc, title, tags, projectLink }, key) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                classes="reveal-up"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
