import React, { useState } from "react";
import "./EditTask.css";

const EditTask = ({ tasks, setTasks, taskId }) => {
  const [showForm, setShowForm] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPriority, setNewPriority] = useState("Medium");
  const [newCompleted, setNewCompleted] = useState(false);
  const [newDueDate, setNewDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? {
            ...task,
            title: newTitle,
            description: newDescription,
            priority: newPriority,
            completed: newCompleted,
            dueDate: newDueDate,
          }
        : task
    );

    setTasks(updatedTasks);
    handleCancel();
  };

  const handleCancel = () => {
    setShowForm(false);
    setNewTitle("");
    setNewDescription("");
    setNewPriority("Medium");
    setNewCompleted(false);
    setNewDueDate("");
  };

  const openForm = () => {
    const currentTask = tasks.find((task) => task.id === taskId);
    if (currentTask) {
      setNewTitle(currentTask.title || "");
      setNewDescription(currentTask.description || "");
      setNewPriority(currentTask.priority || "Medium");
      setNewCompleted(currentTask.completed || false);
      setNewDueDate(currentTask.dueDate || "");
    }
    setShowForm(true);
  };

  return (
    <div>
      {!showForm && (
        <button className="edit-task-button" onClick={openForm}>
          Edit
        </button>
      )}

      {showForm && (
        <div className="modal-overlay">
          <form className="modal-form" onSubmit={handleSubmit}>
            <label>
              Title:
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </label>
            <label>
              Description:
              <input
                type="text"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </label>
            <label>
              Priority:
              <select
                value={newPriority}
                onChange={(e) => setNewPriority(e.target.value)}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </label>
            <label>
              Completed:
              <input
                type="checkbox"
                checked={newCompleted}
                onChange={(e) => setNewCompleted(e.target.checked)}
              />
            </label>
            <label>
              Due Date:
              <input
                type="date"
                value={newDueDate}
                onChange={(e) => setNewDueDate(e.target.value)}
              />
            </label>
            <div className="actions">
              <button className="update-task-button" type="submit">
                Update
              </button>
              <button
                className="cancel-task-button"
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditTask;
