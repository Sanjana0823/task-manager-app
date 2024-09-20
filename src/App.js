import logo from './assets/logo.svg';
import './styles/App.css';
// import React from 'react';
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
      dueDate: 'No due date',
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h1>Task Manager App</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
