import './css/App.css';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Typography, Container, Box } from '@mui/material';
import ContactList from './_comp/contactList';
import {LeftChatString, SimpleChatStringLeft} from './_comp/leftChatString';
import {RightChatString, SimpleChatString} from './_comp/rightChatString';

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xxl" disableGutters>
        {/* Parent container with fixed height */}
        <Box
          display="flex"
          height="100vh"
          overflow="hidden" // Prevent overall scrolling
        >
          {/* Left portion with independent scrolling */}
          <Box
            bgcolor="lightcyan"
            overflow="auto"
          >
            <ContactList />
          </Box>

          {/* Right portion with independent scrolling */}
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            bgcolor="white"
          >
            {/* Sticky Header */}
            <Box
              width="100%"
              bgcolor="#000"
              color="#fff"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              padding="6px 12px"
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
            >

            <div style={{display: "flex", justifyContent: "flex-start"}}><LeftChatString /></div>
            <div style={{display: "flex", justifyContent: "flex-start"}}><LeftChatString /></div>
            <div style={{display: "flex", justifyContent: "flex-start"}}><SimpleChatStringLeft /></div>
            
            <div style={{display: "flex", justifyContent: "flex-end"}}><RightChatString /></div>
            <div style={{display: "flex", justifyContent: "flex-end"}}><SimpleChatString /></div>
            <div style={{display: "flex", justifyContent: "flex-end"}}><SimpleChatString /></div>
            <div style={{display: "flex", justifyContent: "flex-end"}}><SimpleChatString /></div>

            <div style={{display: "flex", justifyContent: "flex-start"}}><LeftChatString /></div>
            <div style={{display: "flex", justifyContent: "flex-start"}}><SimpleChatStringLeft /></div>
            <div style={{display: "flex", justifyContent: "flex-start"}}><SimpleChatStringLeft /></div>
            <div style={{display: "flex", justifyContent: "flex-start"}}><SimpleChatStringLeft /></div>

            
            </Box>

            {/* Sticky Footer */}
            <Box
              width="100%"
              position="sticky"
              bottom={0}
              bgcolor="#f1f1f1"
              padding={1.5}
              borderTop="1px solid #ccc"
            >
              <input
                type="text"
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                placeholder="Type a message..."
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
