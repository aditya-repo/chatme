import React from 'react';
import { Box, Card, CardContent, Typography, TextField, Button, Link } from '@mui/material';

const SignupForm = () => {
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
            New Here? Join Us
          </Typography>
          {/* Email Field */}
          <TextField
          fullWidth
          label="Full Name"
          type="text"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email Address"
          type="email"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Username"
          type="text"
          variant="outlined"
          margin="normal"
        />
          {/* Password Field */}
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
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
            sx={{ bgcolor: '#1976d2', textTransform: 'none', marginBottom: 2 }}
          >
            Sign Up
          </Button>
          {/* Signup Link */}
          <Box display="flex" justifyContent="center">
            <Typography variant="body2" marginRight={1}>
              Don't have an account?
            </Typography>
            <Link href="/signin" underline="hover">
              Sign Up
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignupForm;
