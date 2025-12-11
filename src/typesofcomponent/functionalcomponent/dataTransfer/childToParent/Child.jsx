import React from "react";

const Child = (props) => {
    console.log('child comp. props => ', props);
    let name = 'Fusion';
    let user = {
        name: 'Aditya',
        age : 28,
        city : 'Pune'
    };
    return (
        <>
            <h3>Child Component</h3>
            {/* <button onClick={props.action}>Child Comp. button</button> */}
            <button onClick={() => props.action(name)}>Child Comp. button</button>
            <hr/>
            <button onClick={() => props.userData(user)}>Send User Data to Parent</button>
        </>
    )
}
export default Child;