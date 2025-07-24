import React, { useState } from "react";
import TaskForm from "./TaskForm";

const AddTask = ({ setTasks }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="add-task-container">
      {!showForm && (
        <button onClick={() => setShowForm(true)} className="add-task-button">
          + Add Task
        </button>
      )}

      {showForm && (
        <TaskForm
          onSubmit={({ title, description, priority, dueDate, completed }) => {
            const newTask = {
              id: Date.now(),
              title,
              description,
              dueDate,
              priority,
              completed,
            };
            setTasks((prev) => [...prev, newTask]);
          }}
          setShowForm={setShowForm}
        />
      )}
    </div>
  );
};

export default AddTask;
