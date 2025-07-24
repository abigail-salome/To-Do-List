import React, { useState } from "react";
import "./AddTask.css";

const AddTask = ({ tasks, setTasks, projectId }) => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [completed, setCompleted] = useState(false);
  const [dueDate, setDueDate] = useState("");

  // handles cancel button
  const handleCancel = () => {
    setShowForm(false);
    setTitle("");
    setDescription("");
    setPriority("");
    setCompleted("");
    setDueDate("");

    setShowForm(false);
  };

  // handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      completed,
      dueDate,
      projectId,
    };

    setTasks([...tasks, newTask]);

    // resets form
    handleCancel();
  };

  return (
    <div className="add-task-container">
      {!showForm && (
        <button onClick={() => setShowForm(true)} className="add-task-button">
          +  Add Task
        </button>
      )}

      {showForm && (
        <form className="task-form-container" onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              className="title-input"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Description:
            <input
              className="description-input"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>Priority:</label>
          <select
            className="priority-input"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <label>
            Completed:
            <input
              className="completed-input"
              type="checkbox"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
            />
          </label>
          <label>
            Due Date:
            <input
              className="due-date-input"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </label>
          <div className="actions">
            <button className="save-task-button" type="submit">
              Add
            </button>
            <button className="cancel-task-button" onClick={handleCancel}>
              cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddTask;
