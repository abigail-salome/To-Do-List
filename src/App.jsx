import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectList from "./Pages/ProjectList";
import ProjectPage from "./Pages/ProjectPage.jsx";

const App = () => {
  // Load from localStorage before first render
  const [projects, setProjects] = useState(() => {
    const stored = localStorage.getItem("projects");
    return stored ? JSON.parse(stored) : [];
  });

  // Save projects to localStorage on change
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<ProjectList projects={projects} setProjects={setProjects} />}
        />
        <Route
          path="/projects/:projectId"
          element={<ProjectPage projects={projects} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
