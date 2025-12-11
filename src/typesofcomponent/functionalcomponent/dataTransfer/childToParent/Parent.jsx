import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
    // state for receive name from child comp.
    const [name, setName] = useState('');
    // state for receive obj from child comp.
    const [userInfo, setUserInfo] = useState({
        name: 'Harsh',
        age : 24,
        city : 'Mumbai'
    });
    // function
    const getDataFromChild = (data) => {
        alert('Function from Parent Comp.' + data);
        setName(data);
    }
    const getUserData = (info) => {
        console.log('this function comes from parent');
        console.log('data from child => ', info);
        setUserInfo(info);
        console.log('userInfo ', userInfo);
    }
    return(
        <>
            <h2>Parent Component</h2>
            <hr/>
            <ul>
                <li>Name: <b>{userInfo.name}</b></li>
                <li>Age: <b>{userInfo.age}</b></li>
                <li>City: <b>{userInfo.city}</b></li>
            </ul>
            <hr/>
            <p>This is example of how to send data from Child Component to the Parent Component</p>
            <hr/>
            <h4>Name: {name}</h4>
            <hr/>
            <Child 
                action = {getDataFromChild}
                userData = {getUserData}
            />
        </>
    )
}

export default Parent;