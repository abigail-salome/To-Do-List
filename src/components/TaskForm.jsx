import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = ({
  onSubmit,
  setShowForm,
  initialValues = { priority: "Medium", completed: false },
}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [description, setDescription] = useState(initialValues.description);
  const [priority, setPriority] = useState(initialValues.priority);
  const [completed, setCompleted] = useState(initialValues.completed);
  const [dueDate, setDueDate] = useState(initialValues.dueDate);

  // handles cancel button
  const handleCancel = (e) => {
    e.preventDefault();

    resetForm();
  };

  const resetForm = () => {
    setShowForm(false);

    setTitle(initialValues.title);
    setDescription(initialValues.description);
    setPriority(initialValues.priority);
    setCompleted(initialValues.completed);
    setDueDate(initialValues.dueDate);
  };

  // handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      title,
      description,
      priority,
      completed,
      dueDate,
    });

    resetForm();
  };

  return (
    <form className="task-form-container" onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="title-input">Title:</label>
        <input
          autoFocus
          id="title-input"
          className="title-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </fieldset>
      <label>
        Description:
        <textarea
          className="description-input"
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
      <fieldset
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <input
          className="completed-input"
          id="completed-input"
          type="checkbox"
          style={{ margin: 0 }}
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        <label htmlFor="completed-input">Completed</label>
      </fieldset>
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
  );
};

export default TaskForm;
