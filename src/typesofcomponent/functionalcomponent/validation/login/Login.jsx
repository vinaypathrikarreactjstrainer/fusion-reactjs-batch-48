import React, { useState } from "react";

const Login = () => {
    // states
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    // functions
    const userHandler = event => {
        console.log('user => ', event.target.value.length);
        let userVal = event.target.value.length;
        // username must be greaterthan 3 char.
        if(userVal < 4){
            console.warn('Invalid User name');
            setUserErr(true);
        } else {
            setUserErr(false);
        }
    }
    const passwordHandler = event => {
        console.log('password => ', event.target.value);
        let passVal = event.target.value.length;
        if(passVal < 6){
            console.warn('Invalid Password');
            setPassErr(true);
        } else {
            setPassErr(false);
        }
    }
    // Events
    const loginHandler = (e) => {
        e.preventDefault();
        alert('clicked');
    }
  return (
    <>
      <form onSubmit={loginHandler}>
        <input type="text" placeholder="Enter UserName/UserId" className="form-input" onChange={(e) => userHandler(e)} />
        {
            userErr ? <span>Invalid User Name</span> : null
        }
        <input type="text" placeholder="Password" className="form-input" onChange = {(e) => passwordHandler(e)} />
        {
            passErr ? <span>Invalid Password</span> : null
        }
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
