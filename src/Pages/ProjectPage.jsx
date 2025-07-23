import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddTask from "../components/AddTask";
import TaskCard from "../components/TaskCard";
import "./ProjectPage.css"

const ProjectPage = ({ projects }) => {
  const { projectId } = useParams(); // Get projectId from URL

  const project = projects.find((p) => p.id === projectId); // Find project by ID

  // get projects from local storage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem(`tasks-${projectId}`);
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  //  save projects to local storage
  useEffect(() => {
    localStorage.setItem(`tasks-${projectId}`, JSON.stringify(tasks));
  }, [tasks, projectId]);

  
  if (!project) return <h2>Project not found</h2>;

  return (
    <div className="task-container">
      <h1 className="project-name">{project.name}</h1>
      <AddTask tasks={tasks} setTasks={setTasks} projectId={projectId} />
      <TaskCard tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default ProjectPage;
