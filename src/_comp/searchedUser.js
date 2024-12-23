import { Box, Typography, Stack, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axiosInstance from '../config/axiosWrapper'
import URL from '../config/apiConstant'

const SearchedUser = ({ users, dashboard }) => {
    
    const userid = localStorage.getItem('userid')
    
    
    return (
        <Box width={480}>
        <Stack spacing={2}>
          {users.map((user, index) => {
            // Find the matching dashboard entry based on user._id
                

            const matchedDashboard = Object.keys(user.chatrooms).includes(userid);           
            console.log(matchedDashboard);
             
            
      
            // If a matching dashboard is found, add the matched prop
            const userWithMatchedProp = matchedDashboard
              ? {
                  ...user,
                  matched: true,
                }
              : user;
      
            return <ContactCard key={index} user={userWithMatchedProp} />;
          })}
        </Stack>
      </Box>
      
    )
}

const ContactCard = ({ user }) => {

    const pairing = async (receipentid) => {
        const response = await axiosInstance.post(URL.PAIR_NEW_USER(), { senderid: localStorage.getItem('userid'), receipentid })
        console.log(response.data);
    }


    return (
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={2} mt={'0 !important'} color={'#fff'} borderBottom={'1px solid grey'}>
            <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} padding={2} marginTop={0}>
                <div style={{ background: "#fff", height: 56, width: 56, marginRight: 8, borderRadius: 30, }}></div>
                <div>
                    <Typography fontSize={20}>{user.name}</Typography>
                    <Typography fontSize={16}>@{user.username}</Typography>
                </div>
            </Box>
            <div>
                {user.matched ? <Button  sx={{
                    marginRight: 4
                }} variant='contained' color='primary'>Message</Button> :
                    <Button onClick={() => pairing(user._id)} sx={{
                        marginRight: 4
                    }} variant='contained' color='success'>Start</Button>
                }

            </div>
        </Box>
    )
}

export default SearchedUser