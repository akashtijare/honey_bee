import React from 'react'
import {Link} from "react-router-dom"

export const Login = () => {

  const containerStyle = {
    backgroundColor: '#f9ae05',
    borderRadius: '10px',
    padding: '20px',
    width: '400px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#185e49',
    fontSize: '24px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #185e49',
    borderRadius: '5px',
  };

  const buttonStyle = {
    backgroundColor: '#f05a1f',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 15px',
    cursor: 'pointer',
    width: '100%',
    fontWeight: 'bold',
    margin: "5px",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };


  return (
    <div
      style={{
        backgroundColor: '#185e49',
        fontFamily: 'fjalla One, sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        margin: '0',
      }}
    >
      <div style={containerStyle}>
        <h2 style={headerStyle}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="username" style={{ color: '#185e49', fontWeight: 'bold' }}>
              Username
            </label>
            <input type="text" id="username" name="username" required style={inputStyle} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{ color: '#185e49', fontWeight: 'bold' }}>
              Password
            </label>
            <input type="password" id="password" name="password" required style={inputStyle} />
          </div>
          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </form>
        <Link to="/signup" style={headerStyle}>Sign Up</Link>
      </div>
    </div>
  )
}

