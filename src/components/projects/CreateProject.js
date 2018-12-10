import React, { Component } from "react";
import { createProject } from "../../store/actions/projectActins";
import { connect } from "react-redux";

class CreateProject extends Component {
  state = {
    Title: "",
    Content: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-test textdarken-3">Create new project</h5>
            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="content">Project Content</label>
              <textarea
                id="content"
                className="materialize-textarea"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <button className="btn blue-a z-depth-0">Create</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(mapDispatchToProps)(CreateProject);
