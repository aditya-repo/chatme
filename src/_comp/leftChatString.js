import React from 'react'

const LeftChatString = ({message}) => {
  
  return (

    <div style={{ marginBottom: 12, display: 'flex', alignItems: 'flex-start' }}>

      <span
        style={{
          backgroundColor: '#141a1f',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
          height: 12,
          width: 12,
        }}
      ></span>
      <span
        style={{
          background: '#141a1f',
          padding: '8px 10px',
          maxWidth: '75%',
          borderRadius: 6,
          color: '#fff',
          borderTopLeftRadius: 0,
          lineHeight: '1.5',
        }}
      >
        {message.message}
      </span>
    </div>
  )
}


const SimpleChatStringLeft = ({message}) => {
  
  return ( 
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", position: "relative" }}>
      <div style={{marginBottom:12, display: 'flex', alignItems: 'flex-start' }}>
        <span
          style={{
            width: 12,
          }}
        ></span>
        <span
          style={{
            background: '#141a1f',
            padding: '8px 10px',
            maxWidth: '750px',
            borderRadius: 6,
            color: '#fff',
            lineHeight: '1.5',
            position: 'relative',
            paddingBottom: '15px', // Ensures there's space for the timestamp
          }}
        >
          {message.message}

          {/* Timestamp positioned at the bottom-right of the message */}
          <div style={{
            position: 'absolute',
            bottom: '2px', // Adjust this for the desired distance from the bottom of the message bubble
            right: '10px', // Adjust this for the desired distance from the right of the message bubble
            fontSize: '0.75rem', // Smaller font size for timestamp
            color: '#888', // Light color for timestamp
            paddingTop:4 
          }}>
            {new Date(message.timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit"
            })}
          </div>
        </span>
      </div>
    </div>
);
};

export { LeftChatString, SimpleChatStringLeft }