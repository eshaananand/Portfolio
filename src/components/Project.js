import React from "react";
import ProjectCard from "./ProjectCard";
import projectdata from "../data/db/projectdata";
import "../css/project.css";
function Project(){
    return (
        <div className="project-section" name="project">
            <h2>Projects</h2>
            <div className="project-list">   
                {projectdata.map(item =>{
                    return <ProjectCard image={item.image} alttext={item.alttext} title={item.title} content={item.content} github={item.github} web={item.web} />
                })}
            </div>
        </div>

    );
}
export default Project;