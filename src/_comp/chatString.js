import React, { useState } from 'react'
import { RightChatString, SimpleChatString } from './rightChatString'
import { LeftChatString, SimpleChatStringLeft } from './leftChatString'

const ChatString = ({ message, previous }) => {

    const [userid, setUserid] = useState(localStorage.getItem('userid'))

    console.log(message);
    console.log(previous);

    return (
        <>
            {message.sender === userid
                ? (previous && previous.sender === userid
                    ? <SimpleChatString message={message} /> : <RightChatString message={message} />)
                : (previous && previous.sender === userid
                    ? <LeftChatString message={message} />
                    : <SimpleChatStringLeft message={message} />)
            }
        </>
    )
}

export default ChatString;
