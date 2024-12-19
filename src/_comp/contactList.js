import { Box, Typography, Stack } from '@mui/material'
import React from 'react'

const ContactList = () => {
    return (
        <Box width={480} bgcolor={'lightcyan'} paddingLeft={4} >
            <Typography fontSize={28}>Chats</Typography>
            <Stack spacing={2}>
                <ContactCard name={'Raju Bhaiya'} message={"Hello Buddy"} time={"Monday"} />
                <ContactCard name={'Benga'} message={"Hello Mamu"} time={"Sunday"} />
                <ContactCard name={'Benga'} message={"Hello Mamu"} time={"Sunday"} />
                <ContactCard name={'Benga'} message={"Hello Mamu"} time={"Sunday"} />
                <ContactCard name={'Benga'} message={"Hello Mamu"} time={"Sunday"} />
                <ContactCard name={'Benga'} message={"Hello Mamu"} time={"Sunday"} />
                <ContactCard name={'Benga'} message={"Hello Mamu"} time={"Sunday"} />
                <ContactCard name={'Benga'} message={"Hello Mamu"} time={"Sunday"} />
                <ContactCard name={'Benga'} message={"Hello Mamu"} time={"Sunday"} />
                <ContactCard name={'Benga'} message={"Hello Mamu"} time={"Sunday"} />
                <ContactCard name={'Benga'} message={"Hello Mamu"} time={"Sunday"} />
                <ContactCard name={'Benga'} message={"Hello Mamu"} time={"Sunday"} />
                <ContactCard name={'Benga'} message={"Hello Mamu"} time={"Sunday"} />
                <ContactCard name={'Benga'} message={"Hello Mamu"} time={"Sunday"} />
                <ContactCard name={'Benga'} message={"Hello Mamu"} time={"Sunday"} />
                <ContactCard name={'Benga'} message={"Hello Mamu"} time={"Sunday"} />
            </Stack>
        </Box>
    )
}

const ContactCard = ({ name, message, time }) => {
    return (
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} gap={2} sx={{marginTop: 0}}>
            <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} padding={2} marginTop={0}>
                <div style={{ background: "red", height: 56, width: 56, marginRight: 8, borderRadius: 30 }}></div>
                <div>
                    <Typography fontSize={20}>{name}</Typography>
                    <Typography fontSize={16}>{message}</Typography>
                </div>
            </Box>
            <div>
                <Typography paddingRight={2}>{time}</Typography>
            </div>
        </Box>
    )
}

export default ContactList