import React from "react";

const ProjectDetails = props => {
  console.log(props);
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem placeat
            ducimus cupiditate? Deleniti odio dolorem modi in soluta deserunt
            eum, quam rerum quas blanditiis delectus laborum voluptas provident
            doloremque sunt?
          </p>
        </div>
        <div className="card-cation gret lighten-4 grey-text">
          <div>Posted by Mario Marin</div>
          <div>2dn december, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
