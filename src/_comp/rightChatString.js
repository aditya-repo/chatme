import React from 'react'

const RightChatString = ({message})=>{
 
  return(

      <div style={{ marginBottom: 12, display: 'flex', alignItems: 'flex-start', justifyContent: "right" }}>
        
      <span
        style={{
          background: '#141a1f',
          padding: '8px 10px',
          maxWidth: '750px',
          borderRadius: 6,
          color: '#fff',
          borderTopRightRadius: 0,
          lineHeight: '1.5', 
        }}
      >
        {message.message}
      </span>
      <span
        style={{
          backgroundColor: '#141a1f',
          clipPath: 'polygon(0 0, 100% 0, 0 100%)', 
          height: 12, 
          width: 12, 
        }}
      ></span>
    </div>
  )
}

const SimpleChatString = ({message})=>{
  
    return(

        <div style={{ marginBottom: 12, display: 'flex', alignItems: 'flex-start', justifyContent: "flex-end" }}>
          
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
          {message.message}
        </span>
        <span
          style={{
            width: 12, 
          }}
        ></span>
      </div>
    )
}

export  {RightChatString, SimpleChatString}