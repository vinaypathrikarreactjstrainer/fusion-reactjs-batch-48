import React, { useEffect, useState } from "react";

const GetUsers = () => {
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(100);
    const URL = `https://jsonplaceholder.typicode.com/users`;
    // useEffect
    useEffect(
        // callback function
        () => {
            const handleResize = () => {
                console.log('handleResize => ', window.innerWidth);
            };
            window.addEventListener('resize', handleResize);
            console.log(count);
            fetch(URL)
                .then(res => res.json())
                .then(data => {console.log('inside the useEffect'); setUsers(data)})
        },
        // dependancy array
        [count]
    );
    console.log('outside of the useEffect Users => ', users);
    return(
        <>
            <h2>Get Users Component</h2>
            <p>Count: <b>{count}</b></p>
            <ul>
                {
                    users.map(person => (
                        <li key = {person.id}>{person.name}</li>
                    ))
                }
            </ul>
            <button type="button" onClick={() => setCount(count + 5)}>Count</button> 
            {/* <p>Name: <b>{users}</b></p>
            <button type="button" onClick={() => setUsers('Aakansha')}>Change Name</button> */}
        </>
    )
}

export default GetUsers;