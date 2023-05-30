import React from 'react';
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList.js";
import "../styles/Project.css";

const Projects = () => {
  return (
    <>
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>
    <div className="projects">
      <h1 class="proTitle">
        <span class="title-word title-word-1">My</span>
        <span class="title-word title-word-2"> Personal</span>
        <span class="title-word title-word-3"> Projects</span>
      </h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  </>
  )
}

export default Projects;