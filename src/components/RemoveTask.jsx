import React from 'react'
import "./RemoveTask.css"

const RemoveTask = ({ tasks, setTasks, taskId }) => {
    const handleRemoveTasks = () => {
        const remainingTasks = tasks.filter((task) => taskId !== task.id)
        setTasks(remainingTasks)
    }
   

  return (
    <div>
        <button className="remove-task-button" onClick={handleRemoveTasks}>X</button>
    </div>
  )
}

export default RemoveTask