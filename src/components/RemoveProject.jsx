import React from "react";
import "./RemoveProject.css";


const RemoveProject = ({ projects, projectId, setProjects }) => {

    const handleRemoveProject = () => {
       const remainingProjects = projects.filter((project) => projectId !== project.id)
            setProjects(remainingProjects)
    }
    return (
        <div>
            <button onClick={handleRemoveProject} className="remove-project">X</button>
        </div>
    )
}

export default RemoveProject