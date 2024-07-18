// ResourceManager.js - Updated with category and rating features

import React, { useState } from 'react';

const ResourceManager = ({ resources, addResource }) => {
  const [resource, setResource] = useState('');
  const [category, setCategory] = useState('Article');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (resource) {
      addResource({ resource, category, rating });
      setResource('');
      setCategory('Article');
      setRating(0);
    }
  };

  return (
    <div>
      <h2>Resource Manager</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={resource}
          onChange={(e) => setResource(e.target.value)}
          placeholder="Add a new resource"
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Article">Article</option>
          <option value="Video">Video</option>
          <option value="Book">Book</option>
        </select>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(parseInt(e.target.value))}
          placeholder="Rating (1-5)"
          min="1"
          max="5"
        />
        <button type="submit">Add Resource</button>
      </form>
      <ul>
        {resources.map((res, index) => (
          <li key={index}>
            <strong>{res.resource}</strong> - Category: {res.category}, Rating: {res.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceManager;
