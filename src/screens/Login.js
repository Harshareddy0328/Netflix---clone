import React, { useState } from 'react';
import "./Login.css";
import SignUpScreen from './SignUpScreen';

function Login() {

    const [signIn ,setSignIn] = useState(false);



  return (
    <div className='loginScreen'>
    <div className='loginScreen__background'>
        <img
        className='loginScreen__logo'
        src='https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png' alt='login logo'/>
        <button className='loginScreen__button'
        onClick={() => setSignIn(true)}
        >
            Sign In
        </button>
        <div className='loginScreen__gardient'/>
    </div>
    <div className='loginScreen__body'>
        {signIn ? 
        ( 
        <SignUpScreen/>
        ) :
        
        (

        <>
        <h1>Unlimited movies, TV shows and more</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <div className='loginScreen__input'>
            <form>
            <input type='email' placeholder='Email address'/>
        <button 
        onClick={() => setSignIn(true)}
        className='loginScreen__button1'>Get Started </button>
            </form>
        </div>
        </>
        )}
       
    </div>
    </div>
  )
}

export default Login
