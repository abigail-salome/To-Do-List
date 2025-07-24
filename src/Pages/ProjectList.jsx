import React from "react";
import SideBar from "../components/SideBar";
import AddProject from "../components/AddProject";

const ProjectList = ({ projects, setProjects }) => {
  return (
    <div>
      <SideBar projects={projects} setProjects={setProjects} />
      <AddProject setProjects={setProjects} />
    </div>
  );
};

export default ProjectList;
