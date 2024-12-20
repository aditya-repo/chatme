import { Box } from '@mui/material'
import React from 'react'
import LoginForm from '../_comp/loginForm'
import SignupForm from '../_comp/signupForm'

const LoginPage = ()=>{
    return(
        <Box display={'flex'} height={"100vh"}>
            <Box flexGrow={6} bgcolor={'#2c4454'}></Box>
            <Box flexGrow={2} minWidth={'420px'} 
            bgcolor="#f5f5f5" >
                <Box display={'flex'} justifyContent={'center'}>
                    <LoginForm />
                </Box>
            </Box>
        </Box>
    )
}

export default LoginPage