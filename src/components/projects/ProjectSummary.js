import React from "react";

const ProjectSummary = ({ project }) => {
  return (
    <div>
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>Posted by Mario Dominguez</p>
          <p className="grey-text">3er of September, 2am</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;