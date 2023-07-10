import React from 'react';
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import PreviewIcon from '@mui/icons-material/Preview';
import "../styles/ProjectDisplay.css";

const ProjectDisplay = () => {
    
    const { id } = useParams();
    const project = ProjectList[id];
    return (
        <div className="project">
            <h1> {project.name}</h1>
            <img src={project.image} alt=''/>
            <p>
                <b>Skills:</b> {project.skills}
            </p>
            <div>
                {project.url && <a target='__blank' href={project.url}><PreviewIcon /></a>}
                <a target='__blank' href={project.link}><GitHubIcon /></a>
            </div>
        </div>
    );
}

export default ProjectDisplay