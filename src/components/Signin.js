import React from 'react';
import { Link } from "react-router-dom";

import './Signin.css';

const Signup = ( ) => {

    const handleSignIn = () => {

    }
  return (
    <div className='container'>
      <header>SIGN UP</header>
      <form method='post'>
        <div className='input-field'>
          <input className='fullName' placeholder='Fullname' />
          <input className='emailId' placeholder='Email' />
          <input className='dateOfBirth' placeholder='DateOfBirth' />
          <input className='gender' placeholder='Gender' />
          <input className='password' placeholder='Password' />
          <input className='confirmPassword' placeholder='Confirm Password' />
        </div>
        <div className='button'>
        <Link to={"/home"}>
          <button onClick={handleSignIn} className="loginPageBtn">Sign In</button>
				</Link>
        
        </div>
      </form>
    </div>
  );
};

export default Signup;