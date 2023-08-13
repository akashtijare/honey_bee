import React from 'react'

export const SignUp = () => {

  const containerStyle = {
    backgroundColor: '#185e49',
    fontFamily: 'fjalla One, sans-serif',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    margin: '0',
  };

  const signupContainerStyle = {
    backgroundColor: '#f9ae05',
    borderRadius: '10px',
    padding: '20px',
    width: '300px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  };

  const signupHeaderStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#185e49',
    fontSize: '24px',
  };

  const inputGroupStyle = {
    marginBottom: '15px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    color: '#185e49',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #185e49',
    borderRadius: '5px',
  };

  const signupButtonStyle = {
    backgroundColor: '#f05a1f',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 15px',
    cursor: 'pointer',
    width: '100%',
    fontWeight: 'bold',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };





  
  return (
    <div style={containerStyle}>
    <div style={signupContainerStyle}>
      <h2 style={signupHeaderStyle}>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div style={inputGroupStyle}>
          <label htmlFor="username" style={labelStyle}>
            Username
          </label>
          <input type="text" id="username" name="username" required style={inputStyle} />
        </div>
        <div style={inputGroupStyle}>
          <label htmlFor="email" style={labelStyle}>
            Email
          </label>
          <input type="email" id="email" name="email" required style={inputStyle} />
        </div>
        <div style={inputGroupStyle}>
          <label htmlFor="password" style={labelStyle}>
            Password
          </label>
          <input type="password" id="password" name="password" required style={inputStyle} />
        </div>
        <button type="submit" style={signupButtonStyle}>
          Sign Up
        </button>
      </form>
    </div>
  </div>
  )
}