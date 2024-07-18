import React, { useState } from 'react';
import './styles.css';
import DailyPlan from './components/DailyPlan';
import ProgressTracker from './components/ProgressTracker';
import ResourceManager from './components/ResourceManager';

function App() {
  const [learningPlan, setLearningPlan] = useState([]);
  const [progress, setProgress] = useState([]);
  const [resources, setResources] = useState([]);

  const addTask = (task) => {
    setLearningPlan([...learningPlan, task]);
  };

  const addProgress = (progressItem) => {
    setProgress([...progress, progressItem]);
  };

  const addResource = (resource) => {
    setResources([...resources, resource]);
  };

  return (
    <div className="App">
      <h1>Personalized Learning Companion</h1>
      <DailyPlan learningPlan={learningPlan} addTask={addTask} />
      <ProgressTracker progress={progress} addProgress={addProgress} />
      <ResourceManager resources={resources} addResource={addResource} />
    </div>
  );
}

export default App;
