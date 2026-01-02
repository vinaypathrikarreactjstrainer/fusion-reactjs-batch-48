import React, { useRef, useState } from "react";

const UncontrolComp = () => {
    // variable
    const emailRef = useRef();
    // let showEmail = 'Fusion';
    const [showEmail, setShowEmail] = useState('Fusion');
    // funtion
    const handleEmail = () => {
        console.log(emailRef.current.value);
        // showEmail = emailRef.current.value;
        setShowEmail(emailRef.current.value);
    }
    return(
        <>
            <h1>Uncontrolled Component</h1>
            <input
                type="text"
                placeholder="example@email.com"
                ref={emailRef}
            />
            <h3>Email : {showEmail}</h3>
            <button onClick={()=> handleEmail()}>Update</button>
        </>
    )
}

export default UncontrolComp;