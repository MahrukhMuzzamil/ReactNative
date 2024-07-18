// ProgressTracker.js - Updated with date/time and notes features

import React, { useState } from 'react';

const ProgressTracker = ({ progress, addProgress }) => {
  const [progressItem, setProgressItem] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (progressItem) {
      addProgress({ progressItem, timestamp, notes });
      setProgressItem('');
      setTimestamp('');
      setNotes('');
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
        <input
          type="datetime-local"
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
          placeholder="Timestamp"
        />
        <input
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Notes (optional)"
        />
        <button type="submit">Add Progress</button>
      </form>
      <ul>
        {progress.map((item, index) => (
          <li key={index}>
            <strong>{item.progressItem}</strong> - {item.timestamp} {item.notes && `- ${item.notes}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressTracker;
