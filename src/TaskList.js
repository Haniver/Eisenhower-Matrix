import React, { useState } from 'react';
import EditTaskForm from './EditTaskForm';

function TaskList({ tasks, filter, updateTask, deleteTask }) {
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') {
      return true;
    }
    return task.filter === filter;
  });

  const handleEdit = (index) => {
    setEditing(index);
    setShowForm(true);
  }

  const handleUpdate = (index, updatedTask) => {
    updateTask(index, updatedTask);
    setEditing(null);
    setShowForm(false);
  }

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={task.id}>
            {task.title} - {task.filter}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      {showForm && editing !== null && (
        <EditTaskForm
          task={filteredTasks[editing]}
          index={editing}
          updateTask={handleUpdate}
        />
      )}
    </div>
  );
}

export default TaskList;


