import React, { useState } from 'react';

function EditTaskForm({ task, index, updateTask }) {
  const [title, setTitle] = useState(task.title);
  const [filter, setFilter] = useState(task.filter);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(index, { title, filter });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Task</h2>
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
      <button type="submit">Save</button>
    </form>
  );
}

export default EditTaskForm;
