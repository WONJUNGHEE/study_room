import React from 'react'
import './App.css';
import Schedule from './components/Schedule'
import Weather from './components/Weather'


function App() {
  return (
    <div className="App">
      <h2>TOP 독서실 Study Room Schedule </h2>
      <Schedule />
      <Weather/>
    </div>
  );
}

export default App;
