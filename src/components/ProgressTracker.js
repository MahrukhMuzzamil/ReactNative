import React, { useState } from 'react';

const ProgressTracker = ({ progress, addProgress }) => {
  const [progressItem, setProgressItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (progressItem) {
      addProgress(progressItem);
      setProgressItem('');
    }
  };

  return (
    <div>
      <h2>Progress Tracker</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={progressItem}
          onChange={(e) => setProgressItem(e.target.value)}
          placeholder="Add progress item"
        />
        <button type="submit">Add Progress</button>
      </form>
      <ul>
        {progress.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressTracker;
