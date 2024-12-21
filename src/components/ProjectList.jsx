// src/components/ProjectList.jsx
import React from 'react';

function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <img key={index} src={project.img} alt={`Project ${index}`} />
      ))}
    </div>
  );
}

export default ProjectList;