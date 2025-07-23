import React, { useState } from "react";
import "./EditProject.css";

const EditProject = ({ projectId, projects, setProjects }) => {
  const [showForm, setShowForm] = useState(false);
  const [newName, setNewName] = useState("");

  const handleCancel = () => {
    setShowForm(false);
    setNewName("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProjects = projects.map((project) =>
      project.id === projectId
        ? { ...project, name: newName.trim() }
        : project
    );

    setProjects(updatedProjects);
    setShowForm(false);
    setNewName("");
  };

  const currentProject = projects.find((p) => p.id === projectId);

  return (
    <div>
      {!showForm && (
        <button
          onClick={() => {
            setShowForm(true);
            setNewName(currentProject?.name || "");
          }}
          className="edit-project"
        >
          Edit
        </button>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="project-form">
          <input
            type="text"
            placeholder="New Project Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="project-input"
            required
          />
          <div className="actions">
            <button type="submit" className="add-project">Update</button>
            <button type="button" onClick={handleCancel} className="cancel-project">Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditProject;
