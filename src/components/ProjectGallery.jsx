import React from 'react'
import { projectData } from "../constants";
import Card from './Card';

function ProjectGallery() {

    const cardGallery = 'grid md:grid-cols-3 sm:grid-cols-2 p:grid-cols-1 gap-4 gap-y-20'

    return (
        <div className={cardGallery}>
            {projectData.map((project) => (
                <Card
                key={project.id}
                projectName={project.projectName}
                repoLink={project.projectRepoLink}
                demoLink = {project.projectDemoLink}
                imgPath = {project.imgPth}
                projectLanguages = {project.languages}
                projectTools={project.tools}
                projectDescription = {project.description} 
                />
            ))}
        </div>
    );
}

export default ProjectGallery