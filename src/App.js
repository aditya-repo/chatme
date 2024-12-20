import './css/App.css';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Container } from '@mui/material';
import React from 'react';
import DashboardPage from './pages/Dashboard';
import FormPage from './pages/FormPage';

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xxl" disableGutters>
        <DashboardPage />
      </Container>
    </ThemeProvider>
  );
}

export default App;
