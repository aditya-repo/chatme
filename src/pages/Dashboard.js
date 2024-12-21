import { Typography, Box } from '@mui/material';
import ContactList from '../_comp/contactList';
import { LeftChatString, SimpleChatStringLeft } from '../_comp/leftChatString';
import { RightChatString, SimpleChatString } from '../_comp/rightChatString';
import SendIcon from '@mui/icons-material/Send';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../config/axiosWrapper';
import URL from '../config/apiConstant';
import SearchedUser from '../_comp/searchedUser';


import { io } from 'socket.io-client';

const DashboardPage = ({ dashboard }) => {

  const [searched, setSearched] = useState([])

  const searching = async (user) => {
    if (user.length > 4) {

      const response = await axiosInstance.post(URL.SEARCH_USER(user))
      setSearched(response.data.userarray)
    } else {
      setSearched([])
    }
  }


  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  console.log(messages);
  
  

  useEffect(() => {
    // Connect to the Socket.io server
    const socketConnection = io(URL.ROOT()); // Replace with your server URL
    setSocket(socketConnection);


    // Listen for incoming messages from the server
    socketConnection.on('receiveMessage', (incomingMessage) => {
      setMessages((prevMessages) => [...prevMessages, incomingMessage]);
    });

    // Clean up when the component unmounts
    return () => {
      socketConnection.disconnect();
    };
  }, []);


  const sendMessage = () => {
    if (socket && message.trim()) {
      // Emit the message to the server
      socket.emit('sendMessage', message);
      setMessage(''); // Clear the input after sending
    }
  };


  return (
    <Box
      display="flex"
      height="100vh"
      overflow="hidden"
    >
      <Box maxWidth={480} width={'100%'}
        component='form'>
        <Box flex={1} bgcolor={'#111B21'} display="flex" flexDirection="column" color={'#fff'} height="100%">
          <Box padding={1.2} display={'flex'} justifyContent={'space-between'}>
            <Typography fontWeight={"bold"} fontSize={28}>Chats</Typography>
            <Typography fontSize={28}>Chats</Typography>
          </Box>


          <Box
            width="100%"
            position="sticky"
            bottom={0}
            padding={1.5}
            paddingTop={0}

          >
            <input
              type="text"
              style={{
                width: "100%",
                padding: "8px",
                paddingLeft: "16px",
                border: "none",
                borderRadius: "6px",
                background: '#2a3942',
                color: "#fff",
                fontSize: 20

              }}
              placeholder="New 10 Digit Phone Number"
              onChange={(e) => searching(e.target.value)}
            />
          </Box>

          <Box flex={1} overflow="auto">
            {(searched.length > 0) ? <SearchedUser users={searched} /> : <ContactList dashboard={dashboard} />}
          </Box>
        </Box>
      </Box>
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        bgcolor="white"
      >
        <Box
          width="100%"
          bgcolor="#202c33"
          color="#fff"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          padding="12px 12px"
          position="sticky"
          top={0}
          zIndex={1}
        >
          <Box display="flex" alignItems="center">
            <Box
              bgcolor="#fff"
              height={50}
              width={50}
              borderRadius="50%"
              marginRight={1}
            />
            <Typography fontSize={26}>Raju Bhaiya</Typography>
          </Box>
          <Box display="flex">
            <Box
              bgcolor="#fff"
              height={40}
              width={40}
              borderRadius="50%"
              marginRight={3}
            />
            <Box
              bgcolor="#fff"
              height={40}
              width={40}
              borderRadius="50%"
            />
          </Box>
        </Box>

        {/* Scrollable Content */}
        <Box
          flex={1}
          overflow="auto"
          padding={2}
          bgcolor={'#27363f'}
        >

              {messages.map((message, index)=> <SimpleChatString message={message} key={index} />)}



        </Box>

        {/* Sticky Footer */}
        <Box
          width="100%"
          position="sticky"
          bottom={0}
          bgcolor="#202c33"
          padding={1.5}
          paddingLeft={4}
          paddingRight={4}
          borderTop="1px solid #ccc"
        >
          <Box display='flex' flexDirection={"row"} justifyContent={"space"} alignItems={'center'}>
            <Box flexGrow={40}>
              <input
                type="text"
                style={{
                  width: "100%",
                  padding: "16px",
                  border: "none",
                  borderRadius: "4px",
                  background: '#2a3942',
                  color: "#fff",
                  fontSize: 20,
                  flexGrow: 9
                }}
                placeholder="Type a message..."
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              /></Box>
            <Box
              flexGrow={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
              width={22}
              height={48}
              bgcolor='#fff'
              marginLeft={2}
              borderRadius={8}
              onClick={sendMessage}
            >
              <SendIcon
                sx={{ fontSize: 28, borderRadius: 4, margin: 1 }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default DashboardPage