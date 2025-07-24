import React, { useState } from "react";
import "./EditTask.css";
import TaskForm from "./TaskForm";

const EditTask = ({ tasks, setTasks, task }) => {
  const [showForm, setShowForm] = useState(false);

  const onSubmit = ({ title, description, priority, dueDate, completed }) => {
    const updatedTasks = tasks.map((task_) =>
      task_.id === task.id
        ? {
            ...task_,
            title,
            description,
            priority,
            completed,
            dueDate,
          }
        : task_
    );

    setTasks(updatedTasks);
  };

  return (
    <div>
      {!showForm && (
        <button className="edit-task-button" onClick={() => setShowForm(true)}>
          Edit
        </button>
      )}

      {showForm && (
        <div className="modal-overlay">
          <TaskForm
            setShowForm={setShowForm}
            onSubmit={onSubmit}
            initialValues={task}
          />
        </div>
      )}
    </div>
  );
};

export default EditTask;
