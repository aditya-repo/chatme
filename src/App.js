import './css/App.css';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DashboardPage from './pages/Dashboard';
import FormPage from './pages/FormPage';
import URL from './config/apiConstant';
import axiosInstance from './config/axiosWrapper';

function App() {
  const theme = createTheme();
  const [isValid, setIsValid] = useState(null)
  const [dashboard, setDashboard] = useState([])

  useEffect(()=>{
    const setTokenValue = async ()=>{
      const token = localStorage.getItem('authToken')
      console.log(token);
      
      if (!token) {
        return
      }
      const response = await axiosInstance.post(URL.DASHBOARD())
      setIsValid(true)
      setDashboard(response.data.userarray)
    }
    setTokenValue()
  }, [])

  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xxl" disableGutters>
      {isValid ? <DashboardPage dashboard={dashboard} /> : <FormPage />}
      </Container>
    </ThemeProvider>
  );
}

export default App;
