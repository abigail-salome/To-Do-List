import React from "react";
import "./SideBar.css";
import EditProject from "./EditProject";
import { useNavigate } from "react-router-dom";

const SideBar = ({ projects, setProjects }) => {
  const navigate = useNavigate();
  const onSubmit = (projectId, newName) => {
    const updatedProjects = projects.map((project) => {
      return project.id === projectId ? { ...project, name: newName } : project;
    });
    setProjects(updatedProjects);
  };
  return (
    <div className="sidebar">
      <h2>My Projects</h2>
      <ul className="project-list">
        {projects.length === 0 ? (
          <p style={{ color: "#aaa", fontStyle: "italic", padding: "10px" }}>
            No projects yet. Add one!
          </p>
        ) : (
          projects.map((project) => (
            <li key={project.id} className="project-item">
              <span
                className="project-name"
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                {project.name}
              </span>
              <div className="actions">
                <EditProject project={project} onSubmit={onSubmit} />
                <button
                  onClick={() =>
                    setProjects(projects.filter(({ id }) => id !== project.id))
                  }
                  className="remove-project"
                >
                  X
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default SideBar;
