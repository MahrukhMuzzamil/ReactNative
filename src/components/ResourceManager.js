import React, { useState } from 'react';

const ResourceManager = ({ resources, addResource }) => {
  const [resource, setResource] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (resource) {
      addResource(resource);
      setResource('');
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
        <button type="submit">Add Resource</button>
      </form>
      <ul>
        {resources.map((res, index) => (
          <li key={index}>{res}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResourceManager;
