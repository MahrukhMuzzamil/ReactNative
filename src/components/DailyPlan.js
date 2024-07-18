// DailyPlan.js - Updated with priority and due date features

import React, { useState } from 'react';

const DailyPlan = ({ learningPlan, addTask }) => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      addTask({ task, priority, dueDate });
      setTask('');
      setPriority('Medium');
      setDueDate('');
    }
  };

  return (
    <div>
      <h2>Daily Learning Plan</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          placeholder="Due date"
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {learningPlan.map((task, index) => (
          <li key={index}>
            <strong>{task.task}</strong> - Priority: {task.priority}, Due: {task.dueDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyPlan;
