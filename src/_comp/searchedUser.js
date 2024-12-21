import { Box, Typography, Stack, Button } from '@mui/material'
import React from 'react'

const SearchedUser = ({users}) => {
    return (
        <Box width={480} >
            <Stack spacing={2}>
                {users.map((user, index)=><ContactCard key={index} user={user} />)}
            </Stack>
        </Box>
    )
}

const ContactCard = ({ user }) => {
    return (
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={2} mt={'0 !important'} color={'#fff'} borderBottom={'1px solid grey'}>
            <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} padding={2} marginTop={0}>
                <div style={{ background: "#fff", height: 56, width: 56, marginRight: 8, borderRadius: 30, }}></div>
                <div>
                    <Typography fontSize={20}>{user.name}</Typography>
                    <Typography fontSize={16}>{user.username}</Typography>
                </div>
            </Box>
            <div>
                <Button sx={{
                    marginRight: 4
                }} variant='contained' color='primary'>Message</Button>
            </div>
        </Box>
    )
}

export default SearchedUser