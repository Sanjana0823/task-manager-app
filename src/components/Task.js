// src/components/Task.js
import React from 'react';

function Task({ task }) {
  return (
    <div className="task">
      <h3>{task.title}</h3>
      <p>{task.dueDate}</p>
    </div>
  );
}

export default Task;
