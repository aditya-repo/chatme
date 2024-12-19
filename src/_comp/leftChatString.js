import React from 'react'

const LeftChatString = () => {
  return (

    <div style={{ marginBottom: 12, display: 'flex', alignItems: 'flex-start' }}>

      <span
        style={{
          backgroundColor: 'green',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
          height: 12,
          width: 12,
        }}
      ></span>
      <span
        style={{
          background: 'green',
          padding: '8px 10px',
          maxWidth: '75%',
          borderRadius: 6,
          color: '#fff',
          borderTopLeftRadius: 0,
          lineHeight: '1.5',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in pulvinar erat.
      </span>
    </div>
  )
}


const SimpleChatStringLeft = () => {
  return (

    <div style={{ marginBottom: 12, display: 'flex', alignItems: 'flex-start' }}>

      <span
        style={{
          width: 12,
        }}
      ></span>
      <span
        style={{
          background: 'green',
          padding: '8px 10px',
          maxWidth: '750px',
          borderRadius: 6,
          color: '#fff',
          lineHeight: '1.5',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gggggggggggggggggggggggdddddddddddddddddddddddddddddddddddddddddddddin pulvinar erat.
      </span>
    </div>
  )
}


export { LeftChatString, SimpleChatStringLeft }