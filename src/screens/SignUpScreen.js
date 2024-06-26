import { auth } from "../firebase";
import "./SignUpScreen.css";
import React, { useRef } from 'react'

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    })
    .catch((error) => {
      alert(error.message);
    });
  };
  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    })
    .catch((error) => {
      alert(error.message);
    });
  };

  return (
    <div className="signUp__screen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email"/>
        <input ref={passwordRef} placeholder="Password" type="password"/>
        <button type="submit" onClick={signIn}> Sign In</button>

        <h4>
          <span className="signupscreen__gray">New to Netflix? </span>
          <span className="signupscreen_link" onClick={register}>Sign Up now.</span>
          </h4>
      </form>
    </div>
  )
}

export default SignUpScreen
