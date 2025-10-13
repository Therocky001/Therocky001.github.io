import React from 'react'

const SimpleTest = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#333', marginBottom: '1rem' }}>
          🎉 React is Working! 🎉
        </h1>
        <p style={{ color: '#666', fontSize: '18px' }}>
          Ujjval Rajauriya - Portfolio
        </p>
        <p style={{ color: '#888', marginTop: '1rem' }}>
          If you see this, React is loading correctly!
        </p>
      </div>
    </div>
  )
}

export default SimpleTest