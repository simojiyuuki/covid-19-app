import React from 'react';
import './App.css';
import MediaQueryProvider from './app/provider/MediaQueryProvider';
import Dashboard from './pages/Dashboard';
import { ThemeProvider, createTheme } from '@mui/material';
import themeOptions from './app/styles/themeOptions';

const App: React.FC = () => {
  const theme = createTheme(themeOptions);
  return (
    <MediaQueryProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Dashboard />
        </div>
      </ThemeProvider>
    </MediaQueryProvider>
  );
};

export default App;
