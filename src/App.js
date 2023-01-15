import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import FilterButtons from './FilterButtons';
import EditTaskForm from './EditTaskForm';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', filter: 'important-not-urgent' },
    { id: 2, title: 'Task 2', filter: 'urgent-important' },
    { id: 3, title: 'Task 3', filter: 'not-important-not-urgent' },
  ]);
  const [filter, setFilter] = useState('all');
  const [editing, setEditing] = useState(null);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }

  const updateTask = (index, updatedTask) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
    setEditing(null);
  }

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <div>
      <TaskForm addTask={addTask} filter={filter} />
      <FilterButtons filter={filter} onFilterChange={setFilter} />
      <TaskList
        tasks={tasks}
        filter={filter}
        updateTask={updateTask}
        deleteTask={deleteTask}
        setEditing={setEditing}
        editing={editing}
      />
      {editing !== null && (
        <EditTaskForm
          task={tasks[editing]}
          index={editing}
          updateTask={updateTask}
        />
      )}
    </div>
  );
}

export default App;