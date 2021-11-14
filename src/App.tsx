import React from 'react';
import './App.css';
import BarPlot from './components/plots/BarPlot';
import BubblePlot from './components/plots/BubblePlot';
import LinePlot from './components/plots/LinePlot';
import PiePlot from './components/plots/PiePlot';
import RadarPlot from './components/plots/RadarPlot';

const App: React.FC = () => {
  return (
    <div className="App">
      <LinePlot />
      <PiePlot />
      <BarPlot />
      <RadarPlot />
      <BubblePlot />
    </div>
  );
};

export default App;
