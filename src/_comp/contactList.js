import { Box, Typography, Stack } from '@mui/material'
import React from 'react'

const ContactList = ({dashboard}) => {
    return (
        <Box width={480} >
            <Stack spacing={2}>
                {dashboard.map((contact, index)=> <ContactCard key={index} contact={contact} />)}
            </Stack>
        </Box>
    )
}

const ContactCard = ({contact}) => {
    return (
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={2} mt={'0 !important'} color={'#fff'} borderBottom={'1px solid grey'}>
            <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} padding={2} marginTop={0}>
                <div style={{ background: "#fff", height: 56, width: 56, marginRight: 8, borderRadius: 30, }}></div>
                <div>
                    <Typography fontSize={20}>{contact.name}</Typography>
                    <Typography fontSize={16}>@{contact.username}</Typography>
                </div>
            </Box>
            <div>
                <Typography paddingRight={2}>{5}</Typography>
            </div>
        </Box>
    )
}

export default ContactList