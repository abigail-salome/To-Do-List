
import EditTask from "./EditTask";
import RemoveTask from "./RemoveTask";
import "./TaskCard.css";

const TaskCard = ({ tasks, setTasks }) => {
  const toggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <button
              className="circle-btn"
              onClick={() => toggleComplete(task.id)}
            >
            </button>

            <p className={task.completed ? "struck-text" : ""}>{task.title}</p>

            {/* Optional details */}
            {/* <p>{task.description}</p>
            <p>Priority: {task.priority}</p>
            <p>Completed: {task.completed ? "yes" : "no"}</p>
            <p>Due: {task.dueDate}</p> */}

            <div className="actions">
              <EditTask tasks={tasks} setTasks={setTasks} task={task} />
              <RemoveTask tasks={tasks} setTasks={setTasks} taskId={task.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskCard;
