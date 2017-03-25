import React from 'react';
import { Link } from 'react-router'

const imgStyle = {
  width: '400px',
  height: 'auto'
}
const divStyle = {
  textAlign: 'center'
}
const buttonStyle={
  marginBottom: '20px'
}

export const Welcome = () => (
  <div style={divStyle}>
    <div>
      <h1>Welcome to Guided Journaling and Self Reflection</h1>
    </div>
    <div style={buttonStyle}>
      <Link to="/"><button>ENTER</button></Link>
    </div>
    <div>
      <img style={imgStyle} src={"/images/logo.png"} />
    </div>
  </div>
)
