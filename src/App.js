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
  const [isValid, setIsValid] = useState(false)
  const [dashboard, setDashboard] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const setTokenValue = async () => {
      const token = localStorage.getItem('authToken')
      const userid = localStorage.getItem('userid')

      if (!token) {
        return
      }
      
      try {
        console.log(URL.DASHBOARD());
        
        const response = await axiosInstance.post(URL.DASHBOARD(), {userid})
        setIsValid(true)
        setDashboard(response.data.userarray)     

      } catch (error) {
        setError(error.response.data.message)   
       
      }
    }
    setTokenValue()
  }, [])



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xxl" disableGutters>
        {isValid ? <DashboardPage error={error} dashboard={dashboard} /> : <FormPage error={error} />}
      </Container>
    </ThemeProvider>
  );
}

export default App;
