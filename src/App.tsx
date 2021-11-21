import React from 'react';
import MediaQueryProvider from './providers/MediaQueryProvider';
import { ThemeProvider, createTheme } from '@mui/material';
import themeOptions from './styles/themeOptions';
import Routes from './components/pages/routes';

const App: React.FC = () => {
  const theme = createTheme(themeOptions);
  return (
    <MediaQueryProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </MediaQueryProvider>
  );
};

export default App;
