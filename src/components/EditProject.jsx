import React, { useState } from "react";
import "./EditProject.css";

const EditProject = ({ project, onSubmit }) => {
  const [showForm, setShowForm] = useState(false);
  const [newName, setNewName] = useState(project.name);

  const handleCancel = () => {
    setShowForm(false);
    setNewName(project.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(project.id, newName);
    setShowForm(false);
    setNewName("");
  };

  return (
    <div>
      {!showForm && (
        <button
          onClick={() => {
            setShowForm(true);
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
            <button type="submit" className="add-project">
              Update
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="cancel-project"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditProject;
