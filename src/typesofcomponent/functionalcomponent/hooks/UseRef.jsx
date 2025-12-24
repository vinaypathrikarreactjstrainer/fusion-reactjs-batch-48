import React, {useRef} from "react";

const UseRef = () => {
    // variables
    let userName = useRef(null),
        phone = useRef(null),
        email = useRef('');
    // function
    const updateInputs = () => {
        console.log('User Name => ', userName);
        userName.current.value = 'vinay2128';
        phone.current.value = 9988776655;
        email.current.value = 'vinay@gmail.com';
    }
    const focus = () => {
        // userName.current.focus();
        phone.current.focus();
        // email.current.focus();
    }
    const border = () => {
        userName.current.style.border = "2px solid blue";
        phone.current.style.border = "2px solid red";
        email.current.style.border = "2px solid green";
    }
    const fontSize = () => {
        userName.current.style.fontSize = "24px";
        phone.current.style.fontSize = "24px";
        email.current.style.fontSize = "24px";
    }
    return(
        <>
            <h1>useRef Hook</h1>
            <input type="text" placeholder="User Name" ref={userName} /><br/>
            <input type="text" placeholder="Phone Number" ref={phone} /><br/>
            <input type="text" placeholder="Email" ref={email} /><br/>
            <button type="button" onClick={updateInputs}>Update Inputs</button>
            <button type="button" onClick={focus}>Focus</button>
            <button type="button" onClick={border}>Add Border</button>
            <button type="button" onClick={fontSize}>Increase Font Size</button>
        </>
    )
}

export default UseRef;