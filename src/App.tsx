import React from 'react';
import './App.css';
import MediaQueryProvider from './app/provider/MediaQueryProvider';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <MediaQueryProvider>
      <div className="App">
        <Dashboard />
      </div>
    </MediaQueryProvider>
  );
};

export default App;
