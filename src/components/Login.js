import React from 'react'
import './Login.css';
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogIn = () => {
    console.log("Youre logged in");
  }

  return (
    <div className='container'>
      <h1 style={{textAlign: 'center', fontWeight: 'lighter', marginTop: '20px'}}>Login</h1>
      <div className='loginBox'>
        <input className='emailInput' placeholder='Email'/>
        <input className='passInput' placeholder='Password'/>
        <Link to={"/home"}>
          <button onClick={handleLogIn} className="loginPageBtn">Log In</button>
				</Link>
        <Link to={"/signin"}>
          <button onClick={handleLogIn} className="loginPageBtn">Sign In</button>
				</Link>
        
      </div>
    </div>
  )
}

export default Login;
  