import React from "react";
import "./AddProject.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


const AddProject = ({ setProjects }) => {
  const [showForm, setShowForm] = useState(false);
  const [projectName, setProjectName] = useState("");

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!projectName.trim()) return;

    const newProject = {
      id: uuidv4(),
      name: projectName.trim(),
    };
    setProjects((prev) => [...prev, newProject]); // adds a new project
    
    // clear the input field
    setProjectName("");
    // Hide the form
    setShowForm(false);
  };

  // handle cancel
  const handleCancel = () => {
    // hide the form
    setShowForm(false);

    // clear the input field
    setProjectName("");
  };
  return (
    <div className="add-project-container">
      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="add-project-button"
        >
          + Add Project
        </button>
      )}

      {showForm && (
        <form className="project-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="project-input"
            required
            autoFocus
          />
          <div className="form-actions">
            <button className="save-project" type="submit">
              Add
            </button>
            <button className="cancel-project" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddProject;
