import { useState, useEffect } from "react";

import useFetchProjects from "./../hooks/useFetchProjects";

const Projects = () => {
  const { projects, isLoading, error } = useFetchProjects();

  if (isLoading)
    return (
      <section className="projects">
        <div className="loading"></div>
      </section>
    );

  if (error)
    return (
      <section className="projects">
        <div className="error">
          <p>Oops, there was an error</p>
        </div>
      </section>
    );

  return (
    <section className="projects">
      <div className="title">
        <h2>projects</h2>

        <div className="title-underline"></div>
      </div>

      <div className="projects-center">
        {projects.map((project) => {
          const { id, image, title, url } = project;

          return (
            <a
              className="project"
              key={id}
              rel="noreferrer"
              target="_blank"
              href={url}
            >
              <img src={image} alt={title} className="img" />

              <h5>{title}</h5>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
