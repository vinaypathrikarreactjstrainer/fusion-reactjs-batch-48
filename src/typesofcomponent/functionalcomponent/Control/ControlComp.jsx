import React, { useState } from "react";

const ControlComp = () => {
    // state
    const [userName, setUserName] = useState('');
    // function
    const handleSubmit = () => {
        setUserName('Fusion Software Institute');
    }
    console.log('comp. render...');

    return(
        <>
            <h1>Controlled Component</h1>
            <input
                type="text"
                placeholder="User Name"
                onChange={(e) => setUserName(e.target.value)}
            />
            <h3>User Name = {userName} </h3>
            <button type="button" onClick = {() => handleSubmit()}>Update</button>
        </>
    )
}

export default ControlComp;