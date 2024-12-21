import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, TextField, Button, Link } from '@mui/material';
import URL from '../config/apiConstant';
import axios from 'axios';

const SignupForm = ({ setCurrentPage }) => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('');

  const submitForm = async (e) => {
    e.preventDefault()

    const payload = {name, username, email, password}

    console.log(payload);

    try {
      const response = await axios.post(URL.SIGNUP(), payload)
      const { token } = response.data
      console.log('response', response.data);
      
      if (token) {
        localStorage.setItem(token)
      }
    } catch (error) {
      setError('Invalid request')
    }

  }

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
          <Box
            component="form"
            onSubmit={submitForm}
          >
            <Typography variant="h5" textAlign="left" marginBottom={2}>
              New Here? Join Us
            </Typography>
            {/* Email Field */}
            <TextField
              fullWidth
              label="Full Name"
              type="text"
              variant="outlined"
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              label="Username"
              type="text"
              variant="outlined"
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {/* Password Field */}
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Forgot Password Link */}
            <Box display="flex" justifyContent="flex-end" marginBottom={2}>
              <Link href="/forgot-password" underline="hover">
                Forgot Password?
              </Link>
            </Box>
            {/* Login Button */}
            <Button
              variant="contained"
              fullWidth
              type='submit'
              sx={{ bgcolor: '#1976d2', textTransform: 'none', marginBottom: 2 }}
            >
              Sign Up
            </Button>
            {/* Signup Link */}
            <Box display="flex" justifyContent="center">
              <Typography variant="body2" marginRight={1}>
                Don't have an account?
              </Typography>
              <Link onClick={() => setCurrentPage('login')} underline="hover">
                Sign Up
              </Link>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignupForm;
