import React from "react";
import SideBar from "../components/SideBar";
import AddProject from "../components/AddProject";

import { useNavigate } from "react-router-dom";



const ProjectList = ({ projects, setProjects}) => {
  
  const navigate = useNavigate()
  

  return (
    <div>
        
      <SideBar projects={projects} setProjects={setProjects} navigate={navigate} />
      <AddProject setProjects={setProjects} />
    </div>
  );
};

export default ProjectList;
