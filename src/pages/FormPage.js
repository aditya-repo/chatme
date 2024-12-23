import { Box } from '@mui/material'
import React, { useState } from 'react'
import LoginForm from '../_comp/loginForm'
import SignupForm from '../_comp/signupForm'

const LoginPage = ({error})=>{
    const [currentPage, setCurrentPage] = useState('home')

    const renderPage = ()=>{
        switch (currentPage) {
            case 'login':
                return <LoginForm error={error} setCurrentPage={setCurrentPage} />
            case 'signup':
                return <SignupForm setCurrentPage={setCurrentPage} />
            default:
                return <LoginForm setCurrentPage={setCurrentPage} />
        }
    }
    return(
        <Box display={'flex'} height={"100vh"}>
            <Box flexGrow={6} bgcolor={'#2c4454'}></Box>
            <Box flexGrow={2} minWidth={'420px'} 
            bgcolor="#f5f5f5" >
                <Box display={'flex'} justifyContent={'center'}>
                    {renderPage()}
                </Box>
            </Box>
        </Box>
    )
}

export default LoginPage