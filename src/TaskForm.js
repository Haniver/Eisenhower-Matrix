import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [filter, setFilter] = useState('urgent-important');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ id: Date.now(), title, filter });
    setTitle('');
    setFilter('urgent-important');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Filter:
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="urgent-important">Urgent and Important</option>
          <option value="important-not-urgent">Important but not Urgent</option>
          <option value="urgent-not-important">Urgent but not Important</option>
          <option value="not-important-not-urgent">Not Important and not Urgent</option>
        </select>
      </label>
      <br />
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;
