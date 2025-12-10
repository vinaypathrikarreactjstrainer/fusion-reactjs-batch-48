import React, { useState } from "react";

const Login = () => {
    // states
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    // const [valid, setValid] = useState(true);
    // functions
    const userHandler = event => {
        console.log('user => ', event.target.value.length);
        let userVal = event.target.value.length;
        setUser(event.target.value);
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
        setPassword(event.target.value);
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
        // alert('clicked');
        if(user == '' && password == ''){
            // setValid(false);
            alert('Please enter valid User Name and Password');
        } else if(user == ''){
            alert('Enter User Name');
        } else if(password == ''){
            alert('Enter the Password')
        } else {
            alert('Login Successfully');
        }

    }
  return (
    <>
      <form onSubmit={loginHandler}>
        {/* validation message */}
        {
            valid ? null : <span>Please enter valid User Name and Password</span>
        }
        <input type="text" placeholder="Enter UserName/UserId" className="form-input" onChange={(e) => userHandler(e)}
        value={user} />
        {
            userErr ? <span>Invalid User Name</span> : null
        }
        <input type="text" placeholder="Password" className="form-input" onChange = {(e) => passwordHandler(e)} value={password}/>
        {
            passErr ? <span>Invalid Password</span> : null
        }
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
