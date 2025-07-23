import React from "react";
import "./SideBar.css";
import EditProject from "./EditProject";
import RemoveProject from "./RemoveProject";

const SideBar = ({ projects, setProjects, navigate }) => {
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
              <span className="project-name" onClick={() => navigate(`/projects/${project.id}`)}>{project.name}</span>
              <div className="actions">
                <EditProject projects={projects} projectId={project.id} setProjects={setProjects} />
                <RemoveProject projects={projects} projectId={project.id} setProjects={setProjects} />
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default SideBar;
