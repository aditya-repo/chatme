import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, Typography, TextField, Button, Link } from '@mui/material';
import axios from 'axios';
import URL from '../config/apiConstant';

const LoginForm = ({setCurrentPage, error}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')

  const handleLogin = async (e)=>{
    e.preventDefault()
    console.log("hello");
    
    const payload = {email, password}
    const response = await axios.post(URL.LOGIN(), payload)
    const token = response.data.token
    const userid = response.data.userid
    console.log(token);
    
    if (token) {
      localStorage.setItem('authToken', token)
      localStorage.setItem('userid', userid)
    }else{
      setErrors("Something went wrong")
    }
  }

  useEffect(()=>{
    const setError = ()=>{
      setErrors(error)
    }

    setError()
  }, [0])
  
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Card
        sx={{
          maxWidth: 400,
          padding: 2,
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <CardContent>
          <Typography variant="h5" textAlign="left" marginBottom={2}>
            Welcome Buddy!
            {errors}
          </Typography>
          <Box component="form" onSubmit={handleLogin}>
          {/* Email Field */}
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
          {/* Password Field */}
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
          {/* Forgot Password Link */}
          <Box display="flex" justifyContent="flex-end" marginBottom={2}>
            <Link underline="hover"   >
              Forgot Password?
            </Link>
          </Box>
          {/* Login Button */}
          <Button
            variant="contained"
            fullWidth
            sx={{ bgcolor: '#1976d2', textTransform: 'none', marginBottom: 2 }}
            type='submit'
          >
            Login
          </Button>
          {/* Signup Link */}
          <Box display="flex" justifyContent="center">
            <Typography variant="body2" marginRight={1}>
              Don't have an account?
            </Typography>
            <Link  onClick={() => setCurrentPage('signup')} underline="hover">
              Sign Up
            </Link>
          </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginForm;
