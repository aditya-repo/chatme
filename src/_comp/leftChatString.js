import React from 'react'

const LeftChatString = ({message}) => {
  console.log(message);
  
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
        {message}
      </span>
    </div>
  )
}


const SimpleChatStringLeft = ({message}) => {
  console.log(message);
  
  return (

    <div style={{ marginBottom: 12, display: 'flex', alignItems: 'flex-start' }}>

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
        }}
      >
        {message}
      </span>
    </div>
  )
}


export { LeftChatString, SimpleChatStringLeft }