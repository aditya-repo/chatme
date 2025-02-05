import { Box, Typography, Stack, Button } from '@mui/material'
import React, { useState } from 'react'

const ContactList = ({dashboard, socket, sendParentData, sendUserData}) => {    

    const [userid, setUserid] = useState(localStorage.getItem('userid'))
    
    return (
        <Box width={400} >
            <Stack spacing={2}>
            {dashboard
                .filter((contact) => contact._id !== userid)
                .map((contact, index) => (
                  <ContactCard key={index} contact={contact} socket={socket} sendParentData={sendParentData} sendUserData={sendUserData} />
                ))}
            </Stack>
        </Box>
    )
}

const ContactCard = ({contact, socket, sendParentData, sendUserData}) => {

    const loadChatHistory = async (chatroomid)=>{
        sendUserData(contact)
        socket.emit('fetchHistory', {chatroomid})

        socket.on('loadMessages', (message)=>{
            sendParentData(message)
        })
    }

    // console.log(contact);

    const findchatid = (chatroom)=>{
        const userid = localStorage.getItem('userid')
        return chatroom[userid]
    }
    

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
            <Button onClick={()=>loadChatHistory(findchatid(contact.chatrooms))}  sx={{
                marginRight: 4
            }} variant='contained' color='primary'>Message</Button> 
            </div>
        </Box>
    )
}

export default ContactList